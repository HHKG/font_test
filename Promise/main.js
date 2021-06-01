import React from "react";
import { ReactDOM } from "react-dom";
import UseStateTest from "./useState";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <UseStateTest />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
