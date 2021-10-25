import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Db from "./DataBase";
import {indexName,docType} from './config'
function App() {
  const [name, setName] = useState("");
 
  var payload;
  payload = {
    user: "elastic",
    post_date: "2010-01-15T01:46:38",
    message: "any message from the user",
  };
  Db.ping(
    {
      requestTimeout: Infinity,
    },
    function (error) {
      if (error) {
        console.trace("elasticsearch cluster is down!");
      } else {
        console.log("All is well");
      }
    }
  );
 
  Db
    .index({
      index: indexName,
      type: docType,
      refresh: true,
      body: payload,
    })
    .then(
      function (resp) {
        console.log("index is created ", resp);
      },
      function (err) {
        console.log(err.message);
      }
    );

  const getElasticSearchData = () => {
    var that = this;
    Db
      .search({
        index: indexName,
        type: docType,
        // refresh: true,
        // body: payload
      })
      .then(
        function (resp) {
          console.log(resp.hits.hits);
          that.setState({
            dataList: resp.hits.hits,
          });
        },
        function (err) {
          console.log(err.message);
        }
      );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </header>
    </div>
  );
}

export default App;
