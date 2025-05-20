import { meetingRouter } from "./routes/Meeting.router";
import { userRouter } from "./routes/User.router";
import { app } from "./server";

app.post("/user",userRouter);
app.post("/meeting",meetingRouter);

app.listen(3001);