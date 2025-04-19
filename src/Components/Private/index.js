import { Outlet, Navigate, useNavigate } from "react-router-dom"
import { getCookie } from "../helper/cookie"
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../Redux/user';
import { GetAllUser } from "../../service/User";
import { useEffect, useState } from "react";
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Private() {
    const [loading, setloading] = useState(true)
    const navigate = useNavigate()
    const token = getCookie("token")
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response = await GetAllUser("Getdetail", {}, token);
        if (response.status == false && response.error == 100) {
            navigate("auth/login")
        }
        if (response.status == true) {
            dispatch(login({ token: response.data.token, role: response.data.role_id }));
        }
        setloading(false)
    };
    useEffect(() => {
        fetchData()
    }, [])
    if (!token) {
        return (<Navigate to="/auth/login" />)
    }

    if (loading) {
        return(
            
            <div className="shopping-area pt-100 pb-60">
                <div className="container text-center">

            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 48,
                        }}
                        spin
                    />
                }
            />
        </div>
        </div>
        )
    }
    return (
        (<Outlet />)
    )
}
export default Private