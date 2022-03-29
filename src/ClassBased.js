import { Component } from "react";

export class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: props.text,
    };

    // setTimeout(() => {
    //   this.setState({ message: "constructor" });
    // }, 100);

    console.log("this.constructor:::", this.state);
  }

  componentDidMount = () => {
    console.log("this.componentDidMount:::", this.state);
  };

  handleChange = (msg) => {
    var defaultMsg = "Hello World";
    this.setState({
      message: msg || defaultMsg,
    });
  };

  render() {
    console.log("this.render:::", this.state);
    const { message } = this.state;
    return (
      <>
        <p>Message: {message}</p>
        <button onClick={() => this.handleChange("test")}>
          Update Message
        </button>
      </>
    );
  }
}
