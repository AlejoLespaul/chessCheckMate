const challengeFunction = require('./index.js')
const assert = require('assert')

describe('ChallengeTemplate', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1: when kingWhite="A1", rookBlack= "A5", bishopBlack="D4", knightBlack="D2" should return "jaque mate"', () => {

        let result = challengeFunction("A1","A5","D4","D2")
        let expected = "jaque mate"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2: when kingWhite="D1", rookBlack= "H2", bishopBlack="E3", knightBlack="C3" should return "jaque"', () => {

        let result = challengeFunction("D1","H2","E3","C3")
        let expected = "jaque"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3: when kingWhite="F1", rookBlack= "D2", bishopBlack="B5", knightBlack="F3" should return "jaque mate"', () => {

        let result = challengeFunction("F1","D2","B5","F3")
        let expected = "jaque mate"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test4: when kingWhite="H7", rookBlack= "G3", bishopBlack="B5", knightBlack="F7" should return "jaque mate"', () => {

        let result = challengeFunction("H7","G3","B5","F7")
        let expected = "jaque mate"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test5: when kingWhite="C4", rookBlack= "C2", bishopBlack="F6", knightBlack="C6" should return "jaque"', () => {

        let result = challengeFunction("C4","C2","F6","C6")
        let expected = "jaque"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test6: when kingWhite="D5", rookBlack= "E4", bishopBlack="C6", knightBlack="B7" should return "jaque"', () => {

        let result = challengeFunction("D5","E4","C6","B7")
        let expected = "jaque"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test7: when kingWhite="G8", rookBlack= "G7", bishopBlack="F6", knightBlack="G6" should return "jaque"', () => {

        let result = challengeFunction("G8","G7","F6","G6")
        let expected = "jaque mate"

        assert.strictEqual(result,expected)
    })


})
