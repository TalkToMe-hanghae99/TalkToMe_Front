import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import axios from "axios";

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

function App() {
  return (
    <React.Fragment>
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
            <Route path="/worrydetail" exact component={WorryDetail}></Route>
            <Route path="/select" exact component={Select}></Route>
            <Route path="/selectwrite" exact component={SelectWrite}></Route>
            <Route path="/mypage" exact component={Mypage}></Route>
            <Route path="/plusbtn" exact component={PlusBtn}></Route>
            <Footer />
          </>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
