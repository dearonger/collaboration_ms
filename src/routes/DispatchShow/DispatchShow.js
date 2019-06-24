import React from 'react';
import { Form, Row, Col, Input, Button, DatePicker, Table, Icon, } from 'antd';
import Highlighter from 'react-highlight-words';

import style from './DispatchShow.less';

class Dispatchshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{ key: '1', processID: '1', processName: '订单审核', section: '法务部', orderID: 'A19-1-86', startDate: '0.0', endDate: '3.4', }, { key: '2', processID: '1', processName: '订单审核', section: '法务部', orderID: ' C19-2-18', startDate: '3.4', endDate: '6.9', }, { key: '3', processID: '4', processName: '原料供应', section: '运营部', orderID: 'A19-1-86', startDate: '3.4', endDate: '6.4', }, { key: '4', processID: '7', processName: '前处理', section: '生产车间', orderID: 'A19-1-86', startDate: '6.4', endDate: '19.4', }, { key: '5', processID: '1', processName: '订单审核', section: '法务部', orderID: 'C19-1-10', startDate: '6.9', endDate: '11.9', }, { key: '6', processID: '1', processName: '订单审核', section: '法务部', orderID: 'A19-1-17', startDate: '11.9', endDate: '15.9', }, { key: '7', processID: '8', processName: '染色', section: '生产车间', orderID: 'A19-1-86', startDate: '19.4', endDate: '23.4', }, { key: '8', processID: '9', processName: '后整理', section: '生产车间', orderID: 'A19-1-86', startDate: '23.4', endDate: '29.4', }, { key: '9', processID: '1', processName: '订单审核', section: '法务部', orderID: 'C19-1-18', startDate: '15.9', endDate: '16.9', }, { key: '10', processID: '2', processName: '库存查询', section: '采购部', orderID: ' C19-2-18', startDate: '6.9', endDate: '8.4', }, { key: '11', processID: '1', processName: '订单审核', section: '法务部', orderID: 'A19-1-50', startDate: '16.9', endDate: '19.4', }, { key: '12', processID: '2', processName: '库存查询', section: '采购部', orderID: 'A19-1-50', startDate: '19.4', endDate: '19.9', }, { key: '13', processID: '6', processName: '车间打样', section: '工程部', orderID: 'A19-1-17', startDate: '15.9', endDate: '23.9', }, { key: '14', processID: '10', processName: '成品质检', section: '质量部', orderID: 'A19-1-86', startDate: '29.4', endDate: '30.9', }, { key: '15', processID: '4', processName: '原料供应', section: '运营部', orderID: 'C19-1-10', startDate: '11.9', endDate: '15.9', }, { key: '16', processID: '3', processName: '原料采购', section: '采购部', orderID: 'A19-1-50', startDate: '19.9', endDate: '29.9', }, { key: '17', processID: '7', processName: '前处理', section: '生产车间', orderID: 'C19-1-10', startDate: '19.4', endDate: '39.4', }, { key: '18', processID: '4', processName: '原料供应', section: '运营部', orderID: 'A19-1-17', startDate: '23.9', endDate: '26.9', }, { key: '19', processID: '11', processName: '成品包装', section: '运营车间', orderID: 'A19-1-86', startDate: '30.9', endDate: '34.9', }, { key: '20', processID: '5', processName: '原料质检', section: '质量部', orderID: 'A19-1-50', startDate: '29.9', endDate: '31.4', }, { key: '21', processID: '4', processName: '原料供应', section: '运营部', orderID: 'C19-1-18', startDate: '26.9', endDate: '30.9', }, { key: '22', processID: '8', processName: '染色', section: '生产车间', orderID: 'C19-1-10', startDate: '39.4', endDate: '46.4', }, { key: '23', processID: '1', processName: '订单审核', section: '法务部', orderID: ' C19-1-105', startDate: '19.4', endDate: '20.4', }, { key: '24', processID: '9', processName: '后整理', section: '生产车间', orderID: 'C19-1-10', startDate: '46.4', endDate: '54.9', }, { key: '25', processID: '7', processName: '前处理', section: '生产车间', orderID: 'A19-1-17', startDate: '39.4', endDate: '54.4', }, { key: '26', processID: '2', processName: '库存查询', section: '采购部', orderID: ' C19-1-105', startDate: '20.4', endDate: '21.4', }, { key: '27', processID: '3', processName: '原料采购', section: '采购部', orderID: ' C19-2-18', startDate: '29.9', endDate: '34.9', }, { key: '28', processID: '5', processName: '原料质检', section: '质量部', orderID: ' C19-2-18', startDate: '34.9', endDate: '37.4', }, { key: '29', processID: '10', processName: '成品质检', section: '质量部', orderID: 'C19-1-10', startDate: '54.9', endDate: '56.9', }, { key: '30', processID: '12', processName: '运输管理', section: '运输管理部', orderID: 'A19-1-86', startDate: '34.9', endDate: '36.9', }, { key: '31', processID: '8', processName: '染色', section: '生产车间', orderID: 'A19-1-17', startDate: '54.4', endDate: '60.9', }, { key: '32', processID: '6', processName: '车间打样', section: '工程部', orderID: 'C19-1-18', startDate: '30.9', endDate: '41.9', }, { key: '33', processID: '7', processName: '前处理', section: '生产车间', orderID: 'C19-1-18', startDate: '54.4', endDate: '63.4', }, { key: '34', processID: '4', processName: '原料供应', section: '运营部', orderID: 'A19-1-50', startDate: '31.4', endDate: '34.4', }, { key: '35', processID: '3', processName: '原料采购', section: '采购部', orderID: ' C19-1-105', startDate: '34.9', endDate: '39.9', }, { key: '36', processID: '1', processName: '订单审核', section: '法务部', orderID: 'A19-1-118', startDate: '20.4', endDate: '21.0', }, { key: '37', processID: '4', processName: '原料供应', section: '运营部', orderID: ' C19-2-18', startDate: '37.4', endDate: '41.4', }, { key: '38', processID: '7', processName: '前处理', section: '生产车间', orderID: ' C19-2-18', startDate: '63.4', endDate: '79.4', }, { key: '39', processID: '11', processName: '成品包装', section: '运营车间', orderID: 'C19-1-10', startDate: '56.9', endDate: '61.9', }, { key: '40', processID: '9', processName: '后整理', section: '生产车间', orderID: 'A19-1-17', startDate: '60.9', endDate: '67.4', }, { key: '41', processID: '5', processName: '原料质检', section: '质量部', orderID: ' C19-1-105', startDate: '39.9', endDate: '41.4', }, { key: '42', processID: '4', processName: '原料供应', section: '运营部', orderID: ' C19-1-105', startDate: '41.4', endDate: '43.4', }, { key: '43', processID: '8', processName: '染色', section: '生产车间', orderID: 'C19-1-18', startDate: '63.4', endDate: '66.9', }, { key: '44', processID: '8', processName: '染色', section: '生产车间', orderID: ' C19-2-18', startDate: '79.4', endDate: '84.4', }, { key: '45', processID: '7', processName: '前处理', section: '生产车间', orderID: 'A19-1-50', startDate: '79.4', endDate: '91.4', }, { key: '46', processID: '6', processName: '车间打样', section: '工程部', orderID: 'A19-1-118', startDate: '41.9', endDate: '49.9', }, { key: '47', processID: '10', processName: '成品质检', section: '质量部', orderID: 'A19-1-17', startDate: '67.4', endDate: '68.9', }, { key: '48', processID: '12', processName: '运输管理', section: '运输管理部', orderID: 'C19-1-10', startDate: '61.9', endDate: '63.9', }, { key: '49', processID: '11', processName: '成品包装', section: '运营车间', orderID: 'A19-1-17', startDate: '68.9', endDate: '73.9', }, { key: '50', processID: '6', processName: '车间打样', section: '工程部', orderID: ' C19-1-105', startDate: '49.9', endDate: '60.9', }, { key: '51', processID: '9', processName: '后整理', section: '生产车间', orderID: 'C19-1-18', startDate: '67.4', endDate: '72.4', }, { key: '52', processID: '7', processName: '前处理', section: '生产车间', orderID: ' C19-1-105', startDate: '91.4', endDate: '99.9', }, { key: '53', processID: '9', processName: '后整理', section: '生产车间', orderID: ' C19-2-18', startDate: '84.4', endDate: '90.4', }, { key: '54', processID: '10', processName: '成品质检', section: '质量部', orderID: ' C19-2-18', startDate: '90.4', endDate: '92.4', }, { key: '55', processID: '12', processName: '运输管理', section: '运输管理部', orderID: 'A19-1-17', startDate: '73.9', endDate: '75.9', }, { key: '56', processID: '10', processName: '成品质检', section: '质量部', orderID: 'C19-1-18', startDate: '92.4', endDate: '93.9', }, { key: '57', processID: '11', processName: '成品包装', section: '运营车间', orderID: ' C19-2-18', startDate: '92.4', endDate: '98.4', }, { key: '58', processID: '8', processName: '染色', section: '生产车间', orderID: 'A19-1-50', startDate: '91.4', endDate: '95.9', }, { key: '59', processID: '2', processName: '库存查询', section: '采购部', orderID: 'A19-1-118', startDate: '49.9', endDate: '50.4', }, { key: '60', processID: '11', processName: '成品包装', section: '运营车间', orderID: 'C19-1-18', startDate: '98.4', endDate: '101.4', }, { key: '61', processID: '9', processName: '后整理', section: '生产车间', orderID: 'A19-1-50', startDate: '95.9', endDate: '100.9', }, { key: '62', processID: '12', processName: '运输管理', section: '运输管理部', orderID: ' C19-2-18', startDate: '98.4', endDate: '100.4', }, { key: '63', processID: '10', processName: '成品质检', section: '质量部', orderID: 'A19-1-50', startDate: '100.9', endDate: '101.9', }, { key: '64', processID: '3', processName: '原料采购', section: '采购部', orderID: 'A19-1-118', startDate: '50.4', endDate: '55.4', }, { key: '65', processID: '8', processName: '染色', section: '生产车间', orderID: ' C19-1-105', startDate: '99.9', endDate: '103.9', }, { key: '66', processID: '5', processName: '原料质检', section: '质量部', orderID: 'A19-1-118', startDate: '55.4', endDate: '56.4', }, { key: '67', processID: '11', processName: '成品包装', section: '运营车间', orderID: 'A19-1-50', startDate: '101.9', endDate: '105.4', }, { key: '68', processID: '9', processName: '后整理', section: '生产车间', orderID: ' C19-1-105', startDate: '103.9', endDate: '107.4', }, { key: '69', processID: '10', processName: '成品质检', section: '质量部', orderID: ' C19-1-105', startDate: '107.4', endDate: '109.4', }, { key: '70', processID: '11', processName: '成品包装', section: '运营车间', orderID: ' C19-1-105', startDate: '109.4', endDate: '113.4', }, { key: '71', processID: '12', processName: '运输管理', section: '运输管理部', orderID: 'C19-1-18', startDate: '101.4', endDate: '103.4', }, { key: '72', processID: '12', processName: '运输管理', section: '运输管理部', orderID: 'A19-1-50', startDate: '105.4', endDate: '107.4', }, { key: '73', processID: '12', processName: '运输管理', section: '运输管理部', orderID: ' C19-1-105', startDate: '113.4', endDate: '115.4', }, { key: '74', processID: '4', processName: '原料供应', section: '运营部', orderID: 'A19-1-118', startDate: '56.4', endDate: '58.4', }, { key: '75', processID: '7', processName: '前处理', section: '生产车间', orderID: 'A19-1-118', startDate: '99.9', endDate: '107.9', }, { key: '76', processID: '8', processName: '染色', section: '生产车间', orderID: 'A19-1-118', startDate: '107.9', endDate: '109.9', }, { key: '77', processID: '9', processName: '后整理', section: '生产车间', orderID: 'A19-1-118', startDate: '109.9', endDate: '112.4', }, { key: '78', processID: '10', processName: '成品质检', section: '质量部', orderID: 'A19-1-118', startDate: '112.4', endDate: '113.4', }, { key: '79', processID: '11', processName: '成品包装', section: '运营车间', orderID: 'A19-1-118', startDate: '113.4', endDate: '115.4', }, { key: '80', processID: '12', processName: '运输管理', section: '运输管理部', orderID: 'A19-1-118', startDate: '115.4', endDate: '117.4', }],
      searchText: '',
      columns: [{
        title: "业务编号",
        dataIndex: "processID",
        key: "processID",
      }, {
        title: "业务名称",
        dataIndex: "processName",
        key: "processName",
        ...this.getColumnSearchProps('processName'),
      }, {
        title: "所属部门",
        dataIndex: "section",
        key: "section",
      }, {
        title: "订单编号",
        dataIndex: "orderID",
        key: "orderID",
      }, {
        title: "开始时间",
        dataIndex: "startDate",
        key: "startDate",
      }, {
        title: "结束时间",
        dataIndex: "endDate",
        key: "endDate",
      }
      ]
    };
  }
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => { this.searchInput = node; }}
            placeholder={`搜索业务名称`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            查找
        </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            重置
        </Button>
        </div>
      ),
    filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  })

  render() {
    const { dataSource, columns } = this.state;
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
          <Col span={6} key="dispatch_id">
            <Form.Item label="调度表编号" {...formItemLayout}>
              {getFieldDecorator('dispatch_id', {
                rules: [
                  {
                    required: false,
                    message: '请输入调度编号',
                  },
                ],
              })(<Input placeholder="调度表编号" />)}
            </Form.Item>
          </Col>
          <Col span={6} key="dispatch_date">
            <Form.Item label="调度日期" {...formItemLayout}>
              {getFieldDecorator('dispatch_date', {
                rules: [
                  {
                    required: false,
                    message: '请输入调度日期!',
                  },
                ],
              })(
                <DatePicker
                  placeholder="请选择调度日期"
                  style={{ width: '100%' }}
                />,
              )}
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
          <Table dataSource={dataSource} columns={columns} bordered />
        </div>
      </Form>
    );
  }
}

const DispatchShow = Form.create({ name: 'search' })(Dispatchshow);
export default DispatchShow;
