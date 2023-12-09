function manufacture(gifts, materials) {
  let canMade = gifts.map((gift) => {
    return (
      gift.split("").every((element) => materials.split("").indexOf(element)>=0 ) &&
      gift
    )
  }).filter(gift => gift!==false);;
  return canMade
}

module.exports = manufacture