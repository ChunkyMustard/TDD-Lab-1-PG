let {
    ChangeHandler
} = require("../src/changehandler.js");

describe("tests", function () {
    test("test1 CONSTRUCTOR", function () {
        let mtnDew = new ChangeHandler(150);
        cashTendered = 0;

        expect(mtnDew.amountDue).toEqual(150);
        expect(cashTendered).toEqual(0);
    })

    test("test2 INSERT COIN", function () {
        let coins = new ChangeHandler(125);
        coins.cashTendered = 0;

        coins.insertCoin("penny");
        expect(coins.cashTendered).toEqual(1);
        coins.insertCoin("nickel");
        expect(coins.cashTendered).toEqual(6);
        coins.insertCoin("dime");
        expect(coins.cashTendered).toEqual(16);
        coins.insertCoin("quarter");
        expect(coins.cashTendered).toEqual(41);
    })

    test("test3 IS PAYMENT SUFFICIENT", function () {
        let payBuddy = new ChangeHandler(100);
        payBuddy.cashTendered = 99;

        expect(payBuddy.isPaymentSufficient).toBeFalsy;

        payBuddy.insertCoin("penny");
        expect(payBuddy.isPaymentSufficient).toBeTruthy;
        payBuddy.insertCoin("penny");
        expect(payBuddy.isPaymentSufficient).toBeTruthy;
    })

    test("test4 GIVE CHANGE", function () {
        let moneyBack = new ChangeHandler(175);
        moneyBack.cashTendered = 207;
        moneyBack.giveChange();
        expect(moneyBack.giveChange()).toEqual({
            "quarters": 1,
            "dimes": 0,
            "nickels": 1,
            "pennies": 2
        });

        moneyBack.cashTendered = 185;
        moneyBack.giveChange();
        expect(moneyBack.giveChange()).toEqual({
            "quarters": 0,
            "dimes": 1,
            "nickels": 0,
            "pennies": 0
        });

        moneyBack.cashTendered = 202;
        moneyBack.giveChange();
        expect(moneyBack.giveChange()).toEqual({
            "quarters": 1,
            "dimes": 0,
            "nickels": 0,
            "pennies": 2
        });

        moneyBack.cashTendered = 243;
        moneyBack.giveChange();
        expect(moneyBack.giveChange()).toEqual({
            "quarters": 2,
            "dimes": 1,
            "nickels": 1,
            "pennies": 3
        });
    })
});
