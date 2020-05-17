package com.siemens.transfmralarmmonitoring.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transformers_loading")
public class TransformersLoading {

	@Id
	private String tranformerName;
	private String realTimeMW;
	private String realTimeMVar;
	private String realtimeMVA;
	private String realTimeVoltage220KV;
	private String realTimeVoltage66KV;
	private String warningType; 

	public String getTranformerName() {
		return tranformerName;
	}

	public void setTranformerName(String tranformerName) {
		this.tranformerName = tranformerName;
	}

	public String getRealTimeMW() {
		return realTimeMW;
	}

	public void setRealTimeMW(String realTimeMW) {
		this.realTimeMW = realTimeMW;
	}

	public String getRealTimeMVar() {
		return realTimeMVar;
	}

	public void setRealTimeMVar(String realTimeMVar) {
		this.realTimeMVar = realTimeMVar;
	}

	public String getRealtimeMVA() {
		return realtimeMVA;
	}

	public void setRealtimeMVA(String realtimeMVA) {
		this.realtimeMVA = realtimeMVA;
	}

	public String getRealTimeVoltage220KV() {
		return realTimeVoltage220KV;
	}

	public void setRealTimeVoltage220KV(String realTimeVoltage220KV) {
		this.realTimeVoltage220KV = realTimeVoltage220KV;
	}

	public String getRealTimeVoltage66KV() {
		return realTimeVoltage66KV;
	}

	public void setRealTimeVoltage66KV(String realTimeVoltage66KV) {
		this.realTimeVoltage66KV = realTimeVoltage66KV;
	}

	public String getWarningType() {
		return warningType;
	}

	public void setWarningType(String warningType) {
		this.warningType = warningType;
	}

	@Override
	public String toString() {
		return "TranformersLoading [tranformerName=" + tranformerName + ", realTimeMW=" + realTimeMW + ", realTimeMVar="
				+ realTimeMVar + ", realtimeMVA=" + realtimeMVA + ", realTimeVoltage220KV=" + realTimeVoltage220KV
				+ ", realTimeVoltage66KV=" + realTimeVoltage66KV + ", warningType=" + warningType + "]";
	}

}
