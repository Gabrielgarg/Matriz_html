function gerar() {
  const linhas = document.getElementById("linhas").value;
  const colunas = document.getElementById("colunas").value;
  const matriz = document.getElementById("matriz");
  matriz.innerText = "";
  let vetor = [];
  let i = 0;
  let j = 0;

  matriz.style.display = "block";

  if (linhas === colunas) {
    let mostrar = document.getElementById("showorhide");
    mostrar.style.display = "block";
    showhide2();
  } else {
    let mostrar = document.getElementById("showorhide");
    mostrar.style.display = "none";
    let mostrar2 = document.getElementById("showorhide2");
    mostrar2.style.display = "none";
    for (i = 1; i <= linhas; i++) {
      vetor[i - 1] = [];
      let linha = matriz.insertRow(i - 1);
      for (j = 1; j <= colunas; j++) {
        vetor[i - 1][j - 1] = i * 10 + j;
        let coluna = linha.insertCell(j - 1);
        coluna.innerText = vetor[i - 1][j - 1];
      }
    }
  }
}

function showhide2() {
  const checkbox = document.getElementById("checkbox");
  const matriz = document.getElementById("matriz");
  if (checkbox.checked === true) {
    let mostrar2 = document.getElementById("showorhide2");
    mostrar2.style.display = "block";
  } else {
    let mostrar2 = document.getElementById("showorhide2");
    mostrar2.style.display = "none";
    matriz.innerText = "";
  }
}
function gerar2() {
  const linhas = document.getElementById("linhas").value;
  const colunas = document.getElementById("colunas").value;
  const matriz = document.getElementById("matriz");
  matriz.innerText = "";
  let vetor = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  const primaria = document.getElementById("corprimaria").value;
  const secundaria = document.getElementById("corsecundaria").value;
  matriz.style.display = "block";
  for (i = 1; i <= linhas; i++) {
    vetor[i - 1] = [];
    let linha = matriz.insertRow(i - 1);
    for (j = 1; j <= colunas; j++) {
      vetor[i - 1][j - 1] = i * 10 + j;
      let coluna = linha.insertCell(j - 1);
      coluna.innerText = vetor[i - 1][j - 1];
      if (i == 1 && j == colunas) {
        k = i;
        k++;
        l = j;
        l--;
        coluna.setAttribute("class", "secundario");
      }
      if (k == i && l == j) {
        k++;
        l--;
        coluna.setAttribute("class", "secundario");
      }
      if (i == j) {
        coluna.setAttribute("class", "principal");
      }
    }
  }
  const todosprincipais = document.getElementsByClassName("principal");
  for (let x = 0; x < todosprincipais.length; x++) {
    todosprincipais[x].style.color = primaria;
  }
  const todossecundarios = document.getElementsByClassName("secundario");
  for (let x = 0; x < todossecundarios.length; x++) {
    todossecundarios[x].style.color = secundaria;
  }
}
