import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
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
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/searchpage" exact component={SearchPage}></Route>
          <Route path="/main" exact component={Main}></Route>
          <Route path="/worrywrite" exact component={WorryCreateUpdate}></Route>
          <Route path="/worrydetail" exact component={WorryDetail}></Route>
          <Route path="/select" exact component={Select}></Route>
          <Route path="/selectwrite" exact component={SelectWrite}></Route>
          <Route path="/mypage" exact component={Mypage} />
          <Route path="/plusbtn" exact component={PlusBtn} />
          <Footer />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
