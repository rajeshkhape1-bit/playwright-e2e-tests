import { test, expect } from '@playwright/test';

test.only('test', {tag: "@smoke"}, async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await expect(page.locator('h1')).toContainText('CURA Healthcare Service');
  await page.getByRole('heading', { name: 'We Care About Your Health' });
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.locator('#login')).toContainText('Please login to make appointment.');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByLabel('Password').press('Tab');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');
  await page.getByRole('heading', { name: 'We Care About Your Health' }).click();

  test('test', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('heading', { name: 'We Care About Your Health' }).click();
});
});