'use strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'
import style from './app.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className={style.app}>
    <Search isDisable={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}

    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Actions
      getRepos={getRepos}
      getStarred={getStarred} />}

    {!!repos.length &&
    <Repos
      className={style.repos}
      title='Respositórios:'
      repos={repos} />
    }
    {!!starred.length &&
    <Repos
      className={style.starred}
      title='Favoritos:'
      repos={starred} />
    }

  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
