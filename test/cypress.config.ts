import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        blockHosts: ['**google**', '**static**'],
        chromeWebSecurity: false,
        defaultCommandTimeout: 3000,
        fixturesFolder: false,
        requestTimeout: 10000,
        screenshotsFolder: 'screenshots',
        specPattern: 'cypress/specs/*.cy.ts',
        supportFile: 'cypress/support/e2e.ts',
        video: false,
        viewportHeight: 1200,
        viewportWidth: 1900,
        baseUrl: process.env['URL'],

        setupNodeEvents(on, config) {
            on('task', {
                log(message: any) {
                    console.log(message);
                    return null;
                },
            });
            const file = config.env.configFile || 'default';
            return getConfigurationByFile(file);
        },
    },
});


const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file: any) {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);

    return fs.readJson(pathToConfigFile);
}
