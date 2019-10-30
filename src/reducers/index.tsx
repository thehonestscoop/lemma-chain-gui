import { combineReducers } from "redux";

import { ActionInterface as A } from "../actions";

//the Reducers

const dropdownIsCollapsed = (state = true, action: A) => {
  if (action.type === "IS_DROPDOWN_COLLAPSED") return action.isCollapsed;
  return state;
};

const dropdownCurHeight = (state = 0, action: A) => {
  if (action.type === "RESIZE_DROPDOWN")
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
  if (action.type === "UPDATE_REF_ID") return action.refID;
  return state;
};

const activeTabName = (state = "required-tab", action: A) => {
  if (action.type === "UPDATE_ACTIVE_TAB_NAME") return action.activeTabName;
  return state;
};

const activeTabLinkName = (state = "required-tab-link", action: A) => {
  if (action.type === "UPDATE_ACTIVE_TABLINK_NAME")
    return action.activeTabLinkName;
  return state;
};

const historyExists = (state = false, action: A) => {
  if (action.type === "DOES_HISTORY_EXIST") return action.doesExist;
  return state;
};

const refIsLoading = (state = true, action: A) => {
  if (action.type === "IS_REF_LOADING") return action.isLoading;
  return state;
};

const payload = (state = {}, action: A) => {
  if (action.type === "UPDATE_PAYLOAD") return action.payload;
  return state;
};

const errOccurred = (state = false, action: A) => {
  if (action.type === "DID_ERROR_OCCUR") return action.didErr;
  return state;
};

const errMsg = (state = "", action: A) => {
  if (action.type === "GET_ERR_MSG") return action.errMsg;
  return state;
};

const graphNodeIsHovered = (state = false, action: A) => {
  if (action.type === "IS_GRAPH_NODE_HOVERED") return action.isHovered;
  return state;
};

const graphNodeIsActive = (state = false, action: A) => {
  if (action.type === "IS_GRAPH_NODE_ACTIVE") return action.isActive;
  return state;
};

const tooltipIsActive = (state = false, action: A) => {
  if (action.type === "IS_TOOLTIP_ACTIVE") return action.isActive;
  return state;
};

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
  tooltipIsActive
});

export default reducers;
