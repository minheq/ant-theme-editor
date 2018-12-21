import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.mention", module);
import { Mention } from "antd";

const { toString, toContentState } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log("onSelect", suggestion);
}

stories.addWithJSX("basic", () => (
  <Mention
    style={{ width: "100%" }}
    onChange={onChange}
    defaultValue={toContentState("@afc163")}
    suggestions={[
      "afc163",
      "benjycui",
      "yiminghe",
      "RaoHai",
      "中文",
      "にほんご"
    ]}
    onSelect={onSelect}
  />
));
