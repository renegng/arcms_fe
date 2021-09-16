import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button } from '@material-ui/core'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 100px 100px 100px',
    alignItems: 'center',
    background: '#3A405A'
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
    background: 'rgba(255, 255, 255, .15)',
    backdropFilter: 'saturate(180%) blur(10px)'
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

  // const [nameInputVal, setNameInputVal] = useState('')
  // const [dateInputVal, setDateInputVal] = useState('')
  // const [employeeNumInputVal, setEmployeeNumInputVal] = useState('')
  // const [typeInputVal, setTypeInputVal] = useState('')
  // const [searchInputVal, setSearchInputVal] = useState('')

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
        <section className={classes.scrollChild} id='step1'  >
          <h2 className={classes.steps}>
            Paso 1</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons} onClick={() => scrollToNext('step2')}>
              Próximo Paso
            </Button>
        </section>
        <section className={classes.scrollChild} id='step2' >
        <h2 className={classes.steps} >
            Paso 2</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons} onClick={() => scrollToNext('step3')}>
              Próximo Paso
            </Button>
        </section>
        <section className={classes.scrollChild} id='step3' >
        <h2 className={classes.steps}>
            Paso 3</h2>
            <h3>Opciones</h3>
            <Button className={classes.buttons} onClick={() => scrollToNext('step4')}>
              Próximo Paso
            </Button>
        </section>
        <section className={classes.scrollChild} id='step4' >
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
        </section>

      </div>
    </div>
  )
}

const mapState = state => ({

})

const connected = connect(mapState, null)(Home)

export default withStyles(styles)(connected)
