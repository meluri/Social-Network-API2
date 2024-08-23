const { User, Thought } = require('../models');

module.exports = {
  // GET all users
  getUsers(req, res) {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },

  // GET a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .then(user =>
        !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user)
      )
      .catch(err => res.status(500).json(err));
  },

  // POST create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },

  // PUT update a user
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true })
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },

  // DELETE a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then(user =>
        !user ? res.status(404).json({ message: 'No user with that ID' }) : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch(err => res.status(500).json(err));
  },

  // POST add friend to a user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },

  // DELETE remove friend from a user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },
};