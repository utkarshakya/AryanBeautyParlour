import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    // Reference to the Customer (User model)
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Refers to the User model
      required: true,
    },
    // Reference to the Staff (User model with role "staff")
    /*
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    */
    // Reference to the Service being booked
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service', // Refers to the Service model
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value > Date.now(), // Start time must be in the future
        message: 'Start time must be in the future',
      },
    },
    endTime: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.startTime; // End time must be after start time
        },
        message: 'End time must be after start time',
      },
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;