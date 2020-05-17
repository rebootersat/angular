package com.siemens.transfmralarmmonitoring.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.siemens.transfmralarmmonitoring.models.PowerSummary;
import com.siemens.transfmralarmmonitoring.models.TransformersLoading;

@Component
public class XmlToJSON {

	public RealTimeData convert(String xmlMessage) {
		XmlMapper xmlMapper = new XmlMapper();
		// xmlMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY,
		// true);
		// xmlMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		SLDCData data;
		RealTimeData realdata = new RealTimeData();
		try {
			data = xmlMapper.readValue(xmlMessage, SLDCData.class);

			PowerSummary summary = new PowerSummary();
			summary.setDrawl(data.getDrawl());
			summary.setFrequency(data.getFrequency());
			summary.setOD(data.getoDUD());
			summary.setSchedule(data.getSchedule());
			summary.setUiRate(data.getUiRate());

			Rows loadings = xmlMapper.readValue(data.getTransformerLoadings(), Rows.class);

			List<TransformersLoading> transfrmLoadings = new ArrayList<TransformersLoading>();

			Row[] row = loadings.getRow();
			for (int i = 1; i < row.length; i++) {
				Column[] columns = row[i].getColumn();
				TransformersLoading loading = new TransformersLoading();
				for (int j = 0; j < columns.length; j++) {
					if (columns[j].getName().equals("Column-0")) {
						loading.setTranformerName(columns[j].getValue());
					}
					if (columns[j].getName().equals("Column-1")) {
						loading.setRealTimeMW(columns[j].getValue());
					}
					if (columns[j].getName().equals("Column-2")) {
						loading.setRealTimeMVar(columns[j].getValue());
					}
					if (columns[j].getName().equals("Column-3")) {
						loading.setRealTimeVoltage220KV(columns[j].getValue());
					}
					if (columns[j].getName().equals("Column-4")) {
						loading.setRealTimeVoltage66KV(columns[j].getValue());
					}
				}
				transfrmLoadings.add(loading);

			}

			realdata.setSummary(summary);
			realdata.setLoadings(transfrmLoadings);

		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
		return realdata;
	}

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(
				new InputStreamReader(new FileInputStream(new File("E:\\files\\sldc-data.xml"))));

		StringBuffer buffer = new StringBuffer();

		br.lines().forEach(line -> {
			buffer.append(line);
		});

		br.close();

		// String convert = convert(buffer.toString());
		// System.out.println(convert);
	}
}
