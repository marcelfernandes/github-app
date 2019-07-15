'use strict'

import React, { PropTypes} from 'react'

const UserInfo = ({ userinfo }) => (
    <div className='user-info'>
        <img src={userinfo.photo} />
        <h1 className='username'>
            <a href={`https://github.com/${userinfo.login}`}>
                {userinfo.username}
            </a>
        </h1>
        <div className='repos-info'>
            <ul>
                <li>Repositórios: {userinfo.repos}</li>
                <li>Seguidores: {userinfo.followers}</li>
                <li>Seguindo: {userinfo.following}</li>
                <li>Criado em: 2014-08-19T21:40:04Z</li>
                <li>Atualizado: 2019-07-14T17:08:02Z</li>
            </ul>
        </div>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo