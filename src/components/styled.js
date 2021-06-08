import styled, { css, keyframes } from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.button`
  border: none;
  background: inherit;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
  ${({ styleMe }) =>
    styleMe &&
    css`
      padding: 15px;
      margin: 1px;
      border: 1px solid gray;
      border-radius: 5px;
      font-size: 2rem;
    `};

  color: inherit;
  cursor: inherit;
  display: flex;
  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`;

export const CenterContainer = styled.div`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `;
      case "left":
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `;
      case "right":
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const TooltipBox = styled.span`
  position: relative;
  background-color: #${(props) => props.background};  
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 1.25rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

  ${({ position }) => {
    switch (position) {
      case "right":
        return css`
          color: #000;
        `;
      default:
        return css``;
    }
  }}
  /* animation: ${fadeIn} 1s linear; */
  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #${(props) =>
      props.background} transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          &:after {
            border-color: transparent transparent #${(props) =>
                props.background} transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      case "left":
        return css`
          &:after {
            border-color: transparent transparent transparent #${(props) => props.background};
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      case "right":
        return css`
          &:after {
            border-color: transparent #${(props) => props.background} transparent
              transparent;
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `;
      default:
        return css``;
    }
  }}
`;
