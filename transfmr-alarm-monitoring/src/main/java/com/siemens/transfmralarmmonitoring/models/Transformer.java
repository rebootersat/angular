package com.siemens.transfmralarmmonitoring.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transformer")
public class Transformer {

	@Id
	@Column(name = "name")
	private String name;
	@Column(name = "hv_rating")
	private String transfoHVRating;
	@Column(name = "substation_name")
	private String substationName;
	@Column(name = "mva_rating")
	private int MVARating;
	@Column(name = "mva_warning")
	private int MVAWarning;
	@Column(name = "over_voltage_warning")
	private int overVoltageWarning;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTransfoHVRating() {
		return transfoHVRating;
	}

	public void setTransfoHVRating(String transfoHVRating) {
		this.transfoHVRating = transfoHVRating;
	}

	public String getSubstationName() {
		return substationName;
	}

	public void setSubstationName(String substationName) {
		this.substationName = substationName;
	}

	public int getMVARating() {
		return MVARating;
	}

	public void setMVARating(int mVARating) {
		MVARating = mVARating;
	}

	public int getMVAWarning() {
		return MVAWarning;
	}

	public void setMVAWarning(int mVAWarning) {
		MVAWarning = mVAWarning;
	}

	public int getOverVoltageWarning() {
		return overVoltageWarning;
	}

	public void setOverVoltageWarning(int overVoltageWarning) {
		this.overVoltageWarning = overVoltageWarning;
	}

}
