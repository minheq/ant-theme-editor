import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.radio", module);
import { Radio } from "antd";

stories.addWithJSX("radiobutton-solid", () => (
  <div>
    <div>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
    <div style={{ marginTop: 16 }}>
      <Radio.Group defaultValue="c" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b" disabled>
          Shanghai
        </Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
  </div>
));
