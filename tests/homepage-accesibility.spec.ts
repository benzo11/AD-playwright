/*
Test the accesbility on Agiledrop.com page.
*/
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Acccesbility on home page', () => {
  // Before each page lets go on the homepage.
  // This is defined in playwright.config.ts as baseUrl parameter.
  test.beforeEach(async({page}) => {
    await page.goto('/');
  });

  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should not have any automatically detectable WCAG issues', async ({ page }, testInfo) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

      // To the test attach a json file with the informations about failed tests.
      // This is pretty cool because you can download the file and import it in some better tool to view it.
      await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
      });
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should not have any accessibility violations outside of elements with known issues', async ({ page }) => {

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('#element-with-known-issue')
      .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

});