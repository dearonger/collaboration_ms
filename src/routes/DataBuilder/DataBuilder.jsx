import React from 'react';
import { Form, Row, Col, Input, Button, DatePicker, Table, Popconfirm, Badge, Divider, Icon } from 'antd';

import style from '../UserManage/User.less';

const { Column } = Table;
class User extends React.Component {
  state = {
    dataSource: [{
      key: '1',
      logID: 'dw-admin',
      name: '管理员',
      group: '群组一',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '1',
      email: 'student@edu.com'
    }, {
      key: '2',
      logID: 'test-admin',
      name: '测试管理员',
      group: '群组一',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '3',
      logID: 'test-user',
      name: '测试用户',
      group: '群组一',
      role: '群组成员',
      phone: '13900000000',
      canlog: '0',
    }, {
      key: '4',
      logID: 'student1',
      name: '学生1',
      group: '群组二',
      role: '群组成员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '5',
      logID: 'student2',
      name: '学生2',
      group: '群组二',
      role: '群组成员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '6',
      logID: 'student3',
      name: '学生3',
      group: '群组二',
      role: '群组成员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '7',
      logID: 'teacher1',
      name: '教师',
      group: '群组二',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '8',
      logID: 'teacher2',
      name: '测试教师',
      group: '群组二',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '0',
    }, {
      key: '9',
      logID: 'dw-admin',
      name: '管理员',
      group: '群组一',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '10',
      logID: 'dw-admin',
      name: '管理员',
      group: '群组一',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '11',
      orderID: 'C19-2-188',
      logID: 'dw-admin',
      name: '管理员',
      group: '群组一',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '12',
      logID: 'dw-admin',
      name: '管理员',
      group: '群组一',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '1',
    }, {
      key: '13',
      logID: 'dw-admin',
      name: '管理员',
      group: '群组一',
      role: '群组管理员',
      phone: '13900000000',
      canlog: '1',
    }],
    count: 13,
    visibleFlag: '',
  };

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

  handleModalVisible = (flag, record) => {
    this.setState({
      visibleFlag: flag,
      record,
    });

    console.log("record", record)
  }

  render() {
    const { dataSource, visibleFlag, record, } = this.state;
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

    const rowSelection = {
      selectedRowKeys: [],
      onChange: () => { },
    };

    return (
      <Form className={style.formStyle} onSubmit={this.handleSearch} >
        <Row gutter={24}>
          <Col span={6} key="login_id">
            <Form.Item label="登录账号" {...formItemLayout}>
              {getFieldDecorator('login_id', {
                rules: [
                  {
                    required: false,
                    message: '请输入登录账号',
                  },
                ],
              })(<Input placeholder="请输入" />)}
            </Form.Item>
          </Col>
          <Col span={6} key="sign_date">
            <Form.Item label="用户名" {...formItemLayout}>
              {getFieldDecorator('clientName', {
                rules: [
                  {
                    required: false,
                    message: '请输入用户名称',
                  },
                ],
              })(<Input placeholder="请输入" />)}
            </Form.Item>
          </Col>
          <Col span={6} key="clientName">
            <Form.Item label="所属组" {...formItemLayout}>
              {getFieldDecorator('clientName', {
                rules: [
                  {
                    required: false,
                    message: '请输入所属组',
                  },
                ],
              })(<Input placeholder="请输入" />)}
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
        <div>
          <Button className={style.submitButton}
            style={{ marginLeft: 10 }} type="primary" htmlType="submit"
            onClick={() => this.handleModalVisible('add')} >
            <Icon type="plus" />
            新增
          </Button>
          <Button className={style.submitButton} onClick={this.handleReset}>
            <Icon type="export" />
            导出
          </Button>
        </div>
        <div className={style.searchContent}>
          <Table dataSource={dataSource} bordered rowSelection={rowSelection} >

            <Column
              title="ID"
              dataIndex="id"
              key="id"
            />
            <Column
              title="任务名称"
              dataIndex="name"
              key="name"
            />
            <Column
              title="任务描述"
              dataIndex="desc"
              key="desc"
            />
            <Column
              title="文件数量"
              dataIndex="num"
              key="num"
            />
            <Column
              title="抽取成功"
              dataIndex="success"
              key="success"
            />
            <Column
              title="编辑"
              dataIndex="edit"
              key="edit"
            />
            <Column
              title="录入"
              dataIndex="in"
              key="in"
            />
            <Column
              title="创建人"
              dataIndex="author"
              key="author"
            />
            <Column
              title="状态"
              dataIndex="canlog"
              key="canlog"
              render={(text, record) => {
                return (
                  <>
                    <Badge status={record && record.canlog === '1' ? 'success' : 'error'} />
                    <span style={{ marginLeft: 8 }}>{record && record.canlog === '1' ? '有效' : '失效'}</span>
                  </>)
              }}
            />
            <Column
              title="更新时间"
              dataIndex="time"
              key="time"
            />
            <Column
              title="操作"
              key="action"
              render={(text, record) => (
                dataSource.length >= 1
                  ? (
                    <>
                      <a href="javascript:;" onClick={() => this.handleModalVisible('edit', record)}>编辑</a>
                      <Divider type='vertical' />
                      <Popconfirm title="确定删除？" onConfirm={() => this.handleDelete(record.key)}>
                        <a href="javascript:;">删除</a>
                      </Popconfirm>
                      <Divider type='vertical' />
                      <Popconfirm title="确定重置密码？" onConfirm={() => this.handleDelete(record.key)}>
                        <a href="javascript:;">重置密码</a>
                      </Popconfirm>
                    </>
                  ) : null
              )}
            />
          </Table>
          {/* <CreateUser
            modalVisible={visibleFlag === 'add' || visibleFlag === 'edit'}
            handleModalVisible={this.handleModalVisible}
            record={record}
          /> */}
        </div>
      </Form>
    );
  }
}

const UserForm = Form.create({ name: 'user' })(User);
export default UserForm;
