import React from 'react';

export class State1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {welcome: "Добро пожаловать на сайт!"};
      
        
    }
    render() {
        return <h1>{this.state.welcome}</h1>;
    }
}

export class ClickButton extends React.Component {//используем состояние к кнопке,меняем ее стиль при нажатии
             
    constructor(props) {
        super(props);
        
        this.state = {class: "off", label: "Нажми"};
          
        this.press = this.press.bind(this);//функцию явно обьявляю как поле класса.Явно привязаться 
    }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}