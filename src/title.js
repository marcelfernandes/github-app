'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Titulo padrão',
      lastname: {
        first: 'First padrao',
        last: 'last padrao'
      }
    }
  },
  render: function () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.lastname.first + ' ' + this.props.lastname.last }.</h2>
      </div>
    )
  }
})

export default Title
