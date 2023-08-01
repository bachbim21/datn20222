import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ChartService from "../../../Service/chart.service";
import "zingchart/es6";
import zingchart from "zingchart";

export default function ChartProject() {
  const [setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  const [title1, setTitle1] = useState("");
  var config = {
    type: "pie",
    plot: {
      "border-width": 1,
      "border-color": "#cccccc",
      "line-style": "dotted",
      "value-box": {
        "font-color": "white",
        "font-size": 11,
        "font-weight": "normal",
        placement: "in",
        rules: [
          {
            rule: "%npv < 1",
            text: "",
          },
          {
            rule: "%v > 0",
            placement: "in",
            text: "%v (%npv%)",
          },
        ],
      },
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "2x1",
    },
    series: [
      {
        values: [0],
        text: "Active",
        "background-color": "#3385ff",
      },
      {
        values: [0],
        text: "InActive",
        "background-color": "#8585ad",
      },
    ],
  };
  let configChartRec = {
    type: "bar",

    legend: {
      verticalAlign: "bottom",
      align: "center",
    },
    scaleX: {
      label: { text: "Thời gian" },
      labels: [],
    },
    scaleY: {
      label: { text: "Số lượng" },
    },
    plot: {
      stacked: true,
      valueBox: {
        text: "%stack-total",
        rules: [
          {
            rule: "%stack-top == 0",
            visible: 0,
          },
        ],
      },
    },
    series: [
      {
        values: [],
        text: "Số lượng kích hoạt tài khoản",
        "background-color": "#85CDFD",
      },
    ],
  };
  const chartService = new ChartService();
  const [chartConfig, setChartConfig] = useState(config);
  useEffect(() => {
    setOpenKeys(["chart"]);
    setKeyActive(["chart-project"]);
    setHeader("Biểu đồ thống kê dự án");
    chartService.getPieProject().then((response) => {
      let sum = response.quantity1 + response.quantity2;
      setTitle1("Biểu đồ thống kê dự án | Tổng số: " + sum);
      config.series = [
        {
          values: [response.quantity1],
          text: "Tailwind",
          "background-color": "#3385ff",
        },
        {
          values: [response.quantity2],
          text: "Bootstrap",
          "background-color": "#8585ad",
        },
      ];
      zingchart.render({
        id: "chart-pie-product",
        // width: 600,
        // height: 400,
        data: config,
      });
    });

    chartService.getChartBarProject().then((res) => {
      configChartRec.scaleX.labels = res.labels;

      configChartRec.series = [
        {
          values: res.quantity,
          text: "Số lượng dự án",
          "background-color": "#85CDFD",
        },
      ];
      zingchart.render({
        id: "chart-bar-project",
        // width: 600,
        // height: 380,
        data: configChartRec,
      });
    });
  }, []);
  return (
    <div className="bg-white  grid grid-cols-2 w-full rounded shadow-2xl">
      <h3 className="mx-auto  font-bold">{title1}</h3>
      <h3 className=" mx-auto  font-bold">Biểu đồ tăng trưởng dự án</h3>
      <div id="chart-pie-product" className="mt-5 basis-1/2"></div>
      <div id="chart-bar-project" className="mt-5 basis-1/2"></div>
    </div>
  );
}
