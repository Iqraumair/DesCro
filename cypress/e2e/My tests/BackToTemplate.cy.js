describe('Back to Template button', () => {
    beforeEach(() => {
        cy.AccessPage()
    })
    it('Checking back to all templates', () => {
        cy.get('div.tw-mb-4 > .tw-font-sans > .tw-w-full > .tw-inline-flex').click() //click Back to all templates
        cy.get('h1').contains('Create new designs')

    })
})