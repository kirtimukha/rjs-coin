import React from 'react';
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

interface ISeries{
  name: string,
  type: string,
  data: number[]
}
interface IState {
  series: ISeries[],
  options: ApexOptions

}

const state:IState = {
  series: [
    {
      name: "総数",
      type: "column",
      data: [4857, 7289, 8108, 7899, 11140, 13559]
    },
    {
      name: "hoge数",
      type: "column",
      data: [680, 1108, 1200, 1098, 967, 800]
    },

    {
      name: "hoge率",
      type: "line",
      data: [14, 15.2, 14.8, 13.9, 8.68, 5.9]
    }
  ],
  options: {
    chart: {
      height: 350,
      type: "line"
    },
    colors: ["#318fb5", "#b0cac7", "#005086", "#f7d6bf", "#001244"],
    stroke: {
      width: [0, 4]
    },
    title: {
      text: "【タイトル】"
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1, 2]
    },
    labels: [
      "2015年度",
      "2016年度",
      "2017年度",
      "2018年度",
      "2019年度",
      "2020年度"
    ],
    xaxis: {
      type: "category"
    },
    yaxis: [
      {
        seriesName: "総数",
        title: {
          text: "人数"
        },
        labels: {
          formatter: (value: number) => {
            return value + "人";
          }
        }
      },
      {
        seriesName: "総数", // スケール合わせるためにわざと総数にしている
        show: false
      },
      {
        seriesName: "hoge率",
        opposite: true,
        title: {
          text: "比率"
        },
        labels: {
          formatter: (value: number) => {
            return value + "%";
          }
        }
      }
    ],
    legend: {
      position: "right",
      width: 128
    },
    tooltip: {
      shared: false
    }
  }
};

const Nft= () => {
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="line"
      height={350}>

    </ReactApexChart>
  );
}

export default Nft;