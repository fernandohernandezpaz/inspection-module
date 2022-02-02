import express from 'express';
import controller from '../controllers/requirements';

const router = express.Router()

router.get('requirements/', controller.getRequirements);


export = router;