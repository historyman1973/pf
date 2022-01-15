import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from './components/Header'

const data = [
  {
    name: 'May 20', uv: 422536, pv: 2400, amt: 2400,
  },
  {
    name: 'Jun 20', uv: 225246, pv: 2400, amt: 2400,
  },
  {
    name: 'Jul 20', uv: 345265, pv: 2400, amt: 2400,
  },
  {
    name: 'Aug 20', uv: 364756, pv: 2400, amt: 2400,
  },
  {
    name: 'Sep 20', uv: 367854, pv: 2400, amt: 2400,
  },
  {
    name: 'Nov 20', uv: 489918, pv: 2400, amt: 2400,
  },
  {
    name: 'Dec 20', uv: 676273, pv: 1398, amt: 2210,
  },
  {
    name: 'Jan 21', uv: 699028, pv: 9800, amt: 2290,
  },
  {
    name: 'Feb 21', uv: 501829, pv: 3908, amt: 2000,
  },
  {
    name: 'Mar 21', uv: 719028, pv: 4800, amt: 2181,
  },
  {
    name: 'Apr 21', uv: 981023, pv: 3800, amt: 2500,
  },
  {
    name: 'May 21', uv: 1000001, pv: 4300, amt: 2100,
  }
];

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header title={'dashboard'} viewingId={window.location.pathname.split('/')[2]} />
          <br />
          <br />
            <div class="main-container">
              <div class="row">
                <div class="columnChart">
                  <div style={{ width: '100%', height: 500 }}>
                    <ResponsiveContainer width="80%">
                      <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div class="columnSummary">
                  <h1>1,000,501 GBP</h1>
                  <p>TOTAL NET WORTH</p>
                  <h1>1,312,674 GBP</h1>
                  <p>YOU OWN</p>
                  <h1>-312,173 GBP</h1>
                  <p>YOU OWE</p>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default Dashboard;