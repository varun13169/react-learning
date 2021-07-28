import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";

function Header() {
    function isLoggedIn(state) {
        console.log(state.authSlice.isAuthenticated)
        return state.authSlice.isAuthenticated;
    }

    const loggedIn = useSelector(isLoggedIn);
    const dispatch = useDispatch()

    function logUserIn() {
        dispatch(authAction.login());
    }
    function logUserOut() {
        dispatch(authAction.logout());
    }

    return (
        <header>
            <div>Redux Auth</div>
            { loggedIn &&
                <ul style={{display: 'inline'}}>
                    <li style={{display: 'inline', padding: '1rem'}}>
                        <a href='.' style={{textDecoration: 'none'}}>My Products</a>
                    </li>
                    <li style={{display: 'inline', padding: '1rem'}}>
                        <a href='.' style={{textDecoration: 'none'}}>My Sales</a>
                    </li>
                    <li style={{display: 'inline', padding: '1rem'}}>
                    <button onClick={logUserOut}>Logout</button> 
                    </li>
                </ul>
            }
        </header>
    )
}

export default Header;