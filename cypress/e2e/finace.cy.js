 /// <reference types="cypress"/>
context('Dev Finance', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
        cy.get('#data-table tbody tr').should('have.length',0)  
    });
    it('Cadastrar entrada', {tags: 'critico'}, () => {
       // enteneder o fluxo manualment
       //mapear os elementos que vamos interagir
       // decrever as interações com o cypress
       // adicionar as asserções que a gente precisa
       
       cy.get('#transaction .button').click()
       cy.get('#description').type('Mesada')
       cy.get('[type = number]').type(12)
       cy.get('#date').type('2021-04-01')
       cy.get('button').contains('Salvar').click()
       
       cy.get('#data-table tbody tr').should('have.length',1)     
    });
    //Cadastrar saidas
    it('Cadastrar saidas', {tags: 'smoke'}, () => {

        cy.get('#transaction .button').click()
        cy.get('#description').type('Mesada')
        cy.get('[type = number]').type(-10)
        cy.get('#date').type('2021-04-01')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length',1) 
        
    });

    //Remover entradas e saidas
    
});