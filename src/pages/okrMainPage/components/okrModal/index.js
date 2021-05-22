import React from 'react';
import moment from 'moment';
import { Modal, Form, Input, DatePicker, Button, InputNumber } from 'antd';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

import './index.css';

const { RangePicker } = DatePicker;

export default class OkrModal extends React.Component {
  state = {
    krs: [],
    startDate: "",
    endDate: ""
  };

  componentDidMount() {
    const { okrItem: {krs = [], startDate, endDate} } = this.props;
    this.setState({ 
      krs, 
      startDate, 
      endDate 
    }); 
  }

  onFinish = (values) => {
    const newOkr = {
      ...values,
      ...this.state,
    }
    this.props.onModalSubmit(newOkr);
  }

  onFinishFailed = () => {
    return;
  }

  onDateChange = (_, dateString) => {
    this.setState({
      startDate: dateString[0],
      endDate: dateString[1]
    })
  }

  onAddBtnClicked = (krs) => {
    const currKrs = krs ? krs : [];
    const id = "1qbWp00kd1hGLhGqFed";
    const newKrs = [...currKrs, {id: `${id}${currKrs.length}`}];
    this.setState({ krs: newKrs });
  }

  onMinusBtnClicked = (krs, id) => {
    const newKrs = krs.filter((kr) => {
      return kr.id !== id;
    });
    this.setState({ krs: newKrs });
  }

  onKrContentChange = (e, id) => {
    const { krs: currKrs } = this.state;
    const krs = currKrs.map((kr) => {
      if (kr.id === id) {
        kr.kr = e.target.value;
      }
      return kr;
    });
    this.setState({ krs });
  }

  onKrWeightChange = (e, id) => {
    const { krs: currKrs } = this.state;
    const krs = currKrs.map((kr) => {
      if (kr.id === id) {
        kr.weight = e.target.value;
      }
      return kr;
    });
    this.setState({ krs });
  }

  renderAllKrs = (krs) => {
    return krs.map((krItem = {}, idx) => {
      return( 
        <div key={krItem.id ? `kr_${krItem.id}` : `kr_${idx}`}>
          <label>{`kr${idx}`}</label>
          <input
            placeholder={krItem.kr ? krItem.kr : ""}
            defaultValue={krItem.kr ? krItem.kr : ""}
            onChange={(e) => this.onKrContentChange(e, krItem.id)}
          />
          <label>weight</label>
          <input
            type="number"
            placeholder={krItem.weight ? krItem.weight : ""}
            defaultValue={krItem.weight ? krItem.weight : ""}
            onChange={(e) => this.onKrContentChange(e, krItem.id)}
          />
          <span onClick={() => this.onMinusBtnClicked(krs, krItem.id)}><MinusSquareOutlined /></span>
        </div>
      )
    })
  }

  render() {
    const { showModal, onModalClosed } = this.props;
    const okrItem = this.props.okrItem || {};
    const { krs = [], startDate = '', endDate = '' } = this.state;
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const dateFormat = 'YYYY-MM-DD';

    return (
      <Modal
        visible={showModal}
        footer={null}
        onCancel={onModalClosed}
      >
        <Form
          {...layout}
          className='modal-form'
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="id"
            name="id"
            initialValue={okrItem.id ? okrItem.id : ""}
            hidden={true}
          >
            <input />
          </Form.Item>
          <Form.Item
            label="Object"
            name="target"
            rules={[{ required: true}]}
            placeholder={okrItem.target ? okrItem.target : "Please input your object"}
            initialValue={okrItem.target ? okrItem.target : ""}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true}]}
            placeholder={okrItem.department ? okrItem.department : "Please input target department"}
            initialValue={okrItem.department ? okrItem.department : ""}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            label="Start - End Date: "
          >
            <RangePicker
              value={
                startDate && endDate 
                ? 
                [moment(startDate, dateFormat), moment(endDate, dateFormat)]
                :
                [null, null]
              }
              onChange={this.onDateChange}
            />
          </Form.Item>
          { okrItem.score && 
          <Form.Item
            label="Score"
            name="score"
            placeholder={okrItem.score}
            initialValue={okrItem.score ? okrItem.score : '--'}
          >
            <InputNumber />
          </Form.Item>
          }
          
          <div className="modal-form-title">
            Add Krs 
            <span onClick={() => this.onAddBtnClicked(krs)}>
              <PlusSquareOutlined />
            </span>
          </div>
          { this.renderAllKrs(krs) }
          <Button type="secondary" onClick={onModalClosed}>
            Cancel
          </Button>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}