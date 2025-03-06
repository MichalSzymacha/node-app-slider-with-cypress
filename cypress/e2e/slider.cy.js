describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if button works', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if content works', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if content works on mobile', function () {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Display Test', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('Checks if gallery container is visible', function () {
    cy.get('.swiper').should('be.visible'); 
  });

  it('Checks if all three slides exist', function () {
    cy.get('.swiper-slide').should('have.length', 3); 
  });

  it('Checks if navigation buttons are visible and clickable', function () {
    cy.get('.swiper-button-next').should('be.visible').click(); 
    cy.get('.swiper-button-prev').should('be.visible').click(); 
  });

  it('Verifies that slides contain correct city names', function () {
    const cities = ['Rome', 'London', 'Paris'];

    cy.get('.swiper-slide').each(($el, index) => {
      cy.wrap($el).within(() => {
        cy.get('h1').should('contain', cities[index]); 
      });
    });
  });
});
