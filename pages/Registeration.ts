import { Page } from '@playwright/test';

class Registration {
    static APPBUILDER_LINK = '.space-x-5 > .flex';
    static COOKIE_BUTTON = '#cc-allow-01';
    static IFRAME = '#hs-form-iframe-0';
    static EMAIL_INPUT = '[name="email"]';
    static COMPANY_INPUT = '[name="0-2/domain"]';
    static CHECKBOX = '[type="checkbox"]';
    static SUBMIT_BUTTON = '[type="submit"]';

    constructor(private page: Page) {}

    // Click on allow cookies if exists
    async clickOnCookies() {
        const cookieButton = this.page.locator(Registration.COOKIE_BUTTON);
        if (await cookieButton.count() > 0) {
            await cookieButton.click({ force: true });
        } else {
            console.log('Cookie consent button not found. Skipping...');
        }
    }

    // Method to navigate to the sign-up page
    async navigateToTryAppBuilder() {
        await this.page.click(Registration.APPBUILDER_LINK);
    }

    // Fill the required info
    async fillSignUpForm(email: string, companyWebsite: string) {
        const iframe = this.page.frameLocator(Registration.IFRAME);
        await iframe.locator(Registration.EMAIL_INPUT).fill(email);
        await iframe.locator(Registration.COMPANY_INPUT).fill(companyWebsite);
        await iframe.locator(Registration.CHECKBOX).check();
        await iframe.locator(Registration.SUBMIT_BUTTON).click();
    }
}

export default Registration;