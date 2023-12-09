const manufacture = require("./index");

test(`expect to be ["tren", "oso"]`, () => {
  const gifts = ["tren", "oso", "pelota"];
  const materials = "tronesa";
  expect(manufacture(gifts, materials)).toEqual(["tren", "oso"]);
});

test(`expect to be ["puzzle"]`, () => {
  const gifts = ["juego", "puzzle"];
  const materials = "jlepuz";
  expect(manufacture(gifts, materials)).toEqual(["puzzle"]);
});

test(`expect to be []`, () => {
  const gifts = ["libro", "ps5"];
  const materials = "psli";
  expect(manufacture(gifts, materials)).toEqual([]);
});
