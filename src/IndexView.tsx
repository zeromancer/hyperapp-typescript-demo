import { h, View } from "hyperapp"
import { GlobalState, GlobalActions } from "./modules/Global"
// import Counter from "./components/Counter"
import TodoMain from "./components/Todo"
// import styles from "./public/bootswatch.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "./public/bootswatch.scss"

const view: View<GlobalState, GlobalActions> = (state, actions) => (
  // <div style={styles.container}>
  <div style="container">
    {/* <Counter count={state.count.count} onChange={actions.count.change} /> */}
    <TodoMain state={state.todo} actions={actions.todo} />
  </div>
)

export default view
