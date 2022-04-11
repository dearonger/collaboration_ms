import React from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Popconfirm,
  Row,
  Spin,
  Table,
  Input,
  Icon,
} from 'antd';

import CreateRelation from './CreateRelation';
import styles from '../Entity/Entity.less';

class Relation extends React.Component {
  state = {
    record: {},
    activeIndex: null,
    visibleFlag: null,
  }

  setClassName = (index) => {
    return index = this.state.activeIndex ? `${styles.clickedRow}` : '';
  }

  handleAttr = (record) => {
    this.setState({
      record,
    })
  }

  handleModalVisible = (flag) => {
    this.setState({
      visibleFlag: flag,
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
        relationName: '包括',
        startType: '编程语言',
        endType: '函数',
        attr: [
          {
            attrName: '',
            type: '',
            desc: '',
            color: 'yellow',
          },
        ],
      }, {
        id: 2,
        relationName: '包括',
        startType: '编程语言',
        endType: '运算符',
        attr: [
          {
            attrName: '',
            type: '',
            unit: '',
            color: '',
          },
        ],
      },
    ];
    const columns = [
      {
        title: '关系名称',
        dataIndex: 'relationName',
        key: 'relationName',
      }, {
        title: '起始实体类型',
        dataIndex: 'startType',
        key: 'startType',
      }, {
        title: '结束实体类型',
        dataIndex: 'endType',
        key: 'endType',
      }, {
        title: '操作',
        key: 'operat',
        render: (text, record) =>
          <Popconfirm title="确定删除？" onConfirm={() => console.log(record.key)}>
            <a onClick={() => this.handleAttr(record)}>删除</a>
          </Popconfirm>

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
        title: '操作',
        key: 'operat',
        render: (text, record) =>
          <Popconfirm title="确定删除？" onConfirm={() => console.log(record.key)}>
            <a onClick={() => this.handleAttr(record)}>删除</a>
          </Popconfirm>

      },
    ]

    const { record, visibleFlag } = this.state;

    return (
      <Card bordered={false}>
        <div className={styles.salesCard}>
          <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={12} sm={24} style={{ paddingRight: 0 }}>
              <Row>
                <Col span={10} key="login_id">
                  <Form.Item label="关系名称" {...formItemLayout} style={{ margin: 16, marginLeft: 0 }}>
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
                    <Button type="primary" htmlType="submit" onClick={() => this.handleModalVisible('relation')}>
                      <Icon type="plus" />
                      新增关系
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
              <Spin spinning={false}>
                <div className={styles.salesRank}
                  style={{ display: 'block' }}>
                  <Row>
                    <Col>
                      <div style={{ marginTop: 10, marginRight: 20 }}>
                        <div style={{ display: 'inline' }}><h4
                          className={styles.rankingTitle}>{`${record.entity || ''}关系属性`}</h4></div>
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
        <CreateRelation
          visibleFlag={visibleFlag}
          handleModalVisible={this.handleModalVisible}
        />
      </Card>
    )
  }
}

export default Relation;
