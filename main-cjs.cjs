const sdk = require("@alephium/sdk");

console.log("hello, CJS world");

const explorerClient = new sdk.ExplorerClient({ baseUrl: "https://testnet-backend.alephium.org" });
explorerClient
  .getAddressDetails("125orKZtvWeoWqbrHy7vHZQvpLfAaGkU5Tn91KzZqQzot")
  .then((result) => console.log(result.data));

fetch("https://api.coingecko.com/api/v3/simple/price?ids=alephium&vs_currencies=usd")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
