// Botão de volta ao topo
window.onscroll = function () {
  let btn = document.getElementById('btnTopo')
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none"
  };
};

function voltarTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//Música
const audio =document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", ()=>{
  if(audio.paused){
    audio.play();
    btnMusica.textContent = "⏸️"
  }else{
    audio.pause();
    btnMusica.textContent = "🎵"
  }

})