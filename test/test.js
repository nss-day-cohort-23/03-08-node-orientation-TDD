const { createTables } = require("../js/makeTable");
const { getCustomers, addCustomer } = require("../js/customersModule");
const { assert: { equal, isFunction, isObject, isArray } } = require("chai");

describe("just a test", () => {
  it("should be equal", () => {
    equal(3, 1 + 2);
  });
});

describe("customers module", () => {
  describe("fetching customers", () => {
    it("should be a function", () => {
      isFunction(getCustomers);
    });
    it("should return an array of objects", () => {
      isArray(getCustomers());
      isObject(getCustomers()[0]);
    });
  });

  describe("adding a customer", () => {
    let newCust = {
      firstName: "Pat",
      lastName: "Smith",
      city: "Nowhere",
      state: "Alabama",
      zip: "22288",
      phone: "555-444-7777"
    };

    beforeEach(done => {
      createTables().then(() => {
        done();
      });
    });

    it("should return an object", () => {
      return addCustomer(newCust).then(data => {
        isObject(data);
      });
    });

    it("should add a new item to the db", () => {
      return addCustomer(newCust).then(obj => {
        equal(9, obj.id);
      });
    });
  });
});
