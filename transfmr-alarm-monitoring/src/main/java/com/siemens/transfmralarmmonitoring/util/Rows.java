package com.siemens.transfmralarmmonitoring.util;

import java.util.Arrays;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JacksonXmlRootElement(localName = "extract")
public class Rows {

	@JacksonXmlElementWrapper(localName = "row", useWrapping = false)
	private Row[] row;

	public Rows() {

	}

	public Rows(Row[] loadings) {
		super();
		this.row = loadings;
	}

	public Row[] getRow() {
		return row;
	}

	public void setRow(Row[] row) {
		this.row = row;
	}

	@Override
	public String toString() {
		return "TranformersLoadings [loadings=" + Arrays.toString(row) + "]";
	}
	
}
