import React, { useState } from "react";
import Db from "./DataBase";
import {indexName,docType} from './config'
import Registraion from "./userAuthentication";
function App() {
  const [name, setName] = useState("");
 
  
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
 
 

  // const getElasticSearchData = () => {
  //   var that = this;
  //   Db
  //     .search({
  //       index: indexName,
  //       type: docType,
  //       // refresh: true,
  //       // body: payload
  //     })
  //     .then(
  //       function (resp) {
  //         console.log(resp.hits.hits);
  //         that.setState({
  //           dataList: resp.hits.hits,
  //         });
  //       },
  //       function (err) {
  //         console.log(err.message);
  //       }
  //     );
  // };

  return (
    <div className="App">
      <Registraion /> 
    </div>
  );
}

export default App;
