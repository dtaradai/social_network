import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Функция которая отрисовывает визуальную часть сайта, используем при первоначальной загрузке и изменении объекта state
let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App  state={store.getState()} 
            dispatch={store.dispatch.bind(store)} 
      />
    </React.StrictMode>
  );
}
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
