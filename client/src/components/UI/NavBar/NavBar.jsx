import React from "react";
import classes from "./NavBar.scss";
import PropTypes from "prop-types";
import DropdownSelect from "../../DropdownSelect/DropdownSelect";
const SELECT_VIDEO_SOURCE_OPTIONS = [
  { value: "all", title: "All" },
  { value: "youtube", title: "YouTube" },
  { value: "facebook", title: "Facebook" },
  { value: "url", title: "Url" }
];
export const NavBar = props => {
  const { selectedVideoSource, onChangeHandler } = props;
  return (
    <div className={classes.header}>
      <div className={classes.selectContainer}>
        <DropdownSelect
          id="video-source-select"
          name="Video Source Select"
          value={selectedVideoSource}
          options={SELECT_VIDEO_SOURCE_OPTIONS}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <h1 className={classes.appTitle}>Top 10 Video Chart</h1>
    </div>
  );
};

NavBar.propTypes = {
  selectedVideoSource: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default NavBar;
