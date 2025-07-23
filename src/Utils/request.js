import GETURL from "../Components/helper/GETURL.js";

const domain = "http://localhost:3001/api/v1/"
export const GetData = async (path) => {
    try {
        const page = GETURL("page") || 1;
        const key = GETURL("key") || null;
        const status = GETURL("status") || null
        const limit = GETURL("limit") || null
        path += `?key=${key}&&page=${page}&&limit=${limit}&&status=${status}`
        console.log(path)
        const response = await fetch(domain + path, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        return await response.json();
    } catch (error) {
        console.log(error)
        return {
            status: false,
            type: "Auth",
            error: 600,
            data: null
        }
    }
}

export const PostData = async (path, option, token = null) => {
    try {
        const response = await fetch(domain + path, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(option),
        });



        return await response.json();
    } catch (error) {
        return {
            status: false,
            type: "Auth",
            error: 600,
            data: null
        }

    }
}


export const PatchData = async (path, option, token = null) => {
    try {
        const response = await fetch(domain + path, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(option),
        });


        return await response.json();
    } catch (error) {
        return {
            status: false,
            type: "Auth",
            error: 600,
            data: null
        }
    }
}