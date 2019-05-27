import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.descriptions", module);
import { Descriptions, Badge } from "antd";

const DescriptionsItem = Descriptions.Item;

stories.addWithJSX("border", () => (
  <Descriptions title="User Info" bordered>
    <DescriptionsItem label="Product">Cloud Database</DescriptionsItem>
    <DescriptionsItem label="Billing Mode">Prepaid</DescriptionsItem>
    <DescriptionsItem label="Automatic Renewal">YES</DescriptionsItem>
    <DescriptionsItem label="Order time">2018-04-24 18:00:00</DescriptionsItem>
    <DescriptionsItem label="Usage Time" span={3}>
      2019-04-24 18:00:00
    </DescriptionsItem>
    <DescriptionsItem label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </DescriptionsItem>
    <DescriptionsItem label="Negotiated Amount">$80.00</DescriptionsItem>
    <DescriptionsItem label="Discount">$20.00</DescriptionsItem>
    <DescriptionsItem label="Official Receipts">$60.00</DescriptionsItem>
    <DescriptionsItem label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication_factor:3
      <br />
      Region: East China 1<br />
    </DescriptionsItem>
  </Descriptions>
));
