 export const email = ;
 export const invalidEmail = 'test@test';
 export const password = ;
 export const url ='https://www.edu.goit.global/pl/account/login';

   
 export function login() {
    const loginPage = new LoginPage()
    cy.visit('/login')
    cy.fillEmail
    cy.fillPassword
    cy.submitLoginForm
  }
