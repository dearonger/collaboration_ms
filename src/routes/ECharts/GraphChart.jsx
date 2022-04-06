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
        "name": "HTMLElement",
        "keyword": {},
        "base": "HTMLElement"
      },
      {
        "name": "WebGL",
        "keyword": {},
        "base": "WebGLRenderingContext"
      },
      {
        "name": "SVG",
        "keyword": {},
        "base": "SVGElement"
      },
      {
        "name": "CSS",
        "keyword": {},
        "base": "CSSRule"
      }
    ],
    "nodes": [
      {
        "name": "A",
        "value": 1,
        "category": 0,
        "size": 100,
        "symbolSize": 40,
      },
      {
        "name": "B",
        "value": 10,
        "category": 1,
        "symbolSize": 40,
      },
      {
        "name": "C",
        "value": 1,
        "category": 2,
        "symbolSize": 40,
      },
      {
        "name": "D",
        "value": 10,
        "category": 3,
        "symbolSize": 40,
      }
    ],
    "links": [
      {
        "source": 0,
        "target": 1
      },
      {
        "source": 0,
        "target": 2
      },
      {
        "source": 0,
        "target": 3
      }
    ]
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
        data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          animation: false,
          label: {
            position: 'right',
            formatter: '{b}'
          },
          draggable: true,
          data: this.data.nodes.map(function (node, idx) {
            node.id = idx;
            return node;
          }),
          categories: this.data.categories,
          force: {
            edgeLength: 150,
            repulsion: 300,
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
