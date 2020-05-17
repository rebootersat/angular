package com.siemens.transfmralarmmonitoring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siemens.transfmralarmmonitoring.models.Transformer;

public interface TransformersRepository extends JpaRepository<Transformer, String> {

}
