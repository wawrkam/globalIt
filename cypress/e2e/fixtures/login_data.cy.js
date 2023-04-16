 export const email = 'user888@gmail.com';
 export const invalidEmail = 'test@test';
 export const password = '1234567890';
 export const url ='https://www.edu.goit.global/pl/account/login';

   
 export function login() {
    const loginPage = new LoginPage()
    cy.visit('/login')
    cy.fillEmail
    cy.fillPassword
    cy.submitLoginForm
  }