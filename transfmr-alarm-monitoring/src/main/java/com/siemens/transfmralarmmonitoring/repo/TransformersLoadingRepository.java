package com.siemens.transfmralarmmonitoring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siemens.transfmralarmmonitoring.models.TransformersLoading;

public interface TransformersLoadingRepository extends JpaRepository<TransformersLoading, String> {

}
