import React from 'react';
import { Form, Input, Button } from 'antd';
import Employers from '../../../routers/employers';

export default class Register extends React.Component {
  onFinish = (values) => {
    const { password, password2} = values;
    if (password !== password2) {
      console.log('error');
    } else {
      const res = Employers.postRegister(values);
      if (res.success) {
        const { id = '' } = res.result || {};
        console.log(res.result);
        localStorage.setItem('token', id);
        localStorage.setItem('employer', JSON.stringify(res.result));
        this.props.history.push(`/main-okr?id=${id}`);
      } else {
        console.log(res.result);
      }
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

          <Form.Item
            label="Confirm Password"
            name="password2"
            rules={[{ required: true, message: 'Please input your password again!' }]}
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