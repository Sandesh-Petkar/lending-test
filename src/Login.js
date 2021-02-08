import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import { connect } from 'react-redux'
import  {postLoginAction}  from "./Redux/actions/LoginAction";

const styles = (theme) => ({
  textField: {
    width: "36ch",
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleNameChange = (e) => {
    const username = e.target.value;
    this.setState({ username });
  };

  handlePasswordChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      userpassword: this.state.password,
    };

    console.log("form", formData);

    

    this.props.postLogin(formData)
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="Username"
                id="margin-dense"
                value={this.state.username}
                className={classes.textField}
                onChange={this.handleNameChange}
                helperText="Please enter your Username"
                margin="dense"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Password"
                name="Password"
                id="margin-dense"
                type="password"
                value={this.state.password}
                className={classes.textField}
                onChange={this.handlePasswordChange}
                helperText="Please enter your Password"
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    // return {
    //   ageState: state.ageCalc,
    //   usersState: state.userData
    // }
  }
  
  const mapdispatchToProps = (dispatch) => {
    return {
      postLogin: (formData) => dispatch(postLoginAction(formData)),
      
    }
  }

export default connect(mapStateToProps, mapdispatchToProps) (withStyles(styles)(Login));
