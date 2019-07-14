'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
    render: function () {
        return (
            <div className='container' data-id='1'>
                <Title name='Titulo custom' lastname={{ first:'Primeiro', last:"sub"}} />
            </div>
        )
    }
})

export default App