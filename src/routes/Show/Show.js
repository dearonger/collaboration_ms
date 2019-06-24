import React from 'react';
import { Steps, Form, Row, Col, Button, message, DatePicker, Input, Icon } from 'antd';

import style from './Show.less';

const Step = Steps.Step;

const steps1=[{
  title: '库存查询',
  icon:'search',
}, {
  title: '原料采购',
  icon:'shopping',
}, {
  title: '质量检测',
  icon:'safety-certificate',
}, {
  title: '原料分配',
  icon:'cluster',
},{
  title: '车间打样',
  icon:'experiment',
}, {
  title: '前处理',
  icon:'dot-chart',
}, {
  title: '染色',
  icon:'bg-colors',
}, {
  title: '后整理',
  icon:'align-left',
}, {
  title: '成品质检',
  icon:'safety-certificate',
},{
  title: '成品包装',
  icon:'gift',
}, {
  title: '运输管理',
  icon:'car',
}];
class Showstep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current1: 0,
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  next1() {
    const current1 = this.state.current1 + 1;
    this.setState({ current1 });
  }

  render() {
    const { current1} = this.state;
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
      <Form className={style.formStyle} onSubmit={this.handleSearch}>
        <Row gutter={24}>
          <Col span={6} key="order_id">
            <Form.Item label="订单编号" {...formItemLayout}>
              {getFieldDecorator('order_id', {
                rules: [
                  {
                    required: false,
                    message: '请输入订单编号',
                  },
                ],
              })(<Input placeholder="订单编号" />)}
            </Form.Item>
          </Col>
          <Col span={6} key="sign_date">
            <Form.Item label="签订日期" {...formItemLayout}>
              {getFieldDecorator('sign_date', {
                rules: [
                  {
                    required: false,
                    message: '请输入签订日期!',
                  },
                ],
              })(
                <DatePicker
                  placeholder="请选择签订时间"
                  style={{ width: '100%' }}
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={6} key="client">
            <Form.Item label="客户名称" {...formItemLayout}>
              {getFieldDecorator('client', {
                rules: [
                  {
                    required: false,
                    message: '请输入客户名称',
                  },
                ],
              })(<Input placeholder="客户名称" />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Button className={style.submitButton} type="primary" htmlType="submit">
                查询
              </Button>
              <Button className={style.submitButton} onClick={this.handleReset}>
                清空
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} className={style.rowStyle}>
          <Col className="gutter-row" span={4} key='purchase_link'>
            <span>订单处理流程</span>
          </Col>
          <Col className="gutter-row" span={16} key='purchase_step'>
            <Form className={style.formStyle}>
            <div className = {style.stepStyle}>
              <Steps current={current1} direction="vertical">
                {steps1.map(item => <Step key={item.title} title={item.title} icon={<Icon type={item.icon} />} />)}
              </Steps>
            </div>
              <div className={style.stepsAction}>
                {
                  current1 < steps1.length - 1
                  && <Button className={style.buttonStyle} type="primary" onClick={() => this.next1()}>下一步</Button>
                }
                {
                  current1 === steps1.length - 1
                  && <Button className={style.buttonStyle} type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
                }
              </div>
            </Form>
          </Col>
        </Row>
      </Form>
    );
  }
}
const Show = Form.create({ name: 'show' })(Showstep)
export default Show;
