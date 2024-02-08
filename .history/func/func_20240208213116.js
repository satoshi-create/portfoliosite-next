export const parseJSONdata = (data) => {
  const jsonStr = JSON.stringify(data);
  const parseData = JSON.parse(jsonStr);
  return parseData;
};

// export const filterdImages = (imageCat,data) => {
//   if (imageCat == "grafhic") {
//     const filterdGraphicsDesignImages = data.filter(
//       (data) => data.cat === "2d"
//     );
//     return filterdGraphicsDesignImages;
//   } else {
//     const filterdThreeDesignImages = data.filter(
//       (data) => data.cat === "3d"
//     );
//     return filterdThreeDesignImages;
//   }
// };
export const filterdImages = (imageCat, data) => {
  switch (imageCat) {
    case "grafhic":
      const filterdGraphicsDesignImages = data.filter(
        (data) => data.cat === "2d"
      );
      return filterdGraphicsDesignImages;
      break;
    case "threed":
      const filterdThreeDesignImages = data.filter((data) => data.cat === "3d");
      return filterdThreeDesignImages;
      break;
    case "cad"
  }
};
