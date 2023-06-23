import React, { Component } from "react";
import Loading from "../sub/Loading";

export class Events extends Component {
  render() {
    document.title = "Events";
    return (
      <div>
        Events
        <Loading />
      </div>
    );
  }
}

export default Events;
