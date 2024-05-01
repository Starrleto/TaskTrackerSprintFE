
const Login = async (loginDTO:LoginDTO) => {

    const promise = await fetch('https://tasktracksprint.azurewebsites.net/api/User/Login', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDTO)
    });
    const data = await promise.json();
    return data;

}

const addUser = async(user:addDTO) => {
    const promise = await fetch('https://tasktracksprint.azurewebsites.net/api/User/AddUser', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await promise.json();
    return data;
}

export {Login, addUser}