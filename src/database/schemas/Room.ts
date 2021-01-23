import mongoose from 'mongoose';

const Room = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

export default mongoose.model('rooms', Room);
