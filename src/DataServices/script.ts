
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

const addBoard = async(newBoard: BoardDTO) => {

    const promise = await fetch('https://tasktracksprint.azurewebsites.net/api/Board/AddBoard', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBoard)
    });
    const data = await promise.json();
    return data;

}

const getBoardsByUsername = async(name:string) => {

    const promise = await fetch('https://tasktracksprint.azurewebsites.net/api/Board/GetBoardsByUsername/'+name);
    const data = await promise.json();
    console.log(data);
    return data;

}

const getTaskItems = async() => {

    const promise = await fetch('https://tasktracksprint.azurewebsites.net/api/Task/GetAllTaskItems');
    const data = await promise.json();
    console.log(data);
    return data;

}

const generateCode = async() => {
    const promise = await fetch('https://tasktracksprint.azurewebsites.net/api/Board/GenerateRandomInviteCode');
    const data = await promise.json();
    return data;
}

export {Login, addUser, getTaskItems, addBoard, getBoardsByUsername, generateCode}