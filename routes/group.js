const { Router } = require('express');
const GroupController = require('../controller/group.controller');
const groupRouter = Router();


groupRouter.get('/:id', GroupController.getGroup);
groupRouter.get('/:userId', GroupController.getUserGroups);
groupRouter.post('/', GroupController.createUserGroup);
groupRouter.post('/:id', GroupController.addUserToGroup);

// groupRouter.get()

module.exports = groupRouter;