import React from "react";

export default function Apperence(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          {props.data.map((item, key) => {
            return (
              <div className="col-4 my-2 " key={key}>
                <img
                  src={item.Poster}
                  alt=""
                  height="450px"
                  width="300px"
                  className="text-center"
                />
                <h4 className="text-left mt-1">{item.Title}</h4>
                <h6>{item.Year}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

