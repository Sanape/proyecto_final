import AuthDao from "../dao/DBSystem/Auth.dao.js"
import BaseService from "./base.service.js";

class AuthService extends BaseService{
    constructor(){
        super(AuthDao)
    }
}

export default new AuthService();