import React, {Component} from 'react'
import Message from './Message'

const MessageList = (props) => {
  return (<div>
    {props.messages.map((message, i) => <Message key={i} message={message}/>)}
  </div>)

}

export default MessageList
