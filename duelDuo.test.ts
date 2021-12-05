
import { Builder, Capabilities, By, Button } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

// test('Random computer duo bots are not the same as user bots', async () => {
//     await driver.sleep(3000);

//     const allBtn = await driver.findElement(By.id("see-all"));
//     await button.click();

//     const
// })

// test('See All Bots always displays the Self-Aware Garbage Android', async () => {
//     await driver.sleep(3000);

//     const 
// })