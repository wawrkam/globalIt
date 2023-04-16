import Homepage from './page_object/homepage.cy.js';
import LoginPage from './page_object/login_page.cy.js';
import { email, password, url } from './fixtures/login_data.cy.js';
import Textbook from './page_object/textbook.cy.js';


describe('Homepage', { testIsolation: false }, () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  const homepage = new Homepage();
  const loginPage = new LoginPage();
  const textbook = new Textbook();

  before(() => {
    cy.visit(url);
    loginPage.fillEmail(email);
    loginPage.fillPassword(password);
    loginPage.submitLoginForm();
  });

  it('should go to my course page', () => {
    homepage.goToMyCoursePage()
    cy.url().should('include', '/textbook');
  });

  it('should go to homework page',() => {
    textbook.goToHomework()
    cy.url().should('include', '/homework');
  })

  it('should send homework', () => {
    if (Cypress.$(textbook.sendAgainHomeworkBtn).is(':visible')) {
      cy.get(textbook.sendAgainHomeworkBtn)
    } else {
      cy.get(textbook.editWorkSubmissionBtn);
      cy.get(textbook.sendAgainHomeworkBtn)
    }
  })


  });




  

