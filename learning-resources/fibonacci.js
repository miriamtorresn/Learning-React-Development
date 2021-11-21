/**
 * 
 * Pseudo Código
 */

// Función
  // Declarar un array
  // Mientras que el último elemento del array sea menor a 89
    // Si no existe ningun elemento en array
      // Se agrega 0 al array
    // Si el ultimo elemento en el array es 0
      // Se agrega 1 al array
    // Si el ultimo elemento en el array es diferente a 0
      // Obtener el penúltimo elemento del array
      // El resultado de la suma del último y penúltimo es el siguiente elemento en el array

  // Regresar array que contiene = 0 1 1 2 3 5 8 13 21 34 55 89









/**
 * For Loop
 */
// const fibonacci = () => {
//   const series = [];
//   let last = 0;
  
//   for (let i = 0; last < 89; i ++) {
//     // if is the very first time
//     if (i === 0) {
//       // push 0
//       series.push(0);
//     } else {
//       // If last item in array is 0
//       if (last === 0) {
//         // If last is 0 the next should be 1
//         series.push(1);
//       } else {
//         // getting prev last number
//         const prevlast = series[series.length - 2];        
//         // Push the sum of last number and prev last
//         series.push(last + prevlast);
//       }
//     }
//     // Updating last item in the array
//     last = series[series.length - 1];
//   }
//   return series;
// };

// const fibonnacciSeries = fibonacci();
// console.log(fibonnacciSeries);








// /**
//  * Do While
//  */

// const series = [];

// const fibonacci = () => {
//   let last;
//   do {
//     // If any item
//     if (series.length === 0 ) {
//       // Initialize with 0
//       series.push(0);
//     } else {
//       if (last === 0) {
//         // If last is 0 the next should be 1
//         series.push(1);
//       } else {
//         // getting prev last number
//         const prevlast = series[series.length - 2];
//         // Push the sum of last number and prev last
//         series.push(last + prevlast);
//       }
//     }
//     // Updating last value
//     last = series[series.length - 1];
//   } while (last < 89); 
//  };
 
//  fibonacci();
 
//  console.log(series);







/**
 * Recursive Function Fibonacci
 */

// 0 1 1 2 3 5 8 13 21 34 55 89
const series = [];

const fibonacci = () => {
    // If any item
    if (series.length === 0 ) {
        // Initialize with 0
        series.push(0);
        fibonacci();
    } else {
        // get last item in array
        const last = series[series.length - 1];
        // if last item is 0
        if (last === 0) {
            // the next should be 1
            series.push(1);
            fibonacci();
        } else {
            // Stopping loop in somewhere
            if (last === 89) return;

            // getting prev last number
            const prevlast = series[series.length - 2];
            // Push the sum of last number and prev last
            series.push(last + prevlast);
            fibonacci();
        }
    }    
};

fibonacci();

console.log(series);







/**
 * Class Fibonacci
 */

// class Fibonacci {
//   series = [];

//   addtoSeries() {
//     if (this.series.length === 0 ) {
//       // Initialize with 0
//       this.series.push(0);
//       this.addtoSeries();
//     } else {
//       // get last item in array
//       const last = this.series[this.series.length - 1];
//       // if last item is 0
//       if (last === 0) {
//         // the next should be 1
//         this.series.push(1);
//         this.addtoSeries();
//       } else {
//         // Stopping loop in somewhere
//         if (last >= 89) return;
//         // Push the sum of last number and prev last
//         const prevlast = this.series[this.series.length - 2];
//         this.series.push(last + prevlast);
//         this.addtoSeries();
//       }
//     } 
//   }
// }

// const fibonacciRunner = new Fibonacci();
// fibonacciRunner.addtoSeries();

// console.log(fibonacciRunner.series);