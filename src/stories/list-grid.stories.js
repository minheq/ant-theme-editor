import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.list", module);
import { List, Card } from "antd";

const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  }
];

stories.addWithJSX("grid", () => (
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
));
