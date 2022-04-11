import React from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Popconfirm,
  Radio,
  Row,
  Spin,
  Table,
  Tag,
  Input,
  Icon,
} from 'antd';

import CreateEntity from './CreateEntity';
import styles from './Entity.less';

class Entity extends React.Component {
  state = {
    record: {},
    activeIndex: null,
    visibleFlag: null,
  }

  setClassName = (index) => {
    return index = this.state.activeIndex ? `${styles.clickedRow}` : '';
  }

  handleModalVisible = (flag) => {
    this.setState({
      visibleFlag: flag,
    })
  }

  handleAttr = (record) => {
    this.setState({
      record,
    })
  }

  render() {

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
    const list = [
      {
        id: 1,
        entity: '函数',
        bio: 'FUN',
        comefrom: '',
        color: 'blue',
        operat: '删除',
        attr: [
          {
            attrName: '描述',
            type: 'string',
            desc: '函数具体功能描述',
            color: 'yellow',
          },
          {
            attrName: '举例',
            type: 'string',
            desc: '例子代码',
            color: 'orange',
          },
        ],
      }, {
        id: 2,
        entity: '运算符',
        bio: 'ORP',
        comefrom: '',
        color: 'pink',
        operat: '删除',
        attr: [
          {
            attrName: '优先级',
            type: 'int',
            desc: '1',
            color: 'orange',
          },
          {
            attrName: '结合律',
            type: 'string',
            desc: '左结合',
            color: 'orange',
          },
        ],
      },
    ];

    const columns = [
      {
        title: '实体类型',
        dataIndex: 'entity',
        key: 'entity',
      },
      {
        title: '实体标识',
        dataIndex: 'bio',
        key: 'bio',
      },
      {
        title: '继承来自',
        dataIndex: 'comefrom',
        key: 'comefrom',
      },
      {
        title: '颜色',
        dataIndex: 'color',
        key: 'color',
        render: item => {
          return <Tag color={item}>{item}</Tag>;
        }
      }, {
        title: '操作',
        key: 'operat',
        render: (text, record) => (
          <Popconfirm title="确定删除？" onConfirm={() => console.log(record.key)}>
            <a onClick={() => this.handleAttr(record)}>{record.operat}</a>
          </Popconfirm>
        )
      },
    ];

    const attrColumns = [
      {
        title: '属性名称',
        dataIndex: 'attrName',
        key: 'attrName',
      }, {
        title: '数据类型',
        dataIndex: 'type',
        key: 'type',
      }, {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
      }, {
        title: '颜色',
        dataIndex: 'color',
        key: 'color',
        render: item => {
          return <Tag color={item}>{item}</Tag>;
        }
      }, {
        title: '操作',
        key: 'subOperat',
        render: (text, record) => (
          <Popconfirm title="确定删除？" onConfirm={() => console.log(record.key)}>
            <a onClick={() => this.handleAttr(record)}>删除</a>
          </Popconfirm>
        )

      }
    ]

    const { record, visibleFlag } = this.state;

    return (
      <Card bordered={false}>
        <div className={styles.salesCard}>
          <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={12} sm={24} style={{ paddingRight: 0 }}>
              <Row>
                <Col span={10} key="login_id">
                  <Form.Item label="实体类型" {...formItemLayout} style={{ margin: 16, marginLeft: 0 }}>
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item style={{ margin: 16 }}>
                    <Button type="primary" htmlType="submit">
                      查找
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={4} style={{ paddingLeft: 16 }}>
                  <Form.Item style={{ margin: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={() => this.handleModalVisible('entity')}>
                      <Icon type="plus" />
                      新增实体
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
              <Table
                size="middle"
                rowKey={record => record.id}
                dataSource={list}
                columns={columns}
                onRow={(record, index) => {
                  return {
                    onClick: () => {
                      this.handleAttr(record);
                    },
                  };
                }}
                className={styles.extNumber}
              />
            </Col>
            <Col md={12} sm={24} style={{ borderLeft: 'solid #ccc 1px' }}>
              <Spin spinning={false} >
                <div className={styles.salesRank}
                  style={{ display: 'block' }}>
                  <Row>
                    <Col>
                      <div style={{ marginTop: 10, marginRight: 20 }}>
                        <div style={{ display: 'inline' }}><h4
                          className={styles.rankingTitle}>{`${record.entity || ''}实体属性`}</h4></div>
                      </div>

                      <Row>
                        <Col span={10} key="login_id">
                          <Form.Item label="属性名称" {...formItemLayout} style={{ margin: 16, marginLeft: 0 }}>
                            <Input placeholder="请输入" />
                          </Form.Item>
                        </Col>
                        <Col span={7}>
                          <Form.Item style={{ margin: 16 }}>
                            <Button type='ghost' htmlType="submit">
                              查找
                            </Button>
                          </Form.Item>
                        </Col>
                        <Col span={4} style={{ paddingLeft: 16 }}>
                          <Form.Item style={{ margin: 16 }}>
                            <Button type="ghost" htmlType="submit" onClick={() => this.handleModalVisible('attr')}>
                              <Icon type="plus" />
                              新增属性
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row>

                      <Table
                        size='small'
                        rowKey={record => record.id}
                        dataSource={record && record.attr}
                        columns={attrColumns}
                        className={styles.extNumber}
                      />
                    </Col>
                  </Row>
                </div>
              </Spin>
            </Col>
          </Row>
        </div>
        <CreateEntity
          visibleFlag={visibleFlag}
          handleModalVisible={this.handleModalVisible}
        />
      </Card>
    )
  }
}

export default Entity;
