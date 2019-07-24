import React from "react";

class Menu extends React.Component {
  handleClick = e => {
    e.stopPropagation();
    this.setState({
      menuId: e.target.id
    });
    switch (e.target.id) {
      case "Delet_ToDos":
        this.props.del(this.props.id);
        break;
      // case "":
      //
      //   break;
      // case "":
      //
      //   break;
      default:
        return this.state;
    }
  };
  render() {
    return (
      <ul style={{ display: this.props.display }} onClick={this.handleClick}>
        {/* <li id = "" ></li>
            <li id = "" ></li> */}
        <li id="Delet_ToDos">Delet ToDo</li>
      </ul>
    );
  }
}

export default Menu;
