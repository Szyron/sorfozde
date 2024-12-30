import React from "react";

function Brewery({ breweries }) {
  return (
    <div className="card bg-accent w-96 shadow-xl m-5">
      <div className="card-body text-neutral">
        <h2 className="card-title" >Név: {breweries.name}</h2>
        <p>Iranyítoszám: {breweries.postal_code} </p>
        <p>Ország: {breweries.country}</p>
        <p>Állam: {breweries.state} </p>
        <p>Város: {breweries.city}</p>
        <p>Utca: {breweries.street}</p>
        <p>Telefonszám: {breweries.phone}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error text-accent mx-auto">Weboldal</button>
        </div>
      </div>
    </div>
  );
}

export default Brewery;
