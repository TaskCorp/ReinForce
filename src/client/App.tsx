import React from "react";
import { store } from "./Index";
import TaskContainer from "./components/TaskContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.scss";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      // main: '#f0e5f0', navbar color
      dark: "#002884",
      // dark: '#000000',
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<TaskContainer />} />
          {/* <Route path='/' element={<Login user={user} setUser={setUser} />} /> */}
          {/* <Route path='/home' element={<Homepage user={user} setUser={setUser} />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

// export default App;

// import * as React from "react"
// import { useSelector, shallowEqual, useDispatch } from "react-redux"
// import "./styles.css"

// import { Article } from "./components/Article"
// import { AddArticle } from "./components/AddArticle"
// import { addArticle, removeArticle } from "./store/actionCreators"
// import { Dispatch } from "redux"

// const App: React.FC = () => {
//   const articles: readonly IArticle[] = useSelector(
//     (state: ArticleState) => state.articles,
//     shallowEqual
//   )

//   const dispatch: Dispatch<any> = useDispatch()

//   const saveArticle = React.useCallback(
//     (article: IArticle) => dispatch(addArticle(article)),
//     [dispatch]
//   )

//   return (
//     <main>
//       <h1>My Articles</h1>
//       <AddArticle saveArticle={saveArticle} />
//       {articles.map((article: IArticle) => (
//         <Article
//           key={article.id}
//           article={article}
//           removeArticle={removeArticle}
//         />
//       ))}
//     </main>
//   )
// }

export default App;
