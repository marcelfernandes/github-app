'use strict'

import React, { PropTypes } from 'react'
import style from './search.css'

const Search = ({ isDisable, handleSearch }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
      disabled={isDisable}
      onKeyUp={handleSearch} />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired
}

export default Search
