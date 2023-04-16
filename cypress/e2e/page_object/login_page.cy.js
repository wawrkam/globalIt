class LoginPage {
  
    fillEmail(email) {
      cy.get('#user_email').type(email)
    }
  
    fillPassword(password) {
      cy.get('#user_password').type(password)
    }
  
    submitLoginForm() {
      cy.get('button[type="submit"]').click()
    }
  }
  export default LoginPage;
