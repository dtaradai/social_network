import React from "react"
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const dialogsPage = props.store.getState().dialogsPage;

  const sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }

  const onMessageChange = (newMessageText) => {
    props.store.dispatch(updateNewMessageTextCreator(newMessageText));
  }

  return (
    <Dialogs  sendMessage={sendMessage} 
              onMessageChange={onMessageChange}
              dialogsPage={dialogsPage}
    />
  )
}

export default DialogsContainer