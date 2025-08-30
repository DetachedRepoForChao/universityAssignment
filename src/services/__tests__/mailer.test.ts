import { createTransport, sendMail } from "../mailer";

test("createTransport returns a transport", () => {
  const t = createTransport();
  expect(t).toBeTruthy();
});

test("sendMail resolves with mock transport", async () => {
  const res = await sendMail({ to: "test@example.com", subject: "Hello", text: "World" });
  expect(res).toBeTruthy();
});




