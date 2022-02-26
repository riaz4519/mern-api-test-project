// @desc Get Goals
// @route GET /api/goals
// @acess private

const getGoals = (req, res) => {
  res.status(200).json({
    message: "get goals",
  });
};

// @desc set Goal
// @route POST /api/goals
// @acess private

const setGoal = (req, res) => {
  res.status(200).json({
    message: "get goals",
  });
};

// @desc Update Goal
// @route PUT /api/goals
// @acess private

const updateGoal = (req, res) => {
  res.status(200).json({
    message: "get goals",
  });
};

// @desc Delete Goal
// @route DELETE /api/goals
// @acess private

const deleteGoal = (req, res) => {
  res.status(200).json({
    message: "get goals",
  });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
