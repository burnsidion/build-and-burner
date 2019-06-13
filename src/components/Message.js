import React from 'react';

export default class Message extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }
  }

  editMess = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  // messEdit = () => {
  //   e.preventDefault()
  //   const data = {
  //
  //   }
  // }

  render(){
    return(<div><p>yo</p></div>)
  }
}
