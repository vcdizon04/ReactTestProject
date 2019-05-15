import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render(){
    return (
      <Router>
    
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <NavLink   activeClassName={"active"} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  activeClassName={"active"} to="/about/">About</NavLink>
            </li>
            <li>
              <NavLink  activeClassName={"active"} to="/users/">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        {/* <Route path="/users/" component={Users} /> */}
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >  
          Learn Reacts
        </a>
      </header> */}

    </div>

    </Router>

    );
  }
}

export default App;
