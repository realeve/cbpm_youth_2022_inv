import color from './themeColor';
const FONT_FAMILY =
  '"-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, "sans-serif"';
export default {
  backgroundColor: '#ffffff',
  color: color.COLOR_PLATE_8,
  animationDuration: 1500,
  // animationEasing: "elasticOut",
  // animationEasingUpdate: "elasticOut",
  // animationDelay: idx => idx * 20,
  // animationDelayUpdate: idx => idx * 20,
  singleAxis: {
    top: 50,
    bottom: 50,
    type: 'time',
    axisTick: {},
    axisLabel: {
      textStyle: {
        color: '#222',
      },
    },
    axisLine: {
      lineStyle: {
        color: '#aaa',
        width: 2,
      },
    },
    axisPointer: {
      animation: true,
      label: {
        show: true,
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        opacity: 0.2,
      },
    },
  },
  title: {
    itemGap: 8,
    textStyle: {
      fontWeight: 'lighter',
      color: '#666',
      fontSize: 20,
    },
    subtextStyle: {
      color: '#666',
    },
  },
  toolbox: {
    color: ['rgb(38,185,139)', 'rgb(38,185,139)', 'rgb(38,185,139)', 'rgb(38,185,139)'],
    left: 'left',
  },
  legend: {
    top: 35,
    left: 'right',
  },
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    extraCssText:
      'padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);',
    textStyle: {
      color: '#333',
    },
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      lineStyle: {
        color: '#aaa',
      },
      crossStyle: {
        color: '#aaa',
      },
      shadowStyle: {
        color: 'rgba(128,200,128,0.1)',
      },
      label: {
        backgroundColor: '#6a7985',
        color: '#fff',
      },
    },
  },
  grid: {
    borderWidth: 0,
    left: 100,
    right: 50,
    top: 60,
    bottom: 60,
    // containLabel: true
  },
  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: '#aaa',
        width: 2,
      },
    },
    boundaryGap: true,
    splitLine: {
      show: false,
    },
    nameTextStyle: {
      fontSize: 16,
      color: '#555',
    },
    axisLabel: {
      textStyle: {
        color: '#222',
      },
    },
    splitArea: {
      show: false,
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: '#222',
      },
    },
    nameTextStyle: {
      fontSize: 16,
      color: '#555',
    },
    splitLine: {
      lineStyle: {
        color: ['#ddd'],
        width: 1,
        type: 'dashed',
      },
      show: true,
    },
    splitArea: {
      show: false,
    },
  },
  timeline: {
    lineStyle: {
      color: 'rgb(38,185,139)',
    },
    controlStyle: {
      normal: {
        color: 'rgb(38,185,139)',
      },
      emphasis: {
        color: 'rgb(38,185,139)',
      },
    },
  },
  bar: {
    itemStyle: {
      normal: {
        barBorderRadius: 1,
      },
      emphasis: {
        barBorderRadius: 1,
      },
    },
  },
  line: {
    smooth: false,
    symbol: 'emptyCircle',
    symbolSize: 6,
    itemStyle: {
      normal: {
        barBorderColor: 'rgba(0,0,0,0)',
        label: {
          show: true,
        },
        lineStyle: {
          width: 8,
          type: 'solid',
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 5,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
    },
    lineStyle: {
      normal: {
        width: 8,
        type: 'solid',
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowBlur: 5,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
      },
    },
    showAllSymbol: true,
  },
  radar: {
    clickable: true,
    legendHoverLink: true,
    polarIndex: 0,
    itemStyle: {
      normal: {
        label: {
          show: false,
        },
        lineStyle: {
          width: 2,
          type: 'solid',
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 1,
          shadowOffsetX: 1,
          shadowOffsetY: 1,
        },
        areaStyle: {
          type: 'default',
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
    },
    splitLine: {
      lineStyle: {
        color: ['#ddd'],
      },
    },
    symbolSize: 5,
    symbol: 'emptyCircle',
  },
  pie: {
    clickable: true,
    legendHoverLink: true,
    center: ['50%', '50%'],
    radius: [0, '75%'],
    clockWise: true,
    startAngle: 90,
    minAngle: 0,
    selectedOffset: 10,
    itemStyle: {
      normal: {
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        label: {
          show: true,
          position: 'inner',
          formatter: '{b}',
          textStyle: {
            fontSize: 12,
          },
        },
        labelLine: {
          show: false,
          length: 20,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
      },
      emphasis: {
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
          length: 20,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
      },
    },
  },
  k: {
    itemStyle: {
      normal: {
        color: '#E4925D',
        color0: '#85ca36',
        lineStyle: {
          width: 1,
          color: '#E4925D',
          color0: '#85ca36',
        },
      },
    },
  },
  map: {
    itemStyle: {
      normal: {
        areaStyle: {
          color: '#ddd',
        },
        label: {
          textStyle: {
            color: '#c12e34',
          },
        },
      },
      emphasis: {
        areaStyle: {
          color: '#99d2dd',
        },
        label: {
          textStyle: {
            color: '#c12e34',
          },
        },
      },
    },
  },
  force: {
    itemStyle: {
      normal: {
        linkStyle: {
          strokeColor: 'rgb(38,185,139)',
        },
      },
    },
  },
  chord: {
    padding: 4,
    itemStyle: {
      normal: {
        lineStyle: {
          width: 1,
          color: 'rgba(128, 128, 128, 0.5)',
        },
        chordStyle: {
          lineStyle: {
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)',
          },
        },
      },
      emphasis: {
        lineStyle: {
          width: 1,
          color: 'rgba(128, 128, 128, 0.5)',
        },
        chordStyle: {
          lineStyle: {
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)',
          },
        },
      },
    },
  },
  gauge: {
    startAngle: 225,
    endAngle: -45,
    axisLine: {
      show: true,
      lineStyle: {
        color: [[0.2, 'rgb(148,205,97)'], [0.8, 'rgb(38,185,139)'], [1, 'rgb(255,107,104)']],
        width: 8,
      },
    },
    axisTick: {
      splitNumber: 10,
      length: 12,
      lineStyle: {
        color: 'auto',
      },
    },
    axisLabel: {
      textStyle: {
        color: 'auto',
      },
    },
    splitLine: {
      length: 18,
      lineStyle: {
        color: 'auto',
      },
    },
    pointer: {
      length: '90%',
      color: 'auto',
    },
    title: {
      textStyle: {
        color: '#333',
      },
    },
    detail: {
      textStyle: {
        color: 'auto',
      },
    },
  },
  textStyle: {
    fontFamily: FONT_FAMILY, //: "??????,????????????, Arial, Verdana"
  },
};
