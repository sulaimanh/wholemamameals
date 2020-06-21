import React, { Component } from "react";

export default class YouTubeSubscribe extends Component {
  /**
   *  React.createRef to attach script after mount
   *  Ref) https://reactjs.org/docs/refs-and-the-dom.html
   */

  constructor(props) {
    super(props);
    this.youtubeSubscribeNode = React.createRef();

    this.state = {
      initialized: false
    };
  }

  initialized() {
    this.setState({
      initialized: true
    });
  }

  // componentDidMount() {
  //   if (this.state.initialized) {
  //     return;
  //   }

  //   const youtubescript = document.createElement("script");
  //   youtubescript.src = "https://apis.google.com/js/platform.js";

  //   this.youtubeSubscribeNode.current.parentNode.appendChild(youtubescript);
  //   this.initialized();
  // }

  render() {
    return (
      <div
        ref={this.youtubeSubscribeNode}
        className="g-ytsubscribe"
        data-channelid="UChK66QIStHwkU9lhoRKTKcg"
        data-layout={window.innerWidth < 650 ? "default" : "full"}
        data-count="hidden"
      ></div>
    );
  }
}
