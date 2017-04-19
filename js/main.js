var boxCancha = document.getElementById("box-cancha");

function laCancha(){
  var divGrande = document.createElement("div");
  var divInterior = document.createElement("div");
  var divMediano = document.createElement("div");
  var divMediano2 = document.createElement("div");
  var divCircular = document.createElement("div");
  var divBallArcoTop = document.createElement("div");
  var divBallArcoBottom = document.createElement("div");
  var divBallCenter = document.createElement("div");

  divGrande.setAttribute("class", "grande");
  divInterior.setAttribute("class", "interior");
  divMediano.setAttribute("class", "mediano");
  divMediano2.setAttribute("class", "mediano2");
  divCircular.setAttribute("class", "circular");
  divBallArcoTop.setAttribute("class", "ball-top");
  divBallArcoBottom.setAttribute("class", "ball-bottom");
  divBallCenter.setAttribute("class", "ball-center");

  boxCancha.appendChild(divGrande);
  divGrande.appendChild(divInterior);
}

laCancha();
