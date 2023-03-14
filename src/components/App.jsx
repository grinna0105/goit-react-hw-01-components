import Profile from 'components/Profile/Profile';
import user from './Profile/user';
import Statistics from 'components/Statistics/Statistics';
import data from './Statistics/data';
import FriendList from 'components/FriendList/FriendList';
import friends from './FriendList/friends';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';
import '../index.css';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Cantarell',
        fontSize: 40,
        backgroundColor: '#c6cbf8',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
