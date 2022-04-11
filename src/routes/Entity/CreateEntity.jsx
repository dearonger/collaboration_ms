/*
 * @Author: wzh
 * @Date: 2020-08-05 14:37:08
 * @Description: BusinessManage add&&edit Modal
 */
import { Button, Form, Input, Modal, Row, Col } from 'antd';
import React from 'react';

import '../UserManage/User.less';
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color';

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

class UpdateForm extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  handleChangeComplete = (color) => {
    const { setFieldsValue } = this.props.form;
    this.setState({ background: color.hex });

    setFieldsValue({
      backgroundColor: color.hex
    })
  };

  handleSubmit = () => {
    const { form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;

      console.log('fieldsValue', fieldsValue);

    });
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '285px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    const { visibleFlag, form, handleModalVisible, record } = this.props;

    const { getFieldDecorator } = form;

    return (
      <Modal
        destroyOnClose
        title={visibleFlag === 'entity' ? '新增实体' : '新增属性'}
        visible={visibleFlag === 'entity' || visibleFlag === 'attr'}
        onOk={this.handleSubmit}
        onCancel={() => handleModalVisible('')}
        footer={[
          <Button key="back" onClick={() => handleModalVisible('')}>
            {'取消'}
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleSubmit}>
            {'提交'}
          </Button>,
        ]}
      >
        {visibleFlag === 'entity' ?
          <>
            <FormItem {...formItemLayout} label={'实体类型'}>
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
            <FormItem {...formItemLayout} label={'实体标识'}>
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: '不能为空'
                }],
                initialValue: record && record.name || null,
              })(
                <Input placeholder={'请输入'} />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label={'继承来自'}>
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
          </>
        }
        <FormItem {...formItemLayout} label={'颜色'}>
          {getFieldDecorator('backgroundColor', {
            rules: [{
              required: true, message: '不能为空'
            }],
          })(
            <div>
              <div style={styles.swatch} onClick={this.handleClick}>
                <div style={styles.color} />
              </div>
              {this.state.displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={this.handleClose} />
                <ChromePicker color={this.state.color} onChange={this.handleChange} />
              </div> : null}

            </div>
          )}
        </FormItem>



        {/* <Row>
          <Col span={8} offset={6}>
            <SketchPicker
              styles={{ height: 100 }}
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
            />
          </Col>
        </Row> */}

      </Modal>
    );
  }
};

export default Form.create({ name: 'entity' })(UpdateForm);
