import React from 'react';
import { Form, Row, Col, Input, Button, DatePicker, } from 'antd';

import style from './SearchForm.less';

class Search extends React.Component {
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
        <div className={style.searchContent}>暂无相关数据</div>
      </Form>
    );
  }
}

const SearchForm = Form.create({ name: 'search' })(Search);
export default SearchForm;
