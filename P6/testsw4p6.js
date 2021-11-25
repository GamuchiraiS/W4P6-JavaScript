// JavaScript source code
const chai = window.chai;
const expect = chai.expect;

//Median Test 1
describe("Median", function () {
    it("should return 56", function () {
        findMedian(34, 500, 56);
        expect(56, chai.median);
    });
});

//Median Test 2
describe("Median", function () {
    it("should return 97", function () {
        findMedian(101, 27, 97);
        expect(97, chai.median);
    });
});

//Median Test 3
describe("Median", function () {
    it("should return 23", function () {
        findMedian(1.5, 645, 23);
        expect(23, chai.median);
    });
});
