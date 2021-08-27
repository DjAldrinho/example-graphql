import express from 'express';
import { greet, sayGoodBye, welcome } from './home.controller.js';

const router = express.Router();


router.get('/', welcome);
router.get('/greet', greet);
router.get('/bye', sayGoodBye);


export const homeRoutes = router;
