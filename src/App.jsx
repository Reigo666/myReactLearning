import React, { Component } from 'react'
import { DatePicker,Button, Space } from 'antd';
import {WeiboOutlined} from '@ant-design/icons';
const { RangePicker } = DatePicker;
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

        <div>
        <Space direction="vertical" size={12}>
          <RangePicker />
          <RangePicker showTime />
          <RangePicker picker="week" />
          <RangePicker picker="month" />
          <RangePicker picker="quarter" />
          <RangePicker picker="year" />
        </Space>
        </div>
      </div>
    )
  }
}
