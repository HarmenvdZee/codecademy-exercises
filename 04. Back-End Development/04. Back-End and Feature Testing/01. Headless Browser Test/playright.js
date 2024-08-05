const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.goal.com/en-ng");
  const title = await page.title();
  console.log("Page title:", title);

  await browser.close();
}

main();
