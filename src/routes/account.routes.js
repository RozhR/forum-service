import {Router} from 'express';

import {
    registerAccount,
    loginAccount,
    deleteAccount,
    updateAccount,
    addRole,
    deleteRole,
    changePassword,
    getAccount
} from '../controllers/account.controller.js';

const router = Router();

router.post('/register', registerAccount);
router.post('/login', loginAccount);
router.delete('/user/:user', deleteAccount);
router.patch('/user/:user', updateAccount);
router.patch('/user/:user/role/:role', addRole);
router.delete('/user/:user/role/:role', deleteRole);
router.patch('/password', changePassword);
router.get('/user/:user', getAccount);


export default router;