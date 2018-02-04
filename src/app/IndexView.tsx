import { h, View } from "hyperapp"
import { GlobalState, GlobalActions } from "../modules/Global"
import Counter from "../components/Counter"
import TodoMain from "../components/Todo"

const view: View<GlobalState, GlobalActions> = (state, actions) => (
  <main>
    <Counter count={state.count.count} onChange={actions.count.change} />
    <TodoMain state={state.todo} actions={actions.todo} />
  </main>
)

export default view
