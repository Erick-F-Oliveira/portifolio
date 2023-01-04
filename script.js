

function cod() {
  var mod = document.getElementById("codi").value;
  var res = document.getElementById("reco");
  if (mod == 'AVENTURA' || mod == 'ESTRELA'|| mod == 'GOLAGOG' || mod == 'URTALA') {
    res.style.fontFamily= "Tormenta"
    res.style.color= "#348ddf"
    res.innerHTML = `Você ganhou 5 Pontos Estelares`
  } else if (mod == 'dd') {
      res.innerHTML = `p`
  } else if (mod == 'gg') {
    
      res.style.color= "#348ddf"
      res.innerHTML = `ggg`
  }
  else {
    res.style.color= "red"
    res.innerHTML = `Insira um código válido`
  }
}
/*var r = mod*/
