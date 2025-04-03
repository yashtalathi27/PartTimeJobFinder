import express from "express";
import { postjobconn } from '../controllers/postjobconn.controller.js';

const router = express.Router();

// Route to get users for sidebars
router.post("/:uid", postjobconn);


export default router;
