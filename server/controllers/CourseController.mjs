import axios from 'axios';
import CourseModel from '../models/CourseModel.mjs';
import { YTBPlayListAPI } from '../helpers/outerAPI.mjs'

const getYTBThumbnail = (id) => {
    return axios({
        method: 'GET',
        url: `${YTBPlayListAPI(id, 1)}`,
    })

}
const CourseController = {
    getCourses: async (req, res) => {
        const { num } = req.query;
        const courses = (await CourseModel.getCourses(num))[0];
        const tbnArr = [];
        const tbnArrResolution = ['maxres', 'standard', 'high', 'medium', 'default'];
        courses.map((ele) => {
            tbnArr.push(getYTBThumbnail(ele.youtube_url));
        })
        Promise.all(tbnArr).then(
            values => {
                let index = 0;
                values.forEach(ele => {
                    for (let i = 0; i < tbnArrResolution.length; i++) {
                        if (ele.data.items[0].snippet.thumbnails[tbnArrResolution[i]]) {
                            courses[index].img_url = ele.data.items[0].snippet.thumbnails[tbnArrResolution[i]].url;
                            index += 1;
                            break;
                        }
                    }
                });
                res.send({ ok: 1, courses })
            }
        )
    },
    getCoursesWithSubject: async (req, res) => {
        const { subject_num } = req.query;
        const courses = (await CourseModel.getCoursesWithSubject(subject_num))[0];
        const tbnArr = [];
        const tbnArrResolution = ['maxres', 'standard', 'high', 'medium', 'default'];
        courses.map((ele) => {
            tbnArr.push(getYTBThumbnail(ele.youtube_url));
        })
        Promise.all(tbnArr).then(
            values => {
                let index = 0;
                values.forEach(ele => {
                    for (let i = 0; i < tbnArrResolution.length; i++) {
                        if (ele.data.items[0].snippet.thumbnails[tbnArrResolution[i]]) {
                            courses[index].img_url = ele.data.items[0].snippet.thumbnails[tbnArrResolution[i]].url;
                            index += 1;
                            break;
                        }
                    }
                });
                res.send({ ok: 1, courses })
            }
        )
    }
}


export default CourseController;


