import React, { useEffect, useState } from "react";
import covid from "./images/covid.png";
import { getApiCovidData } from "./api/getApiCovidData";

function CovidData() {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    const data = getApiCovidData();
    data
      .then((res) => {
        return res;
      })
      .then((response) => {
        setCovidData(response.data.Countries);
      });
  }, []);

  return (
    <div className="container">
      <div className="header_static">
        <img className="covid_logo" src={covid} alt="" />
        <div className="covid_header">
          <p>Statistic</p>
        </div>
        <div className="covid_searchPart">
          <input type="text" />
        </div>
      </div>
      <div className="main_table">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Country</th>
              <th>Total Confirmed</th>
            </tr>
          </thead>
          {covidData.map((item, index) => {
            return (
              <tbody>
                <tr>
                    <th>{index + 1}</th>
                    <th>{item.Country}</th>
                    <th>{item.TotalConfirmed}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default CovidData;
