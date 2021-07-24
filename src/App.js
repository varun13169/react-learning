import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';

function App() {
  return (
    <div>
      <headers style={{height: "2rem", backgroundColor: "blue", width:"100%"}}>
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
      </headers>

      <main>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
      </main>
      

    </div>
  );
}

export default App;
