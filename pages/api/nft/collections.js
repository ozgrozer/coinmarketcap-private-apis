import { chromium } from 'playwright-chromium'

const baseApiUrl = 'https://api.coinmarketcap.com'

export default async (req, res) => {
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
    const apiResult = JSON.parse(bodyHtml.replace(/<[^>]*>/g, ''))

    await browser.close()

    res.json(apiResult)
  } catch (err) {
    res.json({ error_message: err.message })
  }
}
