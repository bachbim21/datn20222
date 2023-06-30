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
        width: 600,
        height:  400,
        data : config
      })
    })
  },[])
  return  <div className="bg-white flex flex-row rounded shadow-2xl">
        <div id="chart-pie-product"></div>
  </div>
}
