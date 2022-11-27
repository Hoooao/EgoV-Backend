
import SubjectModel from '../models/SubjectModel.mjs';


const SubjectController = {
    // getUser is for login, the user detail would not be sent.
    getSubjects: async (req, res) => {
        const { num } = req.query;
        const subjects = (await SubjectModel.getSubjects(num))[0];
        res.send({ ok: 1, subjects });
    }
}


export default SubjectController;


