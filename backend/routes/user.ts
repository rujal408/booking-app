import { Router} from 'express';
import UserController from '../controller/UserController';

class UserRoutes extends UserController{
    public router: Router;
    public path ='/users'

    constructor() {
        super()
        this.router = Router();
        this.initializeRoutes();
      }

      private initializeRoutes() {
        this.router.post(`${this.path}/login`, this.loginUser);
      }
}

export default UserRoutes;