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
export const filterdImages = (imageCat,data) => {
  if (imageCat == "grafhic") {
    const filterdGraphicsDesignImages = data.filter(
      (data) => data.cat === "2d"
    );
    return filterdGraphicsDesignImages;
  } else {
    const filterdThreeDesignImages = data.filter(
      (data) => data.cat === "3d"
    );
    return filterdThreeDesignImages;
  }
};

const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
