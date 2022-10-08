import { faker } from '@faker-js/faker';

export default function handler(req, res) {
  const query = req.query;
  const {amt} = query;
  const val = amt ? amt : 1;
  const names = [];
  
  for (let i = 0; i < val; i++) {
      names.push({
        user: faker.name.firstName(),
        avatar: faker.internet.avatar(),
        email: faker.internet.email(),
        title: faker.lorem.lines(),
        body: faker.lorem.paragraph(),
        date: faker.date.recent(),
      });
  }

  res.status(200).json(names);
}