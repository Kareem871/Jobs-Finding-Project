import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  
  constructor(private http:HttpClient, public dialog: MatDialog) { 

  }

  Jobs;
  ngOnInit(): void {
    this.Jobs = this.http.get<String>('http://localhost:8080')
    .subscribe(
      data => this.Jobs = (data),
      error => console.log(error)
    );
  }
  
  showDetails: any = false;
  value = "clear me"
  
  searchTitle = false;
  SearchTitle() {
    this.searchTitle = !this.searchTitle;
  }
  searchLevel = false;
  SearchLevel() {
    this.searchLevel = !this.searchLevel;
  }
  searchSalary = false;
  SearchSalary() {
    this.searchSalary = !this.searchSalary;
  }  
  
  showSelected = false;
  categoriesShow() {
    this.showSelected = !this.showSelected;
  }
  
  openDetails(i) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: this.Jobs[i].title, 
      description: this.Jobs[i].description, 
      salary: this.Jobs[i].salary, 
      level: this.Jobs[i].level
    }
    const dialogRef = this.dialog.open(DialogContentExampleDialog, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}