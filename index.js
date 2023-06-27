function gerar() {
  const linhas = document.getElementById("linhas").value;
  const colunas = document.getElementById("colunas").value;
  const matriz = document.getElementById("matriz");
  matriz.innerText = "";
  let vetor = [];
  let i = 0;
  let j = 0;

  matriz.style.display = "block";
  for (i = 1; i <= linhas; i++) {
    vetor[i - 1] = [];
    let linha = matriz.insertRow(i - 1);
    for (j = 1; j <= colunas; j++) {
      vetor[i - 1][j - 1] = i * 10 + j;
      let coluna = linha.insertCell(j - 1);
      coluna.innerText = vetor[i - 1][j - 1];
      //   matriz.innerHTML +=
      //     "<table><tr><td>" + vetor[i - 1][j - 1] + "</td></tr></table>";
      //     "<div class='matriz'>" + vetor[i - 1][j - 1] + "</div>" + "<br/>";
      //   console.log(vetor);
      // document.write("<br />");
      //   document.write(vetor[i][j] + "  ");
    }
    // document.write("<br />");
  }

  //   for (i = 0; i < vetor.length; i++) {
  //     vetor[i] = [];
  //     let linha = matriz.insertRow(-1);
  //     for (j = 0; j < vetor.length; j++) {
  //       let coluna = linha.insertCell(j);
  //       coluna.innerText = vetor[i][j];
  //     }
  //   }
  if (linhas === colunas) {
    let mostrar = document.getElementById("showorhide");
    mostrar.style.display = "block";
  } else {
  }
}

function showhide2() {
  const checkbox = document.getElementById("checkbox");
  console.log(checkbox.checked);
  if (checkbox.checked === true) {
    let mostrar2 = document.getElementById("showorhide2");
    mostrar2.style.display = "block";
  }
}
