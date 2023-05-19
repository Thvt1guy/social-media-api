const userInfo = [
  {
    "username": "theconscious1",
    "email": "TheConsciousGamer@gmail.com",
    'thoughts': []
},
{
  "username": "boohoo27",
  "email": "cryingGrumpychoco@gmail.com",
  'thoughts': []
},
{
  "username": "thegr81",
  "email": "fantasticLittlepablo@gmail.com",
  'thoughts': []
},
];

const thoughtInfo = [
  {
    'thoughtText': 'Really struggling with this course rn 😭',
    'username': 'theconscious1',
    'reactions': []
},
{
  'thoughtText': 'Almost time to graduate 🎉',
  'username': 'boohoo27',
  'reactions': []
},
{
  'thoughtText': 'School is just too easy 😎',
  'username': 'thegr81',
  'reactions': []
}
];

const reactionInfo = [
  {
    'reactionBody': '🤣',
    'username': 'thegr81',
  },
  {
    'reactionBody': 'More power to you!',
    'username': 'theconscious1',
  },
  {
    'reactionBody': 'At least youre farther than me 😥',
    'username': 'boohoo27',
  },
]

function seedThoughts() {
  reactionInfo.forEach(reaction => {
    const thought = thoughtInfo.find(thought => {
      thought.username === reaction.username
    });

    if (thought) {
      thought.reactions.push(reaction)
    }
  });
};

seedThoughts();

// Export the functions for use in seed.js
module.exports = { userInfo, thoughtInfo };
