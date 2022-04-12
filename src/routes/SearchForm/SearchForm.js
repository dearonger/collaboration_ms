import React from 'react';
import { Form, Row, Col, Input, Button, DatePicker, Table, Popconfirm } from 'antd';

import style from './SearchForm.less';

const { Column } = Table;
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [{
        key: '1',
        orderID: 'A19-1-17',
        clientName: '上海菲姿服饰有限公司',
        goods: '查看',
        signDate: '2019-01-05',
<<<<<<< HEAD
        deliveDate: '2019-02-05',
        status: '原料采购',
=======
        deliveDate: '2019-02-15',
        status: '车间打样',
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
      }, {
        key: '2',
        orderID: 'A19-1-50',
        clientName: '上海西丝罗服装有限公司',
        goods: '查看',
        signDate: '2019-01-11',
<<<<<<< HEAD
        deliveDate: '2019-03-11',
=======
        deliveDate: '2019-02-11',
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
        status: '库存查询',
      }, {
        key: '3',
        orderID: 'A19-1-86',
        clientName: '华利达服装',
        goods: '查看',
<<<<<<< HEAD
        signDate: '2019-01-16',
        deliveDate: '2019-02-28',
        status: '订单生产',
=======
        signDate: '2019-01-12',
        deliveDate: '2019-02-28',
        status: '染色',
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
      }, {
        key: '4',
        orderID: 'A19-1-118',
        clientName: '宁波乐卡克服饰有限公司',
        goods: '查看',
<<<<<<< HEAD
        BlacksignDate: '2019-01-28',
        deliveDate: '2019-02-15',
        status: '原料质检',
=======
        signDate: '2019-01-12',
        deliveDate: '2019-02-15',
        status: '车间打样',
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
      }, {
        key: '5',
        orderID: 'C19-1-10',
        clientName: '常州廣田服装有限公司',
        goods: '查看',
        signDate: '2019-01-09',
<<<<<<< HEAD
        deliveDate: '2019-02-09',
        status: '订单生产',
=======
        deliveDate: '2019-02-15',
        status: '前处理',
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
      }, {
        key: '6',
        orderID: 'C19-1-18',
        clientName: '广州市猜想服饰有限公司',
        goods: '查看',
        signDate: '2019-01-10',
        deliveDate: '2019-02-20',
<<<<<<< HEAD
        status: '订单生产',
=======
        status: '原料供应',
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
      }, {
        key: '7',
        orderID: 'C19-1-105',
        clientName: '北京五木服装有限公司',
        goods: '查看',
<<<<<<< HEAD
        signDate: '2019-01-25',
        deliveDate: '2019-02-25',
        status: '原料供应',
      }, {
        key: '8',
        orderID: 'C19-2-186',
        clientName: '阳光国际有限公司',
        goods: '查看',
        signDate: '2019-02-03',
        deliveDate: '2019-03-13',
        status: '订单审核',
      }, {
        key: '9',
        orderID: 'C19-2-188',
        clientName: 'Black',
        goods: '查看',
        signDate: 'Sidney No. 1 Lake Park',
        deliveDate: '',
        status: 1,
      }, {
        key: '10',
        orderID: 'C19-2-188',
        clientName: 'Black',
        goods: '查看',
        signDate: 'Sidney No. 1 Lake Park',
        deliveDate: '',
        status: 1,
=======
        signDate: '2019-01-14',
        deliveDate: '2019-02-25',
        status: '库存查询',
      }, {
        key: '8',
        orderID: 'C19-1-186',
        clientName: '阳光国际有限公司',
        goods: '查看',
        signDate: '2019-01-14',
        deliveDate: '2019-02-15',
        status: '原料采购',
      }, {
        key: '9',
        orderID: 'A19-2-1',
        clientName: '上海西丝罗服装有限公司',
        goods: '查看',
        signDate: '2019-02-15',
        deliveDate: '2019-03-15',
        status: '未处理',
      }, {
        key: '10',
        orderID: 'A19-2-108',
        clientName: '深圳富安娜家居用品股份有限公司',
        goods: '查看',
        signDate: '2019-02-18',
        deliveDate: '2019-03-01',
        status: '未处理',
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
      }, {
        key: '11',
        orderID: 'C19-2-188',
        clientName: 'Black',
        goods: '查看',
        signDate: 'Sidney No. 1 Lake Park',
        deliveDate: '',
<<<<<<< HEAD
        status: 1,
=======
        status: '未处理',
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
      }, {
        key: '12',
        orderID: 'C19-2-188',
        clientName: 'Black',
        goods: '查看',
        signDate: 'Sidney No. 1 Lake Park',
        deliveDate: '',
        status: 1,
      }, {
        key: '13',
        orderID: 'C19-2-188',
        clientName: 'Black',
        goods: '查看',
        signDate: 'Sidney No. 1 Lake Park',
        deliveDate: '',
        status: 1,
      }],
      count: 13,
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }

  render() {
    const { dataSource } = this.state;
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
      <Form className={style.formStyle} onSubmit={this.handleSearch} >
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
          <Col span={6} key="clientName">
            <Form.Item label="客户名称" {...formItemLayout}>
              {getFieldDecorator('clientName', {
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
                查找
              </Button>
              <Button className={style.submitButton} onClick={this.handleReset}>
                清空
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <div className={style.searchContent}>
          <Table dataSource={dataSource} bordered>
            <Column
              title="订单编号"
              dataIndex="orderID"
              key="orderID"
            />
            <Column
              title="客户名称"
              dataIndex="clientName"
              key="clientName"
            />
            <Column
              title="商品详情"
              dataIndex="goods"
              key="goods"
              render={(text, record) => (
                <span>
                  <a href="javascript:;">查看</a>
                </span>
              )}
            />
            <Column
              title="签订日期"
              dataIndex="signDate"
              key="signDate"
            />
            <Column
              title="交付日期"
              dataIndex="deliveDate"
              key="deliveDate"
            />
            <Column
              title="订单状态"
              dataIndex="status"
              key="status"
            />
            <Column
              title="操作"
              key="action"
              render={(text, record) => (
                dataSource.length >= 1
                  ? (
                    <Popconfirm title="确定删除？" onConfirm={() => this.handleDelete(record.key)}>
                      <a href="javascript:;">删除</a>
                    </Popconfirm>
                  ) : null
              )}
            />
          </Table>
        </div>
      </Form>
    );
  }
}

const SearchForm = Form.create({ name: 'search' })(Search);
export default SearchForm;
