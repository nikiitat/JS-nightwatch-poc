module.exports = {
    tags: ['testcase3'],
    'Login with a user': function (browser) {
        browser
        .url('http://localhost/litecart/en/')
        .waitForElementVisible('body', 1000)
        .setValue('#box-account-login > div > form > table > tbody > tr:nth-child(1) > td > input[type="text"]','micoach36@mailinator.com')
        .setValue('#box-account-login > div > form > table > tbody > tr:nth-child(2) > td > input[type="password"]','Magic123')
        .click('#box-account-login > div > form > table > tbody > tr:nth-child(4) > td > span > button:nth-child(1)')
        .pause(3000)
        .end();
    }
}