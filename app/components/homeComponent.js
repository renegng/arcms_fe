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
  },

  inputs: {
    width: '200px'
  },

  addOrg: {
    display:'flex',
    flexDirection:'column',
    marginBottom: '40px'
  },

  addInputs: {
    display: 'flex',
    justifyContent: 'space-between'
  },


  addOrgHeader: {
    marginBottom: '30px'
  },


  searchOrg: {
    display:'flex',
    flexDirection:'column',
  }
}

const Home = ({classes, orgData, searchOrgs, addOrg}) => {

  const [nameInputVal, setNameInputVal] = useState('')
  const [dateInputVal, setDateInputVal] = useState('')
  const [employeeNumInputVal, setEmployeeNumInputVal] = useState('')
  const [typeInputVal, setTypeInputVal] = useState('')
  const [searchInputVal, setSearchInputVal] = useState('')



  const addOrgClick = () => {
    let newOrg = {
      orgName: nameInputVal,
      startDate: dateInputVal,
      employeeCount: employeeNumInputVal,
      orgType: typeInputVal
    }

    addOrg(newOrg)
  }

  return (
      <div className={classes.root}>
      <main>
        <h1>ARCMS</h1>
      </main>
      {/* <div className={classes.addOrg}>
        <Typography className={classes.addOrgHeader} component="h3">Create an organization</Typography>
        <div className={classes.addInputs}>


        <TextField
        className={classes.inputs}
        id="orgName"
        variant="outlined"
        label="*Required"
        helperText="Name"
        value={nameInputVal}
        onChange={(e) => setNameInputVal(e.target.value)}
        />
        <TextField
        className={classes.inputs}
        id="startDate"
        variant="outlined"
        label="*Required"
        helperText="Start date"
        value={dateInputVal}
        onChange={(e) => setDateInputVal(e.target.value)}
        />
        <TextField
        className={classes.inputs}
        id="employeeCount"
        variant="outlined"
        label="*Required"
        helperText="Number of employees"
        value={employeeNumInputVal}
        onChange={(e) => setEmployeeNumInputVal(e.target.value)}
        />
        <TextField
        className={classes.inputs}
        id="type"
        variant="outlined"
        label="*Required"
        helperText="Type"
        value={typeInputVal}
        onChange={(e) => setTypeInputVal(e.target.value)}
        />
        </div>
        <Button style={{width: '20px', marginTop: '20px'}} variant="contained" onClick={addOrgClick} >Create</Button>
      </div>
      <div className={classes.searchOrg}>
      <Typography className={classes.addOrgHeader} component="h3">Search for an organization</Typography>
        <TextField
        className={classes.inputs} variant="outlined" value={searchInputVal} onChange={(e) => setSearchInputVal(e.target.value)} />
        <Button variant="contained" color="primary" style={{width: '20px', marginTop: '20px'}}
        onClick={() => searchOrgs(searchInputVal)}

        >Search</Button>
        <div className={classes.results}>
        <Typography className={classes.addOrgHeader} style={{marginTop: '30px'}}component="h4">Results</Typography>
        <table>
          {orgData.map((org, idx) => {
            return(
              <tbody key={idx}>
                <tr>
              <td>name: {org.orgName} -- </td>
              <td>start date: {org.startDate} -- </td>
              <td>employee count: {org.employeeCount} -- </td>
              <td>public or private: {org.orgType} -- </td>
            </tr>
              </tbody>
            )
        })}
        </table>


        </div>
      </div> */}
    </div>
  )
}

const mapState = state => ({
  orgData: state.organizationsReducer.searchResults
})

const connected = connect(mapState, {searchOrgs, addOrg})(Home)

export default withStyles(styles)(connected)

