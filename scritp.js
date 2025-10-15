// Botão de volta ao topo
window.onscroll = function () {
  let btn = document.getElementById('btnTopo')
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
    btn.style.opacity = "0.9";
    btn.style.transform = "scale(1)";
  } else {
    btn.style.opacity = "0";
    btn.style.transform = "scale(0.8)";
    setTimeout(() => {
      if (btn.style.opacity === "0") {
        btn.style.display = "none";
      }
    }, 300);
  }
};

function voltarTopo() {
  window.scrollTo({ 
    top: 0, 
    behavior: "smooth" 
  });
}