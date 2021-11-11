import React, {useState} from 'react'
import { connect } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { withStyles, TextField, Typography, Button, Card, Dialog, DialogContent, DialogTitle, DialogContentText } from '@material-ui/core'
import descriptionImg from '../images/user_f_03.svg'
import {GoogleButton} from 'react-google-button'
import { textAlign } from '@mui/system'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    // height: '100vh',
    // background: '#778DA9',
    alignItems: 'center',
    marginTop: '3rem'
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
    color: '#392F5A'
  },

  steps: {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '1rem'
  },

  dialogCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }

}

const Home = ({classes}) => {
  const history = useHistory()
  const [signInOpen, setSignInOpen] = useState(true)


  return (
      <div className={classes.root}>

        <h1 style={{color: '#FF8811'}}>Bienvenida a Remotely</h1>
        <Card className={classes.description} variant="elevation">
          <div className={classes.descText}>
            <div style={{textAlign: 'left', padding: '10px 0 10px 10px'}}>
            <p>Bienvenida a la configuración de Remotely. Al hacer clic en 'Iniciar', se le llevará a través de la configuración del sitio paso a paso.</p>
            
            <p className={classes.steps}><b>Paso 1</b> le pedirá información general sobre su sitio. Preparese para poner el nombre, la descripción, y la lema del sitio. Tambien prepare las imagenes que seran el logo primario, el icono de menu hamburguesa, y el favicon.</p>
            
             <p className={classes.steps}><b>Paso 2</b> le pedirá que proporcione una paleta de colores para el sitio. Al mínimo prepárese para seleccionar un color primario, color secundario, color de fondo, y color de superficie.</p> 
             
             <p className={classes.steps}><b>Paso 3</b> le pedirá las redes sociales. Aceptará información de Facebook, Twitter, Instagram, YouTube, y sitio de web. Además, la información de contacto de su institución, como el email principal, número de teléfono, ubicación, y número de WhatsApp.</p> 
             
             <p>Si elige avanzar rápidamente a través de los pasos sin realizar ninguna selección, se aplicará la configuración predeterminada. Configuraciones avanzadas también están disponibles, aunque son opcionales.</p>
             </div>
          <img className={classes.descImg} src={descriptionImg} alt="description" />
          </div>
          <Button variant='outlined' className={classes.button} onClick={() => history.push('/setup')}>Iniciar</Button>
          
        </Card>

        <Dialog open={signInOpen}>
          <DialogTitle className={classes.dialogCont}>
          {"Configurar cuenta de administrador con Google"}
        </DialogTitle>
        <DialogContent className={classes.dialogCont}>
          <DialogContentText className={classes.dialogCont}>
            Para continuar, se necesita una cuenta de Google para la configuración del sitio.
          </DialogContentText>
          <GoogleButton onClick={() => setSignInOpen(false)}/>
        </DialogContent>
        
        </Dialog>
        
    </div>
  )
}

const mapState = state => ({

})

const connected = connect(mapState, null)(Home)

export default withStyles(styles)(connected)
