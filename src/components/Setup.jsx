import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, Tab, Tabs, AppBar} from '@material-ui/core'
import {TabList, TabPanel, TabContext} from '@mui/lab'
import {StepOne, StepThree, StepTwo, StepFour} from './SetupSteps'
import { SketchPicker } from 'react-color'
import {theme} from '../theme'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 100px 100px 100px',
    alignItems: 'center',
    // background: '#3A405A'
  },

  tabContainer: {
    background: '#9DD9D2',
    width: '100vw'
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

  const [value, setValue] = React.useState('1');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  }; 



  return (
      <div className={classes.root}>
      <main>
        <h1 style={{color: '#392F5A'}}>Configuración del sitio web de ARCMS</h1>
      </main>

        <TabContext value={value}>
        <Tabs centered={true} value={value} TabIndicatorProps={{ style: { background: "#392F5A"} }} onChange={handleTabChange} className={classes.tabContainer}>
        <Tab label="Paso 1" value="1" />
        <Tab label="Paso 2" value="2" />
        <Tab label="Paso 3" value="3" />
        <Tab label='Paso 4' value='4' />
      </Tabs>
        <TabPanel value='1'>
          <StepOne handleTabChange={handleTabChange} nextValue={'2'}/>
        </TabPanel>
        <TabPanel value='2'>
          <StepTwo handleTabChange={handleTabChange} nextValue={'3'} />
        </TabPanel>
        <TabPanel value='3'>
          <StepThree handleTabChange={handleTabChange} nextValue={'4'}/>
        </TabPanel>
        <TabPanel value='4'>
          <StepFour handleTabChange={handleTabChange} nextValue={'4'}/>
        </TabPanel>



      </TabContext>

      
      
        
          
        
          
      
        
        
        
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
  )
}

const mapState = state => ({

})

const connected = connect(mapState, null)(Setup)

export default withStyles(styles)(connected)
