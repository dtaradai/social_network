import React from 'react';
import s from  './ProfileInfo.module.css';
import banner from './images/banner1200x150.jpg';
import ava from './images/ava.jpg';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.banner}>
        <img src={banner} alt='banner'/>
      </div>
      <div className={s.description__block}>
        <div>
          <img className={s.ava} src={ava} alt='ava' />
        </div>
        <div>
          Description
        </div>
      </div>
  </div>
  )
}

export default ProfileInfo;