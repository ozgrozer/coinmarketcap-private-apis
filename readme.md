# coinmarketcap-private-apis

Convert CoinMarketCap's private APIs to public APIs

## Installation

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
http://your-ip:1360/
```

## Usage

Make a post request to your IP address with your bearer token
```js
const axios = require('axios')

const run = async () => {
  const collections = await axios({
    data: {
      start: '0',
      period: '4',
      limit: '100',
      desc: 'true',
      sort: 'volume'
    },
    method: 'post',
    url: 'http://your-ip:1360/api/nft/collections',
    headers: {
      Authorization: 'Bearer BEARER_TOKEN'
    }
  })

  console.log(collections.data)
}

run()
```

Results would be
```js
{
  success: true,
  coinmarketcap: {
    data: { count: '1901', collections: [Array], blockChains: [Array] },
    status: {
      timestamp: '2022-03-06T19:45:08.867Z',
      error_code: '0',
      error_message: 'SUCCESS',
      elapsed: '89',
      credit_count: 0
    }
  }
}
```
