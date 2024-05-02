interface LoginDTO {
    username:string,
    password:string
}

interface addDTO {
    id:number,
    username:string,
    password:string
}

interface BoardDTO {
    id: number,
    name: string,
    inviteCode: string,
    memberList: string,
    isDeleted: boolean
}