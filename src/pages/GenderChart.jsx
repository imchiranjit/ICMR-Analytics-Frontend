import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const GenderChart = () => {
  const [genderChartData, setGenderChartData] = useState([]);

  const genderDataURL = "http://localhost:4300/get/Gender/All/count";

  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log("Data fetched successfully:", url);
          console.log(data);
        } else {
          console.log("Failed to fetch data:", response.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(genderDataURL, setGenderChartData);
  }, [genderDataURL]);

  const genderData = {
    labels: genderChartData?.map((x) => x.gender),
    datasets: [
      {
        barPercentage: 0.5,
        maxBarThickness: 40,
        minBarLength: 2,
        label: `${genderChartData.length} Count in Gender Set`,
        data: genderChartData?.map((x) => x.count),
        backgroundColor: [
          "rgb(255, 99, 132,0.9)",
          "rgb(255, 159, 64,0.9)",
          "rgb(255, 205, 86,0.9)",
          "rgb(75, 192, 192,0.9)",
          "rgb(54, 162, 235,0.9)",
          "rgb(153, 102, 255,0.9)",
          "rgb(201, 203, 207,0.9)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          
        ],
        borderWidth: 1,
      },
    ],
  };

  const genderOptions = {
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
    },
    plugins: {
      canvasBackgroundColor: { id: "" },
      tooltip: {
        events: ["mousemove"],
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = `Count: ${context.parsed.y}`;
            return label;
          },
        },
      },
    },
    legend: {
      labels: {
        fontSize: 60,
      },
    },
  };

  return (
    <>
      <div className="row justify-content-center">
        <div
          className="col mx-2 my-2"
          style={{
            fontFamily: "Calibri",
            // boxShadow:
            //   "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <h4 className="text-center">
            <em>On the basis of Gender</em>
          </h4>
          <Bar data={genderData} height={200} options={genderOptions} />
        </div>
      </div>
    </>
  );
};

export default GenderChart;
