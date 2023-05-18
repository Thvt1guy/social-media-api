const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
  reactionId: {
    type: Schema.Types.ObjectId,
    dedfault: new Schema.Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
})

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      // Sets a default value to now
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    
    reactions: [
      reactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);
//Dont need to export it as a model
// const Reaction = model('reaction', reactionSchema);

module.exports = Thought, Reaction;
