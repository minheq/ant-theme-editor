import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.card", module);
import { Card } from "antd";

const { Meta } = Card;

stories.addWithJSX("flexible-content", () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
));
