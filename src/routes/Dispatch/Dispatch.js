import React from 'react';
import { Table, Button } from 'antd';

const columns = [{
  title: '订单编号',
  dataIndex: 'orderID',
}, {
  title: '客户名称',
  dataIndex: 'clientName',
}, {
  title: '客户比重系数',
  dataIndex: 'importent',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.importent - b.importent,
}, {
  title: '交付日期',
  dataIndex: 'deliveDate',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.deliveDate - b.deliveDate,
}, {
  title: '业务序列',
  dataIndex: 'processOrder',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.processOrder - b.processOrder,
}, {
  title: '商品颜色',
  dataIndex: 'color',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.color - b.color,
}];

const data = [{
  key: '1',
  orderID: 'A19-1-17',
  clientName: '上海菲姿服饰有限公司',
  importent: '0.8',
  deliveDate: '2019-02-15',
  processOrder: '1 6 4 7 8 9 10 11 12',
  color: '303C',
}, {
  key: '2',
  orderID: 'A19-1-50',
  clientName: '上海西丝罗服装有限公司',
  importent: '0.2',
  deliveDate: '2019-02-11',
  processOrder: '1 2 3 5 4 7 8 9 10 11 12',
  color: '358C',
}, {
  key: '3',
  orderID: 'A19-1-86',
  clientName: '华利达服装',
  importent: '0.6',
  deliveDate: '2019-02-28',
  processOrder: '1 4 7 8 9 10 11 12',
  color: '3375C',
}, {
  key: '4',
  orderID: 'A19-1-118',
  clientName: '宁波乐卡克服饰有限公司',
  importent: '0.5',
  deliveDate: '2019-02-15',
  processOrder: '1 6 2 3 5 4 7 8 9 10 11 12',
  color: '3385C',
}, {
  key: '5',
  orderID: 'C19-1-10',
  clientName: '常州廣田服装有限公司',
  importent: '0.4',
  deliveDate: '2019-02-15',
  processOrder: '1 4 7 8 9 10 11 12',
  color: '2705C',
}, {
  key: '6',
  orderID: 'C19-1-18',
  clientName: '广州市猜想服饰有限公司',
  importent: '0.9',
  deliveDate: '2019-02-20',
  processOrder: '1 4 6 7 8 9 10 11 12',
  color: '2715C',
}, {
  key: '7',
  orderID: 'C19-1-105',
  clientName: '北京五木服装有限公司',
  importent: '1.0',
  deliveDate: '2019-02-25',
  processOrder: '1 2 3 5 4 6 7 8 9 10 11 12',
  color: '3965C',
}, {
  key: '8',
  orderID: 'C19-1-186',
  clientName: '阳光国际有限公司',
  importent: '0.7',
  deliveDate: '2019-02-13',
  processOrder: '1 2 3 5 4 7 8 9 10 11 12',
  color: '3995C',
}, {
  key: '9',
  orderID: 'A19-2-1',
  clientName: '上海西丝罗服装有限公司',
  importent: '0.2',
  deliveDate: '2019-03-15',
  processOrder: '1 4 6 7 8 9 10 11 12',
  color: '3035C',
}, {
  key: '10',
  orderID: 'A19-2-108',
  clientName: '深圳富安娜家居用品股份有限公司',
  importent: '0.8',
  deliveDate: '2019-03-01',
  processOrder: '1 6 2 3 5 4 7 8 9 10 11 12',
  color: '315C',
}, {
  key: '11',
  orderID: 'A19-1-17',
  clientName: '',
  importent: '',
  deliveDate: '',
  processOrder: '',
  color: '',
}, {
  key: '12',
  orderID: 'A19-1-17',
  clientName: '',
  importent: '',
  deliveDate: '',
  processOrder: '',
  color: '',
}, {
  key: '13',
  orderID: 'A19-1-17',
  clientName: '',
  importent: '',
  deliveDate: '',
  processOrder: '',
  color: '',
}, {
  key: '14',
  orderID: 'A19-1-17',
  clientName: '',
  importent: '',
  deliveDate: '',
  processOrder: '',
  color: '',
},];

class Dispatch extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            调度
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选择了 ${selectedRowKeys.length} 个订单` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered />
      </div>
    );
  }
}
export default Dispatch;
