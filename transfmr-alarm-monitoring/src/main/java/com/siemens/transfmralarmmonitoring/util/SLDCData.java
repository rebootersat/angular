package com.siemens.transfmralarmmonitoring.util;

public class SLDCData {

	private String schedule;
	private String drawl;
	private String frequency;
	private String uiRate;
	private String oDUD;
	private String transformerLoadings;

	public String getSchedule() {
		return schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}

	public String getDrawl() {
		return drawl;
	}

	public void setDrawl(String drawl) {
		this.drawl = drawl;
	}

	public String getFrequency() {
		return frequency;
	}

	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}

	public String getUiRate() {
		return uiRate;
	}

	public void setUiRate(String uiRate) {
		this.uiRate = uiRate;
	}

	public String getoDUD() {
		return oDUD;
	}

	public void setoDUD(String oDUD) {
		this.oDUD = oDUD;
	}

	public String getTransformerLoadings() {
		return transformerLoadings;
	}

	public void setTransformerLoadings(String transformerLoadings) {
		this.transformerLoadings = transformerLoadings;
	}

	@Override
	public String toString() {
		return "SLDCData [schedule=" + schedule + ", drawl=" + drawl + ", frequency=" + frequency + ", uiRate=" + uiRate
				+ ", OD_UD=" + oDUD + ", transformerLoadings=" + transformerLoadings + "]";
	}
}
