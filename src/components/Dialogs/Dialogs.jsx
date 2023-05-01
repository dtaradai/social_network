import React from "react"
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/state";

const Dialogs = (props) => {

  const dialogsElement = props.dialogsPage.dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id} /> );
  const messagesElement = props.dialogsPage.messages.map( messege => <Message message={messege.message} id={messege.id} /> );

  const sendMessage = () => {
    props.dispatch(sendMessageCreator());
  }

  const onMessageChange = (e) => {
    const newMessageText = e.target.value;
    props.dispatch(updateNewMessageTextCreator(newMessageText));
  }
  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        { messagesElement }
        <div>
          <textarea onChange={onMessageChange}
                    value={props.dialogsPage.newMessageText}     
                    placeholder={props.dialogsPage.placeholder}
          />
        </div>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs