//円グラフ
const createCircleChart = (canvasId, percent, label) => {
  const ctx = document.getElementById(canvasId).getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: ["#007bff", "#e6e6e6"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: "80%",
      animation: {
        animateRotate: true,
        duration: 1500,
      },
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false },
      },
    },
    plugins: [
      {
        id: "centerText",
        beforeDraw(chart) {
          const { ctx, chartArea } = chart;
          const centerX = (chartArea.left + chartArea.right) / 2;
          const centerY = (chartArea.top + chartArea.bottom) / 2;

          ctx.save();
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          ctx.fillStyle = "#007bff";
          ctx.font = "bold 20px sans-serif";
          ctx.fillText(label, centerX, centerY - 25);

          ctx.font = "bold 50px sans-serif";
          ctx.fillText(`${percent}%`, centerX, centerY + 15);
          ctx.restore();
        },
      },
    ],
  });
};

// 3つのグラフを生成
createCircleChart("chart1", 93, "顧客満足度");
createCircleChart("chart2", 77, "リピート率");
createCircleChart("chart3", 85, "顧客維持率");

//棒グラフ
const ctx = document.getElementById("compareChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["当社", "A社", "B社"],
    datasets: [
      {
        data: [10000, 20000, 22000],
        backgroundColor: ["#f06c00", "#ccc", "#ccc"],
        borderRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    animations: {
      y: {
        duration: 1200,
        easing: "easeOutQuad",
      },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        offset: 0,
        color: (ctx) => (ctx.dataIndex === 0 ? "#f06c00" : "#666"),
        font: (ctx) => ({
          size: ctx.dataIndex === 0 ? 40 : 14,
          weight: "bold",
        }),
        formatter: (value) => {
          return value.toLocaleString() + "円";
        },
      },
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30000,
        ticks: { display: false },
        grid: { display: false, drawTicks: false },
      },
      x: {
        ticks: {
          color: ["#f06c00", "#666", "#666"],
          font: { weight: "bold" },
        },
        grid: { display: false },
      },
    },
  },
  plugins: [ChartDataLabels],
});
