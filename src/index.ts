let nota, suma, promedio, contador: number;
suma = 0;

for (let contador: number = 1; contador <= 10; contador++) {
  nota = Number(prompt("Ingrese una nota " + contador + ":"));
  suma += nota;
}
promedio = suma / 10;
console.log("El promedio de la nota es:" + promedio);
