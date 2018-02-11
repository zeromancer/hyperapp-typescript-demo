import { TodoAppState } from "./Todo"
import { generateUUID } from "./../utils/GenerateUuid"
import { ActionsType } from "hyperapp"
import { loadFromStorage, saveToStorage } from "../utils/LocalStorage"

//
// State
//

export interface TodoState {
  done: boolean
  editing: boolean
  id: string
  value: string
}

export interface TodoEditOperation {
  id: string
  value: string
}

export interface TodoAppState {
  input: string
  placeholder: string
  todos: TodoState[]
}

const todoAppName = "todoapp"

export const todoState: TodoAppState = loadFromStorage(todoAppName, {
  input: "",
  placeholder: "Add new todo",
  todos: [],
})

function save(state: TodoAppState): TodoAppState {
  return saveToStorage(todoAppName, state)
}
//
// Actions
//

export interface TodoActions {
  input(value: string): TodoAppState
  add(): TodoAppState
  remove(id: string): TodoAppState
  toggle(id: string): TodoAppState
  edit(t: TodoEditOperation): TodoAppState
}

export const todoActions: ActionsType<TodoAppState, TodoActions> = {
  add: () => (state: TodoAppState) =>
    save({
      ...state,
      input: "",
      todos: state.todos.concat({
        done: false,
        editing: false,
        id: generateUUID(),
        value: state.input,
      }),
    }),
  input: (inputS: string) => (state: TodoAppState) =>
    save({
      ...state,
      input: inputS,
    }),
  remove: (id: string) => (state: TodoAppState) =>
    save({
      ...state,
      todos: state.todos.filter((t: TodoState) => id !== t.id),
    }),
  toggle: (id: string) => (state: TodoAppState) =>
    save({
      ...state,
      todos: state.todos.map(
        (t: TodoState) =>
          id === t.id
            ? Object.assign({}, t, {
                done: !t.done,
              })
            : t
      ),
    }),
  edit: (todo: TodoEditOperation) => (state: TodoAppState) =>
    save({
      ...state,
      todos: state.todos.map(
        (t: TodoState) =>
          todo.id === t.id
            ? Object.assign({}, t, {
                value: todo.value,
              })
            : t
      ),
    }),
}
