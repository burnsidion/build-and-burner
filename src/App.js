import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'https://fierce-wave-29955.herokuapp.com/messages';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      formHidden: 'hidden'
    }
  }
  async componentDidMount() {
    const response = await fetch(API)
    if (response.status === 200) {
      const json = await response.json()
      this.setState({messages: json})
    } else {
      console.log('couldn\'t fetch json', response.status)
    }
  }

  composeToggle = () => {
    this.state.formHidden === 'hidden'
      ? this.setState({formHidden: ''})
      : this.setState({formHidden: 'hidden'})
  }



  render() {
    console.log(this.state.messages)
    return (<div className="container">
      <h1>Its time for another react thing!</h1>
    </div>)
  }
}

export default App;
