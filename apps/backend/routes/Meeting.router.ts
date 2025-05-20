import express from "express";
import { createMeeting } from "../controllers/meeting.controller";

export const meetingRouter = express.Router();

meetingRouter.post("/create-meeting",createMeeting);

