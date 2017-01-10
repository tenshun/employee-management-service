package com.tenshun.employeemanagement.repository;

import com.tenshun.employeemanagement.domain.Region;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Region entity.
 */
@SuppressWarnings("unused")
public interface RegionRepository extends JpaRepository<Region,Long> {

}
