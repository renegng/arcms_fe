import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button, Card, Tab, Tabs, IconButton, InputAdornment} from '@material-ui/core'
import {Palette} from '@mui/icons-material';
import { SwatchesPicker } from 'react-color'

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
    fontSize: 'calc(1rem + 3vw)'
  },

  textfields: {
    marginBottom: '1rem',
    background: '#FEF9EC',
    // color: '#FF8811'
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


const StepTwo = ({classes}) => {

    const [secondarySwatch, openSecondarySwatch] = useState(false)
    const [primarySwatch, openPrimarySwatch] = useState(false)
    const [backgroundSwatch, openBackgroundSwatch] = useState(false)
    const [surfaceSwatch, openSurfaceSwatch] = useState(false)
    const [onPrimarySwatch, openOnPrimarySwatch] = useState(false)
    const [onSecondarySwatch, openOnSecondarySwatch] = useState(false)
    const [onBackgroundSwatch, openOnBackgroundSwatch] = useState(false)
    const [onSurfaceSwatch, openOnSurfaceSwatch] = useState(false)

    const [primaryColor, setPrimaryColor] = useState('')
    const [secondaryColor, setSecondaryColor] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')
    const [surfaceColor, setSurfaceColor] = useState('')
    const [onPrimaryColor, setOnPrimaryColor] = useState('')
    const [onSecondaryColor, setOnSecondaryColor] = useState('')
    const [onBackgroundColor, setOnBackgroundColor] = useState('')
    const [onSurfaceColor, setOnSurfaceColor] = useState('')


    return (
        <Card className={classes.root} id='step2' >
        <h2 className={classes.steps} >
            Paso 2</h2>
            <h3 style={{color: 'white'}}>
              Choose your color palette
            </h3>
            
            <div className={classes.stepOneInputs}>

              

              <TextField value={primaryColor} variant="outlined" className={classes.textfields} placeholder="Primary color" InputProps={{endAdornment:
                <IconButton
                  onClick={() => openPrimarySwatch(true)}
                  edge="end"
                >
                <Palette />
                {primarySwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setPrimaryColor(color.hex); openPrimarySwatch(false)}}/> : null}
                </IconButton>
            }} />

            <TextField value={secondaryColor} variant="outlined" className={classes.textfields} placeholder="Secondary color" InputProps={{endAdornment:
                <IconButton
                  onClick={() => openSecondarySwatch(true)}
                  edge="end"
                >
                <Palette />
                {secondarySwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setSecondaryColor(color.hex); openSecondarySwatch(false)}}/> : null}
                </IconButton>
            }} />

              <TextField variant="outlined" className={classes.textfields} placeholder="Background" value={backgroundColor} InputProps={{endAdornment:
                <IconButton
                  onClick={() => openBackgroundSwatch(true)}
                  edge="end"
                >
                <Palette />
                {backgroundSwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setBackgroundColor(color.hex); openBackgroundSwatch(false)}}/> : null}
                </IconButton>
            }}/>

              <TextField variant="outlined" className={classes.textfields} placeholder="Surface" value={surfaceColor} InputProps={{endAdornment:
                <IconButton
                  onClick={() => openSurfaceSwatch(true)}
                  edge="end"
                >
                <Palette />
                {surfaceSwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setSurfaceColor(color.hex); openSurfaceSwatch(false)}}/> : null}
                </IconButton>
            }}/>

              <TextField variant="outlined" className={classes.textfields} placeholder="On primary" value={onPrimaryColor} InputProps={{endAdornment:
                <IconButton
                  onClick={() => openOnPrimarySwatch(true)}
                  edge="end"
                >
                <Palette />
                {onPrimarySwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setOnPrimaryColor(color.hex); openOnPrimarySwatch(false)}}/> : null}
                </IconButton>
            }} />

              <TextField variant="outlined" className={classes.textfields} placeholder="On secondary" value={onSecondaryColor} InputProps={{endAdornment:
                <IconButton
                  onClick={() => openOnSecondarySwatch(true)}
                  edge="end"
                >
                <Palette />
                {onSecondarySwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setOnSecondaryColor(color.hex); openOnSecondarySwatch(false)}}/> : null}
                </IconButton>
            }}/>

              <TextField variant="outlined" className={classes.textfields} placeholder="On background" value={onBackgroundColor} InputProps={{endAdornment:
                <IconButton
                  onClick={() => openOnBackgroundSwatch(true)}
                  edge="end"
                >
                <Palette />
                {onBackgroundSwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setOnBackgroundColor(color.hex); openOnBackgroundSwatch(false)}}/> : null}
                </IconButton>
            }}/>

              <TextField variant="outlined" className={classes.textfields} placeholder="On surface" value={onSurfaceColor} InputProps={{endAdornment:
                <IconButton
                  onClick={() => openOnSurfaceSwatch(true)}
                  edge="end"
                >
                <Palette />
                {onSurfaceSwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setOnSurfaceColor(color.hex); openOnSurfaceSwatch(false)}}/> : null}
                </IconButton>
            }}/>
              </div>
            <Button className={classes.buttons} variant='outlined'>
              Próximo Paso
            </Button>
        </Card>
    )
}


export default withStyles(styles)(StepTwo)