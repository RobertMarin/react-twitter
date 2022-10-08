import { faker } from '@faker-js/faker';

export default function handler(req, res) {
    const query = req.query;
    const {amt} = query;
    const val = amt ? amt : 1;
    const names = [];
    
    for (let i = 0; i < val; i++) {
        names.push(faker.name.firstName());
    }

    res.status(200).json(names);
}