'use strict'

import React, { PropTypes } from 'react'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
  // <div className='starred'>
  //     <h2>Favoritos:</h2>
  //     <ul>
  //         <li><a href='#'>Nome do respositório</a></li>
  //         <li><a href='#'>Nome do respositório</a></li>
  //     </ul>
  // </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
