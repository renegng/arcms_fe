import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button, Card, Tab, Tabs, IconButton} from '@material-ui/core'
import {Palette, CheckBoxOutlineBlank} from '@mui/icons-material';
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
    fontSize: '1.75rem'
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


const StepTwo = ({classes, handleTabChange, nextValue}) => {

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
            <h3 style={{color: '#FF8811'}}>
              Elige la paleta de colores del sitio
            </h3>
            
            <div className={classes.stepOneInputs}>

              

              <TextField value={primaryColor} variant="outlined" className={classes.textfields} placeholder="Color primario" InputProps={{
                  startAdornment: <CheckBoxOutlineBlank style={{color: `${primaryColor}`, background: `${primaryColor}`, marginRight: '0.5rem'}} />, 
                  endAdornment:
                <IconButton
                  onClick={() => openPrimarySwatch(!primarySwatch)}
                  edge="end"
                >
                <Palette />
                {primarySwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setPrimaryColor(color.hex); openPrimarySwatch(false)}}/> : null}
                </IconButton>
            }} />

            <TextField value={secondaryColor} variant="outlined" className={classes.textfields} placeholder="Color secundario" InputProps={{startAdornment: <CheckBoxOutlineBlank style={{color: `${secondaryColor}`, background: `${secondaryColor}`, marginRight: '0.5rem'}} />,endAdornment:
                <IconButton
                  onClick={() => openSecondarySwatch(!secondarySwatch)}
                  edge="end"
                >
                <Palette />
                {secondarySwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setSecondaryColor(color.hex); openSecondarySwatch(false)}}/> : null}
                </IconButton>
            }} />

              <TextField variant="outlined" className={classes.textfields} placeholder="Color de fondo" value={backgroundColor} InputProps={{startAdornment: <CheckBoxOutlineBlank style={{color: `${backgroundColor}`, background: `${backgroundColor}`, marginRight: '0.5rem'}} />,endAdornment:
                <IconButton
                  onClick={() => openBackgroundSwatch(!backgroundSwatch)}
                  edge="end"
                >
                <Palette />
                {backgroundSwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setBackgroundColor(color.hex); openBackgroundSwatch(false)}}/> : null}
                </IconButton>
            }}/>

              <TextField variant="outlined" className={classes.textfields} placeholder="Color de la superficie" value={surfaceColor} InputProps={{startAdornment: <CheckBoxOutlineBlank style={{color: `${surfaceColor}`, background: `${surfaceColor}`, marginRight: '0.5rem'}} />, endAdornment:
                <IconButton
                  onClick={() => openSurfaceSwatch(!surfaceSwatch)}
                  edge="end"
                >
                <Palette />
                {surfaceSwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setSurfaceColor(color.hex); openSurfaceSwatch(false)}}/> : null}
                </IconButton>
            }}/>

              <TextField variant="outlined" className={classes.textfields} placeholder="Sobre color primario" value={onPrimaryColor} InputProps={{startAdornment: <CheckBoxOutlineBlank style={{color: `${onPrimaryColor}`, background: `${onPrimaryColor}`, marginRight: '0.5rem'}} />,endAdornment:
                <IconButton
                  onClick={() => openOnPrimarySwatch(!onPrimarySwatch)}
                  edge="end"
                >
                <Palette />
                {onPrimarySwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setOnPrimaryColor(color.hex); openOnPrimarySwatch(false)}}/> : null}
                </IconButton>
            }} />

              <TextField variant="outlined" className={classes.textfields} placeholder="Sobre color secundario" value={onSecondaryColor} InputProps={{startAdornment: <CheckBoxOutlineBlank style={{color: `${onSecondaryColor}`, background: `${onSecondaryColor}`, marginRight: '0.5rem'}} />,endAdornment:
                <IconButton
                  onClick={() => openOnSecondarySwatch(!onSecondarySwatch)}
                  edge="end"
                >
                <Palette />
                {onSecondarySwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setOnSecondaryColor(color.hex); openOnSecondarySwatch(false)}}/> : null}
                </IconButton>
            }}/>

              <TextField variant="outlined" className={classes.textfields} placeholder="Sobre color de fondo" value={onBackgroundColor} InputProps={{startAdornment: <CheckBoxOutlineBlank style={{color: `${onBackgroundColor}`, background: `${onBackgroundColor}`, marginRight: '0.5rem'}} />,endAdornment:
                <IconButton
                  onClick={() => openOnBackgroundSwatch(!onBackgroundSwatch)}
                  edge="end"
                >
                <Palette />
                {onBackgroundSwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setOnBackgroundColor(color.hex); openOnBackgroundSwatch(false)}}/> : null}
                </IconButton>
            }}/>

              <TextField variant="outlined" className={classes.textfields} placeholder="Sobre color superficie" value={onSurfaceColor} InputProps={{startAdornment: <CheckBoxOutlineBlank style={{color: `${onSurfaceColor}`, background: `${onSurfaceColor}`, marginRight: '0.5rem'}} />,endAdornment:
                <IconButton
                  onClick={() => openOnSurfaceSwatch(!onSurfaceSwatch)}
                  edge="end"
                >
                <Palette />
                {onSurfaceSwatch ? <SwatchesPicker className={classes.colorPicker} onChangeComplete={(color, event) => {setOnSurfaceColor(color.hex); openOnSurfaceSwatch(false)}}/> : null}
                </IconButton>
            }}/>
              </div>
            <Button onClick={() => handleTabChange(null, nextValue)} className={classes.buttons} variant='outlined'>
              Próximo Paso
            </Button>
        </Card>
    )
}


export default withStyles(styles)(StepTwo)