const domain = "http://localhost:3001/api/v1/"

export const GetData = async (path,token) => {
    try {
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const postdata = await fetch(domain + path,{
            method : "GET",
            headers:headers,
        })
        const respond = await postdata.json();
        return respond
    } catch {
        return {
            status : false,
            token  : null
    };
    }
}

export const PostData = async(path,option,token = null) => {
    console.log(path)
    try {
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const postdata = await fetch(domain + path,{
            method : "POST",
            headers:headers,
            body: JSON.stringify(option),
        })
        const respond = await postdata.json();
        return respond
        
    } catch {
        return {
                status : false,
                token  : null
        };
    }
}


export const PatchData = async(path,option,token = null) => {
    try {
        console.log(path)
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const postdata = await fetch(domain + path,{
            method : "PATCH",
            headers:headers,
            body: JSON.stringify(option),
        })
        const respond = await postdata.json();
        return respond
        
    } catch {
        return {
                status : false,
                token  : null
        };
    }
}