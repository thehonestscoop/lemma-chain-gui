import { Payload, State } from "./state";
import Get_HardCoded_Refs from "../JSON_MockUp_Sample";

export interface ActionInterface {
  type: string;
  [key: string]: any;
}

export interface Dispatch {
  type: string;
  newState?: any;
}

export const SET_DROPDOWN_IS_COLLAPSED = (
  isCollapsed: boolean = true
): ActionInterface => ({
  type: "SET_DROPDOWN_IS_COLLAPSED",
  newState: isCollapsed
});

export const RESIZE_DROPDOWN_HEIGHT = (
  activeTab: any = 0
): ActionInterface => ({
  type: "RESIZE_DROPDOWN_HEIGHT",
  newState: activeTab
});

export const UPDATE_REF_ID = (
  refID: string = "@powerofgod/17t8kcjuw"
): ActionInterface => ({
  type: "UPDATE_REF_ID",
  newState: refID
});

export const UPDATE_ACTIVE_TAB_NAME = (
  activeTabName: string = "required-tab"
): ActionInterface => ({
  type: "UPDATE_ACTIVE_TAB_NAME",
  newState: activeTabName
});

export const UPDATE_ACTIVE_TABLINK_NAME = (
  activeTabLinkName: string = "required-tab-link"
): ActionInterface => ({
  type: "UPDATE_ACTIVE_TABLINK_NAME",
  newState: activeTabLinkName
});

export const SET_HISTORY_EXISTS = (
  doesExist: boolean = false
): ActionInterface => ({
  type: "SET_HISTORY_EXISTS",
  newState: doesExist
});

export const SET_REF_IS_LOADING = (
  isLoading: any = false
): ActionInterface => ({
  type: "SET_REF_IS_LOADING",
  newState: isLoading
});

export const UPDATE_PAYLOAD = (
  payload: Payload = Get_HardCoded_Refs()
): ActionInterface => ({
  type: "UPDATE_PAYLOAD",
  newState: payload
});

export const SET_ERROR_OCCURRED = (
  didErr: boolean = false
): ActionInterface => ({
  type: "SET_ERROR_OCCURRED",
  newState: didErr
});

export const GET_ERR_MSG = (errMsg: string = ""): ActionInterface => ({
  type: "GET_ERR_MSG",
  newState: errMsg
});

export const SET_GRAPH_NODE_IS_HOVERED = (
  isHovered: boolean = false
): ActionInterface => ({
  type: "SET_GRAPH_NODE_IS_HOVERED",
  newState: isHovered
});

export const SET_GRAPH_NODE_IS_ACTIVE = (
  isActive: boolean = false
): ActionInterface => ({
  type: "SET_GRAPH_NODE_IS_ACTIVE",
  newState: isActive
});

export const SET_TOOLTIP_IS_ACTIVE = (
  isActive: boolean = false
): ActionInterface => ({
  type: "SET_TOOLTIP_ACTIVE",
  newState: isActive
});

export const POPULATE_GRAPH_NODES = (
  graphNodes: any[] = []
): ActionInterface => ({
  type: "POPULATE_GRAPH_NODES",
  newState: graphNodes
});

export const POPULATE_GRAPH_EDGES = (
  graphEdges: any[] = []
): ActionInterface => ({
  type: "POPULATE_GRAPH_EDGES",
  newState: graphEdges
});

export const propsAndActions: any = {
  dropdownIsCollapsed: { action: SET_DROPDOWN_IS_COLLAPSED },
  dropdownCurHeight: { action: RESIZE_DROPDOWN_HEIGHT },
  refID: { action: UPDATE_REF_ID },
  activeTabName: { action: UPDATE_ACTIVE_TAB_NAME },
  activeTabLinkName: { action: UPDATE_ACTIVE_TABLINK_NAME },
  historyExists: { action: SET_HISTORY_EXISTS },
  refIsLoading: { action: SET_REF_IS_LOADING },
  payload: { action: UPDATE_PAYLOAD },
  errOccurred: { action: SET_ERROR_OCCURRED },
  errMsg: { action: GET_ERR_MSG },
  graphNodeIsHovered: { action: SET_GRAPH_NODE_IS_HOVERED },
  graphNodeIsActive: { action: SET_GRAPH_NODE_IS_ACTIVE },
  tooltipIsActive: { action: SET_TOOLTIP_IS_ACTIVE },
  graphNodes: { action: POPULATE_GRAPH_NODES },
  graphEdges: { action: POPULATE_GRAPH_EDGES }
};

export const mapProps4dispatch = (needActions: string[]) => (
  dispatch: Function,
  ownProps?: State
) => {
  let props: any = {};
  
  for (let actionType of needActions) {
    for (let prop of Object.keys(propsAndActions)) {
      const action = propsAndActions[prop].action;

      if (actionType === action().type)
        props[actionType] = (newState: any) => dispatch(action(newState));
    }
  }
  return props;
};

export const getCorrespondingDispatchNames = (stateProps: string[]) => {
  return stateProps.map((prop: string) => propsAndActions[prop].action().type);
};
