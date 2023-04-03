export function pesquisaritens(livros) {
    cy.get('[name = field-keywords]').type(livros)
    cy.get('[value = Ir]').click()
    
}

export function addItens(iten) {
    cy.get('a span').contains(iten).click()
    cy.get('#add-to-cart-button').click()
    cy.get('span').contains('Adicionado ao carrinho').should('have.text', '\nAdicionado ao carrinho\n')
    
}

export function cadastro(nome, telEmail, senha, verificarSenha){
    cy.get('[type = text]').type(nome)
    cy.get('#ap_email').type(telEmail)
    cy.get('[id="ap_password"]').type(senha)
    cy.get('[name =passwordCheck]').type(verificarSenha)
}