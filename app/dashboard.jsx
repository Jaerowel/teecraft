import React from 'react'
import { connect } from 'react-redux'

export const dashboard = (props) => {
  return (
    <div>dashboard</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)