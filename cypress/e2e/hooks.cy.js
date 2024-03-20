///<reference types="cypress"/>

describe("Work with hooks", () => {
    
    before(() => {
        console.log("before A")
    })

    beforeEach(() => {
        console.log('before Each A')
    })

    afterEach(() => {
        console.log("after Each")
    })

    after(() => {
        console.log("after")
    })

    it("test 01", () => {
        console.log('test 01')
    })

    it("test 02", () => {
        console.log('test 02')
    })
})

describe("Group test B", () => {
    describe("Sub group  tests B", () => {

        it("test 03", () => {
            console.log('test 03')
        })

        before(() => {
            console.log("before describe B")
        })

        after(() => {
            console.log("after describe B")
        })
    })

    it("test 04", () => {
        console.log('test 04')      
    })
})