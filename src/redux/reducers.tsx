import { combineReducers } from "redux";

import { stateActions as actions, State } from "./state";
// import { actionsAndProps as actions } from './actions';
import { ActionInterface as A } from "./actions";

//the Reducers ...
const dropdownIsCollapsed = (state = true, action: A) => {
  if (typeCorresponds(action.type)) return action.isCollapsed;
  return state;
};

const dropdownCurHeight = (state = 0, action: A) => {
  if (typeCorresponds(action.type))
    return resizeDropdownHeightTo(action.activeTab);
  return state;

  function resizeDropdownHeightTo(
    activeTab: any,
    constHeight = action.constHeight
  ) {
    //i.e. if the argument, activeTab, is an element and not a number (0)...
    //PS: Add 2px for border-bottom extension
    return activeTab !== 0 ? activeTab.offsetHeight + constHeight + 2 : 0;
  }
};

const refID = (state = "@powerofgod/17t8kcjuw", action: A) => {
  if (typeCorresponds(action.type)) return action.refID;
  return state;
};

const activeTabName = (state = "required-tab", action: A) => {
  if (typeCorresponds(action.type)) return action.activeTabName;
  return state;
};

const activeTabLinkName = (state = "required-tab-link", action: A) => {
  if (typeCorresponds(action.type)) return action.activeTabLinkName;
  return state;
};

const historyExists = (state = false, action: A) => {
  if (typeCorresponds(action.type)) return action.doesExist;
  return state;
};

const refIsLoading = (state = true, action: A) => {
  if (typeCorresponds(action.type)) return action.isLoading;
  return state;
};

const payload = (state = {}, action: A) => {
  if (typeCorresponds(action.type)) return action.payload;
  return state;
};

const errOccurred = (state = false, action: A) => {
  if (typeCorresponds(action.type)) return action.didErr;
  return state;
};

const errMsg = (state = "", action: A) => {
  if (typeCorresponds(action.type)) return action.errMsg;
  return state;
};

const graphNodeIsHovered = (state = false, action: A) => {
  if (typeCorresponds(action.type)) return action.isHovered;
  return state;
};

const graphNodeIsActive = (state = false, action: A) => {
  if (typeCorresponds(action.type)) return action.isActive;
  return state;
};

const tooltipIsActive = (state = false, action: A) => {
  if (typeCorresponds(action.type)) return action.isActive;
  return state;
};

const history = (state: any = [{}], action: A) => {
  switch (action.type) {
    case 'UPDATE_HISTORY':
      return {
        history: [
          ...state.history,
          { ...action.history }
        ]
      };
    case 'DELETE_PREV_HISTORY':
      let copyState = { ...state };
      return copyState.history.pop();
    default: return state;
  }
};

const graph = (state: any = { nodes: [], edges:[] }, action: A) => {
  if (typeCorresponds(action.type))
    return action.graph;
  return state;
}

const reducers = combineReducers({
  dropdownIsCollapsed,
  dropdownCurHeight,
  refID,
  activeTabName,
  activeTabLinkName,
  historyExists,
  refIsLoading,
  payload,
  errOccurred,
  errMsg,
  graphNodeIsHovered,
  graphNodeIsActive,
  tooltipIsActive,
  history,
  graph
});

export default reducers;

//action type checker
function typeCorresponds(_type: string) {
  for (let type in actions)
    if (actions[type] === _type) return true;
    else if (Number(actions[type])) break;
  return false;
}
