import React from 'react';
import {Button, Input} from 'antd';

import style from './Question.less';

const { TextArea } = Input;

class Question extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    render (){
        return (
            <div className={style.formStyle}>
                <p className={style.questionLable}>请输入您的问题：</p>
                <TextArea rows={4} className={style.textarea}textarea/>
                <Button type="primary" htmlType="submit" className={style.submitButton}>提交</Button>
            </div>
        )
    }
}
export default Question;