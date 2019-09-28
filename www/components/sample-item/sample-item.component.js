import template from "./sample-item.component.html";
import './sample-item.component.scss'

const name = "orderItem";

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

const component = [name, model];

export default component;
