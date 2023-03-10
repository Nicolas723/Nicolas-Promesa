/*const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (valor, Numproductos) => {
    console.log(`Total de la compra: ${valor}, Numero de productos:   3 ${Numproductos}`);
});

emisorProductos.emit('compra', 1000, 3);*/


/*let promesaCumplida = Boolean(Math.round(Math.random()));
console.log(promesaCumplida);
if (promesaCumplida == false) {
    promesaCumplida = true;
}

const miPromesa = new Promise((resolve, reject)=> {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('cara');
        } else {
            reject('sello');
        }
    }, 1);
    
});

miPromesa.then((valor) => {
        console.log(valor);
    }).catch((error) => {
        console.log(error);
    });

*/

let edad =  
console.log(edad);

    const miPromesa = new Promise((resolve, reject)=> {
        setTimeout(() => {
            if (edad>=18) {
                resolve('Entra');
            } else {
                reject('No entra');
            }
        }, 1);
        
    });
    
    miPromesa.then((valor) => {
            console.log(valor);
        }).catch((error) => {
            console.log(error);
        });
    