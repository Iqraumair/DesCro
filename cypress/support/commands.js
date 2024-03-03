
Cypress.Commands.add('AccessPage',() => {
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/6ccdee8c-db75-41e3-8209-084e49e2c53b/templatetypes?searchTerm=Tech%20Challenge')

})

Cypress.Commands.add('SwitchLogo', () => {
    cy.get('.tw-flex-none > :nth-child(2) > .tw-font-sans > .tw-w-full > .tw-inline-flex > .tw-my-auto').click()
})


Cypress.Commands.add('Search', () => {
    cy.get('.tw-flex-col > :nth-child(2) > .tw-font-sans > .tw-w-full > .tw-inline-flex > .tw-my-auto')
        .click()
})


Cypress.Commands.add('AccessPage', () => {
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/6ccdee8c-db75-41e3-8209-084e49e2c53b/templatetypes?searchTerm=Tech%20Challenge')

})

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.brandcrowd.com/identity/account/signin?initialUserName=tech-challenge@iqra.com&returnUrl=/maker/mylogos/drafts/6ccdee8c-db75-41e3-8209-084e49e2c53b'); // Visit the login page

    cy.get('#signin > .email-input').then(($emailInput) => {
        if ($emailInput.val().includes('tech-challenge@iqra.com')) {
            cy.get('.password-input').type(password);
        } else {
           cy.get('#signin > .email-input').type('tech-challenge@iqra.com');
            cy.get('.password-input').type(password);
        }
    });

    cy.get('.tw-relative > div.tw-w-full > .tw-font-sans').click();
});

Cypress.Commands.add('BackToTemplates', () => {

    cy.get('div.tw-mb-4 > .tw-font-sans > .tw-w-full > .tw-inline-flex').click()
})