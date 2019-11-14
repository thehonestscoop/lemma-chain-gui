import React from "react";
import { connect } from "react-redux";
import Dropdown from "./components/Dropdown";
import Loader from "./components/Loader";
import Get_HardCoded_Refs from "./JSON_MockUp_Sample";
import { getCSSProps } from "./ThemeCSS";
import widgetconfig from "./widgetconfig.json";
import ToggleBarItems from "./components/ToggleBarItems";
import TabLinks from "./components/TabLinks";
import Tabs from "./components/Tabs";
import {
  State as StateInterface,
  Payload as PayloadInterface,
  initSetStateForProps,
  mapProps4state,
  State
} from "./redux/state";
import visualizeGraph from "./widget-methods/visualizeGraph";
import {
  mapProps4dispatch,
  getCorrespondingDispatchNames
} from "./redux/actions";
import { store } from "./index";

export const DOM_refs: any = {
  dropdown: React.createRef<any>(),
  activeTabLink: React.createRef<any>(),
  activeTab: React.createRef<any>(),
  requiredTab: React.createRef<any>(),
  recommendedTab: React.createRef<any>(),
  graphTab: React.createRef<any>(),
  graph: React.createRef<any>(),
  refItemWrapper: React.createRef<any>(),
  graphTooltip: React.createRef<any>(),
  refIDInputEl: React.createRef<any>()
};

export const cssProps = getCSSProps();

export const history: State[] = [];

export const HistoryContext = React.createContext<State>(history);

class Widget extends React.Component<StateInterface, StateInterface> {
  tabLinksWrapperheight = 48;

  isViewedWithMobile: boolean = false;

  widget = React.createRef<any>();

  serverHostURL: string = /localhost/.test(window.location.href)
    ? "localhost:1323"
    : widgetconfig.lemmaChainServerHost;

  async componentDidMount() {
    const props = Object.assign({}, this.props);
    let setState = initSetStateForProps(props);

    //check what device user is running
    if (
      /(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i.test(
        window.navigator.userAgent
      )
    )
      this.isViewedWithMobile = true;

    let activeTab = DOM_refs.activeTab.current;

    setState({ refIsLoading: true });

    try {
      await fetch(`http://${this.serverHostURL}/${props.refID}`)
        .then((response: Response) => response.json())
        .then((data: PayloadInterface) => {
          //throw Error (i.e. do not proceed to try populating UI) if server returns an error [message]
          if (Object.keys(data).includes("error")) throw new Error(data.error);
          else {
            setState({ payload: data }).then(props => {
              setState = initSetStateForProps(props);

              setState({
                errOccurred: false,
                refIsLoading: false,
                dropdownCurHeight: !props.dropdownIsCollapsed
                  ? activeTab
                  : props.dropdownCurHeight
              }).then(props => {
                visualizeGraph(props);
              });
            });
          }
        });
    } catch (e) {
      //NOTE: This block of code must be re-edited for production. It was modified just for testing purposes
      //TO-DO: Remodify code: Make url prop not optional in PayloadInterface interface at very top [line 17]...
      //TO-DO: delete this line in production
      // alert(
      //   "Hi, there. \n\nLemma Chain GUI could not establish connection with server, hence, got hard-coded refs instead for testing purposes.\n\n- Godspower"
      // );

      //just for proper English grammar sentence casing
      //PS: This next three lines may eventually not be needed since code was remodified to not throw dev-oriented errors to user
      let errMsg = String(e)
          .replace(/(\w+)?error:/i, "")
          .trim(),
        appendDot = errMsg.substr(-1) !== "." ? `${errMsg}.` : errMsg,
        grammifiedErrMsg =
          appendDot.charAt(0).toUpperCase() + appendDot.substr(1);
      setState({
        //TO-DO: delete this line in production
        payload: Get_HardCoded_Refs(),
        //TO-DO: uncomment this line in production
        // errOccurred: true,
        errMsg: `${grammifiedErrMsg}`,
        refIsLoading: false
      }).then(props => {
        setState = initSetStateForProps(props);
        setState({
          dropdownCurHeight: !props.dropdownIsCollapsed
            ? activeTab
            : props.dropdownCurHeight
        });

        //TO-DO: delete this line in production
        visualizeGraph(props);
      });
    } finally {
      //hide clipboard tool-tip if anywhere else on page/document is clicked
      document.body.onclick = (e: any) => {
        if (!/tool-tip|ref-identifier/.test(e.target.className))
          setState({ tooltipIsActive: false });
      };

      const googleFontCDN = document.getElementById("font-cdn") as HTMLElement;

      //HACK: This is for to wait or delay till fonts are loaded before setting height of activeTab in order not to set a height below height of tab with loaded fonts since offset height of container will be relative to size of font
      const awaitFontLoad = async () => {
        try {
          await fetch(`${googleFontCDN.getAttribute("href")}`);
        } finally {
          //set maximum height of dropdown to height of N items [before adding scroll bar in case of overflow]
          const heightRef = DOM_refs.refItemWrapper.current.offsetHeight;
          const maxHeight = `${heightRef *
            (widgetconfig.widgetMaxNumOfRefsDisplayableAtOnce || 3) +
            2}px`;

          //using activeTab here instead of requiredTab since on component mount, requiredTab is activeTab, and also to prevent ref forwarding error
          DOM_refs.activeTab.current.style.maxHeight = maxHeight;
          DOM_refs.recommendedTab.current.style.maxHeight = maxHeight;

          //HACK: unset history initial (first state) dropdown height from 0 to current activeTab height to prevent dropdown from resizing to 0 on click of back button assuming history index is at 0 (first state).
          history[0] = Object.assign({}, store.getState());
          history[0].dropdownCurHeight = DOM_refs.activeTab.current.offsetHeight + this.tabLinksWrapperheight + 2;
          history[0].dropdownIsCollapsed = false;
          history[0].historyExists = false;
        }
      };
      awaitFontLoad();
    }
  }

  render() {
    const toggleBarLoaderAttributes = {
      size: 8,
      color: "white",
      type: "minor"
    };
    const loaderAttributes = {
      size: 12,
      color: getCSSProps().themeBg,
      rider: this.props.payload!.id
        ? "Populating References..."
        : "Loading References...",
      type: "major",
      wrapperHeight: this.props.dropdownCurHeight! - this.tabLinksWrapperheight
    };
    
    return (
      <div
        className={`widget ${
          this.isViewedWithMobile ? "isViewedWithMobile" : ""
        }`}
        style={{ maxWidth: widgetconfig.widgetMaxWidth }}
        ref={this.widget}
      >
        <ToggleBarItems refs={DOM_refs}>
          <Loader attributes={toggleBarLoaderAttributes} />
        </ToggleBarItems>
        <Dropdown refs={DOM_refs}>
          <TabLinks refs={DOM_refs} history={history} />
          <Tabs refs={DOM_refs} history={history}>
            <Loader attributes={loaderAttributes} />
          </Tabs>
        </Dropdown>
      </div>
    );
  }
}

const stateProps = [
  "refID",
  "dropdownIsCollapsed",
  "dropdownCurHeight",
  "tooltipIsActive",
  "payload",
  "graphNodes",
  "graphEdges",
  "refIsLoading",
  "errOccurred",
  "errMsg"
];

const mapStateToProps = mapProps4state(stateProps);
const mapDispatchToProps = mapProps4dispatch(
  getCorrespondingDispatchNames(stateProps)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);
