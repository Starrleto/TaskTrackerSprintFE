interface LoginDTO {
    username:string,
    password:string
}

interface addDTO {
    id:number,
    username:string,
    password:string
}

interface Board {

}

interface ITasks {
    id: number
    userId: number
    description: string
    title: string
    dateCreated: string
    assignedTo: string
    status: string
    priority: string
    isDeleted: boolean
}