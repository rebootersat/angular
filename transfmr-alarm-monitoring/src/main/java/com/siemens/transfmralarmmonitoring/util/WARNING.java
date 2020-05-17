package com.siemens.transfmralarmmonitoring.util;

public enum WARNING {

	OVER_VOLTAGE("Over Voltage Warning (66 KV)"),
	MVA("MVA Warning"),
	NONE("No Warning");
	
	private String value;
	WARNING(String name){
		value = name;
	}
		
	@Override
	public String toString() {
		return value;
	}
}
