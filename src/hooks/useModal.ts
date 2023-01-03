import { useState } from "react";
import { useScrollLock } from "./useScrollLock";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  const onOpen = () => {
    setIsOpen(true);
    lockScroll();
  };

  const onClose = () => {
    setIsOpen(false);
    unlockScroll();
  };

  return {
    onClose,
    isOpen,
    onOpen,
  };
}
