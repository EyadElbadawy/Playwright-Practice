import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 0 : 0,

  workers: process.env.CI ? 4 : 4,

  reporter: process.env.CI ? [['dot'], ['list'], ['html']] : [
    ['list'],
    ['json', { outputFile: 'results.json' }],
    ['html', { open: 'always', outputFolder: 'my-report' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  timeout: 60000, // Increase the default timeout to 60 seconds

  use: {
    launchOptions: {
      args: ["--start-maximized"],
    },
    baseURL: 'https://www.helloagain.com',
    trace: 'retain-on-failure',
    screenshot: 'on',
    video: 'retain-on-failure',
    headless: true
  },

  projects: [
    {
      name: 'chromium',
      use: {
        headless: true,
        viewport: null,
      },
    },
    // {
    //   name: 'Run on fireFox Browser',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
  ],
});