import React from 'react';
import {Col, Row} from "reactstrap";
import './App.style.scss';

class App extends React.Component{
  render() {
    return (
      <div className={'todo-app'}>
          <div className={'header'}>
            <h2>Todo App</h2>
          </div>
          <div className={'content'}>
            <Row>
              <Col sm={10} md={10} lg={10} xl={10}>hello</Col>
              <Col sm={2} md={2} lg={2} xl={2}>hello</Col>
            </Row>
          </div>
      </div>
    )
  }
}

export default App;
