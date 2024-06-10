
let data;

beforeAll(() => {
  console.log("Se ejecuta una vez antes de todas las pruebas");
});

afterAll(() => {
  console.log("Se ejecuta una vez después de todas las pruebas");
});

beforeEach(() => {
  data = { value: 42 };
  console.log("Se ejecuta antes de cada prueba");
});

afterEach(() => {
  data = null;
  console.log("Se ejecuta después de cada prueba");
});

test("Verifica el valor inicial", () => {
  expect(data.value).toBe(42);
  console.log("Prueba 1 ejecutada");
});

test("Modifica el valor", () => {
  data.value = 50;
  expect(data.value).toBe(50);
  console.log("Prueba 2 ejecutada");
});