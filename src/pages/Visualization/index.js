import React, { Component } from 'react'
import style from './index.module.less'
import echarts from 'echarts'
// import ReactEcharts from 'echarts-for-react';
class Visualization extends Component{
  state={
    option:{
      legend: {},
      tooltip: {
          trigger: 'axis',
          showContent: false
      },
      dataset: {
          source: [
              ['product', '2014', '2015', '2016', '2017', '2018', '2019'],
              ['全球奶粉', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
              ['尿不湿', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
              ['营养辅食', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['宝宝洗护', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
      },
      xAxis: {type: 'category'},
      yAxis: {gridIndex: 0},
      grid: {top: '55%'},
      series: [
          {type: 'line', smooth: true, seriesLayoutBy: 'row'},
          {type: 'line', smooth: true, seriesLayoutBy: 'row'},
          {type: 'line', smooth: true, seriesLayoutBy: 'row'},
          {type: 'line', smooth: true, seriesLayoutBy: 'row'},
          {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                  formatter: '{b}: {@2014} ({d}%)'
              },
              encode: {
                  itemName: 'product',
                  value: '2014',
                  tooltip: '2014'
              }
          }
      ]
    }
  }
  componentDidMount(){
    this.initEchart()
  }
  
  initEchart(){
    var lineChart = echarts.init(this.refs.lineChart)
    

    lineChart.on('updateAxisPointer', function (event) {
      var xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          lineChart.setOption({
              series: {
                  id: 'pie',
                  label: {
                      formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                  },
                  encode: {
                      value: dimension,
                      tooltip: dimension
                  }
              }
          });
      }
  });

    lineChart.setOption(this.state.option);
  }
  
  render(){
    return(
      <div className={style.wrapper}>
        <div className={style.box}>
          <span style={{textAlign:'center',fontSize:30,marginBottom:20}}>2014-2017商品分类占比</span>
          <div ref='lineChart' style={{width:`100%`,height:500,textAlign:'center'}}></div>
        </div>
      </div>
    )
  }
}
export default Visualization