import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';
import { GaugeConfig } from '@ant-design/charts/es/gauge';

const DemoGauge: React.FC = () => {

  const [percent, setPercent] = useState(0.2);
  const [rangeColor, setRangeColor] = useState('#F4664A');
  const color = ['#F4664A', '#FAAD14', '#30BF78'];

  const getColor = (percent: number) => {
    return percent < 0.4 ? color[0] : percent < 0.6 ? color[1] : color[2];
  };
  const config: GaugeConfig = {
    percent,
    range: { color: rangeColor },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    axis: {
      label: {
        formatter: function formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: { count: 3 },
    },
    statistic: {
      content: {
        formatter: (_ref: any) => {
          const percent = _ref.percent;
          return 'Rate: '.concat((percent * 100).toFixed(0), '%');
        },
      },
    },
    animation: false,
  };
  useEffect(() => {
    let data = percent;
    const interval = setInterval(function () {
      if (data >= 0.85) {
        clearInterval(interval);
      } else {
        data += 0.095;
        setPercent(data);
        setRangeColor(getColor(data));
      }
    }, 500);
  }, []);

  return <Gauge style={{ fontSize: 60 }} {...config} />;
};

export default DemoGauge;