describe('Upgrade Account tests', () => {
    beforeEach(() => {
        cy.AccessPage()
    })



    it('Checking the values on Upgrade account page', () => {

        cy.get('.tw-mr-6 > div > .tw-font-sans').contains('Upgrade Account').click()
        cy.get('h2').contains('Checkout')
        cy.get("[type='radio']").eq(2).should('be.checked') //annually radio button
      

        cy.get(':nth-child(1) > :nth-child(2) > label > [type="radio"]').check() //business radio button


        cy.get('.tw-text-2xl > .notranslate').contains('60.00')

        cy.get(':nth-child(3) > label > [type="radio"]').check({ force: true }) //personal radio button
        cy.get('.tw-text-2xl > .notranslate').contains('72.00')

        cy.get('.tw-mr-2 > .tw-text-sm > [type="radio"]').check({ force: true }) //monthly-personal radio button
        cy.get('.tw-text-2xl > .notranslate').contains('10.80')


        cy.get(':nth-child(1) > :nth-child(2) > label > [type="radio"]').check({ force: true }) //business
        cy.get('.tw-text-2xl > .notranslate').contains('9.00')

    });

})

   