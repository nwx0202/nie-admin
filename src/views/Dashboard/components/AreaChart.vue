<template>
  <div class="area-chart" ref="echart"></div>
</template>

<script>
export default {
  name: 'AreaChart',
  data() {
    return {
      
    }
  },
  mounted() {
    // 渲染echart图
    this.loadEchart();
  },
  methods: {
    // 渲染echart图
    loadEchart() {
      let myChart = this.$echarts.init(this.$refs.echart);
      let option = {
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        legend: {
          data: ['直接访问', '搜索引擎']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisTick: {
            show: false
          }
        },
        yAxis: {
          min: 200,
          max: 500,
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '直接访问',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            animationDuration: 2000,
            animationEasing: 'cubicInOut',
            data: [320, 332, 301, 334, 390, 350, 330]
          },
          {
            name: '搜索引擎',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            animationDuration: 2000,
            animationEasing: 'quadraticOut',
            data: [320, 332, 401, 334, 390, 430, 310]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style>
.area-chart {
  height: 500px;
}
</style>