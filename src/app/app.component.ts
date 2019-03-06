import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetAllList } from './store/state/to-do.actions';
import { ListState, List } from './store/state/to-do.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngxs';

  @Select(ListState.AllList) $listItems: Observable<List[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(GetAllList);
  }
}
