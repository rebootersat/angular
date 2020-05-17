package com.siemens.transfmralarmmonitoring.util;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.siemens.transfmralarmmonitoring.models.Transformer;
import com.siemens.transfmralarmmonitoring.models.TransformersLoading;
import com.siemens.transfmralarmmonitoring.service.TransformerService;

@Component
public class Task {

	private String message;

	@Autowired
	private TransformerService transformerService;

	@Autowired
	private XmlToJSON converter;

	@Autowired
	private SimpMessagingTemplate messagingTemplate;

	public void setMessage(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void execute() throws SQLException {

		RealTimeData realTimeData = converter.convert(message);
		List<TransformersLoading> loadings = realTimeData.getLoadings();

		loadings.forEach(transformerData -> {
			System.out.println(transformerData);
			Transformer trns = new Transformer();
			String tranformerName = transformerData.getTranformerName().toUpperCase();
			trns.setName(tranformerName);
			trns.setTransfoHVRating(getHVRating(tranformerName));
			trns.setSubstationName(getSubStation(tranformerName));
			trns.setMVARating(getMVARating(tranformerName));
			trns.setMVAWarning(trns.getMVARating() - 35);
			trns.setOverVoltageWarning(getHV(trns.getTransfoHVRating()));
			transformerService.save(trns);
		});

		// transformerService.save(realTimeData.getLoadings())
		ObjectMapper mapper = new ObjectMapper();
		try {
			String writeValueAsString = mapper.writeValueAsString(realTimeData);
			messagingTemplate.convertAndSend("/transformer/power-summary", writeValueAsString);
			;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

	}

	private static String getHVRating(String name) {
		int startIndex = name.indexOf("-");
		int endIndex = name.indexOf("KV");
		return name.substring(startIndex + 1, endIndex + 2);
	}

	private static String getSubStation(String name) {
		StringBuffer buffer = new StringBuffer();
		buffer.append(name.substring(0, name.indexOf("-")));
		int startIndex = name.indexOf("MVA");
		buffer.append(name.substring(startIndex + 3, name.length()));
		return buffer.toString();
	}

	private static int getMVARating(String name) {
		int startIndex = name.indexOf("KV");
		int endIndex = name.indexOf("MVA");
		try {
			return Integer.parseInt(name.substring(startIndex + 2, endIndex).trim());
		} catch (Exception e) {
			return 0;
		}
	}

	private static int getHV(String hvRating) {
		if (hvRating.equals("400/220KV"))
			return 230;
		else if (hvRating.equals("220/66KV"))
			return 68;
		return 68;
	}

	public static void main(String[] args) {
		String name = "Kanjhawla-220/66KV 160MVA T3";
		String hvRating = getHVRating(name);
		System.out.println(hvRating);
	}

}