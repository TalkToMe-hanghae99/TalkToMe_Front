import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import store, { history } from "../redux/configureStore";

import Footer from "../components/Footer";
import Login from "../pages/Login";
import WorryCreateUpdate from "../pages/WorryCreateUpdate";
import WorryDetail from "../pages/WorryDetail";
import Main from "../pages/Main";
import SearchPage from "../pages/SearchPage";
import { Select } from "../pages/Select";
import { SelectWrite } from "../pages/SelectWrite";
import { Mypage } from "../pages/Mypage";
import PlusBtn from "../components/PlusBtn";
import NotFound from "../components/NotFound";
import { Provider } from "react-redux";
import { userActions } from "../redux/modules/user";

function App() {
  // *social login
  if (window.location.pathname.includes("sociallogin")) {
    const accessToken = window.location.pathname.split("=")[1];

    localStorage.setItem("accessToken", accessToken);
    history.replace("/main");
  }

  return (
    <Provider store={store}>
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
            <Route path="/board/:boardId" exact component={WorryDetail}></Route>
            <Route path="/select/:selectId" exact component={Select}></Route>
            <Route path="/selectwrite" exact component={SelectWrite}></Route>
            <Route path="/mypage" exact component={Mypage} />
            <Route path="/plusbtn" exact component={PlusBtn} />
            <Footer />
          </>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
