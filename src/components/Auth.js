import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";

function Auth() {

    const dispatch = useDispatch();

    function login(){
        dispatch(authAction.login());
    }

    return(
        <div>
            <p>Email</p>
            <input/>
            <p>Password</p>
            <input/>

            <button style={{display: 'block'}} onClick={login}>Login</button>
        </div>
    )

}

export default Auth;