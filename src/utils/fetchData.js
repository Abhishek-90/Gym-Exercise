export const exerciseOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
async function fetchData(url, options) {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

export default fetchData;
