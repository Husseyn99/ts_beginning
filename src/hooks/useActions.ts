import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreactor from "../store/action-creators";

export const useACtions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreactor, dispatch);
};
