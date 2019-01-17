import React from 'react';
import { Steps, Button, message, Form, Row, Col, Input, DatePicker, List } from 'antd';

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

const listData = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


class Purchasestep extends React.Component {
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

  handleReset = () => {
    this.props.form.resetFields();
  };

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
      <div className={style.stepsContent}>
        <Row gutter={24}>
          <Col span={12} key='order_id'>
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
          <Col span={8} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" className={style.submitButton} onClick={this.handleSubmit} >查找</Button>
            <Button className={style.submitButton} onClick={this.handleReset}>
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
          <Col span={20} key='list_date'>
            <List
              className={style.listStyle}
              bordered
              dataSource={listData}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={10} key='buyer'>
            <Form.Item label='采购员' {...formItemLayout}>
              {getFieldDecorator('buyer', {
                rules: [{
                  required: true,
                  message: '请输入采购员',
                }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={10} key='purchase_deadline'>
            <Form.Item label='截止日期' {...formItemLayout}>
              {getFieldDecorator('purchase_deadline', {
                rules: [{
                  required: true, message: '请输入截止日期!',
                }],
              })(
                <DatePicker placeholder="请选择截止时间" style={{ width: '100%' }} />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={20} style={{ textAlign: 'right'}}>
            <Button type="primary" htmlType="submit" >采购</Button>
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
          <Col span={8} key='check_date'>
            <Form.Item label='质检日期' {...formItemLayout}>
              {getFieldDecorator('check_date', {
                rules: [{
                  required: true, message: '请输入质检日期!',
                }],
              })(
                <DatePicker placeholder="请选择质检日期" style={{ width: '100%' }} />
              )}
            </Form.Item>
          </Col>
          <Col span={8} key='result'>
            <Form.Item label='质检结果购员' {...formItemLayout}>
              {getFieldDecorator('result', {
                rules: [{
                  required: true,
                  message: '请输入质检结果!',
                }],
              })(
                <Input placeholder="合格/不合格原因" />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} key='list_date'>
            <List
              className={style.listStyle}
              bordered
              dataSource={listData}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">提交</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              退回
            </Button>
          </Col>
        </Row>
      </div>
    );
  }

  renderStep4() {
    return (
      <div className={style.stepsContent}>
        <Row gutter={24}>
          <Col span={24} key='list_date'>
            <List
              className={style.listStyle}
              bordered
              dataSource={listData}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">分配</Button>
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
const PurchaseStep = Form.create({ name: 'step' })(Purchasestep)
export default PurchaseStep;
