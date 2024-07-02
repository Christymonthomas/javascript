function timeToEat(currentTime) {
  // Parse the current time string
  const [time, period] = currentTime.split(" ");
  const [currentHours, currentMinutes] = time.split(":").map(Number);

  // Convert the hours and minutes into minutes only.
  const currentTotalMinutes = currentHours * 60 + currentMinutes;

  // Define the meal time in minutes
  const breakfastTime = 7 * 60;
  const lunchTime = 12 * 60;
  const dinnerTime = 19 * 60;

  //Adjust meal times based on the period(a.m or p.m)
  if (period === "p.m") {
    breakfastTime += 12 * 60;
    lunchTime += 12 * 60;
    dinnerTime += 12 * 60;
  }
  // calculate the time difference b/w the current time and the next meal time
  let timeDifference;
  if (currentTotalMinutes < breakfastTime) {
    timeDifference = breakfastTime - currentTotalMinutes;
  } else if (currentTotalMinutes < lunchTime) {
    timeDifference = lunchTime - currentTotalMinutes;
  } else if (currentTotalMinutes < dinnerTime) {
    timeDifference = dinnerTime - currentTotalMinutes;
  } else {
    // If the current time is after dinner, calculate the time difference until the next day's breakfast.
    timeDifference = 24 * 60 - currentTotalMinutes + breakfastTime;
  }

  // convert the time difference back to hours and minutes
  const hours = Math.floor(timeDifference / 60);
  const minutes = timeDifference % 60;

  // return time difference as an array
  return [hours, minutes];
}

console.log(timeToEat("5:50 a.m."));
