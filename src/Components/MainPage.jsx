import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getData from "../Actions/action";

const MainPage = () => {
  const items = useSelector((state) => state.apiReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log(items);
  return <></>;
};

export default MainPage;
