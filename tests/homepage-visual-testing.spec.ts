/*
Visual testing with playwright.
*/
import { test, expect } from '@playwright/test';

test.describe('Visual regression testing for AgileDrop homepage', () => {

  test('AgileDrop homepage screenshot', async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot();
  });


});
