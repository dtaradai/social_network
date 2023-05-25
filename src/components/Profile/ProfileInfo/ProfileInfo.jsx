import React from 'react';
import s from  './ProfileInfo.module.css';
import banner from './images/banner1200x150.jpg';
import ava from './images/ava.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div className={s.banner}>
        <img src={banner} alt='banner'/>
      </div> */}
      <div className={s.description__block}>
        <div>
          <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : ava } alt='ava' />
          <ProfileStatus status={'Hello!'} />
        </div>
        <div>
          {props.profile.aboutMe}
        </div>
      </div>
  </div>
  )
}

export default ProfileInfo;