# Currency Converter Plugin

This plugin designed to provide currency conversion functionality using [Exchangerates API](https://exchangeratesapi.io/). The plugin enables users to convert an amount from one currency to another.

# Installation
To install the Currency Converter Extism Plugin, follow these steps:

1. Clone this repository or download the plugin files to your local machine.
2. Open a terminal or command prompt and navigate to the directory containing the plugin files.
3. Compile the plugin using the Extism CLI by executing the following command:

```bash
extism-js convert.js -i convert.d.ts -o convert.wasm
```

This command will compile the `convert.js` file, utilizing the `convert.d.ts` TypeScript interface file, and generate a WebAssembly module named `convert.wasm`.

# Usage

To utilize the Currency Converter Extism Plugin, invoke the `run` function with the appropriate input parameters. The function expects an input JSON object containing the following properties:

- `from` : The three-letter currency code representing the currency to convert from.
- `to` : The three-letter currency code representing the currency to convert to.
- `amount` : The amount of currency to be converted.

Here's an example of how to call the `run` function using the Extism CLI:
```bash
extism call convert.wasm run --input='{"from":"GBP","to":"JPY","amount":25}' --wasi --allow-host='api.exchangeratesapi.io'
```
This command will convert 25 GBP to JPY using the latest exchange rates from the Exchangerates API.

Response :
```bash
4999.13825
```
