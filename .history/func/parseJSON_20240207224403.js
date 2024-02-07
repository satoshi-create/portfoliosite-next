 const parseJSONdata = (data) => {
  const jsonStr = JSON.stringify(data);
  const parseData = JSON.parse(jsonStr);
  return parseData;
};

