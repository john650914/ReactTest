import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
 render() {
  return (
   <div className="app">app 
   </div>
  );
}
}

if(module.hot){
 module.hot.accept();
}

ReactDOM.render(
 <App />, 
 document.getElementById('content')
);