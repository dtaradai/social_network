import React from "react"
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Dialogs = (props) => {
  const dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Tanja'},
    {id: 4, name: 'Kolja'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Zoja'},
    {id: 7, name: 'Vitalik'},
  ];

  const messages = [
    {id: 1, message: 'Message 1'},
    {id: 2, message: 'Message 2'},
    {id: 3, message: 'Message 3'},
    {id: 4, message: 'Message 4'},
  ]

  let dialogsElement = dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id} /> );
  let messagesElement = messages.map( messege => <Message message={messege.message} id={messege.id} /> );

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        { messagesElement }
      </div>
    </div>
  )
}

export default Dialogs