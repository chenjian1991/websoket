<template>
  <div class="gbboline">
    <div class="gbboline-btns">
      <button class="gbboline-btns__settime" @click="restoreDefault()">Restores</button>
      <button class="gbboline-btns__settime">m</button>
      <button class="gbboline-btns__settime">H</button>
      <button class="gbboline-btns__settime">1D</button>
      <button class="gbboline-btns__settime">1W</button>
      <button class="gbboline-btns__settime">1M</button>
    </div>
    <div ref="kline" class="gbboline-box"></div>
  </div>
</template>
<script>
import { createChart, LineStyle } from 'lightweight-charts'

export default {
  name: 'GBBOKLine',
  data() {
    return {
      isInited: false,
      kline: {
        highData: [],
        lowData: [],
        marketData: []
      },
      // eslint-disable-next-line vue/no-reserved-keys
      _chart: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _areaSeries: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _extraSeries: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _barSeries: ''
    }
  },
  props: {
    historyData: {
      type: Object,
      default(){
        return {}
      }
    },
    currentSymbol: {
      type: String,
      default: "BTCUSD"
    },
    kLineData: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  watch: {
    kLineData(val){
      if(Object.keys(val).length > 0){
        if(this.isInited){
          this.updateData(val)
        }
      }
    },
    historyData(val){
      console.log('valaaa',val)
      if(Object.keys(val).length > 0){
        this.setHistoryData(val)
      }
    }
  },
  created(){},
  mounted(){
    this.klineInit()
  },
  methods: {
    getUTCTime(timeStamp) {
      const utcTime = new Date(timeStamp)
      return new Date(
        utcTime.getUTCFullYear(),
        utcTime.getUTCMonth(),
        utcTime.getUTCDate(),
        utcTime.getUTCHours(),
        utcTime.getUTCMinutes(),
        utcTime.getUTCSeconds()
      ).getTime()
    },
    // 设置历史数据
    setHistoryData(res) {
      const { high, low, ma } = res
      // const _high = high.map((val) => ({ ...val, time: this.getUTCTime(val.time) }))
      // const _low = low.map((val) => ({ ...val, time: this.getUTCTime(val.time) }))
      // const _ma = ma.map((val) => ({ ...val, time: this.getUTCTime(val.time) }))
      this._areaSeries.setData(high)
      this._extraSeries.setData(low)
      this._barSeries.setData(ma)
      this.isInited = true
    },
    updateData(val){
      const { high, low, ma, dateTimeStamp } = val
      // const time = new Date(dateTime).getTime() / 1000
      // const time = this.getUTCTime(dateTimeStamp)
      this._areaSeries.update({
        time: dateTimeStamp,
        value: high
      })
      this._extraSeries.update({
        time: dateTimeStamp,
        value: low
      })
      this._barSeries.update({
        time: dateTimeStamp,
        value: ma
      })
    },
    // 复原折线图
    restoreDefault(){
      this._chart.timeScale().scrollToRealTime()
    },
    // K线初始化
    klineInit() {
      const baseDom = this.$refs.kline
      const klineBox = {
        width: baseDom.offsetWidth,
        height: baseDom.offsetHeight-40
      }
      this._chart = createChart(baseDom, {
        width: klineBox.width,
        height: klineBox.height,
        priceScale: {
          mode: 1
        },
        localization: {
          locale: 'en-US' // 语言
          // dateFormat: 'yyyy/MM/dd', // 日期显示格式
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false
        },
        layout: {
          backgroundColor: '#07141A',
          textColor: '#ffffff'
        },
        grid: {
          vertLines: {
            color: 'rgba(197, 203, 206, 0.4)',
            style: LineStyle.Dotted
          },
          horzLines: {
            color: 'rgba(197, 203, 206, 0.4)',
            style: LineStyle.Dotted
          }
        }
      });

      // 最高
      this._areaSeries = this._chart.addLineSeries({
        color: "#2CB48C",
        crosshairMarkerVisible: true,
        lineWidth: 2
      });
      // 最低
      this._extraSeries = this._chart.addLineSeries({
        color: "#E83160",
        lineWidth: 2
      });
      // 平均
      this._barSeries = this._chart.addLineSeries({
        // lineStyle: 1,
        color: "#fff",
        lineWidth: 1
      })
    }
  },
  beforeDestroy() {
    this._chart = null
  }
}
</script>
<style lang="less">
  .gbboline{
    &-btns{
      height: 20px;
      text-align: right;
      overflow: hidden;
      background: #041D25;
      display: none;
      &__settime{
        display: inline-block;
        height: 20px;
        padding: 0 10px;
        border: 0;
        border-right: 1px solid #000;
        color: #788390;
        background: transparent;
        display: none;
        // visibility: hidden;
      }
    }
    &-box{
      width: 450px;
      height: 506px;
      color: #fff;
    }
  }
</style>