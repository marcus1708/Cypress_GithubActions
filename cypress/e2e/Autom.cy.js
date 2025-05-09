describe('Autom do Site', () => {
  it.only('Visita o site', () => {
    cy.visit('../src/index.html')
    cy.contains("button",'Enviar').click()
  })
  it('Preenche os campos de Texto',()=>{
    cy.visit('../src/index.html')
    cy.get('#Name').type('QA Teste')
    cy.get('#Job').type('QA')
    cy.get('#email').type('qa@io.com')
    cy.get('#phone').type('11988888888')
    cy.get('#text-area').type('Teste de Campos de Texto') 
  })
  it('Preenche o combo Produto',()=>{
    cy.visit('../src/index.html')
    cy.get('#product').select('mercado')
  })
  it('Preenche o radio button',()=>{
    cy.visit('../src/index.html')
    cy.get('input[type="radio"][value="diretoria"]')
    .each(function($radio){
    cy.wrap($radio).check()})  
  })
  it('Seleciona o checkbox',()=>{
    cy.visit('../src/index.html')
    cy.get('#phone-checkbox').check()  
  })
  it('Seleciona o checkbox',()=>{
    cy.visit('../src/index.html')
    cy.get('#phone-checkbox').check()  
  })
  it('Preenche a caixa de texto',()=>{
    cy.visit('../src/index.html')
    cy.get('#text-area').type('Este é um teste automatizado')
  })
  it('Anexa um arquivo txt',()=>{
    cy.visit('../src/index.html')
    cy.get('#file-upload')
    .as('fileInput')
    .attachFile('modelo.txt')  
  })
  it('Preenche os campos obrigatórios e clica em Enviar',()=>{
    cy.visit('../src/index.html')
    cy.get('#Name').type('QA Teste')
    cy.get('#Job').type('QA')
    cy.get('#phone').type('11988888888')
    cy.get('#phone-checkbox').check()  
    cy.get('#text-area').type('Este é um teste automatizado')
    cy.contains("button",'Enviar').click()  
  })
  it('Preenche todos os campos e clica em Enviar', () => {
    cy.visit('../src/index.html')
    cy.get('#Name').type('QA Teste')
    cy.get('#Job').type('QA')
    cy.get('#email').type('qa@io.com')
    cy.get('#phone').type('11988888888')
    cy.get('#product').select('mercado')
    cy.get('input[type="radio"][value="diretoria"]')
        .each(function($radio){
        cy.wrap($radio).check()})
    cy.get('#phone-checkbox').check()   
    cy.get('#text-area').type('Este é um teste automatizado')   
    cy.get('#file-upload')
      .as('fileInput')
      .attachFile('modelo.txt')      
    cy.contains("button",'Enviar').click()  
  })
})