import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import store, { history } from "../redux/configureStore";
import { userActions } from "../redux/modules/user";
import { Provider } from "react-redux";

import Footer from "../components/Footer";
import Login from "../pages/Login";
import WorryCreateUpdate from "../pages/WorryCreateUpdate";
import WorryDetail from "../pages/WorryDetail";
import Main from "../pages/Main";
import SearchPage from "../pages/SearchPage";
import { Select } from "../pages/Select";
import { SelectWrite } from "../pages/SelectWrite";
import { Mypage } from "../pages/Mypage";
import SelectBoard from "../pages/SelectBoard";
import WorryBoard from "../pages/WorryBoard";
import NotFound from "../components/NotFound";
import WorryRevise from "../pages/WorryRevise";
import { EditSelect } from "../components/EditSelect";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../components/Fallback";

function App() {
  // *social login
  if (window.location.pathname.includes("sociallogin")) {
    const accessToken = window.location.pathname.split("=")[1];

    localStorage.setItem("accessToken", accessToken);
    history.replace("/main");
  }

  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      dispatch(userActions.getUserAPI());
    }
  }, []);

  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo);
  };

  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <>
              <Route path="/searchpage" exact component={SearchPage}></Route>
              <Route path="/main" exact component={Main}></Route>
              <Route
                path="/worrywrite"
                exact
                component={WorryCreateUpdate}
              ></Route>
              <Route path="/worryboard" exact component={WorryBoard}></Route>
              <Route path="/selectboard" exact component={SelectBoard}></Route>
              <Route
                path="/board/:boardId"
                exact
                component={WorryDetail}
              ></Route>
              <Route path="/select/:selectId" exact component={Select}></Route>
              <Route path="/selectwrite" exact component={SelectWrite}></Route>
              <Route
                path="/select/editSelect/:selectId"
                exact
                component={EditSelect}
              ></Route>
              <Route path="/mypage" exact component={Mypage} />
              <Route
                path="/worryrevise/:boardId"
                exact
                component={WorryRevise}
              />
              {/* <Route component={NotFound} /> */}
              <Footer />
            </>
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
