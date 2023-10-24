Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('teste com o Juliano', () => {
    it('testando web de escolha', () => {
        cy.visit("https://www.linkedin.com/home")
        cy.get('#session_key').type("bleandroc@gmail.com")
        cy.get('#session_password').type("LAU20dl@")
        cy.get('.justify-between > .btn-md').click()
        cy.wait(5000)
        cy.contains('Bruno Chaves Leandro').should('be.visible')     
    });
});