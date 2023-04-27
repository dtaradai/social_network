import React from "react"
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Dialogs = (props) => {

  const dialogsElement = props.dialogsPage.dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id} /> );
  const messagesElement = props.dialogsPage.messages.map( messege => <Message message={messege.message} id={messege.id} /> );

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