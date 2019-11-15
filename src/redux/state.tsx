import { propsAndActions } from "../redux/actions";

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
  graphNodes?: Array<any>;
  graphEdges?: any[];
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
  graphNodes,
  graphEdges
}

export const mapProps4state = (needProps: string[]) => (
  state: State,
  ownProps?: any
) => {
  const props: State = {};

  for (const prop of needProps) props[prop] = state[prop];
  
  return props;
};

export const initSetStateForProps = (componentProps: State) => (
  stateProps: State
): Promise<State> =>
  new Promise(resolve => {
    const propsResolved: State = { ...componentProps };

    Object.keys(stateProps).map((prop: string) => {
      const action = propsAndActions[prop].action;

      if (componentProps[action().type]) {
        componentProps[action().type](stateProps[prop]);
        propsResolved[prop] = stateProps[prop];
      }
      return null;
    });
    resolve(propsResolved);
  });

// export const statesAreEqual = (prev: any, current: any): boolean => {
//   if (current.constructor !== Object) return prev === current;
//   else if (current.constructor === Object)
//     for (const prop in current)
//       if (!prev || (prop in prev && prev[prop] !== current[prop])) return false;
//   return true;
// };
