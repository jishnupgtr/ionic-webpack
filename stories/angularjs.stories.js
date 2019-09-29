import { storiesOf } from "@storybook/html";

import { withKnobs, text, number, array } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { forModule } from "storybook-addon-angularjs";

storiesOf("Sample Component", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    forModule("components").createElement(compile => {
      // const name = text("Name", "Jane");
      // const someString = text("Some String", "It works too!");

      // const foo = {
      //   bar: number("Value", 20, { range: true, min: 0, max: 30, step: 1 })
      // };

      // const things = array("Things", ["a", "b", "c"], ",");

      // const onEvt = action("clicked");

      return compile`<sample-item></sample-item>`;
    })
  );
