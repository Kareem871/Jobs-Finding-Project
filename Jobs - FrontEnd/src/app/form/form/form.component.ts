import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
  }
  form: FormGroup = this.createFormGroup();
  createFormGroup(){
    return new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      salary: new FormControl(),
      level: new FormControl()
    })
  }

  
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
  }
  
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
          console.log(errorsArray)
          let fieldError:Array<String> = []
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