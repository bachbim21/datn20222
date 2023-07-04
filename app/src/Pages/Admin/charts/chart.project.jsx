import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ChartService from "../../../Service/chart.service";
import 'zingchart/es6';
import zingchart from 'zingchart';
export default function ChartProject() {
  const [ setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  var config = {
    type: "pie",
    title: {
      text: title,
      fontSize: 16,
      offsetY: 20,
      fontWeight: 400,
      fontFamily: "Roboto, sans-serif",
    },
    plot: {
      "border-width": 1,
      "border-color": "#cccccc",
      "line-style": "dotted",
      'value-box': {
        'font-color': "white",
        'font-size':11,
        'font-weight': "normal",
        "placement": "in",
        rules: [
          {
            rule: '%npv < 1',
            text: '',
          },
          {
            rule: "%v > 0",
            placement: "in",
            text: '%v (%npv%)',
          },
        ]
      }
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "2x1",
    },
    series: [
      {
        values: [0],
        text: 'Active',
        'background-color': "#3385ff",
      },
      {
        values: [0],
        text: 'InActive',
        'background-color': "#8585ad",
      }
    ]
  };
  let configChartRec = {
    type: "bar",
    title: {
      text: "Biểu đồ tăng trưởng người dùng",
      fontSize: 16,
      fontWeight: 400,
      fontFamily: "Roboto, sans-serif",
      marginBottom: 20,
      paddingBottom: 40
    },
    legend: {
      verticalAlign: "bottom",
      align: "center"
    },
    scaleX: {
      label: { text: "Thời gian" },
      labels: []
    },
    scaleY: {
      label: { text: "Số lượng" }
    },
    plotarea: {
      margin: "dynamic"
    },
    plot: {
      stacked: true,
      valueBox: {
        text: "%stack-total",
        rules: [
          {
            rule: "%stack-top == 0",
            visible: 0
          }
        ]
      }
    },
    series: [
      {
        values: [],
        text: "Số lượng kích hoạt tài khoản",
        "background-color": "#85CDFD"
      }
    ]
  };
  const chartService = new ChartService()
  var title = "Biểu đồ thống kê dự án | Tổng số: "
  const [chartConfig, setChartConfig] = useState(config);
  useEffect(()=>{
    setOpenKeys(['chart'])
    setKeyActive(['chart-project'])
    setHeader("Biểu đồ thống kê dự án")
    chartService.getPieProject().then(response => {
      let sum = response.quantity1 +response.quantity2
      config.title.text = title + sum
      config.series = [
          {
            values: [response.quantity1],
            text: 'Tailwind',
            'background-color': "#3385ff",
          },
          {
            values: [response.quantity2],
            text: 'Bootstrap',
            'background-color': "#8585ad",
          }
        ]
      zingchart.render({
        id : "chart-pie-product",
        // width: 600,
        height:  400,
        data : config
      })
    })

    chartService.getChartBarProject().then(res => {
      configChartRec.scaleX.labels = res.labels;

      configChartRec.series = [
        {
          values: res.quantity,
          text: "Số lượng dự án",
          "background-color": "#85CDFD"
        }
      ];
      zingchart.render({
        id: "chart-bar-project",
        // width: 600,
        height: 380,
        data: configChartRec
      });
    });
  },[])
  return  <div className="bg-white flex flex-row rounded shadow-2xl">
        <div id="chart-pie-product" className="mt-5" style={{
          width: "500px"
        }}></div>
    <div id="chart-bar-project"  className="mt-5" style={{
      width: "500px"
    }}></div>
  </div>
}
