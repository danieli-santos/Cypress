describe('Cadastro', () => {
  it('Cenario 1', () => {
    //- Acesse https://www.amazon.com.br/
    cy.visit('https://www.amazon.com.br/')  
    //- Acesse a página para criar uma nova conta
    cy.contains('Olá, faça seu login').click()
    cy.contains('Fazer login').should('have.text', '\n            Fazer login\n          ')
    cy.get('[id="createAccountSubmit"]').click()
    
    //- Preencha os campos
    cy.contains('Criar conta').should('have.text', '\n            Criar conta\n          ')
    cy.get('[type = text]').type('Danieli Santos')
    cy.get('#ap_email').type('12999999999')
    cy.get('[id="ap_password"]').type('993594@D')
    cy.get('[name =passwordCheck]').type('993594@D')
    cy.get('span').contains('Continuar').should('have.text', 'Continuar')
  })
})