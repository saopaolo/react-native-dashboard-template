import React from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import StatusCard from "../../components/statusCard/StatusCard";

import statusCards from "../../assets/data/statusCard.json";

import Table from "../../components/table/Table";

import Badge from "../../components/badge/Badge.jsx";

//import "./Dashboard.css";
import "./_dashboard.scss";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [48, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }
  ],
  options: {
    chart: {
      background: "white"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    },
    legend: {
      position: "bottom"
    },
    grid: {
      show: true
    }
  }
};

const topCustomers = {
  head: ["user", "spending"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund"
    }
  ]
};

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.user}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund"
    }
  ]
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger"
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard__header">Dashboard</h2>
      <div className="dashboard__container">
        <div className="dashboard__container__row1">
          <div className="dashboard__container__row1__left">
            <div className="dashboard__container__row1__left__status__card">
              {statusCards.map((item, index) => (
                <div className="dashboard__container__row1__left__status__card__data">
                  {/*statuscard data*/}

                  <StatusCard
                    title={item.title}
                    count={item.count}
                    icon={item.icon}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="dashboard__container__row1__right">
            <div className="dashboard__container__row1__right__card__area">
              <div className="dashboard__first__right__card__area__content card fullHeight">
                {/* graphic area */}
                <Chart
                  options={chartOptions.options}
                  series={chartOptions.series}
                  type="line"
                  height="100%"
                  className="dashboard__first__right__card__area__content__graphic"
                />
                {/* again arrangement */}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* dashboard__container__row1 */}
        <div className="dashboard__container__row2">
          <div className="dashboard__container__row2__left">
            <div className="dashboard__container__row2__left__table">
              <div className="dashboard__container__row2__left__table__header">
                <h3>Top Customers</h3>
              </div>

              <div className="dashboard__container__row2__left__table__body">
                <Table
                  headData={topCustomers.head}
                  renderHead={(item, index) => renderCustomerHead(item, index)}
                  bodyData={topCustomers.body}
                  renderBody={(item, index) => renderCustomerBody(item, index)}
                />
              </div>

              <div className="dashboard__container__row2__left__table__footer">
                <Link to="/">View All</Link>
              </div>
            </div>
          </div>{" "}
          {/* dashboard__container__row2__left */}
          <div className="dashboard__container__row2__right">
            <div className="dashboard__container__row2__right__table">
              <div className="dashboard__container__row2__right__table__header">
                <h3>Latest Orders</h3>
              </div>

              <div className="dashboard__container__row2__right__table__body">
                <Table
                  headData={latestOrders.header}
                  renderHead={(item, index) => renderOrderHead(item, index)}
                  bodyData={latestOrders.body}
                  renderBody={(item, index) => renderOrderBody(item, index)}
                />
              </div>

              <div className="dashboard__container__row2__right__table__footer">
                <Link to="/">View All</Link>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* dashboard__container */}
    </div>
  );
};

export default Dashboard;
