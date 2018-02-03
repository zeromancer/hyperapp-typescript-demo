import { h, View } from "hyperapp"
import { GlobalState, GlobalActions } from "./modules"
import Counter from "./components/Counter"

const view: View<GlobalState, GlobalActions> = (state, actions) => (
  <main>
    <Counter count={state.count.count} onChange={actions.count.change} />
  </main>
)

export default view
