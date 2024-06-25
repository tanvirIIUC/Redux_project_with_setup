
import { decreaseByAmount, decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-slate-200 border p-10 rounded-md flex gap-5 items-center">
        <button onClick={() => dispatch(incrementByAmount(5))} className="bg-green-500 rounded-md p-3">increase by 5</button>
        <button onClick={() => dispatch(increment())} className="bg-green-500 rounded-md p-3">increase</button>
        {count}
        <button onClick={() => dispatch(decrement())} className="bg-red-500 rounded-md p-3">decrease</button>
        <button onClick={() => dispatch(decreaseByAmount(5))} className="bg-red-500 rounded-md p-3">decrease by 5</button>
      </div>
    </div>
  );
}

export default App;
