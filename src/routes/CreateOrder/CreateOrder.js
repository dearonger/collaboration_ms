import React from 'react';
import { Form, Input, Row, Col, DatePicker, Button } from 'antd';

import style from './CreateOrder.less';

const { TextArea } = Input;

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
      <Form onSubmit={this.handleSubmit} className={style.formstyle}>
        <Row gutter={16}>
          <Col className="gutter-row" span={8} key='order_id'>
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
          <Col className="gutter-row" span={8} key='order_status'>
            <Form.Item
            label="订单状态"
            {...formItemLayout}
            >
            {getFieldDecorator('order_status', {
              rules: [{
                required: true, message: '请输入订单状态!',
              }],
            })(
              <Input placeholder="未完成/完成"/>
            )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={8} key='client_id'>
            <Form.Item
            label="客户编号"
            {...formItemLayout}
            >
            {getFieldDecorator('client_id', {
              rules: [{
                required: true, message: '请输入客户编号!',
              }],
            })(
              <Input />
            )}
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8} key='client_name'>
            <Form.Item
            label="客户名称"
            {...formItemLayout}
            >
            {getFieldDecorator('client_name', {
              rules: [{
                required: false, message: '请输入客户名称!',
              }],
            })(
              <Input />
            )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>  
          <Col className="gutter-row" span={8} key='sign_date'>
            <Form.Item
            label="签订日期"
            {...formItemLayout}
            >
            {getFieldDecorator('sign_date', {
              rules: [{
                required: true, message: '请输入签订日期!',
              }],
            })(
              <DatePicker placeholder="请选择签订时间" style={{ width: '100%' }} />
            )}
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8} key='deliver_date'>
            <Form.Item
            label="交货日期"
            {...formItemLayout}
            >
            {getFieldDecorator('deliver_date', {
              rules: [{
                required: true, message: '请输入交货日期!',
              }],
            })(
              <DatePicker placeholder="请选择交货时间" style={{ width: '100%' }} />
            )}
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8} key='specimen'>
            <Form.Item
            label="业务员"
            {...formItemLayout}
            >
            {getFieldDecorator('specimen', {
              rules: [{
                required: false, message: '请输入采购员!',
              }],
            })(
              <Input />
            )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}> 
          <Col className="gutter-row" span={8} key='craft'>
            <Form.Item
            label="工艺"
            {...formItemLayout}
            >
            {getFieldDecorator('craft', {
              rules: [{
                required: false, message: ' ',
              }],
            })(
              <TextArea />
            )}
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8} key='re_pack'>
            <Form.Item
            label="包装要求"
            {...formItemLayout}
            >
            {getFieldDecorator('re_pack', {
              rules: [{
                required: true, message: '请输入包装要求!',
              }],
            })(
              <TextArea />
            )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}> 
          <Col className="gutter-row" span={8} key='re_quality_in'>
            <Form.Item
            label="内部质量要求"
            {...formItemLayout}
            >
            {getFieldDecorator('re_quality_in', {
              rules: [{
                required: true, message: '请输入内部质量要求!',
              }],
            })(
              <TextArea />
            )}
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8} key='re_quality_out'>
            <Form.Item
            label="外部质量要求"
            {...formItemLayout}
            >
            {getFieldDecorator('re_quality_out', {
              rules: [{
                required: true, message: '请输入外部质量要求!',
              }],
            })(
              <TextArea />
            )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>  
          <Col className="gutter-row" span={8} key='trans_id'>
            <Form.Item
            label="运输编号"
            {...formItemLayout}
            >
            {getFieldDecorator('trans_id', {
              rules: [{
                required: true, message: '请输入运输编号!',
              }],
            })(
              <Input />
            )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={48} key='submit'>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className={style.submitButton}>提交</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
const CreateOrder = Form.create()(Create);
export default CreateOrder;