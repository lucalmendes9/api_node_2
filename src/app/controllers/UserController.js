import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) return res.status(400).json({ error: 'email exists' });

    const { name, email, password_hash } = req.body;

    await User.create({
      name,
      email,
      password_hash,
    });

    return res.json({ name, email, password_hash });
  }
}

export default new UserController();
