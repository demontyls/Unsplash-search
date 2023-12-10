import {IData} from "../Store/Interface";

const BASE_URL = 'https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs'
export const getData = async (name:string, count?: number, numberPage?: string | number) => {
  const response = await fetch( `${BASE_URL}&query=${name}&per_page=${count ?? '10'}&page=${numberPage ?? '1'}`);
  const data = await response.json();
  console.log(data)
  return data;
}