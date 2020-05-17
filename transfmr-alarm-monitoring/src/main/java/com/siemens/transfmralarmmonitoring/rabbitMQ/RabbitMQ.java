package com.siemens.transfmralarmmonitoring.rabbitMQ;

import java.io.IOException;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import org.springframework.stereotype.Service;

import com.rabbitmq.client.AMQP.BasicProperties;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Consumer;
import com.rabbitmq.client.Envelope;
import com.rabbitmq.client.ShutdownSignalException;
import com.siemens.transfmralarmmonitoring.util.Task;

@Service
public class RabbitMQ {

	private Connection connection = null;
	private boolean stop = false;

	public RabbitMQ() {

	}

	public void connect(String username, String password) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		factory.setUsername(username);
		factory.setPassword(password);
		factory.setHost("localhost");
		factory.setVirtualHost("/");
		connection = factory.newConnection();

	}

	public void publish(String queuename, String message) throws IOException {
		Channel channel = connection.createChannel();
		channel.basicPublish("", queuename, null, message.getBytes());
		System.out.println(" [x] Sent '" + message + "'");
	}

	public void addListener(String queueName, Task task) throws IOException {
		Channel channel = connection.createChannel();

		channel.basicConsume(queueName, true, new Consumer() {
			
			@Override
			public void handleShutdownSignal(String consumerTag, ShutdownSignalException sig) {
			}

			@Override
			public void handleRecoverOk(String consumerTag) {

			}

			@Override
			public void handleDelivery(String arg0, Envelope arg1, BasicProperties arg2, byte[] arg3)
					throws IOException {
				
				System.out.println("Message is "+new String(arg3));
				task.setMessage(new String(arg3));
				try {
					task.execute();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}

			@Override
			public void handleConsumeOk(String consumerTag) {

			}

			@Override
			public void handleCancelOk(String consumerTag) {

			}

			@Override
			public void handleCancel(String consumerTag) throws IOException {

			}
		});

		while (!stop) {
			try {
				TimeUnit.SECONDS.sleep(1);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}

	}

	public void disconnect() {

		if (connection != null) {
			try {
				connection.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
