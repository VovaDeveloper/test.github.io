function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + "h " + minutes + "min";         
}


function Table({ trips }) {
    return (
      <div>
          {trips.map(trip => (
            <div>
            <div class="data-block">
            <div class="data-table ">
               <div class="data-place-name column">
                <p>{trip.from}</p>
               </div>
               <div class="data-duration"><p>{time_convert(trip.duration)}</p></div>
               <div class="data-place-name column">
               <p class="data-place-name right">{trip.to}</p>   
               </div>
            </div>
               <div class="range_container">
               <div class="sliders_control">
               <input id="fromSlider" type="range" value="0" min="0" max="100" />
               <input id="toSlider" type="range" value="100" min="0" max="100" />
               </div>
               </div>
            <div class="data-table">
               <p class="data-time">{trip.starttime} Uhr</p>
                  <p class="data-time">{trip.endtime} Uhr</p>
            </div>
      </div>
            </div>
          ))}
      </div>
    );
  }

  export default Table;