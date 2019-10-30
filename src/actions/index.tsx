import { Payload } from "../Widget";

export interface ActionInterface {
  type: string;
  [key: string]: any;
}

export const IS_DROPDOWN_COLLAPSED = (isCollapsed: boolean = true) => ({
  type: "IS_DROPDOWN_COLLAPSED",
  isCollapsed
});

export const RESIZE_DROPDOWN = (activeTab: any) => ({
  type: "",
  activeTab
});

export const UPDATE_REF_ID = (refID: string) => ({
  type: "",
  refID
});

export const UPDATE_ACTIVE_TAB_NAME = (activeTabName: string) => ({
  type: "",
  activeTabName
});

export const UPDATE_ACTIVE_TABLINK_NAME = (activeTabLinkName: string) => ({
  type: "",
  activeTabLinkName
});

export const DOES_HISTORY_EXIST = (doesExist: boolean) => ({
  type: "",
  doesExist
});

export const IS_REF_LOADING = (isLoading: boolean) => ({
  type: "",
  isLoading
});

export const UPDATE_PAYLOAD = (payload: Payload) => ({
  type: "",
  payload
});

export const DID_ERROR_OCCUR = (didErr: boolean) => ({
  type: "",
  didErr
});

export const GET_ERR_MSG = (errMsg: string) => ({
  type: "",
  errMsg
});

export const IS_GRAPH_NODE_HOVERED = (isHovered: boolean) => ({
  type: "",
  isHovered
});

export const IS_GRAPH_NODE_ACTIVE = (isActive: boolean) => ({
  type: "",
  isActive
});

export const IS_TOOLTIP_ACTIVE = (isActive: boolean) => ({
  type: "",
  isActive
});

// export default {
//   IS_DROPDOWN_COLLAPSED,
//   RESIZE_DROPDOWN,
//   UPDATE_REF_ID,
//   UPDATE_ACTIVE_TAB_NAME,
//   UPDATE_ACTIVE_TABLINK_NAME,
//   DOES_HISTORY_EXIST,
//   IS_REF_LOADING,
//   UPDATE_PAYLOAD,
//   DID_ERROR_OCCUR,
//   GET_ERR_MSG,
//   IS_GRAPH_NODE_HOVERED,
//   IS_TOOLTIP_ACTIVE
// }
