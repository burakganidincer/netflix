export const options = {
  params: { language: "tr-TR" },
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY,
  },
};
//Resimlerin başına eklenmesi gereken URL

export const baseImgUrl = "https://image.tmdb.org/t/p/original";
