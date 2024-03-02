describe('Search tests', () => {
    beforeEach(() => {
        cy.AccessPage()
    })



    it('Checking the browser back on Search field', () => {

        cy.get('#searchTerm').clear()
        cy.Search()
        cy.get('h2').should('have.class', 'tw-text-2xl')
        cy.go('back');
        cy.get('#searchTerm').should('have.value', 'Tech Challenge') //search term's previous state is stored
    });


    it('Checking for the search field', () => {

        cy.get('.tw-right-3 > .tw-fill-current').click()
        cy.get('#searchTerm').type('Tech')
       cy.Search()
        cy.get('h1').contains('Tech Templates')
       
    });


})

