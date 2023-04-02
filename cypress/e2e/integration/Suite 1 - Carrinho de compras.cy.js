import { addItens, pesquisaritens } from "../utils";

describe('Carrinho de compras', () => {

  beforeEach(() => {
    //- Acesse https://www.amazon.com.br/ 
    cy.visit('https://www.amazon.com.br/');
    
  });

  it('Cenario 1', {tags: 'xbosS' }, () => {
    //- Pesquise um produto de sua preferência
    cy.get('[name = field-keywords]').type('Xbox Series S')
    cy.get('[value = Ir]').click()
    cy.get('span').contains('Xbox Series S').should( 'have.text','"Xbox Series S"')
    cy.xpath("//span[normalize-space()='Xbox Series S']").click()
    cy.get('h1 span').contains('Xbox Series S').should('have.text', '        Xbox Series S       ')

    //- Adicione o produto no carrinho
    cy.get('#add-to-cart-button').click()
    cy.get('span').contains('Adicionado ao carrinho').should('have.text', '\nAdicionado ao carrinho\n')

    //- Valide se o produto foi incluído no carrinho com sucesso
    cy.xpath('//a[contains(@data-csa-c-type,"button")]').click()
    cy.get('div h1').contains('Carrinho de compras').should('have.text', '\nCarrinho de compras\n')
    cy.get( '[class = a-truncate-cut]').should('have.text', 'Xbox Series S')
    
  })

  it('Cenario 2', {tags: 'validarCarrinho'}, () => {
    //- Adicione o 3 produto no carrinho
    // pesquisando produto
    pesquisaritens('Livros')
    // adicionando protuto 1
    addItens('As obras revolucionárias de George Orwell - Box com 3 livros')

    // adicionando protuto 2
    pesquisaritens('Ração Farmina N&D Prime Cordeiro e Blueberry Gatos Adultos')
    addItens('Ração Farmina N&D Prime Cordeiro e Blueberry Gatos Adultos')
    
     // adicionando protuto 3
     pesquisaritens('É Assim que Acaba: 1)')
     addItens('É Assim que Acaba: 1')
     
    
    //- Valide se o valor total do carrinho está correto
    cy.get('#nav-cart').click()
    //cy.get('[data-name="Active Items"]').should('have.length', 3)
    cy.get('span').contains('R$ 236,94')
      .invoke('text')
      .then(texto => {
    const valorTotal = parseFloat(texto.replace('R$', '').replace(',', '.'))
    expect(valorTotal).to.equal(236.94) // valor esperado
})    
  });
})