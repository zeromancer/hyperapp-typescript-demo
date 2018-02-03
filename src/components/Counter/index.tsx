import { h, Component, ActionResult } from "hyperapp"
import styles from "./styles.scss"

interface CounterProps {
  count: number
  onChange(value: number): ActionResult<any>
}

const Counter: Component<CounterProps> = ({ count, onChange }) => (
  <div class={styles.container}>
    <a role="button" class={styles.button} onclick={() => onChange(count - 1)}>
      -
    </a>

    <span class={styles.count}>{count}</span>

    <a role="button" class={styles.button} onclick={() => onChange(count + 1)}>
      +
    </a>
  </div>
)

export default Counter
