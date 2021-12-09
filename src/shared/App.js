import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Footer from "../components/Footer";
import Login from "../pages/Login";
import WorryCreateUpdate from "../pages/WorryCreateUpdate";
import WorryDetail from "../pages/WorryDetail";
import Main from "../pages/Main";
import SearchPage from "../pages/SearchPage";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <>
            <Route path="/main" exact component={Main}></Route>
            <Route path="/SearchPage" exact component={SearchPage}></Route>
            <Route
              path="/worrywrite"
              exact
              component={WorryCreateUpdate}
            ></Route>
            <Route path="/worrydetail" exact component={WorryDetail}></Route>
            <Footer />
          </>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
