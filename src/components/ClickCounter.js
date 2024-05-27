import React from 'react';

export class ClickCounter extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = { count: 0}//инкапсулированое поле(обьект) которое можно менять его состояние 
  }

  handleClick = (data) => (e) => {
    this.setState({ count: this.state.count + this.props.count })//сеттер для закрітого обьекта state
  };

  render(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick()}>Increment</button>
      </div>
    )
  }
}
