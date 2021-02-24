import React from 'react';
import {Col, Input, Row} from "reactstrap";
import './App.style.scss';
import Card from "./components/card";
import {Button} from "antd";

class App extends React.Component{
  render() {

      let date = new Date().toDateString();

      return (
      <div className={'todo-app'}>
          <div className={'header'}>
            <h2>Todo App</h2>
              <p>{date}</p>
          </div>
          <div className={'content'}>

              <div className={'app-input'}>
                  <Input type={'text'} placeholder={'Title'}/>
                  <Input type={'textarea'} placeholder={'Description'}/>
                  <div className={'text-right'}>
                      <Button>Add to todo list</Button>
                  </div>
              </div>

              <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
      </div>
    )
  }
}

export default App;
