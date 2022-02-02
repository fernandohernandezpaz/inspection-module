import {Request, Response} from "express";

interface Requirement {
    id: Number,
    title: String,
    active: Boolean
}


const getRequirements = async (req: Request, res: Response) => {
    let requirements: Requirement[] = [{
        id: 1,
        title: 'title',
        active: true
    }]
    return res.status(200).json(requirements);
}

export default {getRequirements};