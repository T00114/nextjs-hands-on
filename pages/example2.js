import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Manip = ({ num }) => {
  const classes = useStyles()
  const [count, setCount] = useState(num)

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            MANIP
          </Typography>
          <Button color='inherit'>Hello!</Button>
        </Toolbar>
      </AppBar>

      <button onClick={() => setCount(count + 1)}>click me!!!</button>
      <p>count: {count}</p>
    </div>
  )
}

Manip.getInitialProps = async ctx => {
  return {
    num: 1
  }
}

export default Manip
