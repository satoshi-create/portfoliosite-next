 export const parseJSONdata = (data) => {
  const jsonStr = JSON.stringify(data);
  const parseData = JSON.parse(jsonStr);
  return parseData;
};

export const filterdImages = (imageCat,image) => {
  if (imageCat == "grafhic") {
    const filterdGraphicsDesignImages = ImagesData.filter(
      (data) => data.cat === "2d"
    );
    return filterdGraphicsDesignImages;
  } else {
    const filterdThreeDesignImages = ImagesData.filter(
      (data) => data.cat === "3d"
    );
    return filterdThreeDesignImages;
  }
};