import React, { Component } from "react";

function Images (props){

    return (
      <img
        src={props.srcGambar}
        alt="Random Food"
        width="100"
        height="100"
      />
    );
}

export default Images;
