package com.siemens.transfmralarmmonitoring.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "power_summary")
public class PowerSummary {

	@Id
	private String schedule;
	private String drawl;
	private String frequency;
	private String uiRate;
	private String OD;

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

	public String getOD() {
		return OD;
	}

	public void setOD(String oD) {
		OD = oD;
	}

	@Override
	public String toString() {
		return "PowerSummary [schedule=" + schedule + ", drawl=" + drawl + ", frequency=" + frequency + ", uiRate="
				+ uiRate + ", OD=" + OD + "]";
	}
	
	
}
