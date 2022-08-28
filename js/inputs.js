const [horizontalNumber, horizontalRange] = [
  document.getElementsByClassName("MergeAllNumbersForRange"),
  document.getElementsByClassName("MergeAllRangeForNumber")
];

/**
 * Pegamos todos os valores do input range/number e juntamos com o input number/range.
 * Dessa forma, sempre que o usuário alterar o valor de um, ele mudará o valor do outro input
 */

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
