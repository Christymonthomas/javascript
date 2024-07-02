function humanReadable(seconds) {
  // Calculate the hours,minutes and remaining seconds.

  let hours = formatTime(Math.floor(seconds / 3600));
  let minutes = formatTime(Math.floor((seconds % 3600) / 60));
  let remainingSeconds = formatTime(seconds % 60);
  return `${hours}:${minutes}:${remainingSeconds}`;
}
function formatTime(t) {
  return t.toString().padStart(2, 0);
}

console.log(humanReadable(90));
