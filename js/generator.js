const [colorInput, mainTargetBox, codeCss, allToolsFunction] = [
  document.getElementById("colorInput"),
  document.getElementById("targetBoxShadow"),
  document.getElementsByClassName("codeCss")[0],
  document.getElementsByClassName("joinAllFunction")
];

/** Criei um objeto que contém todos os valores necessários para a ferramenta */

const saveValuesOfCurrentElements = {
  currentInputRangeOrNumericValueHorizontal: '8px',
  currentInputRangeOrNumericValueVertical: '8px',
  currentInputRangeOrNumericValueBlur: '25px',
  currentInputRangeOrNumericValueSpread: '0px',
  currentValueColor: "#000000",
  currentCheckbox: ""
};

/** capturando a cor que o usuário está escolhendo */

colorInput.addEventListener("input", function () {
  saveValuesOfCurrentElements.currentValueColor = this.value;
});


/*** faço um for em todas os inputs das ferramentas.***/

for (const allToolsFunctions of allToolsFunction) {

  allToolsFunctions.oninput = function () {
    /***
      * nós temos 4 input range e number, então eu pego com base no atributo que eu configurei no html como os valores de cada um
      * Preciso verificar se o valor atual é realmente o input range ou number, pois nossa classe que configurei no html está configurada para input color e checkbox também
      * Como não queremos esses 2 inputs (color e checkbox)
      * Faço está verificação para obter o valor atual dos input range e number que usuário está utilizando no momento e passo para nosso objeto das ferramentas.
    ***/

    if (this.type === "number" && this.getAttribute("target") === '0' || this.type === "range" && this.getAttribute("target") === '0') saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal = `${this.value}px`
    if (this.type === "number" && this.getAttribute("target") === '1' || this.type === "range" && this.getAttribute("target") === '1') saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical = `${this.value}px`
    if (this.type === "number" && this.getAttribute("target") === '2' || this.type === "range" && this.getAttribute("target") === '2') saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur = `${this.value}px`
    if (this.type === "number" && this.getAttribute("target") === '3' || this.type === "range" && this.getAttribute("target") === '3') saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread = `${this.value}px`

    /**** Verifique se a caixa de seleção está marcada, se tiver adiciono o inset, se não, redefinimos o valor que tem na variavel  ****/

    this.type === "checkbox" && this.checked ? saveValuesOfCurrentElements.currentCheckbox = 'inset': saveValuesOfCurrentElements.currentCheckbox = ''

    /** Adiciono o estilo de box shadow a nossa div alvo, para o usuário ver em tempo real.  ***/

    mainTargetBox.style = `box-shadow: ${saveValuesOfCurrentElements.currentCheckbox} 
      ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal}
      ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical} 
      ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur} 
      ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread} 
      ${saveValuesOfCurrentElements.currentValueColor};`;

    /** Adiciono o código no nosso html.**/

    codeCss.innerHTML = `
      -webkit-box-shadow: ${saveValuesOfCurrentElements.currentCheckbox} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread} ${saveValuesOfCurrentElements.currentValueColor};<br>
      -moz-box-shadow: ${saveValuesOfCurrentElements.currentCheckbox} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread} ${saveValuesOfCurrentElements.currentValueColor};<br>
      box-shadow: ${saveValuesOfCurrentElements.currentCheckbox} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueHorizontal} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueVertical} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueBlur} ${saveValuesOfCurrentElements.currentInputRangeOrNumericValueSpread} ${saveValuesOfCurrentElements.currentValueColor};`;

  };
}

/***  Copia o código ao clicar no botão***/

const copyCodigoCss = event => {
  event.innerText = "Copiou";
  navigator.clipboard.writeText(codeCss.innerText);
  setTimeout(() => {
    event.innerText = "Cópiar";
  }, 3000);
};
