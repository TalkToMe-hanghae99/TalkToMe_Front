import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";

import Comment from "./modules/comment";
import select from "./modules/select";
import User from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  comment: Comment,
  select: select,
  user: User,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = createStore(rootReducer, enhancer);

export default store;
