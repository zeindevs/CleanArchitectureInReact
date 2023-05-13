import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import ui from "./ui";

export default combineReducers({ todos, ui });
