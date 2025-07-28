import React, { useCallback } from "react";

const useDownloadCV = () => {
  const downloadCV = () => {
    window.open("/EmilianoSanchezMoreno_Resume.pdf", "_blank");
  };
  return downloadCV;
};

export default useDownloadCV;
