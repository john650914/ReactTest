import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app">asfasdg sdfg sdfbhghgh dghn dfgn dghh dfhsf</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

if (module.hot) {
  module.hot.accept();
}