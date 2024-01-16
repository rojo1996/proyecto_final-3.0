const obtenerProductos = () => {
  return new Promise(resolve => {
    
    setTimeout(() => {
      resolve([
        { id: 1, nombre: 'motor', marca: 'caterpillar', precio: 10000 },
        { id: 2, nombre: 'llanta', marca: 'epiroc', precio: 3000 },
        { id: 3, nombre: 'bomba de combustible', marca: 'caterpillar', precio: 5000 },
        { id: 4, nombre: 'filtro', marca: 'epiroc', precio: 200 },
        { id: 5, nombre: 'filtro de aceite', marca: 'resemin', precio: 150 },
        { id: 6, nombre: 'memoria', marca: 'resemin', precio: 4000 },
        { id: 7, nombre: 'cuchara', marca: 'sandvik', precio: 3000 },
        { id: 8, nombre: 'motor de giro', marca: 'sandvik', precio: 15000 },
        { id: 9, nombre: 'mangueras de presion', marca: 'sandvik', precio: 180 },
        { id: 10, nombre: 'arrancador', marca: 'caterpillar', precio: 3800 },
        { id: 11, nombre: 'baterias 24 v', marca: 'epiroc', precio: 70 },
        { id: 12, nombre: 'radiador', marca: 'resemin', precio: 1480 },
        { id: 13, nombre: 'cadena', marca: 'caterpillar', precio: 20000 },
      ]);
    }, 1000);
  });
};

const mostrarListaRepuestos = async () => {
  const productos = await obtenerProductos();
  const listaRepuestosElement = document.getElementById('listaRepuestos');

  
  listaRepuestosElement.innerHTML = '';

  
  productos.forEach(producto => {
    const listItem = document.createElement('li');
    listItem.textContent = `${producto.nombre} - ${producto.marca} - $${producto.precio}`;
    listaRepuestosElement.appendChild(listItem);
  });

  
  listaRepuestosElement.style.display = 'block';
};

const cargarProductosDesdeAPI = () => {
 
  fetch('URL_DE_TU_API')
      .then(response => response.json()) /
      .then(data => {
          
          const listaProductosAPI = data.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n');
          Swal.fire({
              title: 'Productos desde API',
              text: listaProductosAPI,
              icon: 'info',
              confirmButtonText: 'Aceptar'
          });
      })
      .catch(error => {
          console.error('Error al cargar productos desde la API:', error);
          Swal.fire({
              title: 'Error',
              text: 'Ocurrió un error al cargar los productos desde la API.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
          });
      });
};

const mostrarProductos = async () => {
  const productos = await obtenerProductos();
  const listaProductos = productos.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n');

  Swal.fire({
      title: 'Productos Disponibles',
      text: listaProductos,
      icon: 'info',
      confirmButtonText: 'Aceptar'
  });
};

const buscarMarcas = () => {
  Swal.fire({
      title: 'Buscar Marcas',
      text: 'Ingrese la marca que desea buscar:',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar',
      inputOptions: {
          'Caterpillar': 'Caterpillar',
          'Sandvik': 'Sandvik',
          'Resemin': 'Resemin',
          'Epiroc': 'Epiroc',
      },
      inputPlaceholder: 'Selecciona una marca',
      showCancelButton: true,

      preConfirm: (marca) => {
          switch (marca) {
              case 'Caterpillar':
              case 'Sandvik':
              case 'Resemin':
              case 'Epiroc':
                  return marca;
              default:
                  Swal.showValidationMessage('Debes seleccionar una marca válida');
                  return null;
          }
      }
  }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire({
              title: 'Resultado de Búsqueda',
              text: `Buscando marcas con el nombre: ${result.value}`,
              icon: 'success',
              confirmButtonText: 'Aceptar'
          });
      }
  });
};

const mostrarCarrito = () => {
  Swal.fire({
      title: 'Carrito de Compras',
      text: 'Aquí se mostrará el contenido del carrito.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
  });
};