import { delay } from "framer-motion";
import { useNavigate } from "react-router-dom";

const useLoadingNavigate = (setIsLoading, delay = 300) => {
  const navigate = useNavigate();
  const navigateWithLoading = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
    }, delay);
  };

  return navigateWithLoading;
};

export default useLoadingNavigate;
