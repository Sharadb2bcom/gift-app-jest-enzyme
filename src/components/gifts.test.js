import React from "react";
import { shallow } from "enzyme";
import Gifts from "./Gifts";

describe("Gifts", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gifts = shallow(<Gifts {...props} />);
  it("renders", () => {
    expect(gifts).toMatchSnapshot();
  });
  it("initialise `state` to `person` and `present`", () => {
    expect(gifts.state()).toEqual({ person: "", present: "" });
  });
  describe("when typing into the person input", () => {
    const person = "uncle";
    beforeEach(() => {
      gifts
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });
    it("update the person in the `state`", () => {
      expect(gifts.state().person).toEqual(person);
    });
  });
  describe("When typing into the present input", () => {
    const present = "Golf";
    beforeEach(() => {
      gifts
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });
    it("update the present in the `state`", () => {
      expect(gifts.state().present).toEqual(present);
    });
  });
  describe("when clicking remove button", () => {
    beforeEach(() => {
      gifts.find(".btn-remove").simulate("click");
    });
    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
