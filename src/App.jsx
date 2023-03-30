import React, { Component } from 'react'
import { Button, Space } from 'antd';
import {WeiboOutlined} from '@ant-design/icons';
// import 'antd/dist/reset.css';

export default class App extends Component {
  
  render() {
    return (
      <div>
        App...
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>

        <div>
          <WeiboOutlined />
        </div>
      </div>
    )
  }
}
