import React, { useState } from "react";
import { connect } from "react-redux";
import {
  withStyles,
  TextField,
  Typography,
  Button,
  Card,
  Tab,
  Tabs,
} from "@material-ui/core";

const styles = {
  root: {
    // borderBottom: '10px solid white',
    padding: "1rem",
    // height: '80vh',
    width: "80vw",
    textAlign: "center",
    background: "#FBEDC6",
    backdropFilter: "saturate(180%) blur(10px)",
    marginTop: "2.5rem",
    borderRadius: "40px",
  },

  steps: {
    textAlign: "center",
    color: "#392F5A",
    fontSize: "1.75rem",
  },

  textfields: {
    marginBottom: "1rem",
    background: "#FEF9EC",
  },

  stepOneInputs: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // alignItems: 'center'
  },

  buttons: {
    background: "#9DD9D2",
    // marginTop: '20rem'
  },

  iframe: {
    height: "20rem",
  },
};

const StepFour = ({ classes, handleTabChange, nextValue }) => {
  return (
    <Card className={classes.root} id="step1">
      <h2 className={classes.steps}>Paso 4</h2>
      <h3 style={{ color: "#FF8811" }}>Configuracion de Protocolo</h3>
      <div className={classes.stepOneInputs}>
        <iframe
          className={classes.iframe}
          title="protocol"
          src="https://docs.google.com/document/d/e/2PACX-1vSo4_3HIPIp4tWl7KVZKenrZJ6tX5-K4clKIOYWO4DA9zt-DCIIWW7JnWyh5-LzCA/pub?embedded=true"
        ></iframe>
      </div>
      <Button
        variant="outlined"
        className={classes.buttons}
        onClick={() => handleTabChange(null, nextValue)}
      >
        Próximo Paso
      </Button>
    </Card>
  );
};

export default withStyles(styles)(StepFour);
