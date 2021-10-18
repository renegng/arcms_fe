import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button, Card, IconButton} from '@material-ui/core'
import { Upload } from '@mui/icons-material'

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
    background: '#FEF9EC',

    '&.upload': {
      marginTop: '0.5rem'
    }
  },

  stepOneInputs: {
    display: 'flex',
    // width: '100%',
    justifyContent: 'space-evenly'
  },

  buttons: {
    background: '#9DD9D2',
    // marginTop: '20rem'
  },

  inputColumns: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '2rem',
  },

  uploadInputs: {
    display:'flex',
    flexDirection: 'column',
    marginBottom: '1rem'
  }

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

              <div className={classes.inputColumns}>
                <TextField className={classes.textfields} variant="outlined" placeholder="Nombre del sitio" />

              <TextField className={classes.textfields}  placeholder="Descripcion del sitio" multiline rows={4} variant="outlined" />
              
              <TextField className={classes.textfields}  variant="outlined" placeholder="Lema del sitio"/>

              <TextField className={classes.textfields}  variant="outlined" placeholder="Nombre de la Institución" />


              </div>

              <div className={classes.inputColumns}>
                <div className={classes.uploadInputs}>
                  <span>Icono de menu hamburguesa</span>
                  <TextField type="file" className={`${classes.textfields} upload`}  variant="outlined" InputProps={{endAdornment: <IconButton><Upload /></IconButton> }}/>
                </div>
                <div className={classes.uploadInputs}>
                  <span>Favicon</span>
                  <TextField type="file" className={`${classes.textfields} upload`}  variant="outlined" InputProps={{endAdornment: <IconButton><Upload /></IconButton> }} />
                </div>
                <div className={classes.uploadInputs}>
                  <span>Logo primario</span>
                  <TextField type="file" className={`${classes.textfields} upload`}  variant="outlined"  InputProps={{endAdornment: <IconButton><Upload /></IconButton> }}/>
                </div>
                



                

                
                
              </div>
              
              
            </div>
<Button variant='outlined' className={classes.buttons} onClick={() => handleTabChange(null, nextValue)}>
              Próximo Paso
            </Button>
        </Card>


    )



}


export default withStyles(styles)(StepOne)