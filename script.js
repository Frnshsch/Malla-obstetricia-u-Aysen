document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Función para activar o desactivar ramos
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      const ramoId = this.id;
      const ramo = document.querySelector(`.ramo[data-id="${ramoId}"]`);
      const dependencias = ramo.dataset.depends.split(',');

      if (this.checked) {
        // Marcar ramo como aprobado y habilitar dependencias
        enableDependencias(dependencias);
      } else {
        // Si no está aprobado, deshabilitar dependencias
        disableDependencias(dependencias);
      }
    });
  });

  // Habilitar ramos dependientes
  function enableDependencias(dependencias) {
    dependencias.forEach(function (dep) {
      const depCheckbox = document.getElementById(dep);
      if (depCheckbox && !depCheckbox.checked) {
        depCheckbox.disabled = false;
      }
    });
  }

  // Deshabilitar ramos dependientes
  function disableDependencias(dependencias) {
    dependencias.forEach(function (dep) {
      const depCheckbox = document.getElementById(dep);
      if (depCheckbox && !depCheckbox.checked) {
        depCheckbox.disabled = true;
      }
    });
  }
});
