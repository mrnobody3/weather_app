import React, { ReactNode } from "react";
import { StyleBox, StyledOverlay } from "./Modal.styled";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <StyledOverlay onClick={props.toggle}>
          <StyleBox onClick={(e) => e.stopPropagation()}>
            {props.children}
          </StyleBox>
        </StyledOverlay>
      )}
    </>
  );
}
