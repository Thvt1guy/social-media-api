const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userInfo, thoughtInfo, reactionInfo } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create users
  const users = await User.insertMany(userInfo);


  // Loop over the thoughts length -- add thoughts to the users array
  for (let i = 0; i < thoughtInfo.length; i++) {
    const thought = thoughtInfo[i];

    const user = userInfo.find((user) => {
      user.username === thought.username
    });
    // console.log(user.username);
    // console.log(thought);
    user.thoughts.push(thought);
    await user.save();
  }

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
