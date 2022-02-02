import { Request, Response } from 'express';

interface User {
    id: Number,
    username: String,
    active: Boolean
}

const getUsers = async (req: Request, res: Response) => {
    // get some posts
    let users: User[] = [{
        id: 1,
        username: 'example',
        active: true
    }];
    return res.status(200).json(users);
}

export default { getUsers };