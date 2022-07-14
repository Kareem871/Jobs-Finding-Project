import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = "clear me"
  showFiller = false;

  v: string[] = [];
  
  title!: String
  searchTitle = false;
  SearchTitle() {
    this.searchTitle = !this.searchTitle;
  }

  level!: String
  searchLevel = false;
  SearchLevel() {
    this.searchLevel = !this.searchLevel;
  }

  salary!: String
  searchSalary = false;
  SearchSalary() {
    this.searchSalary = !this.searchSalary;
  }  
  
  showSelected = false;
  categoriesShow() {
    this.showSelected = !this.showSelected;
  }

}
