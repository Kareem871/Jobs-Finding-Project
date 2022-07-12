import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: [`.btn { background-color: #999999; }`],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent  {

  value = "clear me"

  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();
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
  
  refresh() {
    this.onRefresh.emit();
  }
  showSelected = false;
  categoriesShow() {
    this.showSelected = !this.showSelected;
  }
  

}
