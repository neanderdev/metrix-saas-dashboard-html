const collapsibleSidebar = document.querySelector("aside .collapse-sidebar");
const expandedSidebar = document.querySelector("aside .expand-sidebar");
const openMenu = document.querySelector(
  "main header .header-container div .open-sidebar"
);
const closeMenu = document.querySelector("aside .close-sidebar");
const sidebar = document.querySelector("aside");

collapsibleSidebar.addEventListener("click", (event) => {
  sidebar.classList.toggle("collapsible");
});

expandedSidebar.addEventListener("click", (event) => {
  sidebar.classList.toggle("collapsible");
});

openMenu.addEventListener("click", (event) => {
  sidebar.style.marginLeft = "0";
  sidebar.style.display = "flex";
  sidebar.style.zIndex = "1";
  sidebar.style.animationName = "showSidebar";
});

closeMenu.addEventListener("click", (event) => {
  sidebar.style.marginLeft = "-100vw";
  sidebar.style.animationName = "";
  sidebar.style.zIndex = "0";
});

// const optionsMarketing = {
//   series: [100],
//   labels: ["Marketing"],
//   chart: {
//     type: "donut",
//     height: 200,
//   },
//   colors: ["#EEF0FA"],
//   legend: {
//     show: false,
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   plotOptions: {
//     pie: {
//       expandOnClick: true,
//     },
//   },
// };
const optionsMarketing = {
  series: [55, 30, 15],
  labels: ["Acquisition", "Retention", "Purchase"],
  chart: {
    type: "donut",
    height: 200,
  },
  colors: ["#5570F1", "#FFCC91", "#97A5EB"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: true,
    },
  },
};

// const optionsSummary = {
//   series: [
//     {
//       name: "Summary",
//       data: [100, 100, 100, 100, 100, 100],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 250,
//     zoom: {
//       enabled: false,
//     },
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#EEF0FA"],
//   plotOptions: {
//     bar: {
//       borderRadius: 5,
//       columnWidth: "35%",
//       dataLabels: {
//         position: "top",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: true,
//     formatter: (val) => {
//       return val + "%";
//     },
//     offsetY: -20,
//     style: {
//       fontSize: "12px",
//       colors: ["#304758"],
//     },
//   },
//   xaxis: {
//     categories: ["Sep 11", "Sep 12", "Sep 13", "Sep 14", "Sep 15", "Sep 16"],
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//     tooltip: {
//       enabled: true,
//     },
//   },
//   yaxis: {
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//     labels: {
//       show: true,
//       formatter: (val) => {
//         return val + "%";
//       },
//     },
//   },
// };
const optionsSummary = {
  series: [
    {
      name: "Sales",
      data: [80000, 42000, 55000, 26000, 75000, 38000],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#5570F1"],
  plotOptions: {
    bar: {
      borderRadius: 7.5,
      columnWidth: "15%",
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  xaxis: {
    categories: ["Sep 11", "Sep 12", "Sep 13", "Sep 14", "Sep 15", "Sep 16"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      formatter: (val) => {
        return val + "%";
      },
    },
  },
};

const chartMarketingElement = document.querySelector(
  "main .container .content .graphics .graphics-top .marketing #chart-marketing"
);
const chartSummaryElement = document.querySelector(
  "main .container .content .graphics .graphics-bottom #chart-summary"
);

const chartMarketing = new ApexCharts(chartMarketingElement, optionsMarketing);
const chartSummary = new ApexCharts(chartSummaryElement, optionsSummary);

chartMarketing.render();
chartSummary.render();

window.addEventListener("resize", (event) => {
  if (window.innerWidth > 1024) {
    if (sidebar.style.marginLeft === "-100vw") {
      sidebar.style.marginLeft = "0";
    }
  }

  if (window.innerWidth <= 1024) {
    sidebar.removeAttribute("class");
  }
});
