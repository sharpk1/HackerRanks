const https = require("https");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// This calcDate function was gotten from another gist, can't remember who exactly. Welp
function calcDate(date1, date2) {
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);

  return {
    days,
    months,
    years
  };
}

const findRequest = (
  baseAPI = "https://jsonmock.hackerrank.com/api/stocks",
  key = "date",
  value,
  pageNumber = 1
) =>
  new Promise((resolve, reject) => {
    https.get(
      `${baseAPI}/search?${key}=${value}&page=${pageNumber}`,
      response => {
        response.on("data", d => {
          const data = d.toString();
          resolve(data);
        });
      }
    );
  });

const calcResult = async (time, firstDate, lastDate) => {
  let result = await findRequest(undefined, undefined, time, undefined);
  result = JSON.parse(result);
  result = result.data.filter(
    x =>
      new Date(x.date) >= firstDate &&
      new Date(x.date) <= lastDate
  );
  result = result.reduce((acc, curr) => {
    acc += `${curr.date} ${curr.open} ${curr.close} \n`;
    return acc;
  }, "");
  console.log(result);
  return result;
};

async function openAndClosePrices(firstDate, lastDate) {
  firstDate = new Date(firstDate);
  lastDate = new Date(lastDate);
  const getTime = calcDate(lastDate, firstDate);


  //if there are only days difference
  if (getTime.months === 0 && getTime.years === 0) {
    const result = await calcResult(
      `${monthNames[firstDate.getMonth()]}-${firstDate.getFullYear()}`, firstDate, lastDate
    );
    return result;
  }
  //If there is an increase in Years
  let x = 0;
  for (let i = firstDate.getMonth(); i < getTime.months; i++) {
    if (i > 12) {
      i = i % 12;
      x++;
    }

    await calcResult(
      `${monthNames[i]}-${firstDate.getFullYear() + x}`, firstDate, lastDate
    );
  }

}

openAndClosePrices("1-January-2000", "12-January-2000");