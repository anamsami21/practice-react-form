import { Component } from "react";
import "./App.css";
import Application from "./application/Application";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formDataInputBox: "",
      formData: [{ value: "Name" }, { value: "Age" }],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => {
      const newLabels = [...prevState.formData];
      newLabels.push({ value: prevState.formDataInputBox});
      return {
        ...prevState,
        formDataInputBox: "",
        formData: [...newLabels],
      };
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            style={{ display: "block", margin: "auto" }}
            value={this.state.formDataInputBox}
            name="formDataInputBox"
            onChange={this.handleChange}
          />
          <button style={{ display: "block", margin: "auto" }} type="submit">
            Add Label
          </button>
        </form>
        <Application data={this.state.formData} />
      </div>
    );
  }
}

export default App;
