function findNaughtyStep(original, modified) {
 
    const searchOver = original.length<modified.length ? original.toString() : modified.toString() 
    return original===modified ? '':
    [...new Set([...original.toString(),...modified.toString()])]
    .map(
        step => {
            return (
                [...searchOver]
                    .indexOf(step)<0) && step 
    }).filter(e => e!==false)[0]
}

module.exports = findNaughtyStep

