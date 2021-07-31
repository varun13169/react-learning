import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Header from './components/Header'
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';
import ExpenseForm from './components/ExpenseForm';
import ShowExpense from './components/ShowExpense';

function App() {
  const isLoggedIn = useSelector((state) => {return state.authSlice.isAuthenticated})

  return (
    <div>
      <Header></Header>
      {!isLoggedIn && <Auth/>}
      {isLoggedIn && <UserProfile/>}
      <header style={{height: "2rem", backgroundColor: "lightblue", width:"100%"}}>
        <nav>
          <ul>
            <li>
              <Link to="/welcome"> Welcome </Link>
            </li>
            <li>
              <Link to="/products"> Products </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
      </main>

      <ExpenseForm></ExpenseForm>
      <ShowExpense></ShowExpense>
      

    </div>
  );
}

export default App;
