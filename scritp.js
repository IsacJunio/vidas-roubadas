// Botão de volta ao topo
window.addEventListener('scroll', function() {
  const btn = document.getElementById('btnVoltarTopo');
  if (window.pageYOffset > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}