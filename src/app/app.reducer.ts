import * as fromLogin from './login/login.reducer';
import * as fromTodo from './todo/todo.reducer';
import * as fromData from './data/data.reducer';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';

export interface State {
  todos: fromTodo.State;
  data: fromData.State;
  user: fromLogin.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.todoReducer,
  data: fromData.reducer,
  user: fromLogin.reducer,
};

export const synchronizedReducers = [
  'user',
  'data'
];

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: synchronizedReducers,
    rehydrate: true
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer]
