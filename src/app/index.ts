import { app } from "hyperapp"
import view from "./IndexView"
import { globalState, globalActions, GlobalState, GlobalActions } from "../modules/Global"

app<GlobalState, GlobalActions>(globalState, globalActions, view, document.getElementById("app"))
