'use strict'

import React, { PropTypes } from 'react'
import pagination from 'utils/pagination'
import Page from './page'

const Pagination = ({ total, activePage, pageLink, onClick }) => (
  <div>
    {pagination({ total, activePage, pageLink }).map((page, index) => (
      <li key={index} style={activePage === page ? { color: 'red' } : null}>
        <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
      </li>
    ))}
  </div>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
