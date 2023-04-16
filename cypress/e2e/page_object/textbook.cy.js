class Textbook {

    goToHomework() {
        cy.get('[data-tour-step="homework"]').trigger('mouseover').wait(1000).click().click({force:true})
    }
    
    goToAutocheck() {
        cy.get('[data-tour-step="autocheck"]').click()
    }
    
    goToLessons() {
        cy.get('[data-tour-step="lessons"]').click()
    }
    
    goToExtras() {
        cy.get('[data-tour-step="extras"]').click()
    }
    
    sendAgainHomeworkBtn() {
        cy.get('.css-1scqvnp').click()
    }

    editWorkSubmissionBtn() {
        cy.get('.e1cko2470').click()
    }

    successMesage() {
        cy.get('.css-xxg1xf')
    }


    goToTextbook() {
        cy.get('[data-tour-step="textbook"]').click()
      }

}

    export default Textbook;