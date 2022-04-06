import React from 'react';
import { Table, Input, Button, Popconfirm, Form, } from 'antd';

import style from './User.less';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  }

  save = (e) => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {(form) => {
              this.form = form;
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `${title} is required.`,
                      }],
                      initialValue: record[dataIndex],
                    })(
                      <Input
                        ref={node => (this.input = node)}
                        onPressEnter={this.save}
                        onBlur={this.save}
                      />
                    )}
                  </FormItem>
                ) : (
                    <div
                      className={style.editableCellValueWrap}
                      style={{ paddingRight: 24 }}
                      onClick={this.toggleEdit}
                    >
                      {restProps.children}
                    </div>
                  )
              );
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    );
  }
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '员工编号',
      dataIndex: 'staffID',
    }, {
      title: '用户姓名',
      dataIndex: 'userName',
    }, {
      title: '联系方式',
      dataIndex: 'tel',
    }, {
      title: '所属部门',
      dataIndex: 'section',
    }, {
      title: '权限',
      dataIndex: 'authority',
      width: '15%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => (
        this.state.dataSource.length >= 1
          ? (
            <Popconfirm title="确定删除？" onConfirm={() => this.handleDelete(record.key)}>
              <a href="javascript:;">删除</a>
            </Popconfirm>
          ) : null
      ),
    }];

    this.state = {
      dataSource: [{
        key: '0',
        staffID: '00012',
        userName: '张良',
        tel: '13701828813',
        section: '营销部',
        authority: '管理员',
      }, {
        key: '1',
        staffID: '00021',
        userName: '王玲',
        tel: '18610732213',
        section: '营销部',
        authority: '管理员',
      }, {
        key: '2',
        staffID: '00132',
        userName: '陈丽华',
        tel: '18034828937',
        section: '法务部',
        authority: '高级',
      }, {
        key: '3',
        staffID: '00145',
        userName: '张泉山',
        tel: '13933828530',
        section: '法务部',
        authority: '高级',
      }, {
        key: '4',
        staffID: '00231',
        userName: '吴雯',
        tel: '17634528940',
        section: '采购部',
        authority: '普通',
      }, {
        key: '5',
        staffID: '00024',
        userName: '韩泽',
        tel: '15701876313',
        section: '运营部',
        authority: '高级',
      }, {
        key: '6',
        staffID: '00328',
        userName: '李国良',
        tel: '18001838465',
        section: '质量部',
        authority: '普通',
      }, {
        key: '7',
        staffID: '00457',
        userName: '赵丽敏',
        tel: '13942837635',
        section: '工程部',
        authority: '普通',
      }, {
        key: '8',
        staffID: '00502',
        userName: '郭晓婷',
        tel: '18001884231',
        section: '生产车间',
        authority: '高级',
      }, {
        key: '9',
        staffID: '00514',
        userName: '钱国强',
        tel: '18001937264',
        section: '生产车间',
        authority: '普通',
      }, {
        key: '10',
        staffID: '00614',
        userName: '郭晓东',
        tel: '18019393718',
        section: '运输管理部',
        authority: '普通',
      },],
      count: 10,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  }

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          添加用户
        </Button>
        <Table
          components={components}
          rowClassName={() => { style.editableRow }}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

export default User;
