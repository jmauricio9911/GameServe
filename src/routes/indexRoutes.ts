import { Router } from 'express';
import {indexController} from '../controller/indexController';

class IndexRoutes{
    public roter: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.roter.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.roter;