import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.tabs", module);
import { Tabs, Radio } from "antd";

const TabPane = Tabs.TabPane;

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top"
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group
          onChange={this.handleModeChange}
          value={mode}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array(30).keys()].map(i => (
            <TabPane tab={`Tab-${i}`} key={i}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

stories.addWithJSX("slide", () => <SlidingTabsDemo />);
