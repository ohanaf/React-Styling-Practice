import React from "react";
import ReactDOM from "react-dom";

const CurrentDate = new Date();
const CurrentTime = CurrentDate.getHours();

let greeting = {
  name: "morning",
  elementStyle: {
    color: "red",
    borderBottomColor: "red"
  }
};

if (CurrentTime < 18 && CurrentTime >= 12) {
  greeting.name = "Afternoon";
  greeting.elementStyle.color = "green";
  greeting.elementStyle.borderBottomColor = "green";
} else if (CurrentTime >= 18) {
  greeting.name = "night";
  greeting.elementStyle.color = "blue";
  greeting.elementStyle.borderBottomColor = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={greeting.elementStyle}>
    Good {greeting.name}
  </h1>,
  document.getElementById("root")
);
