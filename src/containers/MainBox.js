import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    selected: "profile",
  };

  changeSelected = (selected) => {
    this.setState({
      selected: selected,
    });
  };

  render() {
    let display;

    switch (this.state.selected) {
      case "profile":
        display = <Profile />;
        break;
      case "photo":
        display = <Photos />;
        break;
      case "cocktail":
        display = <Cocktails />;
        break;
      case "pokemon":
        display = <Pokemon />;
        break;
      default:
        display = null;
        break;
    }

    return (
      <div>
        <MenuBar
          selected={this.state.selected}
          changeSelected={this.changeSelected}
        />
        {display}
      </div>
    );
  }
}

export default MainBox;
