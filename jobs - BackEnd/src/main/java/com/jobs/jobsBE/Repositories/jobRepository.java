package com.jobs.jobsBE.Repositories;

import com.jobs.jobsBE.models.job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface jobRepository extends MongoRepository<job, String> {

}
