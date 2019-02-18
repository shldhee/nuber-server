# Nuber Server

- 19/02/15

## 막혔던 곳
- package.json, nodemon
    - `ts, graphql` 작성 시 공백 없어야 된다. `ts,graphql`로 적어야 작동
    `"scripts" : {
        "dev": "cd src && nodemon --exec ts-node index.ts -e ts,graphql"
    }`

### 번외
- `nvm is not compatible with the npm config "prefix" option: currently set to "/usr/local" Run "npm config delete prefix" or "nvm use --delete-prefix v6.11.1 --silent" to unset it.`
  - `~/.nvm` 폴더 삭제