import { ActionsType } from "hyperapp"
import * as Count from "./Counter"
import * as Todo from "./Todo"

//
// State
//

export interface GlobalState {
  count: Count.CounterState
  todo: Todo.TodoAppState
}

export const globalState: GlobalState = {
  count: Count.counterState,
  todo: Todo.todoState,
}

//
// Actions
//

export interface GlobalActions {
  count: Count.CounterActions
  todo: Todo.TodoActions
}

export const globalActions: ActionsType<GlobalState, GlobalActions> = {
  count: Count.counterActions,
  todo: Todo.todoActions,
}
