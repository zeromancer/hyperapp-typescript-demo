import { h, Component } from "hyperapp"
import { TodoAppState, TodoState, TodoActions } from "../modules/Todo"

interface TodoAppProps {
  state: TodoAppState
  actions: TodoActions
}

interface TodoProps {
  todo: TodoState
  actions: TodoActions
}

interface IdActions {
  id: string
  actions: TodoActions
}

const HeaderView: Component<TodoAppProps> = ({ state, actions }) => (
  <header>
    <h2>
      todo crud touch{" "}
      <a href="https://github.com/zeromancer/hyperapp-typescript-demo">
        <small>source</small>
      </a>
    </h2>
  </header>
)

const RemoveButton: Component<IdActions> = ({ id, actions }) => (
  <button class="button button-small button-outline" id={id} onclick={(e: HTMLButtonElement) => actions.remove(id)}>
    x
  </button>
)
const ToggleButton: Component<IdActions> = ({ id, actions }) => (
  <button class="button button-small button-outline" id={id} onclick={(e: HTMLButtonElement) => actions.toggle(id)}>
    ✓
  </button>
)

const TodoItem: Component<TodoProps> = ({ todo, actions }) => (
  <div class="row">
    <div class="column column-15">
      <RemoveButton id={todo.id} actions={actions} />
      <ToggleButton id={todo.id} actions={actions} />
    </div>
    <div
      class={todo.done ? "done column column-85" : "column column-85"}
      contenteditable
      data-uuid={todo.id}
      onkeyup={(e: KeyboardEvent) => (e.keyCode === 13 ? actions.editEnter() : null)}
      oninput={(e: any) => (todo.value = e.target.textContent || "")}
    >
      {todo.value}
    </div>
  </div>
)
const TodoListDone: Component<TodoAppProps> = ({ state, actions }) => (
  <div id="todo-list-done">
    {state.todos.filter(todo => todo.done).map(todo => <TodoItem todo={todo} actions={actions} />)}
  </div>
)

const TodoInput: Component<TodoAppProps> = ({ state, actions }) => (
  <div class="row">
    <input
      type="text"
      onkeyup={(e: any) => (e.keyCode === 13 && e.target.value !== "" ? actions.add() : null)}
      oninput={(e: any) => actions.input(e.target.value)}
      value={state.input}
      placeholder={state.placeholder}
    />
    <button onclick={(e: Event) => actions.add()}>add</button>
  </div>
)

const TodoList: Component<TodoAppProps> = ({ state, actions }) => (
  <div id="todo-list">
    {state.todos
      .filter(todo => {
        console.error(todo)
        return !todo.done
      })
      .map(todo => <TodoItem todo={todo} actions={actions} />)}
  </div>
)

const StateDisplay: Component<TodoAppProps> = ({ state }) => (
  <pre>
    <code>{JSON.stringify(state, null, 2)}</code>
  </pre>
)

const TodoMain: Component<TodoAppProps> = ({ state, actions }) => (
  <div class="container">
    <HeaderView state={state} actions={actions} />
    <TodoList state={state} actions={actions} />
    <TodoInput state={state} actions={actions} />
    <TodoListDone state={state} actions={actions} />
    <StateDisplay state={state} actions={actions} />
  </div>
)

export default TodoMain
