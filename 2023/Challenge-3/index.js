function findNaughtyStep(original, modified) {
  return original === modified
    ? ""
    : original.length < modified.length
    ? [...modified]
        .map((step, index) => {
          return (
            original
              .split("")
              .find(
                (element, index2) => element === step && index2 === index
              ) === undefined && step
          );
        })
        .filter((element) => element)[0]
    : [...original]
        .map((step, index) => {
          return (  
            modified
              .split("")
              .find(
                (element, index2) => element === step && index2 === index
              ) === undefined && step
          );
        })
        .filter((element) => element)[0];
}

module.exports = findNaughtyStep;
