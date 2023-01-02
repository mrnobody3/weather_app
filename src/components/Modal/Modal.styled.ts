import styled from "styled-components";

export const StyledOverlay = styled.div`
  z-index: 100;
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
  display: block;
  background: white;
  width: 500px;
  height: 500px;
  padding: 1rem;
  border-radius: 1rem;
`;
