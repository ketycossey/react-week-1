import React, { Component } from "react";

class Watchkit extends Component {
  render() {
    return (
      <div className="watchkit">
        <p id="header"> Hello Watchkit</p>
        <li>
          Last month Apple released the anticipated WatchKit Framework for
          developers in the form of iOS 8.2 beta SDK release. The WatchKit
          framework enables the developers to create Apple Watch applications.
          In this article, we are going to focus on the basics of getting tarted
          with the WatchKit framework and developing apps for the Apple Watch.
        </li>
        <li className="commentbar">12 comments 124 likes</li>
      </div>
    );
  }
}
export default Watchkit;
