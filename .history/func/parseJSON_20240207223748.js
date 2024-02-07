import {  } from "../libs/images-data.json";

const jsonStr = JSON.stringify(ImagesDataJSON);
const ImagesData = JSON.parse(jsonStr);

console.log(ImagesData);
