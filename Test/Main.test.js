
// Importar modulos

const  { 
  suma, crearUsuario, obtenerValorNulo, mayorQue, longitud 
} = require("../JS/main.js");

// Testings con diferentes matches

test("Suma 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).toBe(3);
});

// toEqual

test("Compara objetos", () => {
  expect(crearUsuario("Alice")).toEqual({ name: "Alice" });
});

// toBeNull

test("Verifica que es null", () => {
  expect(obtenerValorNulo()).toBeNull();
});

// toBeGreaterThan

test("Verifica que es mayor", () => {
  expect(mayorQue(10, 5)).toBeGreaterThan(10);
});

// toBeGreaterThanOrEqual

test("Verifica que es mayor o igual", () => {
  expect(10).toBeGreaterThanOrEqual(10);
});

// toHaveLength

test("Verifica la longitud", () => {
  expect(longitud("Hello")).toHaveLength(5);
});