
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import store from './State/state'



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderPage = (state) => {
      root.render(
        <App posts={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
);
}


renderPage(store.getState()) 

store.subscribe(renderPage)
