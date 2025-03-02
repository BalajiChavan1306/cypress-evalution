describe('to validate login functinality', () => {
    it('to check login successfully', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type("Admin").should('have.value','Admin');
        cy.get('input[name="password"]').type('admin123').should('have.value','admin123');
        cy.get('button[type="submit"]').click();
       // cy.get('//h6["oxd-text oxd-text--span oxd-main-menu-item--name"]').should('be.visible').and('conatin.text','Dashboard');
        cy.url().should('include','/dashboard');

    });
    it('should login in successfully with valid credentials', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type("Admin").should('have.value','Admin');
        cy.get('input[name="password"]').type('admin123').should('have.value','admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include','/dashboard');

    });
    it('should  show error message for inavalid  login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type("admin");
        cy.get('input[name="password"]').type('adMain123');
        cy.get('button[type="submit"]').click();
        cy.contains('Invalid credentials').should('be.visible');
    });
    it('should be handle hidden element and hover to mouse', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
      //  cy.get('button[type="button"]').trigger('mouseover');
        cy.get('.oxd-layout-container').should('be.visible');
 
    });
    it.only('should fill employee registration form and submit successfully', () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get('input[id="firstName"]').type("Balaji").should('have.value','Balaji');
        cy.get('#lastName').type("Chavan").should('have.value','Chavan');
        cy.get('#userEmail').type('balajichavan1306@gmail.com');
        cy.get('#gender-radio-1').click();
        cy.get('#userNumber').type("9561355043");
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('january');
        cy.get('.react-datepicker__year-select').select('2010');
        cy.get('//div[@class="react-datepicker__day react-datepicker__day--012"]').click();
        cy.get('//div[@class="subjects-auto-complete__control css-yk16xz-control"]').type("Testing");
        cy.get('//label[@class="custom-control-label"][1]').click();
        cy.get('#uploadPicture').attachFile("D:\Masai\SDET\Testing\Async\Cypress\cypress\fixtures\Screenshot 2025-02-05 114719.png");
        cy.get('#currentAddress').type('At/p Wafale tal.mohol');
        cy.get('//div[@class=" css-1wa3eu0-placeholder"][1]').select('Haryana');
        cy.get('#submit').click();


    });
});