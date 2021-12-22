import { Deta } from "deta";

const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY);

const participants = deta.Base("participants");

export default function handleRegistration(req, res) {
  const { name, email, country, school, age, language } = req.body;

  try {
    participants.put({
      name,
      email,
      country,
      school,
      age,
      language,
      date: new Date().toDateString(),
    });

    res.json({ status: "Success" });
  } catch (err) {
    res.json({ status: "Error" });
  }
}
