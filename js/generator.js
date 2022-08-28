const [colorInput, mainTargetBox, codeCss] = [
  document.getElementById("colorInput"),
  document.getElementById("targetBoxShadow"),
  document.getElementsByClassName("codeCss")[0]
];

/** Criei um objeto que contém todos os valores necessários para a ferramenta */

const saveValuesOfCurrentElements = {
  currentInputRangeOrNumericValueHorizontal: 8,
  currentInputRangeOrNumericValueVertical: 8,
  currentInputRangeOrNumericValueBlur: 25,
  currentInputRangeOrNumericValueSpread: 0,
  currentValueColor: "#000000",
  currentCheckbox: ""
};

/**
 * nós temos 4 input range e number, então eu pego o atributo que eu configurei no html como os valores de cada um,
 * e pego baseado no valor que o usuário está clicando no momento
 */

const checkValueNumber = event => {
  switch (event.getAttribute("target")) {
    case "0":
      saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal =
        event.value;
      break;
    case "1":
      saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical =
        event.value;
      break;
    case "2":
      saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur =
        event.value;
      break;
    case "3":
      saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread =
        event.value;
      break;
  }
};

/** capturando a cor que o usuário está escolhendo */

colorInput.addEventListener("input", function() {
  saveValuesOfCurrentElements.currentValueColor = this.value;
});

/**
 * verifique se o usuário clicou em nossa caixa de seleção, se a opção foi definida, adicionamos a função inset para box shadow 
*/

const verificarCheckbox = event => {
  if (event.checked) saveValuesOfCurrentElements.currentCheckbox = "inset";
  else saveValuesOfCurrentElements.currentCheckbox = "";
};

/***
 * criamos um intervalo para sempre está adicionando os novos valores assim que o usuário modificar cada valor em nossas opções
 */

setInterval(() => {
  mainTargetBox.style = `box-shadow: ${saveValuesOfCurrentElements.currentCheckbox} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread}px ${saveValuesOfCurrentElements.currentValueColor};`;

  codeCss.innerHTML = `
  -webkit-box-shadow: ${saveValuesOfCurrentElements.currentCheckbox} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread}px ${saveValuesOfCurrentElements.currentValueColor};<br>
  -moz-box-shadow: ${saveValuesOfCurrentElements.currentCheckbox} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread}px ${saveValuesOfCurrentElements.currentValueColor};<br>
  box-shadow: ${saveValuesOfCurrentElements.currentCheckbox} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur}px ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread}px ${saveValuesOfCurrentElements.currentValueColor};`;
}, 100);

/***
 * Copia o código css ao clicar no botao
 */

const copyCodigoCss = event => {
  event.innerText = "Copiou";
  navigator.clipboard.writeText(codeCss.innerText);
  setTimeout(() => {
    event.innerText = "Cópiar";
  }, 3000);
};
