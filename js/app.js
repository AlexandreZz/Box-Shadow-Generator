const [horizontalNumber, horizontalRange] = [
  document.getElementsByClassName("MergeAllNumbersForRange"),
  document.getElementsByClassName("MergeAllRangeForNumber")
];

for (const horizontalRanges of horizontalRange) {
  horizontalRanges.addEventListener("input", function() {
    horizontalNumber[this.getAttribute("target")].value = this.value;
  });
}

for (const horizontalNumbers of horizontalNumber) {
  horizontalNumbers.addEventListener("input", function() {
    horizontalRange[this.getAttribute("target")].value = this.value;
  });
}
