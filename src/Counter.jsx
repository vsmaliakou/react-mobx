import counter from "./store/counter";
import { observer } from "mobx-react-lite";

export const Counter = observer(() => {
  return (
    <div>
      {counter.total}
      <div>
        <button onClick={() => counter.increment()}>+</button>
        <button onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
  );
});