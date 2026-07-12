import * as accountService from '../services/account.service.js';

export const registerAccount = async (req, res) => {
    const account = await accountService.registerAccount(req.body);
    res.status(201).json(account);
};
export const loginAccount = async (req, res) => {
    // TODO
    res.status(200).json(account);
};
export const deleteAccount = async (req, res) => {
    const account = await accountService.deleteAccount(req.params.user);
    res.status(200).json(account);
}
export const updateAccount = async (req, res) => {
    const account = await accountService.updateAccount(req.params.user, req.body);
    res.status(200).json(account);
}
export const addRole = async (req, res) => {
    const account = await accountService.addRole(req.params.user, req.params.role);
    res.status(200).json(account);
}
export const deleteRole = async (req, res) => {
    const account = await accountService.deleteRole(req.params.user, req.params.role);
    res.status(200).json(account);
}
export const changePassword = async (req, res) => {
    // TODO
    res.status(204).json(account);
}
export const getAccount = async (req, res) => {
    const account = await accountService.getAccount(req.params.user);
    res.status(200).json(account);
}