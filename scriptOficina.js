function cd(){
  var tipo = document.getElementById('tipo');
  var mod = document.getElementById('mod');
  var enc = document.getElementById('enc');
  var red = document.getElementById('redu');

  var t = Number(tipo.value)
  var m = Number(mod.value)
  var e = Number(enc.value)
  var rt = Number(red.value)
  var r =''
  var res = document.getElementById('dificuldade')
  r = ((m + e) * 5 + t+rt)
  res.innerHTML = ` ${r}`
  
  }