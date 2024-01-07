import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FriendForm = ({ onAddFriend }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    textarea: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.dob.trim() && formData.textarea.trim() && formData.number.trim()) {
      const newFriend = {
        id: uuidv4(),
        ...formData,
      };
      onAddFriend(newFriend);
      setFormData({
        name: '',
        dob: '',
        textarea: '',
        number: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      <textarea name="textarea" placeholder="Description" value={formData.textarea} onChange={handleChange} />
      <input type="number" name="number" placeholder="Number" value={formData.number} onChange={handleChange} />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendForm;