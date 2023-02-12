import { test, expect, devices } from '@playwright/test';
import { chromium, firefox, webkit } from '@playwright/test';

/**
 * Specific tests on firefox.
 */
test('Test on Firefox', async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto('https://agiledrop.com');
  expect(page).toBeTruthy();
  await page.screenshot({path: 'ff.png'});
  await browser.close();
});

test('Test on Chromium', async () => {
  const browser = await chromium.launch();

  // Simulate on Iphone 12.
  const mycustomDevices = devices['iPhone 12'];
  const context = await browser.newContext({
    ...mycustomDevices
  });
  // Uncomment line bellow to use iphone12.
  //const page = await context.newPage();
  const page = await browser.newPage();

  await page.goto('https://agiledrop.com');
  expect(page).toBeTruthy();
  await page.screenshot({path: 'chromium_desktop.png'});
  await browser.close();
});

test('Test on Webkit', async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('https://agiledrop.com');
  expect(page).toBeTruthy();
  await page.screenshot({path: 'webkit.png'});
  await browser.close();
});
