import Setting from "../models/Setting.js";

// Get Settings
export const getSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    // Create default settings if none exist
    if (!settings) {
      settings = await Setting.create({
        storeName: "EasyKart",
      });
    }

    res.status(200).json({
      success: true,
      settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Settings
export const updateSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    // Create settings if missing
    if (!settings) {
      settings = await Setting.create(req.body);
    } else {
      settings = await Setting.findByIdAndUpdate(
        settings._id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      success: true,
      message: "Settings updated successfully",
      settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};