import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.tabs", module);
import { Tabs, Icon } from "antd";

const TabPane = Tabs.TabPane;

stories.addWithJSX("icon", () => (
  <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <Icon type="apple" />
          Tab 1
        </span>
      }
      key="1"
    >
      Tab 1
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="android" />
          Tab 2
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
  </Tabs>
));
