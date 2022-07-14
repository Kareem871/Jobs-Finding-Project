package com.jobs.jobsBE.Repositories;

import com.jobs.jobsBE.models.job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface jobRepository extends MongoRepository<job, String> {
    List<job> findBySalaryAndLevelAndTitle(String title, String level, int salary);
}
