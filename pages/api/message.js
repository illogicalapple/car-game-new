import * as Pusher from "pusher"
export default function handler(req, res) {
  if (req.method == 'POST') {
    const pusher = new Pusher({
      appId: "1422105",
      key: "628cd2a999e5ab6eb43d",
      secret: process.env.PUSHER_SECRET,
      cluster: "us2",
      useTLS: true
    });
    pusher.trigger(req.body.channel, req.body.event, req.body.data);
    res.status(200).json({
      wow: "you did it!",
      body: req.body
    });
  } else {
    res.status(405).json({
      problem: "method not allowed"
    });
  }
}
