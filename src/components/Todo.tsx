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
  <div class="content">
    <h1 class="is-infob">todo</h1>
    <h4>
      todo crud touch{" "}
      <a href="https://github.com/zeromancer/hyperapp-typescript-demo">
        <small>source</small>
      </a>
    </h4>
  </div>
)

const RemoveButton: Component<IdActions> = ({ id, actions }) => (
  <a class="button is-small is-danger is-outlined" id={id} onclick={(e: HTMLButtonElement) => actions.remove(id)}>
    x
  </a>
)
const ToggleButton: Component<IdActions> = ({ id, actions }) => (
  <a class="button is-small is-primary is-outlined" id={id} onclick={(e: HTMLButtonElement) => actions.toggle(id)}>
    ✓
  </a>
)

const TodoItem: Component<TodoProps> = ({ todo, actions }) => (
  <div class="columns">
    <div class="column is-narrow">
      <RemoveButton id={todo.id} actions={actions} />
      <ToggleButton id={todo.id} actions={actions} />
    </div>
    <div
      class="column"
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
  <div class="columns">
    <div class="column is-narrow">
      <a class="button is-info is-outlined" onclick={(e: Event) => actions.add()}>
        +
      </a>
    </div>
    <div class="column control">
      <input
        class="input"
        type="text"
        onkeyup={(e: any) => (e.keyCode === 13 && e.target.value !== "" ? actions.add() : null)}
        oninput={(e: any) => actions.input(e.target.value)}
        value={state.input}
        placeholder={state.placeholder}
      />
    </div>
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
  <div class="control">
    <pre>
      <code>{JSON.stringify(state, null, 2)}</code>
    </pre>
  </div>
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
