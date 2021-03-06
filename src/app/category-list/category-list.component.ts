import { Component, OnInit } from '@angular/core';
import { State } from '../data/data.reducer';
import { Store } from '@ngrx/store';
import { Item } from '../../lib/mockItems';
import { Router } from '@angular/router';
import { AddItemComponent } from '../add-item/add-item.component';
import { MatDialog } from '@angular/material';

interface AppState {
  data: State;
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  data: Item[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.store.select('data').subscribe(data => {
      console.log('this.router.url', this.router.url);
      this.data = data.searchedItems ? data.searchedItems : [];
    });
  }

  openDialog() {
    this.dialog.open(AddItemComponent);
  }


  ngOnInit() {
  }

}
