import { test, expect } from '@playwright/test';
import Registration from '../pages/Registeration';
import AppBuilder from '../pages/AppBuilder';
import CustomerInfo from '../pages/CustomerInfo';

test.describe('E2E Testing for the Website', () => {
  let data: any;

  test.beforeAll(async () => {
    // Load test data
    data = require('../testData/TestData.json');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
  });

  test('Edit customer first name', async ({ page }) => {
    const registeration = new Registration(page);
    const appBuilder = new AppBuilder(page);
    const customerInfo = new CustomerInfo(page);

    // Ensure the correct website URL
    await expect(page).toHaveURL("https://www.helloagain.com/en");

    // Click on allow cookies
    await registeration.clickOnCookies();

    // Navigate to the signup page
    await registeration.navigateToTryAppBuilder();

    // Fill the info
    await registeration.fillSignUpForm(data.email, data.companyWebsite);

    // Navigate to the app builder
    await appBuilder.navigateToAppBuilder();

    // Click on Continue button
    await appBuilder.clickOnContinue();

    // Click on Dashboard button
    await appBuilder.clickOnDashboard();

    // Click on Customers Tab
    await appBuilder.clickOnCustomers();

    // Click on Customers button
    await appBuilder.clickOnCustomersButton();

    // Assert on customer email
    await appBuilder.assertFirstCustomerEmail(data.customerEmail);

    // Click on customer info
    await appBuilder.clickOnCustomerInfo();

    // Click on edit
    await customerInfo.clickOnEdit();

    // Change customer first name
    await customerInfo.changeFirstName(data.customerFirstName);

    // Click on save button
    await customerInfo.clickOnSave();

    // Click on Customers button
    await appBuilder.clickOnCustomersButton();

    // Assert on customer new name
    await appBuilder.assertFirstCustomerNewName(data.customerNewName);
  });
});