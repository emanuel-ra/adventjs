function manufacture(gifts, materials) {
  let canMade = gifts.map((gift) => {
    return (
      gift.split("").every((element) => materials.split("").indexOf(element) ) &&
      gift
    );
  });

  return [];
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";
manufacture(gifts, materials); // ["tren", "oso"]
