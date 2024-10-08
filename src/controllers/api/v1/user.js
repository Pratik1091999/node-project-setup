const logger = require("../../../utils/logger");
const ApiResponse = require("../../../utils/apiResponse");
const ApiError = require("../../../utils/apiError");
const asyncHandler = require("../../../utils/asyncHandler");
const UserModel = require("../../../models/user");
const ErrorMessage = require("../../../utils/errorMessage");

// Create a new User
const createUser = asyncHandler(async (req, res) => {
    try {
        const userData = new UserModel(req.body);
        logger.info(`[User Controller] createUser() userData: ${JSON.stringify(userData)}`);

        const savedUser = await userData.save();
        logger.info(`[User Controller] createUser() savedUser: ${JSON.stringify(savedUser)}`);

        return res.status(201).json(new ApiResponse(201,ErrorMessage.user.create_success ,savedUser));
    } catch (error) {
        logger.error(`[User Controller] createUser() Error creating User: ${error.message}`);
        throw new ApiError(500, ErrorMessage.user.create_failed);
    }
});

// Get all Users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const Users = await UserModel.find();
        logger.info(`[User Controller] getAllUsers() Fetched ${Users.length} Users`);

        return res.status(200).json(new ApiResponse(200, ErrorMessage.user.fetch_all_success ,Users));
    } catch (error) {
        logger.error(`[User Controller] getAllUsers() Error fetching Users: ${error.message}`);
        throw new ApiError(500, ErrorMessage.user.fetch_all_failed);
    }
});

// Get User by ID
const getUserById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const entity = await UserModel.findById(id);
        
        if (!entity) {
            throw new ApiError(404, ErrorMessage.user.not_found);
        }
        
        logger.info(`[User Controller] getUserById() Fetched entity: ${JSON.stringify(entity)}`);
        return res.status(200).json(new ApiResponse(200, ErrorMessage.user.fetch_single_success ,entity,));
    } catch (error) {
        logger.error(`[User Controller] getUserById() Error fetching entity: ${error.message}`);
        throw new ApiError(500, ErrorMessage.user.fetch_single_failed);
    }
});

// Update User by ID (PUT)
const updateUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            throw new ApiError(404, ErrorMessage.user.not_found);
        }

        logger.info(`[User Controller] updateUser() Updated entity: ${JSON.stringify(updatedUser)}`);
        return res.status(200).json(new ApiResponse(200, ErrorMessage.user.update_success ,updatedUser));
    } catch (error) {
        logger.error(`[User Controller] updateUser() Error updating entity: ${error.message}`);
        throw new ApiError(500, ErrorMessage.user.update_failed);
    }
});

// Partially Update User by ID (PATCH)
const partialUpdateUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedUser) {
            throw new ApiError(404, ErrorMessage.user.not_found);
        }

        logger.info(`[User Controller] partialUpdateUser() Partially updated entity: ${JSON.stringify(updatedUser)}`);
        return res.status(200).json(new ApiResponse(200, ErrorMessage.user.update_success ,updatedUser));
    } catch (error) {
        logger.error(`[User Controller] partialUpdateUser() Error partially updating entity: ${error.message}`);
        throw new ApiError(500, ErrorMessage.user.update_failed);
    }
});

// Delete User by ID
const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            throw new ApiError(404, ErrorMessage.user.not_found);
        }

        logger.info(`[User Controller] deleteUser() Deleted entity: ${JSON.stringify(deletedUser)}`);
        return res.status(200).json(new ApiResponse(200, ErrorMessage.user.delete_success ,deletedUser));
    } catch (error) {
        logger.error(`[User Controller] deleteUser() Error deleting entity: ${error.message}`);
        throw new ApiError(500, ErrorMessage.user.delete_failed);
    }
});

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    partialUpdateUser,
    deleteUser
};
