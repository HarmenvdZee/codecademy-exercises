const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const chromeOptions = new chrome.Options();
chromeOptions.addArguments("--headless");

async function createDriver() {
  return await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
}

async function main() {
  const driver = await createDriver();

  try {
    await driver.get("https://www.goal.com/en-ng");
    const title = await driver.getTitle();
    console.log("Page title:", title);
  } finally {
    await driver.quit();
  }
}

main();
