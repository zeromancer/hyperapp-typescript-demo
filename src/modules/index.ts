import { ActionsType } from "hyperapp"
import * as Count from "./count"

//
// State
//

export interface GlobalState {
  count: Count.CounterState
}

export const globalState: GlobalState = {
  count: Count.counterState,
}

//
// Actions
//

export interface GlobalActions {
  count: Count.CounterActions
}

export const globalActions: ActionsType<GlobalState, GlobalActions> = {
  count: Count.counterActions,
}
