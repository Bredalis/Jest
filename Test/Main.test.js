
// Importar modulos

const suma = require("../JS/main.js");

test("Suma 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).toBe(3);
});