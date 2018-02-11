import { h, View } from "hyperapp"
import { GlobalState, GlobalActions } from "./modules/Global"
import Counter from "./components/Counter"
import TodoMain from "./components/Todo"
// import styles from "./public/bootswatch.scss"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "./styles/app.scss"
// import "./public/bootswatch.scss"
import "./css/app.scss"

const view: View<GlobalState, GlobalActions> = (state, actions) => (
  // <div style={styles.container}>
  <div id="global" class="section">
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
