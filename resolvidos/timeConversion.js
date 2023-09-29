function timeConversion(s) {
  // Write your code here
  let dadosDoRelogioSeparados = s.split("");

  let horas = parseInt(dadosDoRelogioSeparados[0] + dadosDoRelogioSeparados[1]);
  let minutos = dadosDoRelogioSeparados[3] + dadosDoRelogioSeparados[4];
  let segundos = dadosDoRelogioSeparados[6] + dadosDoRelogioSeparados[7];
  let ampm = dadosDoRelogioSeparados[8];

  if (ampm === "P" && horas < 12) {
    horas += 12;
  } else if (ampm === "A" && horas === 12) {
    horas = 0;
  }

  if (horas < 10) {
    horas = "0" + horas;
  }

  return `${horas}:${minutos}:${segundos}`;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("04:05:45PM"));
console.log(timeConversion("00:00:45AM"));
