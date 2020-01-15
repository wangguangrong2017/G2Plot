import { WordCloud } from '@antv/g2plot';
const data = [
  {
    value: 9,
    name: 'G2Plot',
  },
  {
    value: 9,
    name: 'AntV',
  },
  {
    value: 8,
    name: 'F2',
  },
  {
    value: 8,
    name: 'G2',
  },
  {
    value: 8,
    name: 'G6',
  },
  {
    value: 8,
    name: 'DataSet',
  },
  {
    value: 8,
    name: '墨者学院',
  },
  {
    value: 6,
    name: 'Analysis',
  },
  {
    value: 6,
    name: 'Data Mining',
  },
  {
    value: 6,
    name: 'Data Vis',
  },
  {
    value: 6,
    name: 'Design',
  },
  {
    value: 6,
    name: 'Grammar',
  },
  {
    value: 6,
    name: 'Graphics',
  },
  {
    value: 6,
    name: 'Graph',
  },
  {
    value: 6,
    name: 'Hierarchy',
  },
  {
    value: 6,
    name: 'Labeling',
  },
  {
    value: 6,
    name: 'Layout',
  },
  {
    value: 6,
    name: 'Quantitative',
  },
  {
    value: 6,
    name: 'Relation',
  },
  {
    value: 6,
    name: 'Statistics',
  },
  {
    value: 6,
    name: '可视化',
  },
  {
    value: 6,
    name: '数据',
  },
  {
    value: 6,
    name: '数据可视化',
  },
  {
    value: 4,
    name: 'Arc Diagram',
  },
  {
    value: 4,
    name: 'Bar Chart',
  },
  {
    value: 4,
    name: 'Canvas',
  },
  {
    value: 4,
    name: 'Chart',
  },
  {
    value: 4,
    name: 'DAG',
  },
  {
    value: 4,
    name: 'DG',
  },
  {
    value: 4,
    name: 'Facet',
  },
  {
    value: 4,
    name: 'Geo',
  },
  {
    value: 4,
    name: 'Line',
  },
  {
    value: 4,
    name: 'MindMap',
  },
  {
    value: 4,
    name: 'Pie',
  },
  {
    value: 4,
    name: 'Pizza Chart',
  },
  {
    value: 4,
    name: 'Punch Card',
  },
  {
    value: 4,
    name: 'SVG',
  },
  {
    value: 4,
    name: 'Sunburst',
  },
  {
    value: 4,
    name: 'Tree',
  },
  {
    value: 4,
    name: 'UML',
  },
  {
    value: 3,
    name: 'Chart',
  },
  {
    value: 3,
    name: 'View',
  },
  {
    value: 3,
    name: 'Geom',
  },
  {
    value: 3,
    name: 'Shape',
  },
  {
    value: 3,
    name: 'Scale',
  },
  {
    value: 3,
    name: 'Animate',
  },
  {
    value: 3,
    name: 'Global',
  },
  {
    value: 3,
    name: 'Slider',
  },
  {
    value: 3,
    name: 'Connector',
  },
  {
    value: 3,
    name: 'Transform',
  },
  {
    value: 3,
    name: 'Util',
  },
  {
    value: 3,
    name: 'DomUtil',
  },
  {
    value: 3,
    name: 'MatrixUtil',
  },
  {
    value: 3,
    name: 'PathUtil',
  },
  {
    value: 3,
    name: 'G',
  },
  {
    value: 3,
    name: '2D',
  },
  {
    value: 3,
    name: '3D',
  },
  {
    value: 3,
    name: 'Line',
  },
  {
    value: 3,
    name: 'Area',
  },
  {
    value: 3,
    name: 'Interval',
  },
  {
    value: 3,
    name: 'Schema',
  },
  {
    value: 3,
    name: 'Edge',
  },
  {
    value: 3,
    name: 'Polygon',
  },
  {
    value: 3,
    name: 'Heatmap',
  },
  {
    value: 3,
    name: 'Render',
  },
  {
    value: 3,
    name: 'Tooltip',
  },
  {
    value: 3,
    name: 'Axis',
  },
  {
    value: 3,
    name: 'Guide',
  },
  {
    value: 3,
    name: 'Coord',
  },
  {
    value: 3,
    name: 'Legend',
  },
  {
    value: 3,
    name: 'Path',
  },
  {
    value: 3,
    name: 'Helix',
  },
  {
    value: 3,
    name: 'Theta',
  },
  {
    value: 3,
    name: 'Rect',
  },
  {
    value: 3,
    name: 'Polar',
  },
  {
    value: 3,
    name: 'Dsv',
  },
  {
    value: 3,
    name: 'Csv',
  },
  {
    value: 3,
    name: 'Tsv',
  },
  {
    value: 3,
    name: 'GeoJSON',
  },
  {
    value: 3,
    name: 'TopoJSON',
  },
  {
    value: 3,
    name: 'Filter',
  },
  {
    value: 3,
    name: 'Map',
  },
  {
    value: 3,
    name: 'Pick',
  },
  {
    value: 3,
    name: 'Rename',
  },
  {
    value: 3,
    name: 'Filter',
  },
  {
    value: 3,
    name: 'Map',
  },
  {
    value: 3,
    name: 'Pick',
  },
  {
    value: 3,
    name: 'Rename',
  },
  {
    value: 3,
    name: 'Reverse',
  },
  {
    value: 3,
    name: 'sort',
  },
  {
    value: 3,
    name: 'Subset',
  },
  {
    value: 3,
    name: 'Partition',
  },
  {
    value: 3,
    name: 'Imputation',
  },
  {
    value: 3,
    name: 'Fold',
  },
  {
    value: 3,
    name: 'Aggregate',
  },
  {
    value: 3,
    name: 'Proportion',
  },
  {
    value: 3,
    name: 'Histogram',
  },
  {
    value: 3,
    name: 'Quantile',
  },
  {
    value: 3,
    name: 'Treemap',
  },
  {
    value: 3,
    name: 'Hexagon',
  },
  {
    value: 3,
    name: 'Binning',
  },
  {
    value: 3,
    name: 'kernel',
  },
  {
    value: 3,
    name: 'Regression',
  },
  {
    value: 3,
    name: 'Density',
  },
  {
    value: 3,
    name: 'Sankey',
  },
  {
    value: 3,
    name: 'Voronoi',
  },
  {
    value: 3,
    name: 'Projection',
  },
  {
    value: 3,
    name: 'Centroid',
  },
  {
    value: 3,
    name: 'H5',
  },
  {
    value: 3,
    name: 'Mobile',
  },
  {
    value: 3,
    name: 'K线图',
  },
  {
    value: 3,
    name: '关系图',
  },
  {
    value: 3,
    name: '烛形图',
  },
  {
    value: 3,
    name: '股票图',
  },
  {
    value: 3,
    name: '直方图',
  },
  {
    value: 3,
    name: '金字塔图',
  },
  {
    value: 3,
    name: '分面',
  },
  {
    value: 3,
    name: '南丁格尔玫瑰图',
  },
  {
    value: 3,
    name: '饼图',
  },
  {
    value: 3,
    name: '线图',
  },
  {
    value: 3,
    name: '点图',
  },
  {
    value: 3,
    name: '散点图',
  },
  {
    value: 3,
    name: '子弹图',
  },
  {
    value: 3,
    name: '柱状图',
  },
  {
    value: 3,
    name: '仪表盘',
  },
  {
    value: 3,
    name: '气泡图',
  },
  {
    value: 3,
    name: '漏斗图',
  },
  {
    value: 3,
    name: '热力图',
  },
  {
    value: 3,
    name: '玉玦图',
  },
  {
    value: 3,
    name: '直方图',
  },
  {
    value: 3,
    name: '矩形树图',
  },
  {
    value: 3,
    name: '箱形图',
  },
  {
    value: 3,
    name: '色块图',
  },
  {
    value: 3,
    name: '螺旋图',
  },
  {
    value: 3,
    name: '词云',
  },
  {
    value: 3,
    name: '词云图',
  },
  {
    value: 3,
    name: '雷达图',
  },
  {
    value: 3,
    name: '面积图',
  },
  {
    value: 3,
    name: '马赛克图',
  },
  {
    value: 3,
    name: '盒须图',
  },
  {
    value: 3,
    name: '坐标轴',
  },
  {
    value: 3,
    name: '',
  },
  {
    value: 3,
    name: 'Jacques Bertin',
  },
  {
    value: 3,
    name: 'Leland Wilkinson',
  },
  {
    value: 3,
    name: 'William Playfair',
  },
  {
    value: 3,
    name: '关联',
  },
  {
    value: 3,
    name: '分布',
  },
  {
    value: 3,
    name: '区间',
  },
  {
    value: 3,
    name: '占比',
  },
  {
    value: 3,
    name: '地图',
  },
  {
    value: 3,
    name: '时间',
  },
  {
    value: 3,
    name: '比较',
  },
  {
    value: 3,
    name: '流程',
  },
  {
    value: 3,
    name: '趋势',
  },
  {
    value: 2,
    name: '亦叶',
  },
  {
    value: 2,
    name: '再飞',
  },
  {
    value: 2,
    name: '完白',
  },
  {
    value: 2,
    name: '巴思',
  },
  {
    value: 2,
    name: '张初尘',
  },
  {
    value: 2,
    name: '御术',
  },
  {
    value: 2,
    name: '有田',
  },
  {
    value: 2,
    name: '沉鱼',
  },
  {
    value: 2,
    name: '玉伯',
  },
  {
    value: 2,
    name: '画康',
  },
  {
    value: 2,
    name: '祯逸',
  },
  {
    value: 2,
    name: '绝云',
  },
  {
    value: 2,
    name: '罗宪',
  },
  {
    value: 2,
    name: '萧庆',
  },
  {
    value: 2,
    name: '哦豁',
  },
  {
    value: 2,
    name: 'Brucetoo',
  },
  {
    value: 2,
    name: '陆沉',
  },
  {
    value: 2,
    name: '顾倾',
  },
  {
    value: 2,
    name: 'Domo',
  },
  {
    value: 2,
    name: 'GPL',
  },
  {
    value: 2,
    name: 'PAI',
  },
  {
    value: 2,
    name: 'SPSS',
  },
  {
    value: 2,
    name: 'SYSTAT',
  },
  {
    value: 2,
    name: 'Tableau',
  },
  {
    value: 2,
    name: 'D3',
  },
  {
    value: 2,
    name: 'Vega',
  },
  {
    value: 2,
    name: '统计图表',
  },
  {
    value: 1,
    name: '逍为',
  },
];
const wordCloudPlot = new WordCloud(document.getElementById('container'), getWordCloudConfig());

