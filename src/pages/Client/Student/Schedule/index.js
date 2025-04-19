import { Badge, Modal,Calendar ,Button } from 'antd';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { GetAllCourse } from '../../../../service/Course';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser,selectRole } from "../../../../Redux/user";
import { GetScheduleStudent } from '../../../../service/Stucourse';
const generateSchedule = (scheduleData) => {
    let schedule = {};

    scheduleData.forEach(course => {
        const startDate = moment(course.start_time);
        const endDate = moment(course.end_time);

        let currentDate = startDate.clone();

        while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
            course.daysOfWeek.forEach(dayObj => {
                if (currentDate.day() === dayObj.Day) {
                    const dateKey = currentDate.format('D-MM-YYYY');
                    const startHour = dayObj.hourstart;
                    const endHour = dayObj.hourend;

                    const startTime = currentDate.clone().hour(startHour).minute(0);
                    const endTime = currentDate.clone().hour(endHour).minute(0); 

                    if (!schedule[dateKey]) {
                        schedule[dateKey] = [];
                    }

                    schedule[dateKey].push({
                        display: course.display,
                        startTime: startTime.format('HH:mm'), 
                        endTime: endTime.format('HH:mm')     
                    });
                }
            });

            currentDate.add(1, 'day');
        }
    });

    return schedule;
};
function Schedule() {
    const token = useSelector(selectUser)
    const role = useSelector(selectRole)

    const [DataSchedule,setDataSchedule] = useState([])
    const FetchAPI = async() => {
        let respond = null
        if(role == "tea") {
            respond = await GetAllCourse("GetSchedule", {}, token)
        }
        else{
            respond = await GetScheduleStudent({},token);

        }
        const finalSchedule = generateSchedule(respond.data);
        setDataSchedule(finalSchedule);


    }
    const getListData = (value) => {
    let listData = [];
    const day = value.date();
    const month = value.month() + 1;
    const year = value.year();  

    const key = `${day}-${month < 10 ? '0' + month : month}-${year}`;

    if (DataSchedule[key]) {
        listData = DataSchedule[key];
    }

    return listData || [];
};

const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
        <ul className="events">
            {listData.map((item, index) => (
                <li key={index}>
                    <Badge status="success" text={`${item.display.title} từ ${item.startTime} đến ${item.endTime}`} />
                </li>
            ))}
        </ul>
    );
};

const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
};
    useEffect(() => {
        FetchAPI()
    },[])
    return (
        <div className="shopping-area pt-100 pb-60">
            <div className="container">
                <Calendar cellRender={cellRender} />
            </div>
        </div>
    );
}

export default Schedule;
