import { Payload, State, Graph } from './state';
import Get_HardCoded_Refs from '../JSON_MockUp_Sample';

export interface ActionInterface {
  type: string;
  [key: string]: any;
}

export interface Dispatch {
  type: string;
  newState?: any;
}

export const SET_DROPDOWN_IS_COLLAPSED = (isCollapsed: boolean = true): ActionInterface => ({
  type: "SET_DROPDOWN_IS_COLLAPSED",
  newState: isCollapsed
});

export const RESIZE_DROPDOWN_HEIGHT = (activeTab: any = 0): ActionInterface => ({
  type: "RESIZE_DROPDOWN_HEIGHT",
  newState: activeTab
});

export const UPDATE_REF_ID = (refID: string = "@powerofgod/17t8kcjuw"): ActionInterface => ({
  type: "UPDATE_REF_ID",
  newState: refID
});

export const UPDATE_ACTIVE_TAB_NAME = (activeTabName: string = "required-tab"): ActionInterface => ({
  type: "UPDATE_ACTIVE_TAB_NAME",
  newState: activeTabName
});

export const UPDATE_ACTIVE_TABLINK_NAME = (activeTabLinkName: string = "required-tab-link"): ActionInterface => ({
  type: "UPDATE_ACTIVE_TABLINK_NAME",
  newState: activeTabLinkName
});

export const SET_HISTORY_EXISTS = (doesExist: boolean = false): ActionInterface => ({
  type: "SET_HISTORY_EXISTS",
  newState: doesExist
});

export const SET_REF_IS_LOADING = (isLoading: boolean = true): ActionInterface => ({
  type: "SET_REF_IS_LOADING",
  newState: isLoading
});

export const UPDATE_PAYLOAD = (payload: Payload = Get_HardCoded_Refs()): ActionInterface => ({
  type: "UPDATE_PAYLOAD",
  newState: payload
});

export const SET_ERROR_OCCURRED = (didErr: boolean = false): ActionInterface => ({
  type: "SET_ERROR_OCCURRED",
  newState: didErr
});

export const GET_ERR_MSG = (errMsg: string = ""): ActionInterface => ({
  type: "GET_ERR_MSG",
  newState: errMsg
});

export const SET_GRAPH_NODE_IS_HOVERED = (isHovered: boolean = false): ActionInterface => ({
  type: "SET_GRAPH_NODE_IS_HOVERED",
  newState: isHovered
});

export const SET_GRAPH_NODE_IS_ACTIVE = (isActive: boolean = false): ActionInterface => ({
  type: "SET_GRAPH_NODE_IS_ACTIVE",
  newState: isActive
});

export const SET_TOOLTIP_IS_ACTIVE = (isActive: boolean = false): ActionInterface => ({
  type: "SET_TOOLTIP_ACTIVE",
  newState: isActive
});

export const UPDATE_HISTORY = (history: State = {}): ActionInterface => ({
  type: "UPDATE_HISTORY",
  newState: history
});

export const DELETE_PREV_HISTORY = (history: State = {}): ActionInterface => ({
  type: "DELETE_PREV_HISTORY",
  newState: history
});

export const POPULATE_GRAPH = (graph: Graph = {nodes: [], edges: []}): ActionInterface => ({
  type: 'POPULATE_GRAPH',
  newState: graph
});

export const actionsAndProps = [
  [SET_DROPDOWN_IS_COLLAPSED, 'dropdownIsCollapsed'],
  [RESIZE_DROPDOWN_HEIGHT, 'dropdownCurHeight'],
  [UPDATE_REF_ID, 'refID'],
  [UPDATE_ACTIVE_TAB_NAME, 'activeTabName'],
  [UPDATE_ACTIVE_TABLINK_NAME, 'activeTabLinkName'],
  [SET_HISTORY_EXISTS, 'historyExists'],
  [SET_REF_IS_LOADING, 'refIsLoading'],
  [UPDATE_PAYLOAD, 'payload'],
  [SET_ERROR_OCCURRED, 'errOccurred'],
  [GET_ERR_MSG, 'errMsg'],
  [SET_GRAPH_NODE_IS_HOVERED, 'graphNodeIsHovered'],
  [SET_GRAPH_NODE_IS_ACTIVE, 'graphNodeIsActive'],
  [SET_TOOLTIP_IS_ACTIVE, 'tooltipIsActive'],
  [UPDATE_HISTORY, 'history'],
  // [DELETE_PREV_HISTORY, 'history'],
  [POPULATE_GRAPH, 'graph']
];

export const mapProps4dispatch = (needActions: string[]) =>
  (dispatch: Function, ownProps?: State) => {
    let props: any = {};

    [...needActions].map(actionType => {
      for (let actAndProp of actionsAndProps) {
        const action = actAndProp[0] as any;

        if (actionType === action().type)
          props[actionType] = (newState: any) => dispatch(action(newState));
      }
      return null;
    });

    return props;
  };

const actionNamesAndProps: {allActionNames: string[]; allProps: string[]} = {
  allActionNames: [],
  allProps: []
};

actionsAndProps.map(actionAndProp => {
  let [action, prop] = actionAndProp as any;
  actionNamesAndProps.allActionNames.push(action().type);
  actionNamesAndProps.allProps.push(prop);
  return null;
});

export const allActionNamesAndProps = actionNamesAndProps;
