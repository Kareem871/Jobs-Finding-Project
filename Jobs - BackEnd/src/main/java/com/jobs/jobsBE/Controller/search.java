package com.jobs.jobsBE.Controller;

import com.jobs.jobsBE.Repositories.jobRepository;
import com.jobs.jobsBE.models.job;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
public class search {
    @Autowired
    private jobRepository jr;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "search")
    public List<job> search(@RequestParam(name = "level", required = false) String level,
                            @RequestParam(name = "title", required = false) String title,
                            @RequestParam(name = "salary", required = false) int salary) {
        log.info(jr.findBySalaryAndLevelAndTitle(title, level, salary).toString());
        return jr.findBySalaryAndLevelAndTitle(title, level, salary);
    }
}
