// Botão de volta ao topo
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btnVoltarTopo');
  
  if (!btn) {
    console.error('Botão não encontrado!');
    return;
  }

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
});

function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}