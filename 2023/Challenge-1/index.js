const findFirstRepeated = (gifts) => {  
  return parseInt(gifts.filter((element,index) => {
    return (gifts.indexOf(element) !== index) && element
  })[0]) || -1  
}


module.exports = findFirstRepeated