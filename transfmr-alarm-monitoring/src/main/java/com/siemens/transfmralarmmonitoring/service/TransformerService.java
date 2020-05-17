package com.siemens.transfmralarmmonitoring.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siemens.transfmralarmmonitoring.models.Transformer;
import com.siemens.transfmralarmmonitoring.repo.TransformersRepository;

@Service
public class TransformerService {

	@Autowired
	private TransformersRepository repository;
	
	
	@Transactional
	public Transformer save(Transformer transformer) {
		return repository.save(transformer);
	}
}
