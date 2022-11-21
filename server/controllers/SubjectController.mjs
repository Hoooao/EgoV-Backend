
import SubjectModel from '../models/SubjectModel.mjs';


const SubjectController = {
    // getUser is for login, the user detail would not be sent.
    getSubjects: async (req, res) => {
        const subjects = (await SubjectModel.getSubjects())[0];
        res.send({ ok: 1, subjects });
    }
}


export default SubjectController;