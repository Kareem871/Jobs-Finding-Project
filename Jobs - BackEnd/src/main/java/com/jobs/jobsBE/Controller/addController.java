package com.jobs.jobsBE.Controller;

import com.jobs.jobsBE.Repositories.jobRepository;
import com.jobs.jobsBE.models.job;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@Slf4j
@RestController
public class addController {
    @Autowired
    private jobRepository jr;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/")
    public List<job> getAll(){
        log.info("Jobs: " + jr.findAll());
        return jr.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/add")
    public void add(@Valid @RequestBody job j){
//        Map<String,Object> response = new HashMap<String,Object>();
            j.setCreated(new Date());
            log.info("New Job: " + j);
            jr.save(j);
    }
}