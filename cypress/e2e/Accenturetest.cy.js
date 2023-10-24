//Retornar falso para erros
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('teste Accenture', () => {
    it('cadastrar um veiculo', () => {
        cy.visit("http://sampleapp.tricentis.com/101/app.php")
        cy.get('#make').select('Audi')
        cy.get('#model').select('Scooter')
        cy.get('#cylindercapacity').type(112)
        cy.get('#engineperformance').type(1000)
        cy.get('#numberofseats').select(2)
        cy.get('#numberofseatsmotorcycle').select(2)
        cy.get('#fuel').select('Gas')
        cy.get('#dateofmanufacture').type("10/01/2022")
        cy.get('#payload').type(123)
        cy.get('#totalweight').type(1200)
        cy.get('#listprice').type(87654)
        cy.get('#annualmileage').type(31578)
        cy.get('#nextenterinsurantdata').click()
        cy.wait(1000)
        cy.contains('First Name').should('be.visible') 
        
        //Preenchimento dos dados do seguro
        cy.get('#firstname').type('Bruno')
        cy.get('#lastname').type('Leandro')
        cy.get('#birthdate').type("12/14/1986")
        cy.get('#country').select('Brazil')
        cy.get('#zipcode').type(1234)
        cy.get('#occupation').select('Employee')
        cy.get(':nth-child(4) > .ideal-check').click()
        cy.get('#nextenterproductdata').click()
        cy.contains('Start Date').should('be.visible') 
    
        //Preenchimento dos dados do produto
        cy.get('#startdate').type("10/01/2024")
        cy.get('#insurancesum').select('20.000.000,00')
        cy.get('#meritrating').select('Bonus 9')
        cy.get('#damageinsurance').select('Full Coverage')
        cy.get('[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1)').click()
        cy.get('#courtesycar').select('Yes')
        cy.get('#nextselectpriceoption').click()
        cy.contains('Gold').should('be.visible') 
    
        //selecionando a opção de preço
        cy.get('tr > .group > :nth-child(2) > .ideal-radio').click()
        cy.get('#nextsendquote').click()
        //cy.contains('Sending e-mail success!').should('be.visible') 
  
        //enviar cotação
        cy.get('#email').type('bleandroc@gmail.com')
        cy.get('#username').type('bleandroc')
        cy.get('#password').type('Teste@01')
        cy.get('#confirmpassword').type('Teste@01')
        cy.get('#sendemail').click()
        cy.contains('E-Mail').should('be.visible') 
        
        //Validando o envio de email
        cy.wait(11000)
        cy.contains('Sending e-mail success!').should('be.visible')         
    });
});