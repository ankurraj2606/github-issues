import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/repos/octocat/hello-world/issues/4")
      .then((res) => {
        console.log(res);
        this.setState({
          data: res,
        });
      });
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <Navbar />
        Hello World
        {data.status} {data.statusText} {data.statusText} {data.data.url}
      </div>
    );
  }
}

export default App;
