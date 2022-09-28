import * as React from 'react'
import { createRoot, Root } from 'react-dom/client';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from './App';
import reducer from "./redux/Reducers";

const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) throw new Error('Fail to get root element in index.ts');

export const store: Store<TaskState, TaskAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const root: Root = createRoot(rootElement);



root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// import * as React from "react"
// import { render } from "react-dom"
// import { createStore, applyMiddleware, Store } from "redux"
// import { Provider } from "react-redux"
// import thunk from "redux-thunk"

// import App from "./App"
// import reducer from "./store/reducer"

// const store: Store<ArticleState, ArticleAction> & {
//   dispatch: DispatchType
// } = createStore(reducer, applyMiddleware(thunk))
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// )