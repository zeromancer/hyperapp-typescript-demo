import { h, View } from "hyperapp"
import { GlobalState, GlobalActions } from "./modules/Global"
import Counter from "./components/Counter"
import TodoMain from "./components/Todo"
import "./styles/app.scss"

const view: View<GlobalState, GlobalActions> = (state, actions) => (
  <div id="global">
    <section id="todo">
      <TodoMain state={state.todo} actions={actions.todo} />
    </section>
    <hr />
    <section id="counter" class="section">
      <Counter count={state.count.count} onChange={actions.count.change} />
    </section>
  </div>
)

export default view
