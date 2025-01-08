import { Page, expect } from '@playwright/test';

class AppBuilder {
    static APP_BUILDER = '.absolute.w-full.h-full.z-10';
    static CONTINUE_BUTTON = '.footer-wrapper > .primary';
    static DASHBOARD_BUTTON = '.footer-wrapper > .secondary';
    static CUSTOMERS_TAB = ':nth-child(4) > .treeview-container > .header-contacts';
    static CUSTOMERS_BUTTON = 'a[href="#/users"]';
    static FIRST_CUSTOMER_EMAIL = 'tbody > :nth-child(1) > :nth-child(5)';
    static FIRST_CUSTOMER_NAME = 'tbody > :nth-child(1) > :nth-child(2)';
    static FIRST_CUSTOMER_INFO = ':nth-child(1) > :nth-child(12) > .btn';

    constructor(private page: Page) {}

    // Method to navigate to the app builder
    async navigateToAppBuilder() {
        await this.page.locator(AppBuilder.APP_BUILDER).evaluate(node => node.removeAttribute('target'));
        await this.page.click(AppBuilder.APP_BUILDER);
    }

    // Method to click on continue button
    async clickOnContinue() {
        await this.page.locator(AppBuilder.CONTINUE_BUTTON).waitFor({ state: 'visible' });
        await this.page.click(AppBuilder.CONTINUE_BUTTON);
    }

    // Method to click on dashboard button
    async clickOnDashboard() {
        await this.page.locator(AppBuilder.DASHBOARD_BUTTON).waitFor({ state: 'visible' });
        await this.page.click(AppBuilder.DASHBOARD_BUTTON);
    }

    // Method to click on customers tab
    async clickOnCustomers() {
        await this.page.locator(AppBuilder.CUSTOMERS_TAB).waitFor({ state: 'visible' });
        await this.page.click(AppBuilder.CUSTOMERS_TAB);
    }

    // Method to click on customers button
    async clickOnCustomersButton() {
        await this.page.locator(AppBuilder.CUSTOMERS_BUTTON).waitFor({ state: 'visible' });
        await this.page.click(AppBuilder.CUSTOMERS_BUTTON);
    }

    // Method to assert on customer email
    async assertFirstCustomerEmail(customerEmail: string) {
        const email = await this.page.locator(AppBuilder.FIRST_CUSTOMER_EMAIL).textContent();
        expect(email).toBe(customerEmail);
    }

    // Method to click on edit first customer
    async clickOnCustomerInfo() {
        await this.page.click(AppBuilder.FIRST_CUSTOMER_INFO);
    }

    // Method to assert on customer new name
    async assertFirstCustomerNewName(customerNewName: string) {
        const name = await this.page.locator(AppBuilder.FIRST_CUSTOMER_NAME).textContent();
        expect(name).toBe(customerNewName);
    }
}

export default AppBuilder;