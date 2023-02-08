/*
Test the accesbility on Agiledrop.com page.
*/
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';


test.describe('Acccesbility on home page', () => {
  test.beforeEach(async({page}) => {
    await page.goto('/');
  });
  

  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should not have any automatically detectable WCAG issues', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should not have any accessibility violations outside of elements with known issues', async ({ page }) => {

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('#element-with-known-issue')
      .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

});