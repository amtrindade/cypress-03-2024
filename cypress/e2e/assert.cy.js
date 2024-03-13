///<reference types="cypress"/>

it("Work with integer", () => {

    const number1 = 5

    expect(number1).equal(5);
    expect(number1).to.equal(5);
    expect(number1).to.be.equal(5);
    expect(number1).to.be.not.equal(10);

})

it("Work with strings", () => {

    const name = "Automação de testes com Cypress"

    expect(name).to.be.equal("Automação de testes com Cypress");
    expect(name).to.be.have.length(31);
    expect(name).to.be.contains("Cypress");

    //Expressões regulares
    expect(name).to.match(/^Automação/);
    expect(name).to.match(/Cypress$/);
    expect(name).to.match(/^Automação|Cypress$/)
    expect(name).to.match(/\D{31}/);

})

it("Work with boolean", () => {
    const value = true

    expect(value).to.be.equal(true)
    expect(value).not.to.be.equal(false)
})

it("Work with float", () => {
    const number1 = 5.4565454

    expect(number1).to.be.equal(5.4565454)
    //Valida acima do valor
    expect(number1).to.be.above(5.4)
    //Valida abaixo de valor
    expect(number1).to.be.below(5.5)
    //Valida considerando margem de erro
    expect(number1).to.be.closeTo(5.4, 0.1)

})

it("Work with list", () => {
    const cursos = ["Lógica", "WebDriver", "Cypress", "Appium"]

    expect(cursos).to.include.members(["Cypress", "Lógica"])
})

it("Work with objects", () => {
    const object1 = [1,2,3]
    const object2 = [1,2,3]

    //Compara os objectos
    expect(object1).to.be.deep.equal(object2)
})



