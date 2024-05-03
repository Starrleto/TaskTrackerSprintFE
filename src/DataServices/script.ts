const url = 'https://tasktracksprint.azurewebsites.net/api/'

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
    return data.token != undefined;

}

const addUser = async(user:addDTO) => {
    const promise = await fetch('https://tasktracksprint.azurewebsites.net/api/User/AddUser', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await promise.json();
    return data;
}

const addTask = async(task: ITasks) => {
    const res = await fetch(url + 'Task/AddTaskItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    if(!res.ok){
        const message = 'an error has occured! ' + res.status;
        throw new Error(message);
    }
    
    const data = await res.json();
    return data;
}

export {Login, addUser, addTask}