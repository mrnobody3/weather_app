import { Typography } from "@mui/material";
import React from "react";
import Modal from "../../../Modal/Modal";
interface IWeatherCardInfo {
  onClose: () => void;
}

const WeatherCardInfo: React.FC<IWeatherCardInfo> = ({ onClose }) => {
  return (
    <Modal isOpen={true} toggle={onClose}>
      <Typography>London</Typography>
    </Modal>
  );
};

export default WeatherCardInfo;
