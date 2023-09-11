import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./context/Context";

const Dashboard = () => {
  const { data } = useContext(MyContext);

  const [newData, setNewData] = useState([]);

  const formatData = () => {
    // console.log(data)
    let formatedData = [];
    if (!data || !data.cumulative_data || data.cumulative_data.length <= 0) {
      console.log("from return");
      setNewData([]);
      return;
    }
    const { cumulative_data, energy_loss, todays_energy } = data;
    for (let i = 0; i < cumulative_data.length; i++) {
      let obj = {
        time: cumulative_data[i]?.time,
        pr: cumulative_data[i]?.cumulative_pr?.toFixed(2) ?? 0.00.toFixed(2),
        ir: cumulative_data[i]?.cumulative_poa_avg?.toFixed(2) ?? 0.00.toFixed(2),
        total_energy: todays_energy[i]?.todays_generation?.toFixed(2) ?? 0.00.toFixed(2),
        energy_loss: energy_loss[i]?.energy_loss?.toFixed(2) ?? 0.00.toFixed(2),
      };
      formatedData.push(obj);
    }

    // console.log(formatedData)
    setNewData(formatedData);
  };

  useEffect(() => {
    formatData();
  }, [data]);

  const renderTable = () => {
    return newData.map((el) => {
      return (
        <tr key={el.time+el.pr+el.energy_loss+el.todays_energy+ Math.random()}>
            <td>{el.time}</td>
            <td>{el.pr}</td>
            <td>{el.ir}</td>
            <td>{el.total_energy}</td>
            <td>{el.energy_loss}</td>
        </tr>
      );
    });
  };

  console.log("from new data", newData);

  if (!data || !data.cumulative_data || !data.cumulative_data.length > 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="table">
      {newData && newData.length > 0 && (
        <table>
          <tr>
            <th>Date and Time</th>
            <th>PR</th>
            <th>Irr</th>
            <th>Total Energy</th>
            <th>Energy Loss</th>
          </tr>
          <tbody>
          { renderTable ()}
          <tfoot>
          <tr>
            <td>Date and Time</td>
            <td>PR</td>
            <td>Irr</td>
            <td>Total Energy</td>
            <td>Energy Loss</td>
          </tr>
            </tfoot>
          </tbody>
        </table>
       
      )}
    </div>
  );
};

export default Dashboard;
