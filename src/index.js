import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Profile from 'components/Profile/Profile';
import user from './components/Profile/user'
import Statistics from 'components/Statistics/Statistics';
import data from './components/Statistics/data'
import FriendList from 'components/FriendList/FriendList';
import friends from './components/FriendList/friends'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
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
      </App>
  </React.StrictMode>
);
