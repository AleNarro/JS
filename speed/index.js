//function calcularVelocidad(distancia, tiempo) {
    //const distancia = 20
    //const tiempo = 2
    //const velocidad = distancia / tiempo;
    //console.log("La velocidad del móvil es " + velocidad);
    //}

const calcularVelocidad = (distancia, tiempo) => {
const velocidad = distancia / tiempo;
	return velocidad
}
    
const velocidad1 = calcularVelocidad(10,2);
console.log("La velocidad de Juana es " + velocidad1);

const velocidad2 = calcularVelocidad(50,2);
console.log("La velocidad de Josefa es " + velocidad2);

const velocidad3 = calcularVelocidad(80,2);
console.log("La velocidad de Kenny es " + velocidad3);

//calcularVelocidad();
//calcularVelocidad();
//calcularVelocidad();

//calcularVelocidad(10,2);
//calcularVelocidad(100,2);
//calcularVelocidad(75,3);