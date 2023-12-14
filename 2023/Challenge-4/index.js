function decode(message) {
    
  const nested = ({ message }) => {   
    return ''
  };
  const noNested = ({ message }) => {   
    return ''
  };

  return [...message].filter((word) => word === "(").length < 2
    ? noNested({ message })
    : nested({ message });
}

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
