import styled from "styled-components";

export const StyledOverlay = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleBox = styled.div`
  position: relative;
  display: block;
  background: white;
  width: 600px;
  height: 600px;
  padding: 20px;
  //border-radius: 1rem;
`;
