import React from 'react';
import { Form, Input, Button } from 'antd';
import Employers from '../../../routers/employers';

export default class Login extends React.Component {
  state = {
    errorMsg: ''
  }
  onFinish = (values) => {
    const res = Employers.postLogin(values);
    if (res.success) {
      const { id = '' } = res.result || {};
      localStorage.setItem('token', id);
      localStorage.setItem('employer', JSON.stringify(res.result));
      this.props.history.push(`/main-okr?id=${id}`);      
    }
    else {
      this.setState({ errorMsg: res.result });
    }
  };

  onFinishFailed = (errorInfo) => {
    this.setState({ errorMsg: errorInfo });
  };

  render() {
    const { errorMsg } = this.state;
    return (
      <div className='login-wrapper'>
        <Form
          className='login-form'
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          { errorMsg && <div>{errorMsg}</div> }
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
            rules={[{ required: true, message: 'Please input your object!' }]}
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