# nodejs-basics-task-1

## Preparation: 
```
  git clone https://github.com/Nectire/nodejs-basics-task-1.git 
```
```
  cd nodejs-basics-task-1
```
```
  git checkout task-1
```


## npm scripts:

```
    npm run fs:copy
    npm run fs:create
    npm run fs:delete
    npm run fs:list
    npm run fs:read
    npm run fs:rename
    npm run hash:calcHash
    npm run modules:cjsToEsm
    npm run streams:read
    npm run streams:transform
    npm run streams:write
    npm run wt:main
    npm run zip:compress
    npm run zip:decompress
    npm run cp:cp
    npm run cli:args
    npm run cli:env
```
 Pay attention, that for `cli/env.js` you should pass env vars before starting this script.
 
 For bash: `RSS_VAR=value;` for windows powershell - `$env:RSS_VAR="value";` and then call the node.
 
 If some of commands don't work, you can start scripts like `node ./src/fs/copy` from root of repository. 
