import { useParams } from "react-router-dom";

let { id } = useParams();


export const BASE_URL = "https://v2.api.noroff.dev/online-shop";
export const ITEM_URL = `${BASE_URL}/${id}`;

