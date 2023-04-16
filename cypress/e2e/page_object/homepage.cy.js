class Homepage{

    goToHomePage() {
        cy.get('a[href="/pl/homepage"]').click()
    }

    goToCoursePage() {
        cy.get('a[href="/pl/courses"]').click()
    }

    goToDuelsPage() {
        cy.get('a[href="/pl/duels"]').click()
    }

    goToTournamentPage() {
        cy.get('a[href="/pl/tournament"]').click()
    }

    attendanceButton() {
        cy.contains('Nie licz nieobecności').click()
    }

    goToMyCoursePage() {
        cy.get('#go-to-the-course-homepage-widget').trigger('mouseover').wait(1000).click().click({force:true})
      }
}

export default Homepage;
