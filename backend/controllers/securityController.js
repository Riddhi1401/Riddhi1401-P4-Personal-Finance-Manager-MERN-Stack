const SecurityProfile = require('../models/securityProfile');
const User = require('../models/userModel');
const nodemailer = require('nodemailer');

// Configure nodemailer for sending OTP emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your email password
  }
});

// Store security profile details
exports.createSecurityProfile = async (req, res) => {
  try {
    const { userId, securityQuestion, answer, email, phone } = req.body;

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const securityProfile = new SecurityProfile({
      userId,
      securityQuestion,
      answer,
      email,
      phone
    });

    await securityProfile.save();
    res.status(201).json({ message: 'Security Profile Created', securityProfile });
  } catch (error) {
    res.status(500).json({ message: 'Error saving security profile', error });
  }
};

// Send OTP via Email
exports.sendEmailOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`
    });

    res.status(200).json({ message: 'OTP sent to email', otp });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email OTP', error });
  }
};

// Send OTP via Phone (Dummy function, requires SMS API)
exports.sendPhoneOTP = async (req, res) => {
  try {
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Simulate SMS sending (Use Twilio or other SMS API)
    console.log(`OTP for ${phone}: ${otp}`);

    res.status(200).json({ message: 'OTP sent to phone', otp });
  } catch (error) {
    res.status(500).json({ message: 'Error sending phone OTP', error });
  }
};
