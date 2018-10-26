import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  state = {
    color: 'black',
    banner: 'hello',
    isOpen: false,
    title: ''
  };

  buttonHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  textHandler = e => {
    this.setState({
      banner: e.target.value
    });
  };

  // function to change the text of the button when clicked

  handleClick = e => {
    this.setState({
      title: e.target.value,
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;

    let name = <h2>Marlon</h2>;
    let myBanner;
    myBanner = this.state.isOpen ? (
      <Header banner={this.state.banner} />
    ) : (
      myBanner
    );
    return (
      <div className="App" onClick={this.handleClick}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.test}</p>
          {myBanner}
          <input
            style={{ margin: 10 }}
            value={this.state.banner}
            onChange={this.textHandler}
          />
          <br />
          <button onClick={this.handleClick}>
            {!isOpen ? 'Click Me!' : 'Clicked'}
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
