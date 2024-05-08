import axios from "axios";
import ActionTypes from "../actionTypes";
import { options } from "../../constants";

//apiden filmleri alır ve store'a aktaran aksiyon
export const getPopular = () => (dispatch) => {
  //yükleme durumunu reducer'a bildir
  dispatch({ type: ActionTypes.MOVIES_LOADING });

  //Apiden popüler filmleri al
  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    //başarılı olursa reducer'a bildir
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    //başarısız olursa reducer'a bildir.
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIES_ERROR,
        payload: err.massage,
      })
    );
};
