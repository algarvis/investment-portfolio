import './PortfolioAssets.css';
import { Table, Layout, Dropdown } from 'antd';
import React from 'react';
import menu from 'antd/lib/menu';
import { ColumnsType } from 'antd/lib/table';
import { Asset, AssetType } from '../Assets/Assets';

const { Content } = Layout;

const PortfolioAssets = () => {

  const columns: ColumnsType<Asset> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, asset) => {
        if (asset.icon) {
          console.log(asset.icon);
          return <><img src={asset.icon} alt={asset.name + '-icon'} width={20} height={20} style={{ marginRight: 5 }}></img>{asset.name}</>
        } else {
          return <div style={{ marginLeft: 25 }}>{asset.name}</div>
        }
      }
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'type',
      dataIndex: 'type',
      key: 'type',
    },
  ];

  const data: Asset[] = [
    {
      icon: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png',
      name: 'Bitcoin',
      price: Math.random() * 10000,
      type: AssetType.crypto,
      hourChange: Math.random() * 10 - 5,
      dayChange: Math.random() * 10 - 5,
      weekChange: Math.random() * 10 - 5,
      marketCap: Math.random() * 10000000
    },
    {
      icon: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      name: 'Ethereum',
      price: Math.random() * 100,
      type: AssetType.crypto,
      hourChange: Math.random() * 10 - 5,
      dayChange: Math.random() * 10 - 5,
      weekChange: Math.random() * 10 - 5,
      marketCap: Math.random() * 100000
    },
    {
      icon: 'https://www.tesla.com/sites/all/themes/custom/tesla_theme/assets/img/icons/apple-touch-icon-152x152.png',
      name: 'TSLA',
      price: Math.random() * 100,
      type: AssetType.stock,
      hourChange: Math.random() * 10 - 5,
      dayChange: Math.random() * 10 - 5,
      weekChange: Math.random() * 10 - 5,
      marketCap: Math.random() * 1100000000
    },
    {
      name: 'SP500',
      price: Math.random() * 10000,
      type: AssetType.etf,
      hourChange: Math.random() * 10 - 5,
      dayChange: Math.random() * 10 - 5,
      weekChange: Math.random() * 10 - 5,
      marketCap: Math.random() * 10000000
    },
  ];

  return (
    <Content>
      <Table columns={columns} dataSource={data} />
    </Content>
  );

}

export default PortfolioAssets