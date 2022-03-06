import { chromium } from 'playwright-chromium'

import withCors from '@components/middlewares/withCors'
import withBearerToken from '@components/middlewares/withBearerToken'

const baseApiUrl = 'https://api.coinmarketcap.com'

const nftCollections = async (req, res) => {
  try {
    const {
      start = '0',
      period = '4',
      limit = '100',
      desc = 'true',
      sort = 'volume'
    } = req.body

    const browser = await chromium.launch({ chromiumSandbox: false })

    const page = await browser.newPage()
    await page.goto(`${baseApiUrl}/data-api/v3/nft/collections?start=${start}&limit=${limit}&sort=${sort}&desc=${desc}&period=${period}`)

    const bodyHtml = await page.evaluate(() => document.body.innerHTML)
    const coinmarketcap = JSON.parse(bodyHtml.replace(/<[^>]*>/g, ''))

    await browser.close()

    res.json({ status: true, coinmarketcap })
  } catch (err) {
    res.json({ status: false, error: err.message })
  }
}

export default withCors(withBearerToken(nftCollections))
