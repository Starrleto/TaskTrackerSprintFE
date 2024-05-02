
"use client";

import { Button, Modal, ModalHeader, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import AddIcon from '@mui/icons-material/Add';
import Avatar from "@mui/material/Avatar";
import CommentsComponent from "./CommentsComponent";


export function AddedTaskModalComponent() {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setOpenModal(false);
    }, [])

    return (
        <>

            <Modal className="" style={{ fontFamily: 'Hammersmith' }} show={openModal} size="5xl" onClose={() => setOpenModal(false)} popup>
                <Modal.Header className="pl-14 pr-14 pt-10">
                    <h3 className="mb-5 text-3xl font-normal">
                        Task Title
                    </h3>
                </Modal.Header>

                <Modal.Body className="pl-14 pb-14 pr-14">
                    <div className="grid grid-cols-5">

                        <div className="col-span-3">
                            <p className="text-xl pb-1"> Description </p>
                            <div className=" bg-taskDescBg rounded-md h-52 p-5 overflow-y-scroll">
                                <p>A short description of the task you are viewing. When login has been created by backend people, test login functionality using Postman. Endpoint is https://azure.nonsense/ujsbuaskbfjksA short description of the task you are viewing. When login has been created by backend people, test login functionality using Postman. Endpoint is https://azure.nonsense/ujsbuaskbfjksA short description of the task you are viewing. When login has been created by backend people, test login functionality using Postman. Endpoint is https://azure.nonsense/ujsbuaskbfjks</p>
                            </div>

                            <div className="flex justify-end pt-4">
                                <div className="pr-5">
                                    <Button className="h-9 p-0 w-24 enabled:hover:bg-cancelBtn focus:ring-0 bg-cancelBtn"> Cancel </Button>
                                </div>
                                <div>
                                    <Button className="h-9 p-0 w-24 enabled:hover:bg-greenTxt focus:ring-0 bg-greenTxt"> Create </Button>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 ml-16 pt-8 w-72">
                            <div className=" bg-taskDescBg p-5 rounded-md">
                                <div className="inline-flex">
                                    <div className=" pr-28">
                                        <p className="text-xl"> Assignee: </p>
                                        <p className=" text-darkGrayTxt"> username </p>
                                    </div>

                                    <div className="">
                                        <Avatar className="border-black border-2"></Avatar>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <p className="text-lg pb-2"> Created Date </p>

                                    <Select style={{ color: 'rgba(11, 125, 97, 1)', fontSize: 20 }} className="pb-4" defaultValue="center">
                                        <option className="text-greenTxt" value="center">To Do</option>
                                        <option value="top-left">In Progress</option>
                                        <option value="top-center">Completed</option>
                                    </Select>

                                    <Select style={{ color: 'rgba(11, 125, 97, 1)', fontSize: 20 }} className="selectTxt" defaultValue="center">
                                        <option className="" value="center">Priority - 1</option>
                                        <option value="top-left">Priority - 2</option>
                                        <option value="top-center">Priority - 3</option>
                                        <option value="top-left">Priority - 4</option>
                                        <option value="top-center">Priority - 5</option>
                                    </Select>
                                </div>

                            </div>
                        </div>

                    </div>
                </Modal.Body>

                <p>Comments</p>

                <CommentsComponent/>
            </Modal>
        </>
    );
}
