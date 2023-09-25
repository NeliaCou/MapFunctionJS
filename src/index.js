const animals = [
  { name: "Hector", species: "Beaver" },
  { name: "Edouard", species: "Duck" },
  { name: "José", species: "Boar" },
  { name: "Charlotte", species: "Groundhog" },
  { name: "Mireille", species: "Bee" },
  { name: "Leon", species: "Hornet" },
  { name: "Fedor", species: "Pig" }
];

const oneLineAnimals = animals.map(function (animal) {
  return `${animal.name} the ${animal.species}`;
});

console.log(oneLineAnimals);
