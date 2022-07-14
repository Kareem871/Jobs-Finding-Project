import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject, Input  } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { job } from './job';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  Jobs: any;
  ngOnInit(): void {
    this.http.get<job>('http://localhost:8080')
      .subscribe(
        data => {
          console.log("Data: " + JSON.stringify(data))
          this.Jobs = data
        },
        error => {
          console.log("Error: " + error)
        }
      );
  }
  
  showDetails: any = false;
  
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

  @Input() titleSearch!: String;
  @Input() salarySearch!: String;
  @Input() levelSearch!: String;

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}