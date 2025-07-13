document.addEventListener('DOMContentLoaded', function () {
  const ramos = document.querySelectorAll('.ramo');

  // Inicializa el estado de los ramos según dependencias
  actualizarEstado();

  // Agrega evento a cada checkbox
  ramos.forEach(ramo => {
    const checkbox = ramo.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', actualizarEstado);
  });

  function actualizarEstado() {
    ramos.forEach(ramo => {
      const checkbox = ramo.querySelector('input[type="checkbox"]');
      const dependeDe = ramo.dataset.depends.split(',').filter(id => id);
      
      if (dependeDe.length === 0) {
        checkbox.disabled = false; // No depende de nadie
        return;
      }

      // Verifica si todos los ramos de los que depende están marcados
      const todosAprobados = dependeDe.every(id => {
        const prerequisito = document.getElementById(id);
        return prerequisito && prerequisito.checked;
      });

      checkbox.disabled = !todosAprobados;
    });
  }
});
