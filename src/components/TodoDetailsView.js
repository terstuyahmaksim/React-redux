import React from "react";
// eslint-disable-next-line
import styles from "../styles/TodoDetailsView.scss";

class TodoDetailsView extends React.Component {
  state = {
    isEditPathVisible: false,
    isEditButtonVisible: true,
    isEditPathDetailsVisible: false,
    isEditButtonDetailsVisible: true,
    titleForUpdate: "",
    newTitle: "",
    newStatusValue: "",
    details: "",
    newDetails: ""
  };
  handleChange = e => {
    this.setState({ titleForUpdate: e.target.value });
  };
  handleDetails = e => {
    this.setState({ details: e.target.value });
  };
  handleNewStatus = e => {
    if (this.state.newStatusValue !== e.target.value) {
      this.setState({
        newStatusValue: e.target.value
      });
    }
  };
  handleClick = e => {
    e.stopPropagation();
    //inversion display
    const reversVisibleTitlePath = () => {
      return this.setState({
        isEditPathVisible: !this.state.isEditPathVisible,
        isEditButtonVisible: !this.state.isEditButtonVisible
      });
    };
    //inversion display
    const reversVisibleDetailsPath = () => {
      return this.setState({
        isEditPathDetailsVisible: !this.state.isEditPathDetailsVisible,
        isEditButtonDetailsVisible: !this.state.isEditButtonDetailsVisible
      });
    };
    //to default state
    const resetState = () => {
      return this.setState({
        isEditPathVisible: false,
        isEditButtonVisible: true,
        isEditPathDetailsVisible: false,
        isEditButtonDetailsVisible: true,
        titleForUpdate: "",
        newTitle: "",
        newStatusValue: "",
        details: "",
        newDetails: ""
      });
    };
    switch (e.target.value) {
      case "Edit": //Edit title block.  inversion display menu and button
        reversVisibleTitlePath();
        break;
      case "Confirm": //Confirm title block
        if (this.state.titleForUpdate) {
          this.setState({ newTitle: this.state.titleForUpdate });
        }
        this.setState({
          titleForUpdate: ""
        });
        reversVisibleTitlePath();
        break;
      case "Cancel": //Cancel
        reversVisibleTitlePath();
        this.setState({
          titleForUpdate: ""
        });
        break;
      case "Update": //Update
        // console.log("state:", this.state.newDetails)
        // console.log("props:", this.props.item.details)
        let newData = {
          details: this.state.newDetails
            ? this.state.newDetails
            : this.props.item.details,
          newTitle: this.state.newTitle
            ? this.state.newTitle
            : this.props.item.title,
          status: this.state.newStatusValue
            ? this.state.newStatusValue
            : this.props.item.status,
          id: this.props.item.id
        };
        // console.log("resalt:", newData.details)
        this.props.update(newData);
        resetState();
        break;
      case "Edit_details":
        reversVisibleDetailsPath();
        break;
      case "Confirm_details":
        if (this.state.details) {
          this.setState({ newDetails: this.state.details });
        }
        this.setState({
          details: ""
        });
        reversVisibleDetailsPath();
        break;
      case "Cancel_details":
        reversVisibleDetailsPath();
        this.setState({
          details: ""
        });
        break;
      case "Reset":
        resetState();
        break;
      case "Close details":
        this.props.closeDet();
        resetState();
        break;
      default:
        break;
    }
  };

  render() {
    const {
      isEditPathVisible,
      isEditButtonVisible,
      newStatusValue,
      newTitle,
      isEditPathDetailsVisible,
      isEditButtonDetailsVisible,
      newDetails
    } = this.state;
    const { item } = this.props;
    if (!item) {
      return <div> Nothing selected</div>;
    }
    console.log("item-object:", item);
    console.log("state:", this.state);
    return (
      <div className="component-cotainer">
        active todo item: {newTitle ? newTitle : item.title}
        {//on/off Display title block
        isEditButtonVisible && (
          <button className="btn edit" onClick={this.handleClick} value="Edit">
            Edit
          </button>
        )}
        {//on/off display input block
        isEditPathVisible && (
          <div className="edit-block">
            <input
              type="text"
              maxLength="50"
              placeholder="Input new short title"
              onChange={this.handleChange}
            />
            <div className="btn-container">
              <button
                className="btn conf"
                type="submit"
                onClick={this.handleClick}
                value="Confirm"
              >
                Confirm
              </button>
              <button
                className="btn canc"
                type="reset"
                onClick={this.handleClick}
                value="Cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <div>
          {/* new value or default */}
          status: {newStatusValue ? newStatusValue : item.status}
        </div>
        <div>
          New status:
          <select onChange={this.handleNewStatus}>
            <option value="not ready">Not ready</option>
            <option value="done">Done</option>
            <option value="in process">In process</option>
          </select>
        </div>
        <div>
          {/* new value or default */}
          Details: {newDetails ? newDetails : item.details}
          {// on/off
          isEditButtonDetailsVisible && (
            <button
              className="btn edit"
              onClick={this.handleClick}
              value="Edit_details"
            >
              Edit
            </button>
          )}
          {//on/off display block
          isEditPathDetailsVisible && (
            <div className="edit-block">
              <textarea
                rows="5"
                onChange={this.handleDetails}
                placeholder="If you need? you can type details heare"
              />
              <div className="btn-container">
                <button
                  className="btn conf"
                  type="submit"
                  onClick={this.handleClick}
                  value="Confirm_details"
                >
                  Confirm
                </button>
                <button
                  className="btn canc"
                  type="reset"
                  onClick={this.handleClick}
                  value="Cancel_details"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          <br />
        </div>
        <button
          className="btn update"
          type="submit"
          onClick={this.handleClick}
          value="Update"
        >
          Update
        </button>
        <button
          className="btn update"
          type="submit"
          onClick={this.handleClick}
          value="Reset"
        >
          Reset changes
        </button>
        <button
          className="btn update"
          type="submit"
          onClick={this.handleClick}
          value="Close details"
        >
          Close details
        </button>
      </div>
    );
  }
}

export default TodoDetailsView;
