package com.siemens.transfmralarmmonitoring.util;

import java.util.Arrays;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JacksonXmlRootElement(localName = "row")
public class Row {

	@JacksonXmlElementWrapper(localName = "column", useWrapping = false)
	private Column[] column;

	public Row() {
	}

	public Row(Column[] column) {
		super();
		this.column = column;
	}

	public Column[] getColumn() {
		return column;
	}

	public void setColumn(Column[] column) {
		this.column = column;
	}

	@Override
	public String toString() {
		return "Row [column=" + Arrays.toString(column) + "]";
	}

}
