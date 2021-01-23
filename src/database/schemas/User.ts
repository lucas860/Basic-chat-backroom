import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
    },
    updated_at: { type: Date },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'Updated_at' },
  },
);

export default mongoose.model('users', User);
