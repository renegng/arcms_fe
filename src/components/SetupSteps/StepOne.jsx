import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button, Card, Tab, Tabs} from '@material-ui/core'

const styles = {
    root: {
        // borderBottom: '10px solid white',
    padding: '1rem',
    // height: '80vh',
    width: '80vw',
    textAlign: 'center',
    background: '#FBEDC6',
    backdropFilter: 'saturate(180%) blur(10px)',
    marginTop: '2.5rem',
    borderRadius: '40px'
    },

    steps: {
    textAlign: 'center',
    color: '#392F5A',
    fontSize: '1.75rem'
  },

  textfields: {
    marginBottom: '1rem',
    background: '#FEF9EC'
  },

  stepOneInputs: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // alignItems: 'center'
  },

  buttons: {
    background: '#9DD9D2',
    // marginTop: '20rem'
  },


}


const StepOne = ({classes, handleTabChange, nextValue}) => {



    return (
        <Card className={classes.root} id='step1' >
          <h2 className={classes.steps}>
            Paso 1</h2>
            <h3 style={{color: '#FF8811'}}>
              Información sobre el sitio
            </h3>
            <div className={classes.stepOneInputs}>

              <TextField className={classes.textfields} variant="outlined" placeholder="Nombre del sitio" />

              <TextField className={classes.textfields}  placeholder="Descripcion del sitio" multiline rows={4} variant="outlined" />

              <TextField className={classes.textfields}  variant="outlined" placeholder="Lema del sitio"/>

              <TextField className={classes.textfields}  variant="outlined" placeholder="Nombre de la Institución" />

              {/*main logo upload*/}
              {/* menu/icon logo upload */}
              
            </div>
<Button variant='outlined' className={classes.buttons} onClick={() => handleTabChange(null, nextValue)}>
              Próximo Paso
            </Button>
        </Card>


    )



}


export default withStyles(styles)(StepOne)