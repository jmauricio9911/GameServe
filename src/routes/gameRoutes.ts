import { Router } from 'express';
import  gamesControler  from '../controller/gamesController';

class GamesRoutes{
    public roter: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.roter.get('/',gamesControler.list);
        this.roter.get('/:id',gamesControler.getOne);
        this.roter.post('/',gamesControler.create);
        this.roter.put('/:id',gamesControler.update);
        this.roter.delete('/:id',gamesControler.delete);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.roter;