export function pesquisaritens(livros) {
    cy.get('[name = field-keywords]').type(livros)
    cy.get('[value = Ir]').click()
    
}

export function addItens(iten) {
    cy.get('a span').contains(iten).click()
    cy.get('#add-to-cart-button').click()
    cy.get('span').contains('Adicionado ao carrinho').should('have.text', '\nAdicionado ao carrinho\n')
    
}