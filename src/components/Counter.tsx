import { h, Component, ActionResult } from "hyperapp"
import "./Counter.scss"

interface CounterProps {
  count: number
  onChange(value: number): ActionResult<any>
}

const Counter: Component<CounterProps> = ({ count, onChange }: CounterProps) => (
  <div class="container">
    <div class="content">
      <h1>counter</h1>
      <h4>simples hyperapp example, without local storage</h4>
    </div>
    <div class="columns">
      <div class="control column">
        <a class="button is-danger is-large is-outlined" onclick={() => onChange(count - 1)}>
          -1
        </a>
      </div>
      <h1 class="column show_counter">{count}</h1>
      <div class="control column">
        <a class="button is-success is-large is-outlined" onclick={() => onChange(count + 1)}>
          +1
        </a>
      </div>
    </div>
  </div>
)

export default Counter
