import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
  constructor() { }

  ngOnInit() {
  }

}
