import { useSelector, useDispatch} from 'react-redux';

function Product() {
    function getCounter(state) {
        return state.counter;
    };

    const counter = useSelector(getCounter); // componte automatically subscribes to store
    console.log(counter + "ppp")

    const dispatch = useDispatch();

    function increment(value) {
        dispatch({
            type: 'increment',
            value: value,
        });
    }

    function decrement(value) {
        dispatch({
            type: 'decrement',
            value: value,
        });
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