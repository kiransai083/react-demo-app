import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import UserListView from "./UserListView";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Routes,
} from "react-router-dom";
import { Topics } from "./Topics";

function App() {
  return (
    <Provider store={store}>
      {/* <UserListView /> */}
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route path="/" element={<UserListView />}></Route>
            <Route path="/topics/*" element={<Topics />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
