// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*

const x = 23;
if (x === 23) console.log(23);

*/

/*

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 1; i < temps.length; i++) {
        if (typeof temps[i] !== "number") continue;
        if (max < temps[i]) {
            max = temps[i];
        }
        if (min > temps[i]) {
            min = temps[i];
        }
    }
    console.log(max, min);
    return max - min;
};

console.log(calcTempAmplitude(temperatures));

*/

/*

const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsuis",
        value: Number(prompt("Degrees celsius")),
  };
  
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify
console.log(measureKelvin());

*/

/*

const printForecast = function (temp) {
    let answer = "";
    for (let i = 0; i < temp.length; i++) {
        answer += `...${temp[i]}°C in ${i + 1} days `;
    }
    answer += "...";
    return answer;
};
const data1 = [17, 21, 23];
const data2 = [12, 15, -5, 0, 4];
console.log(printForecast(data2));

*/

/*

const totalWorkHour = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const calcWorkHour = function (workHour) {
    let totalHour = 0;
    let avgDailyHour = 0;
    let dayWithMostHour = workHour[0];
    let numberOfDayWorked = 0;
    for (let i = 0; i < workHour.length; i++){
        totalHour += workHour[i];
        if (dayWithMostHour < workHour[i]) dayWithMostHour = workHour[i];
        if (workHour[i] > 0) numberOfDayWorked++;


    }
    avgDailyHour = totalHour / workHour.length;
    let workWeek = false;
    if (totalHour >= 35) workWeek = true;
    const work = {
        totalHour,
        avgDailyHour,
        dayWithMostHour,
        numberOfDayWorked,
        workWeek
    };
    return work;
}

console.log(calcWorkHour(totalWorkHour));

*/