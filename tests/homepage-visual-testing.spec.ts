/*
Visual testing with playwright.
*/
import { test, expect } from '@playwright/test';

test.describe('Visual regression testing for AgileDrop homepage', () => {

  test('AgileDrop homepage screenshot', async ({page}) => {
    await page.goto('https://www.agiledrop.com/');
    await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
  });
});
