'use strict';

// const producto = Object.freeze({
//   nombre: 'Mi producto fantástico',
//   cantidad: 2,
//   precio: 300,
//   variaciones: Object.freeze({
//     color: '#f1f1f1',
//     talla: 'S'
//   })
// });

// function agregarACarrito() {
//   return {
//     ...producto,
//     cantidad: producto.cantidad + 1
//   }
// }

// const nuevoProducto = agregarACarrito();
// console.log('producto original');
// console.log(producto);

// console.log('nuevo producto');
// console.log(nuevoProducto);

const producto = Object.freeze({
  nombre: 'Mi producto fantástico',
  cantidad: 2,
  precio: 300,
  variaciones: Object.freeze({
    color: '#f1f1f1',
    talla: 'S'
  })
});

producto.variaciones.color = '#000000';

console.log(producto);