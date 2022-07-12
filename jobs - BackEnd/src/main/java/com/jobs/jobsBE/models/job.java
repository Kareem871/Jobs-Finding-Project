package com.jobs.jobsBE.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.*;
import java.util.Date;

@Data
@Document("jobs")
@AllArgsConstructor
public class job {
    @Id
    private String id;
    @NotEmpty(message = "Please insert a title")
    @Length(max = 64, message = "Title too large")
    private String title;
    @NotEmpty(message = "Please insert a Level" )
    private String level;
    @Min(value = 50000, message = "Salary must be greater than 50k")
    @Max(value = 500000, message = "Salary must be less than 500k")
    private int salary;
    @NotEmpty(message = "Please insert a Description")
    @Length(max = 10000, message = "Description too large")
    private String description;

    private Date created;
}
