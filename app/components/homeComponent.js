import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button } from '@material-ui/core'
import { searchOrgs, addOrg } from '../reducers'

//this is a very, very basic UI to quickly test the 2 available APIs.

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 100px 100px 100px',
    alignItems: 'center',
    background: '#F4F2F3'
  },

  scrollContainer: {
    scrollSnapType: 'y mandatory',
    scrollSnapPointsY: 'repeat(100vh)',
    display: 'flex',
    flexDirection: 'column'
  },

  scrollChild: {
    borderBottom: '10px solid white',
    padding: '1rem',
    height: '80vh',
    width: '80vw',
    scrollSnapAlign: 'start',
    textAlign: 'center',
    // background: '#0B3C49'
  },

  steps: {
    textAlign: 'center',
    color: 'white',
    fontSize: 'calc(1rem + 3vw)'
  },

  buttons: {
    background: 'white',
    marginTop: '20rem'
  }

}

const Home = ({classes, orgData, searchOrgs, addOrg}) => {

  const [nameInputVal, setNameInputVal] = useState('')
  const [dateInputVal, setDateInputVal] = useState('')
  const [employeeNumInputVal, setEmployeeNumInputVal] = useState('')
  const [typeInputVal, setTypeInputVal] = useState('')
  const [searchInputVal, setSearchInputVal] = useState('')

const scrollToNext = (id) => {
  let element = document.getElementById(id)
  element.scrollIntoView({behavior: 'smooth'})
}


  return (
      <div className={classes.root}>
      <main>
        <h1>Bienvenido a ARCMS</h1>
      </main>
      <div className={classes.scrollContainer}>
        <section className={classes.scrollChild} id='step1' style={{background: '#3A405A'}} >
          <h2 className={classes.steps}>
            Paso 1</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons} onClick={() => scrollToNext('step2')}>
              Próximo Paso
            </Button>
        </section>
        <section className={classes.scrollChild} id='step2' style={{background: '#0B3C49'}}>
        <h2 className={classes.steps} >
            Paso 2</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons} onClick={() => scrollToNext('step3')}>
              Próximo Paso
            </Button>
        </section>
        <section className={classes.scrollChild} id='step3' style={{background: '#731963'}}>
        <h2 className={classes.steps}>
            Paso 3</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons} onClick={() => scrollToNext('step4')}>
              Próximo Paso
            </Button>
        </section>
        <section className={classes.scrollChild} id='step4' style={{background: '#3A405A'}}>
        <h2 className={classes.steps}>
            Paso 4</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons} onClick={() => scrollToNext('step5')}>
              Próximo Paso
            </Button>
        </section>
        <section className={classes.scrollChild} id='step5' style={{background: '#78BC61'}}>
        <h2 className={classes.steps}>
            Paso 5</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons}>
            Terminar la configuración
            </Button>
        </section>

      </div>
    </div>
  )
}

const mapState = state => ({
  orgData: state.organizationsReducer.searchResults
})

const connected = connect(mapState, {searchOrgs, addOrg})(Home)

export default withStyles(styles)(connected)

