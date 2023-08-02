import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import "zingchart/es6";
import zingchart from "zingchart";
import ChartService from "../../../Service/chart.service";
import { useState } from "react";

export default function ChartUser() {
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
    plotarea: {
      margin: "dynamic",
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
  useEffect(() => {
    setOpenKeys(["chart"]);
    setKeyActive(["chart-user"]);
    setHeader("Biểu đồ thống kê người dùng");
    chartService.getChartUser().then((response) => {
      setTitle1("Biểu đồ người dùng | Tổng số: " + response.totalQuantity);
      config.series = [
        {
          values: [response.quantityActive],
          text: "Active",
          "background-color": "#3385ff",
        },
        {
          values: [response.quantityInActive],
          text: "InActive",
          "background-color": "#8585ad",
        },
      ];
      zingchart.render({
        id: "chart-user-pie",
        // width: 600,
        // height: 400,
        data: config,
      });
    });

    chartService.getChartBarUser().then((res) => {
      configChartRec.scaleX.labels = res.labels;

      configChartRec.series = [
        {
          values: res.quantity,
          text: "Số lượng kích hoạt tài khoản",
          "background-color": "#85CDFD",
        },
      ];
      zingchart.render({
        id: "chart-user-bar",
        // width: 600,
        // height: 380,
        data: configChartRec,
      });
    });
  }, []);
  return (
    <div className="bg-white grid grid-cols-2 w-full rounded shadow-2xl">
      <h3 className="mx-auto mt-5 font-bold">{title1}</h3>
      <h3 className=" mx-auto mt-5 font-bold">
        Biểu đồ tăng trưởng người dùng
      </h3>
      <div id="chart-user-pie" className="mt-5"></div>
      <div id="chart-user-bar" className="mt-5"></div>
    </div>
  );
}
