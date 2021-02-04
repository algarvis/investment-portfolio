import './Portfolios.css';
import { Table, Tag, Button } from 'antd';
import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

interface Portfolio {
  name: string;
  description: string;
  totalInvested: number;
  totalValue: number;
  tags: string[];
}

const Portfolios = () => {

  const history = useHistory();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Total invested',
      dataIndex: 'totalInvested',
      key: 'totalInvested',
    },
    {
      title: 'Total value',
      dataIndex: 'totalValue',
      key: 'totalValue',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data: Portfolio[] = [
    {
      name: 'Crypto',
      description: 'Daily trading with high risk crypto',
      totalInvested: 1000,
      totalValue: 1250,
      tags: ['nice', 'developer'],
    },
    {
      name: 'ETFs',
      description: 'Long term safe ETFs',
      totalInvested: 250,
      totalValue: 240,
      tags: ['loser'],
    },
    {
      name: 'Wall street',
      description: 'Wall street bets like crazy!',
      totalInvested: 8523,
      totalValue: 12025,
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <div id="portfolios-container">
      <div className="ip-table-actions">
        <Button type="primary" icon={<PlusCircleOutlined />}>
          Create new Portfolio
        </Button>
      </div >

      <Table columns={columns} dataSource={data} onRow={(record, rowIndex) => {
        return {
          onClick: event => { history.push('/portfolios/123') }, // click row
          onDoubleClick: event => { }, // double click row
          onContextMenu: event => { }, // right button click row
          onMouseEnter: event => { }, // mouse enter row
          onMouseLeave: event => { }, // mouse leave row
        };
      }} />
    </div >
  );

}

export default Portfolios;
