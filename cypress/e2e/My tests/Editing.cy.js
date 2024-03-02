describe('Edit post', () => {
    beforeEach(() => {
        cy.AccessPage()
    })
    it('Checking the edit button', () => {

        cy.get('.masonry-wall > :nth-child(1) > :nth-child(1)').contains('Edit').click() //click edit
     
       cy.get('[shortcut-key="r"] > .tw-border-0 > .tw-w-full > .tw-inline-flex').contains ('Reset')

        cy.get('.tw-my-auto').contains('Back to purchased logo').click() //click back to purchased logo
        cy.login('tech-challenge@iqra.com', 'Challenge1')
        cy.get('.secondary > .tw-flex').contains('Or Browse Logos')
        
    })
    

    it('View Collection button', () => {

        cy.get('.masonry-wall > :nth-child(1) > :nth-child(1)').contains('View Collection').click() //click View Collection
        cy.get('.tw-flex-col > .tw-text-left').contains('Select a design type')
        cy.get('.tw-pb-0 > .tw-bg-black > .modal > .tw-translate-y-4 > .tw-absolute > div').click() //click X
        cy.get('h1').contains('Tech Challenge Template') 
        
    })


})


