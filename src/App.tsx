import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
  },
  search: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: '20px'
  }
}))

function App() {
  const classes = useStyles()
  const [userName, setUserName] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUserName(event.target.value)
    console.log(userName)
  }

  return (
    <div
      className={classes.wrapper}
    >
      <form
        className={classes.search}
      >
        <h1>
          GitHub User Search
        </h1>
        <TextField
          className={classes.textField}
          value={userName}
          placeholder='Search user name'
          variant='outlined'
          onChange={handleChange}
          fullWidth />
        <Button
          variant='outlined'
          style={{ backgroundColor: '#075E54', color: 'white' }}
        >
          Search for user
        </Button>
      </form>
    </div>
  );
}

export default App;
