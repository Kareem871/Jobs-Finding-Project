package com.jobs.jobsBE.Controller;

import com.jobs.jobsBE.Repositories.jobRepository;
import com.jobs.jobsBE.models.job;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
public class getJobs {
    @Autowired
    private jobRepository jr;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/")
    public List<job> getAll(){
        log.info("Jobs: " + jr.findAll());
        return jr.findAll();
    }
}
