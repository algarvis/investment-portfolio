import './PortfolioDetails.css';
import React, { useState } from 'react';
import { PageHeader, Tabs, Button } from 'antd';
import PortfolioMetrics from '../PortfolioMetrics/PortfolioMetrics';
import PortfolioMovements from '../PortfolioMovements/PortfolioMovements';


const { TabPane } = Tabs;

const PortfolioDetails = () => {


  const [tab, setTab] = useState('1');

  const callback = (b: string) => { setTab(b) };


  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title="Crypto Portfolio"
        subTitle="This is my crypto hodl"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">Primary</Button>,
        ]}
        footer={
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Metrics" key="1" />
            <TabPane tab="Movements" key="2" />
          </Tabs>
        }
      ></PageHeader>

      {tab === '1' ? <PortfolioMetrics></PortfolioMetrics> : <PortfolioMovements></PortfolioMovements>}

    </>
  );
}

export default PortfolioDetails