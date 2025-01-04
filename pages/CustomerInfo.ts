import { Page } from '@playwright/test';

class CustomerInfo {
    static CUSTOMER_EDIT_BUTTON = '.details-footer > .btn-primary';
    static FIRST_NAME_BAR = '#first_name';
    static SAVE_BUTTON = 'div > .btn-success';

    constructor(private page: Page) {}

    // Method to click on edit button
    async clickOnEdit() {
        await this.page.click(CustomerInfo.CUSTOMER_EDIT_BUTTON);
    }

    // Method to change first name
    async changeFirstName(customerFirstName: string) {
        await this.page.fill(CustomerInfo.FIRST_NAME_BAR, customerFirstName);
    }

    // Method to click on save button
    async clickOnSave() {
        await this.page.click(CustomerInfo.SAVE_BUTTON);
    }
}

export default CustomerInfo;