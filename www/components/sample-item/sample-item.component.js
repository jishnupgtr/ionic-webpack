import template from "./sample-item.component.html";
import "./sample-item.component.scss";

const name = "sampleItem";

const model = {
  template,
  bindings: {
    item: "<"
  },
  controller($scope) {
    /**
     *  Controller functionalities
     */
  }
};

export default [name, model];
