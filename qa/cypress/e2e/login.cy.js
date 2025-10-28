/// <reference types="cypress" />

context('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://localhost:8080')
    })

    it('Empty email', () => {
        // Click the login button
        cy.get('').click()

        // Expect error message
        cy.get('').should('have.text', '')
    })

    it('Empty password', () => {
        // Click the login button
        cy.get('').click()

        // Expect error message
        cy.get('').should('have.text', '')
    })

    it('Invalid email', () => {
        // Enter invalid email
        cy.get('').type('slow.typing@email.com', { delay: 100 })

        // Click the login button
        cy.get('').click()

        // Expect error message
        cy.get('').should('have.text', '')
    })

    it('Invalid password', () => {
        // Enter valid email
        cy.get('').type('slow.typing@email.com', { delay: 100 })

        // Enter invalid password
        cy.get('').type('slow.typing@email.com', { delay: 100 })
        
        // Click the login button
        cy.get('').click()

        // Expect error message
        cy.get('').should('have.text', '')
    })

    it('Valid login', () => {
        // Enter valid email
        cy.get('').type('test@test.com', { delay: 100 })

        // Enter valid password
        cy.get('').type('password', { delay: 100 })

        // Click the login button
        cy.get('').click()

        // Expect error message
        cy.get('').should('have.text', '')
    })
})
