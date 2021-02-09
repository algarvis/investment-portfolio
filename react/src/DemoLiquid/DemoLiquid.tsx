import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';
import { LiquidConfig } from '@ant-design/charts/es/liquid';

const DemoLiquid: React.FC = () => {
  const [percent, setPercent] = useState(0.26);

  const config: LiquidConfig = {
    percent,
    statistic: {
      title: {
        formatter: function formatter() {
          return '盈利率';
        },
        style: (_ref) => {
          const percent = _ref.percent;
          return { fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)' };
        },
      },
      content: {
        style: (_ref2) => {
          const percent = _ref2.percent;
          return {
            fontSize: '60',
            lineHeight: 1,
            fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
          };
        },
      },
    },
    liquidStyle: (_ref4) => {
      const percent = _ref4.percent;
      return {
        fill: percent > 0.75 ? '#5B8FF9' : '#FAAD14',
        stroke: percent > 0.75 ? '#5B8FF9' : '#FAAD14',
      };
    },
    color: function color() {
      return '#5B8FF9';
    },
  };
  useEffect(() => {
    let data = 0.25;
    const interval = setInterval(function () {
      data += Math.min(Math.random() * 0.1, 0.1);
      if (data < 0.75) {
        setPercent(data);
      } else {
        clearInterval(interval);
      }
    }, 500);
  }, []);

  return <Liquid {...config} />;
};

export default DemoLiquid;