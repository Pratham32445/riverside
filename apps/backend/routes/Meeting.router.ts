import express from "express";
import { createMeeting } from "../controllers/meeting.controller";
import { authentication } from "../middlewares/authentication";

export const meetingRouter = express.Router();

meetingRouter.post("/create-meeting",authentication,createMeeting);

