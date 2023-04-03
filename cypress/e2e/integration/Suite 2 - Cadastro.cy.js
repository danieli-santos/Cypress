import {cadastro} from '../utils'
describe('Cadastro', () => {

  beforeEach(() => {
        //- Acesse https://www.amazon.com.br/
        cy.visit('https://www.amazon.com.br/')
    
        //- Acesse a página para criar uma nova conta
        cy.contains('Olá, faça seu login').click()
        cy.contains('Fazer login').should('have.text', '\n            Fazer login\n          ')
        cy.get('[id="createAccountSubmit"]').click()
        cy.contains('Criar conta').should('have.text', '\n            Criar conta\n          ')
  });

  it('Cenario 1 - Candastro realizado com sucesso', {tags: 'Cadastro'}, () => { 
    //- Preencha os campos 
    cadastro('danieli', 'danieli@hotmail.com', '993594@D', '993594@D')
    cy.get('span').contains('Continuar').should('have.text', 'Continuar')
  })

  it('Cenario 2 - Email invalido', () => {
    cadastro('danieli', 'danielihotmail.com', '993594@D', '993594@D')
    cy.get('#continue').click()
    cy.xpath("//div[@class='a-alert-content'][contains(.,'Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.')]").should('have.text', '\n  Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.\n')

  });

  it('Cenario 3 - Telefone invalido', () => {
    cadastro('danieli', '999999', '993594@D', '993594@D')
    cy.get('#continue').click()
    //cy.get('h1').contains('Verificar o número do telefone celular').should('have.text', 'Verificar o número do telefone celular')



  });

})