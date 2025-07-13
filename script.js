document.querySelectorAll('.ramo input').forEach(input => {
  input.addEventListener('change', updateDependencies);
});

function updateDependencies() {
  const checked = Array.from(document.querySelectorAll('.ramo input:checked')).map(el => el.id);

  document.querySelectorAll('.ramo').forEach(ramo => {
    const input = ramo.querySelector('input');
    const depends = ramo.dataset.depends?.split(',').filter(Boolean) || [];

    if (depends.length === 0) return;

    const allMet = depends.every(id => checked.includes(id));
    input.disabled = !allMet && !input.checked;
  });
}

// Inicializar estado al cargar
updateDependencies();
