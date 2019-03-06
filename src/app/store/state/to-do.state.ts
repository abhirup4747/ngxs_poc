import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetAllList } from './to-do.actions';
import { ApiService } from '../../services/api.service';
import { produce } from 'immer';


export interface List {
  id: number;
  title: string;
}

export class ListStateModel {
  public items: List[];
}

@State<ListStateModel>({
  name: 'List',
  defaults: {
    items: []
  }
})
export class ListState {

  constructor(private apiService: ApiService) { }

  @Selector()
  static AllList(state: ListStateModel) {
    return state.items;
  }

  @Action(GetAllList)
  get(ctx: StateContext<ListStateModel>) {
    this.apiService.GetAllList().subscribe((data: List[]) => {
      ctx.setState(
        produce(ctx.getState(), draft => {
          draft.items = data;
        })
      )
    });
  }
}
