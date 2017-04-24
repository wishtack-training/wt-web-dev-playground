/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

export class UserStore {

    constructor() {
        this._userList = [];
    }

    addUser(user) {
        this._userList = [...this._userList, user];
    }

    getUserList() {
        return this._userList;
    }

    removeUser(user) {
        this._userList = this._userList.filter((_user) => _user !== user);
    }

}
