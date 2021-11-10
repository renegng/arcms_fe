import React, {useState} from 'react'
import { connect } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { withStyles, Tab, Tabs, AppBar, Toolbar, IconButton, Menu, MenuItem} from '@material-ui/core'
import {TabList, TabPanel, TabContext} from '@mui/lab'
import {Menu as MenuIcon} from '@mui/icons-material';
import {StepOne, StepThree, StepTwo, StepFour} from './SetupSteps'


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
  },

  topBar: {
    // background: '#392F5A'
  }
}

const Setup = ({classes, orgData, searchOrgs, addOrg}) => {
  const history = useHistory()
  const [value, setValue] = React.useState('1');

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  }; 




  return (
      <div className={classes.root}>
        <AppBar className="topBar" color='secondary'>
        <Toolbar>
          <div>
            <IconButton onClick={handleMenuOpen} style={{color: 'white'}}>
            <MenuIcon />
          </IconButton>
          <Menu open={menuOpen} anchorEl={anchorEl} onClose={handleMenuClose}>
            <MenuItem onClick={() => history.push('/')}>
              Pagina de Inicio
            </MenuItem>
            <MenuItem>
            Configuraciones Avanzadas
            </MenuItem>

        </Menu>
          </div>
          
          Remotely
        </Toolbar>
      </AppBar>
      

      <main>
        <h1 style={{color: '#392F5A'}}>Configuración del sitio web de Remotely</h1>
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
