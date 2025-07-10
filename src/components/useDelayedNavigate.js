import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useDelayedNavigate = (startExitAnimation, delay = 2000) => {
  const navigate = useNavigate();

  return (to) => {
    startExitAnimation();

    setTimeout(() => {
      navigate(to);
    }, delay);
  };
};

export default useDelayedNavigate;
