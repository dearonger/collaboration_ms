/*
 * @Author: wzh
 * @Date: 2020-08-05 14:37:08
 * @Description: BusinessManage add&&edit Modal
 */
import { Button, Form, Input, Modal } from 'antd';
import React from 'react';

import '../UserManage/User.less';

const FormItem = Form.Item;

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
  const { visibleFlag, form, handleModalVisible, record } = props;

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
      title={visibleFlag === 'relation' ? '新增关系' : '新增属性'}
      visible={visibleFlag === 'relation' || visibleFlag === 'attr'}
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
      {visibleFlag === 'relation' ?
        <>
          <FormItem {...formItemLayout} label={'关系名称'}>
            <>
              {getFieldDecorator('logID', {
                rules: [{
                  required: true, message: '不能为空'
                }],
                initialValue: record && record.logID || null,
              })(
                <Input placeholder={'请输入'} />
              )}
            </>
          </FormItem>
          <FormItem {...formItemLayout} label={'起始实体类型'}>
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '不能为空'
              }],
              initialValue: record && record.name || null,
            })(
              <Input placeholder={'请输入'} />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={'结束实体类型'}>
            {getFieldDecorator('phone', {
              rules: [{
                required: true, message: '不能为空'
              }],
              initialValue: record && record.phone || null,
            })(
              <Input placeholder={'请输入'} />
            )}
          </FormItem>
        </>
        :
        <>
          <FormItem {...formItemLayout} label={'属性名称'}>
            <>
              {getFieldDecorator('logID', {
                rules: [{
                  required: true, message: '不能为空'
                }],
                initialValue: record && record.logID || null,
              })(
                <Input placeholder={'请输入'} />
              )}
            </>
          </FormItem>
          <FormItem {...formItemLayout} label={'数据类型'}>
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '不能为空'
              }],
              initialValue: record && record.name || null,
            })(
              <Input placeholder={'请输入'} />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={'描述'}>
            {getFieldDecorator('phone', {
              rules: [{
                required: true, message: '不能为空'
              }],
              initialValue: record && record.phone || null,
            })(
              <Input placeholder={'请输入'} />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={'颜色'}>
            {getFieldDecorator('email', {
              rules: [{
                required: true, message: '不能为空'
              }],
              initialValue: record && record.email || null,
            })(
              <Input placeholder={'请输入'} />
            )}
          </FormItem>
        </>
      }

    </Modal>
  );
});

export default UpdateForm;
