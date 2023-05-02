import { Route, Routes, Link } from "react-router-dom";

import * as Comps from "./components";

const routes = [
  { name: "welcome", path: "/", component: Comps.Welcome },
  { name: "about", path: "/about", component: Comps.About },
  { name: "counter", path: "/contact", component: Comps.Counter },
  { name: "todos", path: "/todos", component: Comps.Todos },
  { name: "comments", path: "/comments", component: Comps.Comments },
];
function App() {
  return (
    <div className="App">
      <h2>Single Web app</h2>
      <ol>
        {routes.map((el, idx) => (
          <li key={el.name + "-" + idx}>
            <Link to={el.path}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            key={el.name + "_" + idx}
            path={el.path}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
