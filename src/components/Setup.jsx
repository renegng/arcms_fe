import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button, Card, RadioGroup} from '@material-ui/core'
import { SketchPicker } from 'react-color'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 100px 100px 100px',
    alignItems: 'center',
    // background: '#3A405A'
  },

  scrollContainer: {
    scrollSnapType: 'y mandatory',
    scrollSnapPointsY: 'repeat(100vh)',
    display: 'flex',
    flexDirection: 'column'
  },

  scrollChild: {
    // borderBottom: '10px solid white',
    padding: '1rem',
    // height: '80vh',
    width: '80vw',
    scrollSnapAlign: 'center',
    textAlign: 'center',
    background: '#415A77',
    backdropFilter: 'saturate(180%) blur(10px)',
    marginTop: '40vh',
    marginBottom: '40vh',
    borderRadius: '40px'
  },

  steps: {
    textAlign: 'center',
    color: 'white',
    fontSize: 'calc(1rem + 3vw)'
  },

  buttons: {
    background: '#E0E1DD',
    // marginTop: '20rem'
  },

  stepOneInputs: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // alignItems: 'center'
  },

  colorPicker: {
    marginBottom: '20px',
    alignSelf: 'center'
  }

}

const Setup = ({classes, orgData, searchOrgs, addOrg}) => {

  /*
  step1 fields:
  - name
  - description
  - slogan
  - institution name
  -main logo
  -menu/icon logo

  step2 fields:
  -color palette:
    - primary
    - secondary
    - background
    - surface
    - on primary
    - on secondary
    - on background
    - on surface

  step3 fields
  - social media (fb, twitter, ig, youtube, website)
  - contact us/info
  - whatsapp floating button (yes/no/whatsapp contact)



  */

const scrollToNext = (id) => {
  let element = document.getElementById(id)
  element.scrollIntoView({behavior: 'smooth'})
}


  return (
      <div className={classes.root}>
      <main>
        <h1 style={{color: '#0D1B2A'}}>Configuración del sitio web de ARCMS</h1>
      </main>
      <div className={classes.scrollContainer}>
        <Card className={classes.scrollChild} id='step1'  style={{marginTop: '0', background: '#778DA9'}}>
          <h2 className={classes.steps}>
            Paso 1</h2>
            <h3 style={{color: 'white'}}>
              Information about your site
            </h3>
            <div className={classes.stepOneInputs}>

              <TextField variant="filled" helperText="Website name"/>

              <TextField helperText="Description of the site" multiline rows={4} variant="filled" />

              <TextField variant="filled" helperText="Site slogan"/>

              <TextField variant="filled" helperText="Institution name" />

              {/*main logo upload*/}
              {/* menu/icon logo upload */}
              
            </div>
<Button className={classes.buttons} onClick={() => scrollToNext('step2')}>
              Próximo Paso
            </Button>
        </Card>
        <Card className={classes.scrollChild} id='step2' style={{background: '#778DA9'}}>
        <h2 className={classes.steps} >
            Paso 2</h2>
            <h3 style={{color: 'white'}}>
              Choose your color palette
            </h3>
            
            <div className={classes.stepOneInputs}>

              <SketchPicker className={classes.colorPicker} />

              <TextField variant="filled" helperText="Primary color"/>

              <TextField variant="filled" helperText="Background"/>

              <TextField variant="filled" helperText="Surface" />

              <TextField variant="filled" helperText="On primary" />

              <TextField variant="filled" helperText="On secondary" />

              <TextField variant="filled" helperText="On background" />

              <TextField variant="filled" helperText="On surface" />
              </div>
            <Button className={classes.buttons} onClick={() => scrollToNext('step3')}>
              Próximo Paso
            </Button>
        </Card>

        <Card className={classes.scrollChild} id='step3'  style={{background: '#778DA9'}}>
        <h2 className={classes.steps}>
            Paso 3</h2>
            <h3 style={{color: 'white'}}>
              Social media info
            </h3>
            <div className={classes.stepOneInputs}>

              <h4 style={{color: 'white'}}>
              Social media
            </h4>
              <TextField variant="filled" helperText="Facebook"/>
              <TextField variant="filled" helperText="Twitter"/>
              <TextField variant="filled" helperText="Instagram"/>
              <TextField variant="filled" helperText="YouTube"/>
              <TextField variant="filled" helperText="Other"/>

              <h4 style={{color: 'white'}}>
              Contact info
            </h4>

              <TextField variant="filled" helperText="Email"/>
              <TextField variant="filled" helperText="Phone number"/>

              <h4 style={{color: 'white'}}>
              WhatsApp floating button
            </h4>

              <TextField variant="filled" helperText="WhatsApp number" />
              </div>

            <Button className={classes.buttons}>
            Terminar la configuración
            </Button>
            {/* <Button className={classes.buttons} onClick={() => scrollToNext('step4')}>
              Próximo Paso
            </Button> */}
        </Card>
        {/* <section className={classes.scrollChild} id='step4' >
        <h2 className={classes.steps}>
            Paso 4</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons} onClick={() => scrollToNext('step5')}>
              Próximo Paso
            </Button>
        </section>
        <section className={classes.scrollChild} id='step5' >
        <h2 className={classes.steps}>
            Paso 5</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons}>
            Terminar la configuración
            </Button>
        </section> */}

      </div>
    </div>
  )
}

const mapState = state => ({

})

const connected = connect(mapState, null)(Setup)

export default withStyles(styles)(connected)
