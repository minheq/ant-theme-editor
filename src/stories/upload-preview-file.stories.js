import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.upload", module);
import { Upload, Button, Icon } from "antd";

const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  previewFile(file) {
    console.log("Your upload file:", file);
    // Your process logic. Here we just mock to the same file
    return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
      method: "POST",
      body: file
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  }
};

stories.addWithJSX("preview-file", () => (
  <div>
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
  </div>
));
