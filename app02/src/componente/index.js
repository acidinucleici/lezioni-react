import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Grid from 'react-jss-grid'
import style from './style'

class Componente extends Component {
    componentWillMount() {}
    componentDidMount() {
      this.$ = {
        root: this.node,
        }
      this.props.onRef(this)
    }
    render() {
      const { classes } = this.props
      return (
          <div className={`${classes.root}`}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <span>xs={12}</span>
              </Grid>
              <Grid item xs={6}>
                <span>xs={6}</span>
              </Grid>
              <Grid item xs={6}>
                <span>xs={6}</span>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <span>item xs={12} sm={6} md={3}</span>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <span>item xs={12} sm={6} md={3}</span>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <span>item xs={12} sm={6} md={3}</span>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <span>item xs={12} sm={6} md={3}</span>
              </Grid>
            </Grid>
          </div>
      )
    }
  }
  
  Componente.defaultProps = {
    onRef: () => {},
  }
  
  export default injectSheet(style)(Componente)