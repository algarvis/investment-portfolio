import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

const DemoArea: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  return <Area data={data} xField={'Date'} yField={'scales'} annotations={[{ type: 'text', position: ['min', 'median'], content: 'Bought at', offsetY: -4, style: { textBaseline: 'bottom' }, }, { type: 'line', start: ['min', 'median'], end: ['max', 'median'], style: { stroke: 'red', lineDash: [2, 2], }, }]} />;
};

export default DemoArea;
