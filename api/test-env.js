export default function handler(req, res) {
  res.status(200).json({
    message: "Environment test",
    emailUser: process.env.EMAIL_USER ? "Set" : "Not set",
    emailPass: process.env.EMAIL_PASS ? "Set" : "Not set",
    nodeEnv: process.env.NODE_ENV || "Not set",
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('EMAIL') || key.includes('NODE'))
  });
}
