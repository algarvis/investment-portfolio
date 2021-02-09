import './PortfolioMetrics.css';
import React from 'react';
import { Card, Row, Col } from 'antd';
import DemoArea from '../DemoArea/DemoArea';
import DemoPie from '../DemoPie/DemoPie';
import DemoGauge from '../DemoGauge/DemoGauge';
import DemoLiquid from '../DemoLiquid/DemoLiquid';


const PortfolioMetrics = () => {

  return (
    <Row gutter={[32, 32]} justify="space-around" style={{ overflow: 'auto', margin: 0, padding: 16 }}>
      <Col span={8}>
        <Card title="Target objective" bordered={false}>
          <DemoLiquid></DemoLiquid>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Vromm vrrrommm" bordered={false}>
          <DemoGauge></DemoGauge>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="BTC price over time" extra={<a href="https://www.google.com">More</a>}>
          <DemoArea></DemoArea>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Assets things">
          <DemoPie></DemoPie>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="BTC price over time" extra={<a href="#">More</a>}>
          <DemoArea></DemoArea>
        </Card>
      </Col>
    </Row>
  );
}

export default PortfolioMetrics