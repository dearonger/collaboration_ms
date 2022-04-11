/*
 * @Author: wzh
 * @Date: 2020-08-05 14:37:08
 * @Description: BusinessManage add&&edit Modal
 */
import { Button, Form, Input, Modal, Select, Switch } from 'antd';
import React from 'react';

import './User.less';

const FormItem = Form.Item;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 15 },
    sm: { span: 15 },
  },
};

const UpdateForm = Form.create()((props) => {
  const { modalVisible, form, handleModalVisible, record } = props;

  const { getFieldDecorator } = form;

  const handleSubmit = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;

      console.log('fieldsValue', fieldsValue);

    });
  };


  return (
    <Modal
      destroyOnClose
      title={record ? '编辑' : '新增'}
      visible={modalVisible}
      onOk={handleSubmit}
      onCancel={() => handleModalVisible('')}
      footer={[
        <Button key="back" onClick={() => handleModalVisible('')}>
          {'取消'}
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          {'提交'}
        </Button>,
      ]}
    >
      <FormItem {...formItemLayout} label={'登录账号'}>
        <>
          {getFieldDecorator('logID', {
            rules: [{
              required: true, message: '不能为空'
            }],
            initialValue: record && record.logID || null,
          })(
            <Input placeholder={'请输入'} style={{ width: '70%' }} />
          )}
          <Switch style={{ marginLeft: 16 }} checkedChildren="有效" unCheckedChildren="失效" defaultChecked />
        </>

      </FormItem>
      <FormItem {...formItemLayout} label={'用户名'}>
        {getFieldDecorator('name', {
          rules: [{
            required: true, message: '不能为空'
          }],
          initialValue: record && record.name || null,
        })(
          <Input placeholder={'请输入'} />
        )}
      </FormItem>
      <FormItem {...formItemLayout} label={'所属组'}>
        {getFieldDecorator('group', {
          initialValue: record && record.group || undefined,
        })(
          <Select
            style={{
              width: '100%',
            }}
            placeholder={'请选择'}
          >
            <Option key={'1'} value={''}>
              {'群组一'}
            </Option>
            <Option key={'2'} value={''}>
              {'群组二'}
            </Option>
          </Select>,
        )}
      </FormItem>
      <FormItem {...formItemLayout} label={'角色'}>
        {getFieldDecorator('role', {
          initialValue: record && record.role || undefined,
        })(
          <Select
            style={{
              width: '100%',
            }}
            placeholder={'请选择'}
          >
            <Option key={'群组管理员'} value={'群组管理员'}>
              {'群组管理员'}
            </Option>
            <Option key={'群组成员'} value={'群组成员'}>
              {'群组成员'}
            </Option>
          </Select>,
        )}
      </FormItem>
      <FormItem {...formItemLayout} label={'手机号'}>
        {getFieldDecorator('phone', {
          rules: [{
            required: true, message: '不能为空'
          }],
          initialValue: record && record.phone || null,
        })(
          <Input placeholder={'请输入'} />
        )}
      </FormItem>
      <FormItem {...formItemLayout} label={'邮箱'}>
        {getFieldDecorator('email', {
          rules: [{
            required: true, message: '不能为空'
          }],
          initialValue: record && record.email || null,
        })(
          <Input placeholder={'请输入'} />
        )}
      </FormItem>

    </Modal>
  );
});

export default UpdateForm;
