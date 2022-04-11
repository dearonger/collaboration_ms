import React from 'react';

import echarts from './CommonEchart';

class GraphChart extends React.Component {
  componentDidMount() {
    this.chartInit();
  }

  chartRef = React.createRef();

  data = {
    "type": "force",
    "categories": [
      {
        "name": "PROL",
        "keyword": {},

      },
      {
        "name": "FUN",
        "keyword": {},

      },
      {
        "name": "OPT",
        "keyword": {},

      },
    ],
    "nodes": [
      {
        "name": "C语言",
        "value": 1,
        "category": 0,
        "size": 100,
        "symbolSize": 80,
      },
      {
        "name": "函数",
        "value": '函数',
        "category": 1,
        "symbolSize": 60,
      },
      {
        "name": "操作符",
        "value": '操作符',
        "category": 2,
        "symbolSize": 60,
      },
    ],
    "links": [
      {
        "source": 0,
        "target": 1,
        "name": '包括'
      },
      {
        "source": 0,
        "target": 2,
        "name": '包括'
      },

    ],

    lineStyle: {
      opacity: 0.9,
      width: 2,
      curveness: 0
    }
  };

  chartInit = () => {
    const graphChart = echarts.init(this.chartRef && this.chartRef.current);

    graphChart.hideLoading();
    this.data.nodes.forEach(function (node) {
      node.label = {
        show: node.symbolSize > 30
      };
    });
    graphChart.setOption({
      legend: {
        data: ['PROL', 'FUN', 'OPT']
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          animation: false,
          roam: true,
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: {
              show: true,
              formatter: function (x) {
                return x.data.name;
              }
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {}
            }
          },
          draggable: true,
          data: this.data.nodes.map(function (node, idx) {
            node.id = idx;
            return node;
          }),
          categories: this.data.categories,
          force: {
            edgeLength: 150,
            repulsion: 800,
            gravity: 0.1
          },
          edges: this.data.links
        }
      ]
    });
  }

  render() {
    return <div ref={this.chartRef} style={{ height: 500 }}></div>;
  }

}

export default GraphChart;
