const texto = 'Este é um curso de github actions,Este é um curso de github actions,Este é um curso de github actions,Este é um curso de github actions,Este é um curso de github actions,Este é um curso de github actions'
describe('Cypress e Github Actions', () => {
  it('Visita o Site', () => {
    cy.visit('../src/index.html')
    cy.title().should('eq','Curso de Cypress + Github Actions')
  })
  it('Preenche os campos de Texto',()=>{
    cy.Campos_Texto()
  })
  it('Seleciona um item do combo - Carro',()=>{
    cy.visit('../src/index.html')
    cy.get('#product').select('carro')
  })
  it('Seleciona um item do combo - Mercado',()=>{
    cy.visit('../src/index.html')
    cy.get('#product').select('mercado')
  })
  it('Seleciona um item do combo - Empresa',()=>{
    cy.visit('../src/index.html')
    cy.get('#product').select('empresa')
  })
  it('Seleciona um item do combo - Aeroporto',()=>{
    cy.visit('../src/index.html')
    cy.get('#product').select('aeroporto')
  })
  it('Seleciona um item do Radio button - RH',()=>{
    cy.visit('../src/index.html')
    cy.get('input[type="radio"][value="rh"]').check()
  })
  it('Seleciona um item do Radio button - Diretoria',()=>{
    cy.visit('../src/index.html')
    cy.get('input[type="radio"][value="diretoria"]').check()
  })
  it('Seleciona um item do Radio button - Operador',()=>{
    cy.visit('../src/index.html')
    cy.get('input[type="radio"][value="operador"]').check()
  })
  it('Seleciona um checkbox - Email',()=>{
    cy.visit('../src/index.html')
    cy.get('#email-checkbox').check()
  })
  it('Seleciona um checkbox - Telefone',()=>{
    cy.visit('../src/index.html')
    cy.get('#phone-checkbox').check()
  })
  it('Seleciona ambos os checkbox - Email e Telefone',()=>{
    cy.visit('../src/index.html')
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
  })
  it('Seleciona ambos os checkbox e desmarca o primeiro',()=>{
    cy.desmarca_primeiro()
  })
  it('Seleciona ambos os checkbox e desmarca o ultimo',()=>{
    cy.desmarca_segundo()
  })
  it('Preenche a caixa de Texto',()=>{
    cy.visit('../src/index.html')
    cy.get('#text-area').type('Este é um curso de github actions')
  })
  it('Preenche a caixa de Texto com texto longo',()=>{
    cy.visit('../src/index.html')
    cy.get('#text-area').type(texto)
  })
  it('Anexa um Arquivo',()=>{
    cy.visit('../src/index.html')
    cy.get('#file-upload').as('fileInput').attachFile('modelo.txt')
  })
  it('Preenche os campos obrigatórios',()=>{
    cy.visit('../src/index.html')
    cy.Campos_Texto()
    cy.get('#phone-checkbox').check()
    cy.get('#text-area').type('Este é um curso de github actions')
    cy.contains("button",'Enviar').click()
  })
})