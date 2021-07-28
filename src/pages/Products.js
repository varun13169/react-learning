import { useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/counter';

function Product() {
    function getCounter(state) {
        return state.counterSlice.counter;
    };

    const counter = useSelector(getCounter); // componte automatically subscribes to store
    console.log(counter + "ppp")

    const dispatch = useDispatch();

    function increment(value) {
        dispatch(counterActions.increment({value: value})); // automatically creates a action obj with a random unique type identifier
                                                            // value passed is added to key "payload"
    }

    function decrement(value) {
        dispatch(counterActions.decrement({value: value}));
    }

    return (
    <div>
        <h1>The Products Page.</h1>
        <button onClick={()=>increment(1)}>Increment</button>
        <button onClick={()=>increment(5)}>Increment  by 5</button>
        <button onClick={()=>decrement(1)}>Decrement</button>
        <p>This is counter value: {counter}</p>
    </div>
    )
};

export default Product;