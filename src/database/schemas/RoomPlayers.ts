import mongoose from 'mongoose';

const RoomPlayers = new mongoose.Schema(
  {
    room_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

export default mongoose.model('room_players', RoomPlayers);
