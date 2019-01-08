import React from 'react';
import { Form, Input, Row, Col, DatePicker, Button } from 'antd';

import sytle from './CreateOrder.less';


class Create extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    
    return (
        <Form onSubmit={this.handleSubmit} className={sytle.formstyle}>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
          <Form.Item
          label="订单号"
          {...formItemLayout}
          >
          {getFieldDecorator('order_id', {
            rules: [{
              required: true, message: '请输入订单号!',
            }],
          })(
            <Input />
          )}
        </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
          <Form.Item
          label="订单号"
          {...formItemLayout}
          >
          {getFieldDecorator('order_name', {
            rules: [{
              required: true, message: '请输入订单号!',
            }],
          })(
            <Input />
          )}
        </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
          <Form.Item
          label="签订日期"
          {...formItemLayout}
          >
          {getFieldDecorator('order_date', {
            rules: [{
              required: true, message: '请输入签订日期!',
            }],
          })(
            <DatePicker placeholder="请选择签订时间" style={{ width: '100%' }} />
          )}
        </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
          <Form.Item
           {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
          </Col>
        </Row>
        
        </Form>
    );
  }
}
const CreateOrder = Form.create()(Create);
export default CreateOrder;