import React, { useContext } from "react";
import ImagesDataJSON from "../libs/images-data.json";
import { parseJSONdata, filterdImages } from "../func/func";
import { threedDesignImages } from "../libs/threedDesignImages";
import Image from "next/image";
import { graphicsDesignImages } from "../libs/graphicsDesignImages";
import { ZoomIn } from "react-feather";
import Modal from "./Modal";
import { ContextComponent } from "../libs/context";

const GridImageCard = ({ props }) => {
  const { cat } = props;
  const ImagesData = parseJSONdata(ImagesDataJSON);
  const { openModal, isModalOpen } = useContext(ContextComponent);
  console.log(filterdImages(cat, ImagesData));

  return (
<>
    {
  ?
}
</>
    
 );

export default GridImageCard;
