package com.siemens.transfmralarmmonitoring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siemens.transfmralarmmonitoring.models.PowerSummary;

public interface PowerSummaryRepository extends JpaRepository<PowerSummary, String> {

}
