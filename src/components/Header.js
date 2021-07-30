import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth";
import styles from './Header.module.css';

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
                <ul>
                    <li className={styles['header-list']}>
                        {/*
                            for dynamic classes we can use backtick and add logic to generate strings conditionally
                            eg:
                                className={ `${styles['header-list']} ${isValid && styles['another-css-class']}` }
                         */}
                        <a href='.' style={{textDecoration: 'none'}}>My Products</a>
                    </li>
                    <li className={styles['header-list']}>
                        <a href='.' style={{textDecoration: 'none'}}>My Sales</a>
                    </li>
                    <li className={styles['header-list']}>
                    <button className={styles.button} onClick={logUserOut}>Logout</button> 
                    </li>
                </ul>
            }
        </header>
    )
}

export default Header;