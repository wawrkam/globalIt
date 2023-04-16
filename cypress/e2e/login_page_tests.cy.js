import LoginPage from './page_object/login_page.cy.js'
import {email, invalidEmail, password, url} from './fixtures/login_data.cy.js'



describe('Login user', () => {
  const loginPage = new LoginPage()
  beforeEach(() => {
    cy.visit(url)
  })


  it('Correct login with valid user data', () => {
    loginPage.fillEmail(email)
    cy.get('#user_email').should('have.value', email);
    loginPage.fillPassword(password)
    loginPage.submitLoginForm()
    cy.url().should('include', '/homepage')
  })

  it('Incorrect login with invalid email address', () => {
    loginPage.fillEmail(invalidEmail)
    loginPage.fillPassword(password)
    loginPage.submitLoginForm()
    cy.get('.css-127b2sx').should('contain', 'Nieprawidłowy adres email')
    
  })

  it('Incorrect login with invalid user data', () => {
    loginPage.fillEmail('wronguser@mail.com')
    loginPage.fillPassword('wrongpassword123')
    loginPage.submitLoginForm()
    cy.get('.css-156sa29').should("contain", 'Wprowadzono nieprawidłowy login lub hasło')
  })
})