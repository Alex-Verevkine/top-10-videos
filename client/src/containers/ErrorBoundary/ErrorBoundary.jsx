import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import axiosHTTPInstance from "../../services/http/axios.http";
/**
 * @desc Controller, that wrappes requested component and catch all Errors.
 */
class ErrorBoundary extends Component {
  state = {
    isError: false,
    error: null
  };
  componentDidCatch(error, info) {
    clearTimeout(this.timerOneAtTheTimeId);
    this.timerOneAtTheTimeId = setTimeout(() => {
      this.setState({ error: null, isError: false });
    }, 3000);
    this.setState({
      error: error.response ? error.response.data : error,
      isError: true
    });
  }
  componentWillMount() {
    this.reqIntercetor = axiosHTTPInstance.interceptors.request.use(req => {
      clearTimeout(this.timerOneAtTheTimeId);
      this.setState({ error: null, isError: false });
      return req;
    });
    this.resIntercetor = axiosHTTPInstance.interceptors.response.use(
      null,
      error => {
        clearTimeout(this.timerOneAtTheTimeId);
        this.timerOneAtTheTimeId = setTimeout(() => {
          this.setState({ error: null, isError: false });
        }, 3000);
        this.setState({
          error: error.response ? error.response.data : error,
          isError: true
        });
      }
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timerOneAtTheTimeId);
    axiosHTTPInstance.interceptors.request.eject(this.reqIntercetor);
    axiosHTTPInstance.interceptors.response.eject(this.resIntercetor);
  }

  errorConfirmedHandler = () => {
    this.setState({ error: null, isError: false });
  };

  render() {
    return (
      <>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.isError}
        >
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={
              <span>{this.state.error && this.state.error.message}</span>
            }
            style={{ backgroundColor: "#d32f2f", height: "56px" }}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.errorConfirmedHandler}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </Snackbar>
        {this.props.children}
      </>
    );
  }
}
export default ErrorBoundary;
