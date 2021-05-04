import React from 'react';
import Employers from '../../routers/employers';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.css';


export default class Login extends React.Component {

  onFinish = (values) => {
    // 1. get login info
    const res = Employers.postLogin(values);
    if (res.success) {
      const { id = '' } = res.result || {};
      localStorage.setItem('token', id);
      return;
    }
    else {
      // error 处理机制。
      console.log(res.result);
    }
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className='login-wrapper'>
        <Form
          className='login-form'
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

