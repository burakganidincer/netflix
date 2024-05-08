import ActionTypes from "../actionTypes";
import { options } from "../../constants";
import axios from "axios";

//kategori verilerini al ve reducer'a haber ver

export const getGenres = () => (dispatch) => {
  //api isteği atılıdğını Reducer'a haber ver
  dispatch({ type: ActionTypes.GENRES_LOADING });

  //api isteği at
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)
    .then((res) =>
      dispatch({ type: ActionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.massage,
      })
    );
  //veri gelirse reducer'a haber ver

  //hata olursa reducer'a haber ver
};
