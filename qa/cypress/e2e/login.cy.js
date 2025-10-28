/// <reference types="cypress" />

context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')
    })

    it('Empty email', () => {
        // Click the login button
        cy.get('button').contains('Login').click()

        // Expect error message
        cy.get('#email').siblings('p').should('have.text', 'Invalid email address')
    })

    it('Empty password', () => {
        // Click the login button
        cy.get('button').contains('Login').click()

        // Expect error message
        cy.get('#password').siblings('p').should('have.text', 'Password is required')
    })

    it('Invalid email', () => {
        // Enter invalid email
        cy.get('#email').type('fake.email@email')

        // Click the login button
        cy.get('button').contains('Login').click()

        // Expect error message
        cy.get('#email').siblings('p').should('have.text', 'Invalid email address')
    })

    it('Invalid password', () => {
        // Enter valid email
        cy.get('#email').type('fake.email@email.com')

        // Enter invalid password
        cy.get('#password').type('wrong')
        
        // Click the login button
        cy.get('button').contains('Login').click()

        // Expect error message
        cy.get('div.text-sm.opacity-90').should('have.text', 'Invalid email or password')
    })

    it('Valid login', () => {
        // Enter valid email
        cy.get('#email').type('test@test.com')

        // Enter valid password
        cy.get('#password').type('password')

        // Click the login button
        cy.get('button').contains('Login').click()

        // Expect url to be success page
        cy.url().should('eq', 'http://localhost:8080/dashboard')

        // Expect success message
        cy.get('button').contains('Logout').siblings('p').should('have.text', 'You have successfully authenticated and can now access the dashboard.')
    })
})
