import { ActionsType } from "hyperapp"

//
// State
//

export interface CounterState {
  count: number
}

export const counterState: CounterState = {
  count: 0,
}

//
// Actions
//

export interface CounterActions {
  change(value: number): CounterState
}

export const counterActions: ActionsType<CounterState, CounterActions> = {
  change: count => state => ({ ...state, count }),
}
