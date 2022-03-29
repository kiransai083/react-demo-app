import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  console.log("🚀 ~ file: Topics.js ~ line 16 ~ Topic ~ topicId", topicId);

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

export const Topics = (props) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`components`}>Components</Link>
        </li>
        <li>
          <Link to={`props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path={""}
          element={() => <h3>Please select a topic.</h3>}
        ></Route>
        <Route path={`:topicId`} element={<Topic />}></Route>
      </Routes>
    </div>
  );
};
