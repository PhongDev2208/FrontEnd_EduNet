import Layout from "../Components/Layout/index"
import Home from "../pages/Client/Home/index"
import Course from "../pages/Client/Course/index"
import Profile from "../pages/Client/Profile/index"
import Login from "../pages/Client/Auth/Login"
import Chat from "../pages/Client/Chat/index"
import MyCourse from "../pages/Client/Student/MyCourse/index"
import Schedule from "../pages/Client/Student/Schedule/index"
import Detail from "../pages/Client/Course/detail"
import Private from "../Components/Private"
import DetailMyCourse from "../pages/Client/Student/MyCourse/detail"
import Quizz from "../pages/Client/Student/MyCourse/Quizz/index"
import Practics from "../pages/Client/Student/MyCourse/Quizz/Exam/Practic"
import Answer from "../pages/Client/Student/MyCourse/Quizz/Answers/Index"
import DetailAnswer from "../pages/Client/Student/MyCourse/Quizz/Answers/Detail"
import Assignment from "../pages/Client/Student/MyCourse/Assignment"
import DetailAssignment from "../pages/Client/Student/MyCourse/Assignment/detail"
import ClassRoom from "../pages/Client/Student/MyCourse/Classroom"
import AddMycourse from "../pages/Client/Student/MyCourse/add"
import RegisterStudent from "../pages/Client/Auth/RegisterStudent"
import RegisterTeacher from "../pages/Client/Auth/RegisterTeacher"
import EditMycourse from "../pages/Client/Student/MyCourse/Edit"
import AddAssignmentMycourse from "../pages/Client/Student/MyCourse/Assignment/Add"
import CheckAssignment from "../pages/Client/Student/MyCourse/Assignment/check"
import Checkdetail from "../pages/Client/Student/MyCourse/Assignment/Checkdetail"
import Material from "../pages/Client/Student/MyCourse/Material"
import AddMaterial from "../pages/Client/Student/MyCourse/Material/Add"
import AddchildMaterial from "../pages/Client/Student/MyCourse/Material/Addchild"
import AddQuizz from "../pages/Client/Student/MyCourse/Quizz/Add"
import { useRoutes } from "react-router-dom"


export const routers = [
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : "/Course",
                children : [
                    {
                        index : true,
                        element : <Course/>
                    },{

                        path : "/Course/detail/:id",
                        element : <Detail/>
                    }
                ]
            },
            {
                element : <Private/>,
                children : [
                    {
                        path : "/Mycourse",
                        children : [
                            {
                                index : true,
                                element : <MyCourse/>
                            },
                            {
                                path : "Add",
                                element : <AddMycourse/>
                            },
                            {
                                path : "edit/:id",
                                element : <EditMycourse/>
                            },
                            {
                                path : "detail/:id",
                                element : <DetailMyCourse/>
                            },
                            {
                                path : "quizz/:id",
                                element : <Quizz/>
                            },
                            {
                                path : "quizz/add/:id",
                                element : <AddQuizz/>
                            },
                            {
                                path : "quizz/practics/:id",
                                element : <Practics/>
                            },
                            {
                                path : "quizz/Answer/:id",
                                element : <Answer/>
                            },
                            {
                                path : "quizz/Answer/Detail/:id",
                                element : <DetailAnswer/>
                            },
                            {
                                path : "Assignment/index/:id",
                                element : <Assignment/>
                            },
                            {
                                path : "Assignment/add/:id",
                                element : <AddAssignmentMycourse/>
                            },
                            {
                                path : "Assignment/detail/:id/:idas",
                                element : <DetailAssignment/>
                            },
                            {
                                path : "Assignment/check/:id/:idchild",
                                element : <CheckAssignment/>
                            },
                            {
                                path : "Assignment/checkdetail/:id/:idchild",
                                element : <Checkdetail/>
                            },
                            {
                                path : "Material/:id",
                                element : <Material/>
                            },
                            {
                                path : "Material/add/:id",
                                element : <AddMaterial/>
                            },
                            {
                                path : "Material/addchild/:id",
                                element : <AddchildMaterial/>
                            },
                            {
                                path : "Classroom/:id",
                                element : <ClassRoom/>
                            },
                        ]
                    } ,
                    {
                        path : "/profile",
                        element : <Profile/>
                    },
                    {
                        path : "/chat",
                        element : <Chat/>
                    },
                    {
                        path : "/schedule",
                        element : <Schedule/>
                    }                    
                ]
            }
        ]
    },{
        path : "/auth" ,
        children : [
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "Register/stu",
                element : <RegisterStudent/>
            },
            {
                path : "Register/tea",
                element : <RegisterTeacher/>
            },
            
        ]
    }
]

function Allrouter(){
    const render = useRoutes(routers)
    return render
}
export default Allrouter