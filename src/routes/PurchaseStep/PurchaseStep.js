import React from 'react';
import { Steps, Button, message, Form, Row, Col, Input, DatePicker, } from 'antd';

import style from './PurchaseStep.less';

const Step = Steps.Step;

const steps = [{
  title: '库存查询',
}, {
  title: '原料采购',
}, {
  title: '质量检测',
}, {
  title: '原料分配'
}];

class Purchasestep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
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
    } else if (current === 3) {
      return this.renderStep4();
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
      <div className={style.steps1Content}>
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
      <div className={style.steps1Content}>
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
      <div className={style.steps1Content}>
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

  renderStep4() {
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
      <div className={style.steps1Content}>
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
      <Form>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        {this.renderChoiceStep()}
        <div className={style.stepsAction}>
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0
            && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )
          }
        </div>
      </Form>
    );
  }
}
const PurchaseStep = Form.create({ name: 'step' })(Purchasestep)
export default PurchaseStep;
