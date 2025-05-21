Cypress.Commands.add('Campos_Texto',()=>{
    cy.visit('../src/index.html')
    cy.get('#Name').type('QA Git')
    cy.get('#Job').type('QA Sr')
    cy.get('#email').type('qa@io.com')
    cy.get('#phone').type('11988545635')
})
Cypress.Commands.add('desmarca_primeiro',()=>{
    cy.visit('../src/index.html')
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
    cy.get('#email-checkbox').uncheck()
})
Cypress.Commands.add('desmarca_segundo',()=>{
    cy.visit('../src/index.html')
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
    cy.get('#phone-checkbox').uncheck()
})