
import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import FriendForm from './FriendForm';
import FriendList from './FriendList';


const App = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem('friends'));
    if (storedFriends) {
      setFriends(storedFriends);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
  }, [friends]);

  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  const handleEditFriend = (friendToUpdate) => {
    const updatedFriends = friends.map((friend) =>
      friend.id === friendToUpdate.id ? friendToUpdate : friend
    );
    setFriends(updatedFriends);
  };

  const handleDeleteFriend = (id) => {
    const updatedFriends = friends.filter((friend) => friend.id !== id);
    setFriends(updatedFriends);
  };

  return (
    <div className="App">
      <h1>Friend Notebook</h1>
      <FriendForm onAddFriend={handleAddFriend} />
      <FriendList
        friends={friends}
        onEditFriend={handleEditFriend}
        onDeleteFriend={handleDeleteFriend}
      />
    </div>
  );
};

export default App;