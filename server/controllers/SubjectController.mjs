
import SubjectModel from '../models/SubjectModel.mjs';


const SubjectController = {
    // getUser is for login, the user detail would not be sent.
    getSubjects: async (req, res) => {
        const { num } = req.query;
        const subjects = (await SubjectModel.getSubjects(num))[0];
        res.send({ ok: 1, subjects });
    },
    getSubjectWithID:async (req,res)=>{
        const {id} = req.query;
        const subject = (await SubjectModel.getSubjectWithID(id))[0];
        if(subject.length)res.send({ ok: 1, subject:subject[0] });
        else res.send({ ok: 0, message:'Subject does not exist.' });
    }
}


export default SubjectController;


