# coinmarketcap-private-apis

Convert CoinMarketCap's private APIs to public APIs

## Usage

Clone repo
```bash
git clone https://github.com/ozgrozer/coinmarketcap-private-apis.git
```

Change directory
```bash
cd coinmarketcap-private-apis
```

Copy `.env.example` as `.env`
```bash
cp .env.example .env
```

Open `.env` and paste your bearer token into `BEARER_TOKEN` variable
```bash
vim .env
```

Install dependencies
```bash
yarn install
```

Build the app
```bash
yarn build
```

Install `PM2` if you don't have
```bash
yarn global add pm2
```

Start the app with `PM2`
```bash
pm2 start pm2.json
```

APIs should be working on
```bash
http://your-ip:1360/api/nft/collections
```
