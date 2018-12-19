import React from "react";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly ", () => {
    expect(app).toMatchSnapshot();
  });

  it("initialized the `state` of empty gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });
  describe("on click of `add button`", () => {
    const id = 1;
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });
    afterEach(() => {
      app.setState({ gifts: [] });
    });
    it("add the new gift into `state`", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it("add new gift to the list", () => {
      expect(app.find(".gifts-list").children().length).toEqual(1);
    });
    it("should have the Gift component", () => {
      expect(app.find("Gifts").exists()).toEqual(true);
    });

    describe("user wants to remove the gift from state", () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });
      it("removes the gift from the state", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
