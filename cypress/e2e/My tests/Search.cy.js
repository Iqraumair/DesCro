describe('Search tests', () => {
    beforeEach(() => {
        cy.AccessPage()
    })



    it('Checking the browser back on Search field', () => {

        cy.get('.tw-right-3 > .tw-fill-current').click()
        cy.Search()
        
        cy.get('h1').contains('Create new designs') // the app when going back on the browser was taking me to the main page
        cy.go('back');
        cy.go('forward')
        cy.get('h1').contains('Create new designs')
    });


     it('Checking for the search field', () => {

        cy.get('.tw-right-3 > .tw-fill-current').click()
        cy.get('#searchTerm').type('Tech')
       cy.Search()
        cy.get('h1').contains('Tech Templates')
       
    }); 


})

