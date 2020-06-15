import axios from "axios";
export const fetchData = (txt) => {
  //   console.log(txt);
  const key = "A1LOOKWMIHIFWFU2";
  return async (dispatch) => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${txt}&apikey=${key}`
    );
    // console.log(response);
    dispatch({ type: "FETCH_DATA", payload: response });
  };
};

export const fetchNifty = () => {
  //   console.log(txt);
  const key = "A1LOOKWMIHIFWFU2";
  return async (dispatch) => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFTY&apikey=${key}`
    );
    // console.log(response);
    dispatch({ type: "FETCH_NIFTY", payload: response });
  };
};
