import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK {543fa7220b2920a8a6c4035bb328cc10}", // 공통으로 요청 할 헤더
  },
});

// search blog api
export const blogSearch = (params) => {
  return Kakao.get("/v3/search/book", { params });
};
