import Homepage from './page_object/homepage.cy.js';
import LoginPage from './page_object/login_page.cy.js';
import { email, password, url } from './fixtures/login_data.cy.js';

describe('Homepage', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

    const homepage = new Homepage();
    const loginPage = new LoginPage();

    beforeEach(() => {
      cy.visit(url);
      loginPage.fillEmail(email);
      loginPage.fillPassword(password);
      loginPage.submitLoginForm();
    });
  
    it('should go to my course page', () => {
        homepage.goToMyCoursePage()
        cy.url().should('include', '/textbook');
      });
  });
