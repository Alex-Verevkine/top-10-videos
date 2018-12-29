import React from "react";
import PropTypes from "prop-types";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  select: {
    color: "#000",
    "&:before": {
      borderColor: "#000"
    },
    "&:after": {
      borderColor: "#000"
    },
    minWidth: "120px"
  },
  inputLabe: {
    color: "#000",
    fontWeight: "bold"
  }
});

const DropdownSelect = withStyles(styles)(props => {
  const { options, value, onChangeHandler, id, name } = props;
  const { classes } = props;
  return (
    <>
      <InputLabel
        className={classes.inputLabe}
        htmlFor={id}
      >{`Filter By:  `}</InputLabel>
      <Select
        value={value}
        autoWidth={true}
        onChange={onChangeHandler}
        inputProps={{
          name,
          id
        }}
        className={classes.select}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </>
  );
});

DropdownSelect.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired
};

export default DropdownSelect;
