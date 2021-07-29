module.exports.getArgs = (preArgs = false) => {
    switch(preArgs)
    {
        case true:
            return getArgsArray()
            break;
        case false:
            const a = getArgsArray()
            a.shift()
            a.shift()
            return a
            break;
        default:
            throw new Error('preArgs is not a boolean.')
            return
            break;
    }
}