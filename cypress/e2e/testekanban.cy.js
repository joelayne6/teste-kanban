describe('Teste funcional do Kanban - Coluna To Do', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
  });

  it('Valida botão de adicionar tarefa na coluna To Do', () => {
    cy.get('.board-header-title').contains('To Do')
      .parent() // ajustar se necessário
      .parent()
      .within(() => {
        cy.get('button[aria-label="Adicionar tarefa"]')
          .should('be.visible')
          .click();
      });
  });

  it('Verifica input após clicar para adicionar tarefa', () => {
    cy.get('.board-header-title').contains('To Do')
      .parent()
      .parent()
      .within(() => {
        cy.get('button[aria-label="Adicionar tarefa"]').click();
        cy.get('input[placeholder="Digite uma tarefa"]').should('be.visible').focus();
      });
  });

  it('Adiciona tarefa nova na coluna To Do', () => {
    const task = 'Teste Cypress final';

    cy.get('.board-header-title').contains('To Do')
      .parent()
      .parent()
      .within(() => {
        cy.get('button[aria-label="Adicionar tarefa"]').click();
        cy.get('input[placeholder="Digite uma tarefa"]').type(task);
        cy.contains('button', 'Adicionar').click();
        cy.contains(task).should('exist');
      });
  });
});
