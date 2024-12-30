import { useState, useEffect } from "react";
import Brewery from "./Brewery";

function Breweries() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries`)
      .then((resp) => resp.json())
      .then((breweriesData) => {
        setBreweries(breweriesData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-neutral p-5 ">
      <div className="flex-none gap-2 mb-5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Keressen varos alapjan"
            className="input input-bordered w-auto max-w-max mx-auto"
          />
          
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {
          breweries.map((breweries) => (
            <Brewery key={breweries.id} breweries={breweries} />
          ))
          //key={character.id} itt mindig egyedi azonosítót kell megadni a objectbol
          //character={character} itt adjuk at a karaktert a Character komponensnek
        }
      </div>
    </div>
  );
}

export default Breweries;
