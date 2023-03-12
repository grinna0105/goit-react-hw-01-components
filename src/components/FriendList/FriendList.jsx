import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={css.friendsItem} key={id}>
          <span className={isOnline ? css.online : css.offline}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
