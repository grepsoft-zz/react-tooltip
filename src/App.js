import styled from "styled-components";
import Tooltip from "./components/tooltip";
import "./styles.css";

const TooltipTarget = styled.span``;

export default function App() {
  return (
    <div className="App">
      <Tooltip text="I am a tooltip" position="left" background="00adb5">
        <TooltipTarget>Left</TooltipTarget>
      </Tooltip>
      <Tooltip text="I am a tooltip" position="top" background="222831">
        <TooltipTarget>Top</TooltipTarget>
      </Tooltip>
      <Tooltip text="I am a tooltip" position="bottom" background="393e46">
        <TooltipTarget>Bottom</TooltipTarget>
      </Tooltip>
      <Tooltip text="I am a tooltip" position="right" background="eeeeee">
        <TooltipTarget>Right</TooltipTarget>
      </Tooltip>
      {/* <p>
        This is a{" "}
        <Tooltip text="I am within paragraph" position="top" styleMe={false}>
          <TooltipTarget>tooltip</TooltipTarget>
        </Tooltip>{" "}
        within a paragraph.
      </p> */}
    </div>
  );
}
