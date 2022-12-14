import React, { Component } from 'react';
import PropTypes from 'prop-types';
import elementResizeEvent from 'element-resize-event';
import echarts from 'echarts';

const R = require('ramda');
const isEqual = (a, b) => R.equals(a, b);
import theme from '@/utils/theme';
interface IChartProps {
  option: any; // eslint-disable-line react/forbid-prop-types
  echarts?: any; // eslint-disable-line react/forbid-prop-types
  notMerge: boolean;
  lazyUpdate: boolean;
  style: any; // eslint-disable-line react/forbid-prop-types
  className: string;
  theme: string | any;
  onChartReady: (echartsObj: any) => void;
  showLoading: boolean;
  loadingOption: any; // eslint-disable-line react/forbid-prop-types
  onEvents: any; // eslint-disable-line react/forbid-prop-types
  opts: {
    devicePixelRatio?: number;
    renderer?: 'canvas' | 'svg';
    width?: number | 'auto';
    height?: number | 'auto';
  };
}

export default class EchartsReactCore extends Component<IChartProps, {}> {
  static defaultProps = {
    echarts: {},
    notMerge: true, //路由切换时，不合并option，自动清理信息
    lazyUpdate: false,
    style: {},
    className: '',
    theme,
    onChartReady: () => {},
    showLoading: false,
    loadingOption: null,
    onEvents: {},
    opts: { renderer: 'svg' },
  };

  static propTypes = {
    option: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    echarts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    notMerge: PropTypes.bool,
    lazyUpdate: PropTypes.bool,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    className: PropTypes.string,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChartReady: PropTypes.func,
    showLoading: PropTypes.bool,
    loadingOption: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    onEvents: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    opts: PropTypes.shape({
      devicePixelRatio: PropTypes.number,
      renderer: PropTypes.oneOf(['canvas', 'svg']),
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])]),
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])]),
    }),
  };

  echartsElement = null;
  echartsLib = null;

  constructor(props) {
    super(props);
    this.echartsElement = React.createRef(); // null; // echarts div element
    this.echartsLib = echarts;
  }

  // first add
  componentDidMount() {
    this.rerender();
  }

  // update
  componentDidUpdate(prevProps) {
    const echartObj = this.renderEchartDom();

    // 以下属性修改的时候，需要 dispose 之后再新建
    // 1. 切换 theme 的时候
    // 2. 修改 opts 的时候
    // 3. 修改 onEvents 的时候，这样可以取消所以之前绑定的事件 issue #151
    if (
      !isEqual(prevProps.theme, this.props.theme) ||
      !isEqual(prevProps.opts, this.props.opts) ||
      !isEqual(
        Object.keys(prevProps.onEvents || {}).sort(),
        Object.keys(this.props.onEvents || {}).sort(),
      )
    ) {
      this.dispose();

      this.rerender(); // 重建
      return;
    }

    // 样式修改的时候，可能会导致大小变化，所以触发一下 resize
    if (
      !isEqual(prevProps.style, this.props.style) ||
      !isEqual(prevProps.className, this.props.className)
    ) {
      try {
        echartObj.resize();
      } catch (_) {}
    }
  }

  // remove
  componentWillUnmount() {
    this.dispose();
  }
  // return the echart object
  getEchartsInstance = () =>
    this.echartsLib.getInstanceByDom(this.echartsElement) ||
    this.echartsLib.init(this.echartsElement, this.props.theme, this.props.opts);

  // dispose echarts and element-resize-event
  dispose = () => {
    if (this.echartsElement) {
      // if elementResizeEvent.unbind exist, just do it.
      try {
        elementResizeEvent.unbind(this.echartsElement);
      } catch (_) {}
      // dispose echarts instance
      this.echartsLib.dispose(this.echartsElement);
    }
  };

  rerender = () => {
    const { onEvents, onChartReady } = this.props;

    const echartObj = this.renderEchartDom();
    this.bindEvents(echartObj, onEvents || {});

    // fix bug of 100px width * height.
    // try {
    //   echartObj.resize();
    // } catch (_) {}

    // on chart ready
    if (typeof onChartReady === 'function') {
      this.props.onChartReady(echartObj);
    }
    // on resize
    // 取消绑定resize事件
    if (this.echartsElement) {
      elementResizeEvent(this.echartsElement, () => {
        echartObj.resize();
      });
    }
  };

  // bind the events
  bindEvents = (instance, events) => {
    const _bindEvent = (eventName, func) => {
      // ignore the event config which not satisfy
      if (typeof eventName === 'string' && typeof func === 'function') {
        // binding event
        // instance.off(eventName); // 已经 dispose 在重建，所以无需 off 操作
        instance.on(eventName, param => {
          func(param, instance);
        });
      }
    };

    // loop and bind
    for (const eventName in events) {
      if (Object.prototype.hasOwnProperty.call(events, eventName)) {
        _bindEvent(eventName, events[eventName]);
      }
    }
  };

  // render the dom
  renderEchartDom = () => {
    // init the echart object
    const echartObj = this.getEchartsInstance();
    // set the echart option

    echartObj.setOption(
      this.props.option,
      this.props.notMerge || false,
      this.props.lazyUpdate || false,
    );
    // set loading mask
    if (this.props.showLoading) {
      echartObj.showLoading(this.props.loadingOption || null);
    } else {
      echartObj.hideLoading();
    }

    return echartObj;
  };

  render() {
    const { style = {}, className } = this.props;
    const newStyle = {
      height: 300,
      ...style,
    };
    // for render
    return (
      <div
        ref={e => {
          this.echartsElement = e;
        }}
        style={newStyle}
        className={`echarts-for-react ${className}`}
      />
    );
  }
}
