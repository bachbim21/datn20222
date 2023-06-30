import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import ChartService from "../../../Service/chart.service";
export default function ChartUser() {
  const [setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  var title = "Biểu đồ người dùng | Tổng số: "
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
    type: 'bar',
    title: {
      text: 'Biểu đồ tăng trưởng người dùng',
      fontSize: 16,
      fontWeight: 400,
      fontFamily: "Roboto, sans-serif",
    },
    legend: {
      verticalAlign: "bottom",
      align: "center"
    },
    scaleX: {
      label: { text: 'Thời gian' },
      labels: []
    },
    scaleY: {
      label: { text: 'Số lượng' },
    },
    plotarea: {
      margin: 'dynamic'
    },
    plot: {
      stacked: true,
      valueBox: {
        text: "%stack-total",
        rules: [
          {
            rule: '%stack-top == 0',
            visible: 0
          }
        ]
      }
    },
    series: [
      {
        values: [],
        text: 'Số lượng kích hoạt tài khoản',
        'background-color': "#85CDFD",
      },
    ],
  }
  const [chartConfig, setChartConfig] = useState(config);
  const [chartBarConfig, setChartBarConfig] = useState(configChartRec);
  const chartService = new ChartService()
  useEffect(() => {
    setOpenKeys(["chart"]);
    setKeyActive(["chart-user"]);
    setHeader("Biểu đồ thống kê người dùng");
    chartService.getChartUser().then(response => {
      setChartConfig({
        ...config,
        title: {
          text: title + response.totalQuantity,
          fontSize: 16,
          offsetY: 20,
          fontWeight: 400,
          fontFamily: "Roboto, sans-serif",
        },
        series: [
        {
          values: [response.quantityActive],
          text: 'Active',
          'background-color': "#3385ff",
        },
        {
          values: [response.quantityInActive],
          text: 'InActive',
          'background-color': "#8585ad",
        }
      ]
      })
        })
    chartService.getChartBarUser().then(res => {
      setChartBarConfig({
        ...configChartRec,
        scaleX: {
          label: { text: 'Thời gian' },
          labels: res.labels
        },
        series: [
          {
            values: res.quantity,
            text: 'Số lượng kích hoạt tài khoản',
            'background-color': "#85CDFD",
          },
        ],
      })
    })
  }, []);
  return <div className="bg-white flex flex-row rounded shadow-2xl">
    <div className="w-96 h-56"><ZingChart data={chartConfig} /></div>
    <div className="w-96  h-56"><ZingChart data={chartBarConfig} /></div>
  </div>;
}
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import ChartService from "../../../Service/chart.service";
export default function ChartUser() {
  const [setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  var title = "Biểu đồ người dùng | Tổng số: "
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
    type: 'bar',
    title: {
      text: 'Biểu đồ tăng trưởng người dùng',
      fontSize: 16,
      fontWeight: 400,
      fontFamily: "Roboto, sans-serif",
    },
    legend: {
      verticalAlign: "bottom",
      align: "center"
    },
    scaleX: {
      label: { text: 'Thời gian' },
      labels: []
    },
    scaleY: {
      label: { text: 'Số lượng' },
    },
    plotarea: {
      margin: 'dynamic'
    },
    plot: {
      stacked: true,
      valueBox: {
        text: "%stack-total",
        rules: [
          {
            rule: '%stack-top == 0',
            visible: 0
          }
        ]
      }
    },
    series: [
      {
        values: [],
        text: 'Số lượng kích hoạt tài khoản',
        'background-color': "#85CDFD",
      },
    ],
  }
  const [chartConfig, setChartConfig] = useState(config);
  const [chartBarConfig, setChartBarConfig] = useState(configChartRec);
  const chartService = new ChartService()
  useEffect(() => {
    setOpenKeys(["chart"]);
    setKeyActive(["chart-user"]);
    setHeader("Biểu đồ thống kê người dùng");
    chartService.getChartUser().then(response => {
      setChartConfig({
        ...config,
        title: {
          text: title + response.totalQuantity,
          fontSize: 16,
          offsetY: 20,
          fontWeight: 400,
          fontFamily: "Roboto, sans-serif",
        },
        series: [
        {
          values: [response.quantityActive],
          text: 'Active',
          'background-color': "#3385ff",
        },
        {
          values: [response.quantityInActive],
          text: 'InActive',
          'background-color': "#8585ad",
        }
      ]
      })
        })
    chartService.getChartBarUser().then(res => {
      setChartBarConfig({
        ...configChartRec,
        scaleX: {
          label: { text: 'Thời gian' },
          labels: res.labels
        },
        series: [
          {
            values: res.quantity,
            text: 'Số lượng kích hoạt tài khoản',
            'background-color': "#85CDFD",
          },
        ],
      })
    })
  }, []);
  return <div className="bg-white flex flex-row rounded shadow-2xl">
    <div className="w-96 h-56"><ZingChart data={chartConfig} /></div>
    <div className="w-96  h-56"><ZingChart data={chartBarConfig} /></div>
  </div>;
}