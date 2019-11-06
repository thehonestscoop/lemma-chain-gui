import { actionsAndProps } from "../redux/actions";

export interface Graph {
  nodes?: any[],
  edges?: any[]
}

export interface Payload {
  data: {
    title: string;
    authors: string[];
    url?: string;
  };
  id: string;
  refs: Array<object>;
  [key: string]: any;
}

export interface State {
  dropdownIsCollapsed?: boolean;
  dropdownCurHeight?: number;
  refID?: string;
  activeTabName?: string;
  activeTabLinkName?: string;
  historyExists?: boolean;
  refIsLoading?: boolean;
  payload?: Payload;
  errOccurred?: boolean;
  errMsg?: string;
  graphNodeIsHovered?: boolean;
  graphNodeIsActive?: boolean;
  tooltipIsActive?: boolean;
  history?: State[];
  graph?: Graph;
  [key: string]: any;
}

export enum stateProps {
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
}

export enum stateActions {
  SET_DROPDOWN_IS_COLLAPSED,
  RESIZE_DROPDOWN_HEIGHT,
  UPDATE_REF_ID,
  UPDATE_ACTIVE_TAB_NAME,
  UPDATE_ACTIVE_TABLINK_NAME,
  SET_HISTORY_EXISTS,
  SET_REF_IS_LOADING,
  UPDATE_PAYLOAD,
  SET_ERROR_OCCURRED,
  GET_ERR_MSG,
  SET_GRAPH_NODE_IS_HOVERED,
  SET_GRAPH_NODE_IS_ACTIVE,
  SET_TOOLTIP_IS_ACTIVE,
  UPDATE_HISTORY,
  DELETE_PREV_HISTORY,
  POPULATE_GRAPH
}

export const mapProps4state = (needProps: string[]) => (
  state: State,
  ownProps?: any
) => {
  const props: State = {};

  for (const prop of needProps) props[prop] = state[prop];

  return props;
};

export const setStateWrapper = (componentProps: any) => (
  stateProps: any
): void => {
  for (const actAndProp of actionsAndProps) {
    const [action, prop] = actAndProp as any;
    
    if (componentProps[action().type])
      componentProps[action().type](stateProps[prop]);
  }
};


