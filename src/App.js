import React, {Component} from 'react';
import './App.css';
import MessageList from './components/MessageList';


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

   postMess = async (data) => {
    let response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    if (response.status === 200) {
      const json = await response.json()
      this.setState({
        ...this.state.formHidden,
        messages: [
          ...this.state.messages,
          json
        ]
      })
    } else {
      console.log('couldn\'t post message', response.status)
    }
  }

   deleteMess = async (id) => {
    const response = await fetch(`${API}, ${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: id
    })
    if (response.status === 200) {
      const json = await response.json()
      const removedId = json.id
      this.setState({
        ...this.state,
        messages: [...this.state.messages.filter(message => message.id !== removedId)]
      })
    }
  }

  //  patchMess = async () => {
  //   let response = await fetch(API, {
  //
  //   })
  // }

  composeToggle = () => {
    this.state.formHidden === 'hidden'
      ? this.setState({formHidden: ''})
      : this.setState({formHidden: 'hidden'})
  }

  render() {
    console.log(this.state.messages)
    return (<div className="container">
      <h1 className="title">Its time for another react thing!</h1>
      <h3 className="message"> Your Message </h3>
      <MessageList messages={this.state.messages}/>
    </div>)
  }
}

export default App;
