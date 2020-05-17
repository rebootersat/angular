package com.siemens.transfmralarmmonitoring.util;

import java.util.List;

import com.siemens.transfmralarmmonitoring.models.PowerSummary;
import com.siemens.transfmralarmmonitoring.models.TransformersLoading;

public class RealTimeData {

	private PowerSummary summary;
	private List<TransformersLoading> loadings;

	public PowerSummary getSummary() {
		return summary;
	}

	public void setSummary(PowerSummary summary) {
		this.summary = summary;
	}

	public List<TransformersLoading> getLoadings() {
		return loadings;
	}

	public void setLoadings(List<TransformersLoading> loadings) {
		this.loadings = loadings;
	}

	@Override
	public String toString() {
		return "RealTimeData [summary=" + summary + ", loadings=" + loadings + "]";
	}

}
