import { useContext } from "react";
import headerContext from "../context/headerContext";



const useHeader = () => {
  return useContext(headerContext);
};

export default useHeader;
