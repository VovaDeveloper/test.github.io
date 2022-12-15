import React from "react";
import "./styles.css";
import Buttons from "./buttons";
import Table from "./table";


const { useState } = React;

function Example({ data }) {



    const [ trips, setTrips ] = useState(data);
    const [ from, setFrom ] = useState();
   const [ to, setTo] = useState();
  
    // Simple function to accept a from
    // as an argument and update the state with it
    function handleFrom(from) {
      setFrom(from);
    }

    function handleTo(to) {
        setTo(to);
      }

    function filterData(trips, from, to) {
      let toFrankfurt = trips.filter(trip => trip.to.includes('Frankfurt'));
      let vonFrankfurt = trips.filter(trip => trip.from.includes('Frankfurt'));
      if (from === "Frankfurt Hbf"){
        if( to === "Frankfurt Hbf") return toFrankfurt;
        return vonFrankfurt;
      }  
      return toFrankfurt;

    };
     
 
    return (
      <div class="container">
        <Buttons handleFrom={handleFrom} handleTo={handleTo}/>
        <Table trips={filterData(trips, from, to) } />
      </div>
    );
  
  }
  

export default Example;