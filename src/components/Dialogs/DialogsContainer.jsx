import React from "react"
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    onMessageChange: (newMessageText) => {
      dispatch(updateNewMessageTextCreator(newMessageText));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer