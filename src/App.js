import React from 'react';
import {Col, Row} from "reactstrap";
import './App.style.scss';
import Card from "./components/card";

class App extends React.Component{
  render() {
    return (
      <div className={'todo-app'}>
          <div className={'header'}>
            <h2>Todo App</h2>
          </div>
          <div className={'content'}>
            <Card/>
          </div>
      </div>
    )
  }
}

export default App;
