## Test CommonJS

```shell
npm run start-cjs
```

## Test ESM

Add this to `package.json`:

```json
{
  "type": "module"
}
```

and run:

```shell
npm run start-esm
```

## Test browser

```
npx http-server .
```

and open `http://127.0.0.1:8080` on the browser.
