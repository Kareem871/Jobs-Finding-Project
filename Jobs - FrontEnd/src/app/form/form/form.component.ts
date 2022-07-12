import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  titleControl = new FormControl()
  descriptionControl = new FormControl()
  salaryControl = new FormControl()
  levelControl = new FormControl()

  createFormGroup(){
    return new FormGroup({
      title: this.titleControl,
      description: this.descriptionControl,
      salary: this.salaryControl,
      level: this.levelControl
    })
  } 

  form: FormGroup = this.createFormGroup();
  
  titleErr!: String;
  descriptionErr!: String;
  salaryErr!: String;
  levelErr!: String;

  addJob(){
    console.log(JSON.stringify(this.form.value));
    const headers= new HttpHeaders()
    .set('Content-Type', 'application/json');
    this.http.post("http://localhost:8080/add", JSON.stringify(this.form.value), {'headers':headers})
      .subscribe(
        (data) => {
          console.log(data)
           this.router.navigate(['/home']);
        },
        (error) => {
          var errorsArray = error.error.errors
          console.log("Errors Array: " + errorsArray)
          let fieldError: Array<String> = []
          for(let err of errorsArray){
            // console.log(err.defaultMessage)
            if(err.field == "title"){ 
              this.titleErr = err.defaultMessage; fieldError.push("title"); 
            }
            if(err.field == "description") {
              this.descriptionErr = err.defaultMessage; fieldError.push("description"); 
            }
            if(err.field == "salary") { 
              this.salaryErr = err.defaultMessage; fieldError.push("salary"); 
            }
            if(err.field == "level") { 
              this.levelErr = err.defaultMessage; fieldError.push("level"); 
            }
          }
          console.log(fieldError.indexOf("title"))
          if (fieldError.indexOf("title") == -1 ) this.titleErr = ""
          if (fieldError.indexOf("description") == -1) this.descriptionErr = ""
          if (fieldError.indexOf("salary") == -1) this.salaryErr = ""
          if (fieldError.indexOf("level") == -1) this.levelErr = ""

          console.log("Errors:\n" + this.titleErr + "\n" + this.descriptionErr + "\n" + this.salaryErr + "\n" + this.levelErr)
        }
      );  
  }
}