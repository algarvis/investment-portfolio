import './Assets.css';
import { Table, Input, Menu, Dropdown } from 'antd';
import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { Content } from 'antd/lib/layout/layout';
import { DownOutlined } from '@ant-design/icons';

enum AssetType {
  stock,
  etf,
  crypto,
  bond,
  currency,
  thingIdontRemenber
}

interface Asset {
  icon?: string;
  name: string;
  price: number;
  type: AssetType;
  hourChange: number;
  dayChange: number;
  weekChange: number;
  marketCap: number;
}


const { Search } = Input;

const Assets = () => {

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
    {
      title: 'hourChange',
      dataIndex: 'hourChange',
      key: 'hourChange',
      render: (value: number) => <>{value.toFixed(2)} %</>
    },
    {
      title: 'dayChange',
      dataIndex: 'dayChange',
      key: 'dayChange',
      render: (value: number) => <>{value.toFixed(2)} %</>
    },
    {
      title: 'weekChange',
      dataIndex: 'weekChange',
      key: 'weekChange',
      render: (value: number) => <>{value.toFixed(2)} %</>
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: () => (

        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Add to portfolio <DownOutlined />
          </a>
        </Dropdown>

      )
    }
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
    {
      name: 'USD',
      price: Math.random() * 1,
      type: AssetType.currency,
      hourChange: Math.random() * 10 - 5,
      dayChange: Math.random() * 10 - 5,
      weekChange: Math.random() * 10 - 5,
      marketCap: Math.random() * 10000000
    },
    {
      name: 'Gold',
      price: Math.random() * 10000,
      type: AssetType.currency,
      hourChange: Math.random() * 10 - 5,
      dayChange: Math.random() * 10 - 5,
      weekChange: Math.random() * 10 - 5,
      marketCap: Math.random() * 10000000
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a>Portfolio 1</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>Portfolio ABC</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a>Portfolio xyz</a>
      </Menu.Item>
    </Menu>
  );

  const onSearch = (value: string) => console.log(value);

  return (
    <Content>
      <div className="ip-table-actions">
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </div >

      <Table columns={columns} dataSource={data} onRow={() => {
        return {
          onClick: () => { }, // click row
          onDoubleClick: () => { }, // double click row
          onContextMenu: () => { }, // right button click row
          onMouseEnter: () => { }, // mouse enter row
          onMouseLeave: () => { }, // mouse leave row
        };
      }} />
    </Content>
  );

}

export default Assets;
