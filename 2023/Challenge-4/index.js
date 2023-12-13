function decode(message) {
  // nesecito mover los strings
    const newMessage = [...message]
  return [...message].filter((word) => word === "(").length < 2
    ? "no nesting"
    : [...message].map((word, index, arr) => {
        return word === "("
          ? arr.slice(arr.indexOf(")"), arr.lastIndexOf(")")).reverse().join('')
            : word === ")"
          ? arr.slice(arr.indexOf("("), arr.lastIndexOf("(")).reverse().join('')
            : word;
      })
      .filter(word => word!=='(')
      .filter(word => word!==')')
      .join('');
}

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
