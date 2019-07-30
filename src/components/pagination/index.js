'use strict'

import React from 'react'
import pagination from 'utils/pagination'

const Pagination = ({ total, activePage }) => (
  <div>
    {pagination({ total, activePage }).map((page, index) => (
      <li>
        <a>{page}</a>
      </li>
    ))}
  </div>
)

export default Pagination
