import React from 'react';
import { Form, Row, Col, Input, Button, DatePicker, Table, Card, Tag, Divider, Icon } from 'antd';

import style from '../UserManage/User.less';

const { Column } = Table;
const { TextArea } = Input;
class User extends React.Component {
  state = {
    dataSource: [{
      id: '1',
      name: '测试图谱',
      desc: '',
      num: '1',
      success: '0',
      edit: '1',
      in: '0',
      author: 'wxx',
      status: 'edit',
      time: '10分钟前'
    }, {
      id: '2',
      name: '测试图谱2',
      desc: '',
      num: '1',
      success: '1',
      edit: '0',
      in: '0',
      author: 'wxx',
      status: 'success',
      time: '35分钟前'
    }, {
      id: '3',
      name: 'C语言图谱',
      desc: '',
      num: '1',
      success: '0',
      edit: '0',
      in: '0',
      author: 'wxx',
      status: 'notIn',
      time: '10分钟前'
    },],
    count: 2,
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

    const addList = [
      {
        id: '1',
        file: '测试文档',
        desc: '',
        src: '测试组',
        owner: 'wxx',
      }, {
        id: '2',
        file: '测试文档',
        desc: '',
        src: '测试组',
        owner: 'wangxx',
      }, {
        id: '3',
        file: '测试文档',
        desc: '',
        src: '测试组',
        owner: 'admin',
      }
    ];
    const addColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '文件名',
        dataIndex: 'file',
        key: 'file',
      },
      {
        title: '资源组',
        dataIndex: 'src',
        key: 'src',
      },
      {
        title: '上传者',
        dataIndex: 'owner',
        key: 'owner',
      },
    ]

    return (
      <Form className={style.formStyle} onSubmit={this.handleSearch} >
        {visibleFlag !== 'add' ?
          <>
            <Row gutter={24}>
              <Col span={6} key="login_id">
                <Form.Item label="任务名称" {...formItemLayout}>
                  {getFieldDecorator('login_id', {
                    rules: [
                      {
                        required: false,
                        message: '请输入任务名称',
                      },
                    ],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
              </Col>
              <Col span={6} offset={12}>
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
                <Icon type="import" />
                录入
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
                  dataIndex="status"
                  key="status"
                  render={item => {
                    return (<>
                      {item === 'success'
                        ? <Tag color="#87d068">抽取成功</Tag> : item === 'notIn' ?
                          <Tag color="#ff6969">待抽取</Tag> : <Tag color="#108ee9">抽取中</Tag>}
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
                          <a href="javascript:;" onClick={() => this.handleModalVisible('edit', record)}>查看</a>
                          <Divider type='vertical' />
                          <a href="javascript:;">更多</a>
                        </>
                      ) : null
                  )}
                />
              </Table>
            </div>
          </> :
          <div>
            <span style={{ fontSize: 17, fontWeight: 500, color: 'rgba(0, 0, 0, 0.85)', cursor: 'pointer' }} onClick={() => this.handleModalVisible('normal', null)}>
              <Icon type="left" style={{ marginRight: 8 }} />
            </span>
            <Card title="基本信息" bordered={false} className={style.addInfoCard}>
              <Row gutter={24}>
                <Col span={10} key="login_id">
                  <Form.Item label="任务名称" {...formItemLayout}>
                    {getFieldDecorator('login_id', {
                      rules: [
                        {
                          required: true,
                          message: '请输入任务名称',
                        },
                      ],
                    })(<Input placeholder="请输入" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={10} key="login_id">
                  <Form.Item label="任务描述" {...formItemLayout}>
                    {getFieldDecorator('login_id', {
                      rules: [
                        {
                          required: false,
                          message: '请输入任务描述',
                        },
                      ],
                    })(<TextArea placeholder="请输入" />)}
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="文件配置" bordered={false} className={style.addInfoCard}>
              <Row gutter={24}>
                <Col span={6} key="login_id">
                  <Form.Item label="文件名称" {...formItemLayout}>
                    {getFieldDecorator('login_id', {
                      rules: [
                        {
                          required: true,
                          message: '请输入文件名称',
                        },
                      ],
                    })(<Input placeholder="请输入" />)}
                  </Form.Item>
                </Col>
                <Table
                  size="middle"
                  rowKey={record => record.id}
                  dataSource={addList}
                  columns={addColumns}
                  rowSelection={rowSelection}
                // className={style.extNumber}
                />
              </Row>
            </Card>
            <div>
              <Button type="primary"
                style={{ marginRight: 16 }}
                onClick={() => this.handleModalVisible('normal', null)}
              >
                确定
              </Button>
              <Button
                style={{ marginRight: 16 }}
                onClick={() => this.handleModalVisible('normal', null)}
              >
                取消
              </Button>
            </div>
          </div>
        }
      </Form>
    );
  }
}

const UserForm = Form.create({ name: 'user' })(User);
export default UserForm;
