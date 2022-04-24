import axios from "axios";


// 获取轮播图api  0:pc 1:android 2:iphone 3:ipad
export function getBanner(type=0) {
  return axios.get(`http://localhost:3000/banner?type=${type}`)
}
