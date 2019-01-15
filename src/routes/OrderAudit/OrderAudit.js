import React from 'react';
import { Form, Input, Row, Col, Button, DatePicker } from 'antd';

import style from './OrderAudit.less';

class Orderaudit extends React.Component {
    handleSearch = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        console.log('Received values of form: ', values);
      });
    };
  
    handleReset = () => {
      this.props.form.resetFields();
    };
  
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
            <Col span={6} key="specimen">
              <Form.Item label="业务员姓名" {...formItemLayout}>
                {getFieldDecorator('specimen', {
                  rules: [
                    {
                      required: false,
                      message: '请输入业务员',
                    },
                  ],
                })(<Input placeholder="业务员姓名" />)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button className={style.submitButton} type="primary" htmlType="submit">
                  查找
                </Button>
                <Button className={style.submitButton} onClick={this.handleReset}>
                  清空
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <div className={style.searchContent}>
            <Row gutter={16} >   
              <Col className="gutter-row" span={8} key='audit'>
                <Form.Item
                label="审核结果"
                {...formItemLayout}
                >
                {getFieldDecorator('audit', {
                  rules: [{
                    required: true, message: '请输入审核结果!',
                  }],
                })(
                  <Input />
                )}
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8} key='auditor'>
                <Form.Item
                label="审核人"
                {...formItemLayout}
                >
                {getFieldDecorator('auditor', {
                  rules: [{
                    required: true, message: '请输入审核人!',
                  }],
                })(
                  <Input />
                )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={8} key='order_id'>
                <Form.Item
                label="订单号"
                {...formItemLayout}
                >
                <label>1573476827</label>
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8} key='order_status'>
                <Form.Item
                label="订单状态"
                {...formItemLayout}
                >
                <label>未完成</label>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={8} key='client_id'>
                <Form.Item
                label="客户编号"
                {...formItemLayout}
                >
                <label>3476827</label>
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8} key='client_name'>
                <Form.Item
                label="客户名称"
                {...formItemLayout}
                >
                <label>张全</label>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>  
              <Col className="gutter-row" span={8} key='sign_date'>
                <Form.Item
                label="签订日期"
                {...formItemLayout}
                >
                <label>2019-01-10</label>
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8} key='deliver_date'>
                <Form.Item
                label="交货日期"
                {...formItemLayout}
                >
                <label>2019-02-10</label>
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8} key='specimen'>
                <Form.Item
                label="业务员"
                {...formItemLayout}
                >
                <label>王胜</label>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}> 
              <Col className="gutter-row" span={8} key='craft'>
                <Form.Item
                label="工艺"
                {...formItemLayout}
                >
                <p>......</p>
                </Form.Item>
              </Col>
            </Row>  
            <Row>
              <Col span={48} key='submit'>
                <Form.Item >
                  <Button type="primary" htmlType="submit" className={style.submitButton}>提交</Button>
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
      );
    }
}
const OrderAudit = Form.create()(Orderaudit);
export default OrderAudit;
