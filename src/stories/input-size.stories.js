import { Input } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input', module);
  stories.add('size', () => (
    
  <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>

  ))