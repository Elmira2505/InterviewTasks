import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import routes from "./routes";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