wordCloudPlot.render();

function getDataList() {
  const list = [];
  data.forEach((d) => {
    list.push({
      word: d.name,
      weight: d.value,
      id: list.length,
    });
  });
  return list;
}

function getWordCloudConfig() {
  return {
    width: 600,
    height: 400,
    data: getDataList(),
    maskImage: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
    color: (word, weight) => {
      return getRandomColor();
    },
    shape: 'cardioid',
    ellipticity: 1,

    minRotation: -Math.PI / 2,
    maxRotation: Math.PI / 2,
    rotateRatio: 0.5,
    rotationSteps: 4,

    gridSize: 8,
    shuffle: false,
    backgroundColor: '#fff',
    wait: 0,

    enableToolTips: true,
    enableEmphasis: true,
    hoveredId: -1,
    shadowColor: '#333333',
    shadowBlur: 10,

    hover: hoverAction,
  };
}

function getRandomColor() {
  const arr = [
    '#5B8FF9',
    '#5AD8A6',
    '#5D7092',
    '#F6BD16',
    '#E8684A',
    '#6DC8EC',
    '#9270CA',
    '#FF9D4D',
    '#269A99',
    '#FF99C3',
  ];
  return arr[Math.floor(Math.random() * (arr.length - 1))];
}

function hoverAction(item, dimension, evt, start) {
  // console.log('hover action', item && item.word);
}
