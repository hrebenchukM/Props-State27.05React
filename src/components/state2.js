import React from 'react';
function FancyBorder(props) {//отвечает за рамочку
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {/* FancyBorder FancyBorder-blue стиль сss */}
        {props.children}
      </div>
    );
  }
  
  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
        {/* //доступ к вложенному компоненту */}
      </FancyBorder>
    );
  }
  
  export class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);

      this.state = {login: ''};
    }
  
    render() {
      return (
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
                 {/* input и button вложенніе дочерние єлементі для Dialog */}
          <input value= {this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      );
    }
  
    handleChange(e) {
      this.setState({login: e.target.value});
    }
  
    handleSignUp() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }
  