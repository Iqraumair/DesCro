


describe('checkboxes tests', () => {
    beforeEach(() => {
        cy.AccessPage()
    })


  
    it('Checking checkboxes are checked', () => {
       
        cy.get(':checkbox').each(($check) => {
            cy.wrap($check).check({ force: true });
        });

        cy.get(':checkbox').each(($check) => {
            cy.wrap($check).should('be.checked');
        });
    });

     
    it('Checks for clear all', () => {

        cy.get('.tw-pb-4 > .tw-cursor-pointer').click()
        cy.get(':checkbox').each(($check) => {
            cy.wrap($check).should('not.be.checked');
        });

    });

    

    it('Checks the state of the checkboxes after hitting back on browser ', () => {
      
        cy.go('back');
        // the page doesnt store the state of the checkboxes so im assuming it is a functionality
        cy.get(':checkbox').each(($check) => {
            cy.wrap($check).should('not.be.checked');
        });


    });

})