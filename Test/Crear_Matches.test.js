
// Match que espera un numero igual a 2

expect.extend({
	toBeEqualTwo(received) {

		if (received !== 2) {

			return {
				pass: false,
				message: () => `Expected ${received} to be number 2`,
			};
		} 

		return {
			pass: true,
		};
	},
});

test("Numero 2", () => {
	expect(2).toBeEqualTwo();
});