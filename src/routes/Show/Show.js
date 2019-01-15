import React from 'react';
import { Steps, Form, Row, Col, } from 'antd';
import { Link } from 'dva/router';

import style from './Show.less';

const Step = Steps.Step;

const steps = [{
  title: '库存查询',
}, {
  title: '原料采购',
}, {
  title: '质量检测',
}, {
  title: '原料分配'
}];

class Showstep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  render() {
    const { current } = this.state;
    return (
      <Form className={style.formStyle}>
        <Row gutter={16} className={style.rowStyle}>
          <Col className="gutter-row" span={4} key='purchase_link'>
            <Link to='/show/purchase'>原料配置进度详情</Link>
          </Col>
          <Col className="gutter-row" span={16} key='purchase_step'>
            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
          </Col>
        </Row>
        <Row gutter={16} className={style.rowStyle}>
          <Col className="gutter-row" span={4} key='product_link'>
            <Link to='/show/product'><span>订单生产进度详情</span></Link>
          </Col>
          <Col className="gutter-row" span={16} key='product_step'>
            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
          </Col>
        </Row>
        <Row gutter={16} className={style.rowStyle}>
          <Col className="gutter-row" span={4} key='transfor_link'>
            <Link to='/show/transfor'><span>产品运输进度详情</span></Link>
          </Col>
          <Col className="gutter-row" span={16} key='transfor_step'>
            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
          </Col>
        </Row>
      </Form>
    );
  }
}
const Show = Form.create({ name: 'show' })(Showstep)
export default Show;
