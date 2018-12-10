import React from "react";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import setupStore from "../setupStore";
import toJSON from "enzyme-to-json";
import * as reports from "../__fixtures__/reports.json";
import wait from "waait";

configure({ adapter: new Adapter() });

describe("App", () => {
  let store;

  beforeEach(() => {
    // fetch.resetMocks();
    store = setupStore({ reports: reports.data });
  });

  describe("sorting", () => {
    test("orders reports by ASC by default", async () => {
      let wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );

      wrapper.update();
      const report = wrapper.find(".report");
      expect(report.length).toEqual(4);
      expect(toJSON(report)).toMatchSnapshot();
    });
    test("correctly orders reports by name when DESC button is clicked", async () => {
      let wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      wrapper.update();

      wrapper.find(".sort-desc").simulate("click");
      const report = wrapper.find(".report");
      expect(report.length).toEqual(4);
      expect(toJSON(report)).toMatchSnapshot();
    });
    test("correctly orders reports by name when ASC button is clicked", async () => {
      let wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      wrapper.update();

      wrapper.find(".sort-asc").simulate("click");
      const report = wrapper.find(".report");
      expect(report.length).toEqual(4);
      expect(toJSON(report)).toMatchSnapshot();
    });
  });
  describe("filter", () => {
    test("by age range", async () => {
      let wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      wrapper.update();

      wrapper.find(".filter-ageRange").simulate("click");
      const report = wrapper.find(".report");
      expect(report.length).toEqual(1);
      expect(toJSON(report)).toMatchSnapshot();
    });
    test("by gender", async () => {
      let wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      wrapper.update();

      wrapper.find(".filter-gender").simulate("click");
      const report = wrapper.find(".report");
      expect(report.length).toEqual(1);
      expect(toJSON(report)).toMatchSnapshot();
    });

    test("by visitors", async () => {
      let wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      wrapper.update();

      wrapper.find(".filter-visitors").simulate("click");
      const report = wrapper.find(".report");
      expect(report.length).toEqual(2);
      expect(toJSON(report)).toMatchSnapshot();
    });
  });
  describe("deleting", () => {
    test("a report, removes it from the UI", async () => {
      let wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      wrapper.update();

      let report = wrapper.find(".report");
      expect(report.length).toEqual(4);

      wrapper
        .find(".report-delete")
        .first()
        .simulate("click");

      await wait(2000);

      wrapper.update();
      report = wrapper.find(".report");

      expect(report.length).toEqual(3);
      expect(toJSON(report)).toMatchSnapshot();
    });
  });
});
