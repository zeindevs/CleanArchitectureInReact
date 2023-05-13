import { PAGE_LOADED } from "../actions/ui";
import * as todosAction from "../actions/todos";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log("page loaded");
      dispatch(todosAction.loadTodos);
    }
  };

export default [pageLoadedFlow];
