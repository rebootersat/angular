package com.siemens.transfmralarmmonitoring;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.siemens.transfmralarmmonitoring.rabbitMQ.RabbitMQ;
import com.siemens.transfmralarmmonitoring.util.Task;

@SpringBootApplication
public class TransfmrAlarmMonitoringApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(TransfmrAlarmMonitoringApplication.class, args);

		RabbitMQ queue = context.getBean(RabbitMQ.class);
		try {
			queue.connect("guest", "guest");
			queue.addListener("SDLCDelhi", context.getBean(Task.class));
		} catch (IOException | TimeoutException e) {
			e.printStackTrace();
		}
	}

}
