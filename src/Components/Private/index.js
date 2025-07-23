import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/user';
import { Getdetail } from "../../service/User";
import { useEffect, useState } from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Private() {
    const [loading, setloading] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response = await Getdetail();
        if (response.status == false && response.error == 100) {
            navigate("auth/login")
        }
        if (response.status == true) {
            dispatch(login({role: response.data.role_id }));
        }
        setloading(false)
    };
    useEffect(() => {
        fetchData()
    }, [])
 
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