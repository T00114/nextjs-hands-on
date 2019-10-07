import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

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

const Manip = ({ globalIps }) => {
  const classes = useStyles()

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

      {globalIps.map(v => <p key={v.id}>ip: {v.ip_address} location: {v.location}</p>)}

      <div>
        <h2>link</h2>
        <ul>
          <li><Link href='/link'><a>link</a></Link></li>
        </ul>
      </div>
    </div>
  )
}

Manip.getInitialProps = async ctx => {
  // const fetchGlobalIps = await fetch('https://manip.tools.isca.jp/api/globalips')
  const fetchGlobalIps = await fetch('http://localhost:3000/api/manip')
  const globalIps = await fetchGlobalIps.json()
  return {
    globalIps: globalIps || []
  }
}

export default Manip
