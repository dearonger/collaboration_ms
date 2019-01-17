import React from 'react';
import { Steps, Button, message, Form, Row, Col, Input, DatePicker, } from 'antd';

import style from './ProductionStep.less';

const Step = Steps.Step;

const steps = [{
  title: '车间打样',
}, {
  title: '订单生产',
}, {
  title: '质量检测',
}];

class Productionstep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  renderChoiceStep() {
    const { current } = this.state;
    if (current === 0) {
      return this.renderStep1();
    } else if (current === 1) {
      return this.renderStep2();
    } else if (current === 2) {
      return this.renderStep3();
    }
  }

  renderStep1() {
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
    return (
      <div className={style.stepsContent}>
        <Row gutter={24}>
          <Col span={8} key='order_id'>
            <Form.Item label='订单编号' {...formItemLayout}>
              {getFieldDecorator('order_id', {
                rules: [{
                  required: true,
                  message: '请输入订单编号',
                }],
              })(
                <Input placeholder="订单编号" />
              )}
            </Form.Item>
          </Col>
          <Col span={8} key='order_date'>
            <Form.Item label='签订日期' {...formItemLayout}>
              {getFieldDecorator('order_date', {
                rules: [{
                  required: true, message: '请输入签订日期!',
                }],
              })(
                <DatePicker placeholder="请选择签订时间" style={{ width: '100%' }} />
              )}
            </Form.Item>
          </Col>
          <Col span={8} key='order_creater'>
            <Form.Item label='业务员姓名' {...formItemLayout}>
              {getFieldDecorator('order_creater', {
                rules: [{
                  required: true,
                  message: '请输入业务员',
                }],
              })(
                <Input placeholder="业务员姓名" />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">查找</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
              </Button>
          </Col>
        </Row>
      </div>
    );
  }

  renderStep2() {
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
    return (
      <div className={style.stepsContent}>
        <Row gutter={24}>
          <Col span={8} key='order_id'>
            <Form.Item label='订单编号' {...formItemLayout}>
              {getFieldDecorator('order_id', {
                rules: [{
                  required: true,
                  message: '请输入订单编号',
                }],
              })(
                <Input placeholder="订单编号" />
              )}
            </Form.Item>
          </Col>
          <Col span={8} key='order_date'>
            <Form.Item label='签订日期' {...formItemLayout}>
              {getFieldDecorator('order_date', {
                rules: [{
                  required: true, message: '请输入签订日期!',
                }],
              })(
                <DatePicker placeholder="请选择签订时间" style={{ width: '100%' }} />
              )}
            </Form.Item>
          </Col>
          <Col span={8} key='order_creater'>
            <Form.Item label='业务员姓名' {...formItemLayout}>
              {getFieldDecorator('order_creater', {
                rules: [{
                  required: true,
                  message: '请输入业务员',
                }],
              })(
                <Input placeholder="业务员姓名" />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">查找</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
              </Button>
          </Col>
        </Row>
      </div>
    );
  }

  renderStep3() {
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
    return (
      <div className={style.stepsContent}>
        <Row gutter={24}>
          <Col span={8} key='order_id'>
            <Form.Item label='订单编号' {...formItemLayout}>
              {getFieldDecorator('order_id', {
                rules: [{
                  required: true,
                  message: '请输入订单编号',
                }],
              })(
                <Input placeholder="订单编号" />
              )}
            </Form.Item>
          </Col>
          <Col span={8} key='order_date'>
            <Form.Item label='签订日期' {...formItemLayout}>
              {getFieldDecorator('order_date', {
                rules: [{
                  required: true, message: '请输入签订日期!',
                }],
              })(
                <DatePicker placeholder="请选择签订时间" style={{ width: '100%' }} />
              )}
            </Form.Item>
          </Col>
          <Col span={8} key='order_creater'>
            <Form.Item label='业务员姓名' {...formItemLayout}>
              {getFieldDecorator('order_creater', {
                rules: [{
                  required: true,
                  message: '请输入业务员',
                }],
              })(
                <Input placeholder="业务员姓名" />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">查找</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
              </Button>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const { current } = this.state;
    return (
      <Form className={style.formStyle}>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        {this.renderChoiceStep()}
        <div className={style.stepsAction}>
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>下一步</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
          }
          {
            current > 0
            && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                上一步
              </Button>
            )
          }
        </div>
      </Form>
    );
  }
}
const ProductionStep = Form.create({ name: 'step' })(Productionstep)
export default ProductionStep;
