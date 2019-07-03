import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) return res.status(400).json({ error: 'email exists' });

    const { name, email, password } = req.body;

    await User.create({
      name,
      email,
      password,
    });

    return res.json({ name, email, password });
  }
}

export default new UserController();
