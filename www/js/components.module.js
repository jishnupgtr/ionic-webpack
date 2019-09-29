import sampleItem from "Components/sample-item/sample-item.component.js";

const ComponentsModule = angular
  .module("components", [])
  .component(...sampleItem);

export { ComponentsModule };
