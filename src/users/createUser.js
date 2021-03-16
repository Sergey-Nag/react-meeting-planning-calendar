import User from './User';
import Admin from './Admin';

export default function createUser({ ...args }) {
  const data = { id: args.id, ...args.data };
  return data.isAdmin ? new Admin(data) : new User(data);
}
