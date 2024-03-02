
Cypress.Commands.add('AccessPage',() => {
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/6ccdee8c-db75-41e3-8209-084e49e2c53b/templatetypes?searchTerm=Tech%20Challenge')

})

Cypress.Commands.add('SwitchLogo', () => {
    cy.get('.tw-flex-none > :nth-child(2) > .tw-font-sans > .tw-w-full > .tw-inline-flex > .tw-my-auto').click()
})


Cypress.Commands.add('Search', () => {
    cy.get('.tw-flex-col > :nth-child(2) > .tw-font-sans').click()
})


Cypress.Commands.add('AccessPage', () => {
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/6ccdee8c-db75-41e3-8209-084e49e2c53b/templatetypes?searchTerm=Tech%20Challenge')

})

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.brandcrowd.com/'); // Visit the login page
    cy.get('.email-input').type(email)
    cy.get('.password-input').type(password)
    cy.get('.tw-relative > div.tw-w-full > .tw-font-sans').click()
  
});