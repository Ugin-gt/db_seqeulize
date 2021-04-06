const _ = require('lodash');
const { Group, User } = require('../models');

module.exports.createUserGroup = async (req, res, next) => {
    try {
        const { body } = req;

        const values = _.pick(body, ['name', 'imagePath', 'description']);

        const group = await Group.create({
            ...values,
            userId: body.userId,
        });

        const user = await User.findByPk(body.userId, {
            attributes: { exclude: ['password'] },
        });

        await group.addUser(user);

        res.send({ data: group });
    } catch (err) {
        next(err);
    }
};

module.exports.getUserGroups = async (req, res, next) => {
    try {
        const {
            params: { userId },
        } = req;

        const userWithGroups = await User.findByPk(userId, {
            include: [
                {
                    model: Group,
                    through: {
                        attributes: [],
                    },
                    // as: 'group',
                },
            ],
        });

        if (!userWithGroups) {
            return next(createError(404));
        }

        res.send(userWithGroups);
    } catch (err) {
        next(err);
    }
};
module.exports.getGroup = async (req, res, next) => {
    try {
        const {
            params: { id },
        } = req;

        const group = await Group.findByPk(id, {});

        if (!group) {
            const err = createError(404, 'Group not found');
            return next(err);
        }

        res.send(group);
    } catch (err) {
        next(err);
    }
};

module.exports.addUserToGroup = async (req, res, next) => {
    try {
        const {
            params: { id: groupId },
            body: { userId },
        } = req;

        const user = await User.findByPk(userId, {
            attributes: { exclude: ['password'] },
        });

        const userInGroup = await Group.findByPk(groupId);
        await userInGroup.addUser(user);

        const groupWithUsers = await Group.findAll({
            where: { id: groupId },
            include: [
                {
                    model: User,
                },
            ],
        });

        res.send({ data: groupWithUsers });
    } catch (err) {
        next(err);
    }
};
