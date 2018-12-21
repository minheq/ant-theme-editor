import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.button", module);
import { Button } from "antd";

stories.addWithJSX("disabled", () => (
  <div>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <div style={{ padding: "8px 8px 0 8px", background: "rgb(190, 200, 200)" }}>
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </div>
));
