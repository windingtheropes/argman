# argman
simple and lightweight node js module to load command line arguments.

# usage

run `argman.getArgs()` to get the command line arguments. By default, argman will not return any arguments like the script path or node path ["path/to/node.exe", "path/to/index.js"]. To get these arguments, pass preArgs as true.

```
const argman = require("path/to/argman")
const args = argman.getArgs() //node index.js hello | only get hello
const allArgs = argman.getArgs(true) //node index.js hello | gets path/to/node.exe path/to/index.js hello
```
