import React, {useState} from 'react'
import { connect } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { withStyles, TextField, Typography, Button, Card } from '@material-ui/core'
import descriptionImg from '../images/user_f_03.svg'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    // height: '100vh',
    // background: '#778DA9',
    alignItems: 'center'
  },

  button: {
    background: '#9DD9D2',
    width: '200px',
    alignSelf: 'center',
    marginBottom: '20px',

  

  },

  description: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '20px',
    borderRadius: '40px',
    padding: '10px',
    background: '#FBEDC6'
  },

  descImg: {
    maxHeight: '40%',
    maxWidth: '40%',
  },

  descText: {
    display: 'flex',
    alignItems: 'center',
    color: '#FF8811'
  }

}

const Home = ({classes}) => {
  const history = useHistory()


  return (
      <div className={classes.root}>

        <h1 style={{color: '#392F5A'}}>Bienvenido a ARCMS</h1>
        <Card className={classes.description} variant="elevation">
          <Typography className={classes.descText}>
            <div style={{textAlign: 'left', padding: '10px 0 10px 10px'}}>
            <p>Bienvenido a la configuración de ARCMS. Al hacer clic en 'Iniciar', se le llevará a través de la configuración del sitio paso a paso.</p>
            
            <p><b>Paso 1</b> le pedirá información general sobre su sitio, como el nombre y la descripción.</p>
            
             <p><b>Paso 2</b> le pedirá que proporcione una paleta de colores para su sitio, como el color de fondo, el color de la superficie, etc.</p> 
             
             <p><b>Paso 3</b> le pedirá las redes sociales y la información de contacto de su institución.</p> 
             
             <p>Si elige avanzar rápidamente a través de los pasos sin realizar ninguna selección, se aplicará la configuración predeterminada. Configuraciones avanzadas también están disponibles, aunque son opcionales.</p>
             </div>
          <img className={classes.descImg} src={descriptionImg} alt="description" />
          </Typography>
          <Button variant='outlined' className={classes.button} onClick={() => history.push('/setup')}>Iniciar</Button>

        </Card>
        

    </div>
  )
}

const mapState = state => ({

})

const connected = connect(mapState, null)(Home)

export default withStyles(styles)(connected)
