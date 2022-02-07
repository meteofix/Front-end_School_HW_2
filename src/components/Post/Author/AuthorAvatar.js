import React, { useContext } from 'react';
import { MediaContext } from '../../../store/contexts/MediaContext';
import followPlus from '../../../UI/icons/followPlus.svg';
import { PlusIcon, PlusIconImg, PostAvatarLink, TiktokAvatar, TiktokAvatarImg } from './AuthorAvatar.styled';

const AuthorAvatar = ({ authorLink, avatar, setIsHover = () => false }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <PostAvatarLink data-testid="postAvatar" to={authorLink}>
      <TiktokAvatar
        data-testid="tiktokAvatar"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isMobile && (
          <PlusIcon>
            <PlusIconImg alt="Follow" src={followPlus} />
          </PlusIcon>
        )}
        <TiktokAvatarImg alt="Profile img" title="Profile image" src={avatar} />
      </TiktokAvatar>
    </PostAvatarLink>
  );
};

export default AuthorAvatar;
