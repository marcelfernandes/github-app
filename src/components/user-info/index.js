'use strict'

import React, { PropTypes} from 'react'
import moment from 'moment'
import style from './user-info.css'

const UserInfo = ({ userinfo }) => (
    <div className={style.userInfo}>
        <img src={userinfo.photo} />
        <h1 className='username'>
            <a href={`https://github.com/${userinfo.login}`}>
                {userinfo.username}
            </a>
        </h1>
        <div className={style.reposInfo}>
            <ul>
                <li>Repositórios: { userinfo.repos }</li>
                <li>Seguidores: { userinfo.followers }</li>
                <li>Seguindo: { userinfo.following }</li>
                <li>Criado em: { moment(new Date(userinfo.created_at)).format('DD/MM/YYYY') }</li>
                <li>Atualizado: { moment(new Date(userinfo.updated_at)).format('DD/MM/YYYY') }</li>
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
        following: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
        //created_at: PropTypes.instanceOf(Date).isRequired,
        //updated_at: PropTypes.instanceOf(Date).isRequired
    })
}

export default UserInfo