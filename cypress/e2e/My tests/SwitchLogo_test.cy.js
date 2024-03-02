describe('Switch Logo tests', () => {
    beforeEach(() => {
        cy.AccessPage()
        cy.SwitchLogo()
    })
    it('Cancel Switch logo', () => {
       
       
        cy.get('.tw-border-secondary-500').eq(1).click() //unique class name
        cy.get('h1').contains('Tech Challenge Template') //click cancel
    });


    it('Continue Switch logo', () => {
     
    
        cy.get(':nth-child(1) > .c-logo-selector-item__tile > .tw-m-0').click()
       
        cy.get('.modal-content > .tw-p-4 > :nth-child(2) > .tw-font-sans').click() //click continue
        cy.get('h1').contains('Create new designs')
    });
    
})