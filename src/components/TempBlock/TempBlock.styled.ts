import styled from "styled-components";

export const YLine = styled.div`
  position: absolute;
  left: 5px;
  width: 1px;
  height: 100%;
  background-color: black;
`;

export const XLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background-color: black;
`;
