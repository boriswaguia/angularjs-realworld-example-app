context('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4000')
    });

    it('should display home screen', () => {
        cy.get('h1.logo-font+p').should('contain', 'A place to share your knowledge.')
    });
})