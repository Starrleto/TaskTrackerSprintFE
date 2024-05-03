
"use client";

import { Button, Modal, ModalHeader, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import AddIcon from '@mui/icons-material/Add';
import Avatar from "@mui/material/Avatar";
import CommentsComponent from "./CommentsComponent";

interface AddedTaskProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddedTasksModalComponent: React.FC<AddedTaskProps> = ({ open, setOpen }, prop: {
    id: number, userId: number, description: string,
    title: string,
    dateCreated: string,
    assignedTo: string,
    status: string,
    priority: string,
    isDeleted: boolean
}) => {

    return (
        <>

            <Modal className="" style={{ fontFamily: 'Hammersmith' }} show={open} size="5xl" onClose={() => setOpen(false)} popup>
                <Modal.Header className="pl-14 pr-14 pt-10">
                    <p className="mb-5 text-3xl font-normal">
                        {prop.title}
                    </p>
                </Modal.Header>

                <Modal.Body className="pl-14 pb-14 pr-14">
                    <div className="grid grid-cols-5">

                        <div className="col-span-3">
                            <p className="text-xl pb-1"> Description </p>
                            <div className=" bg-taskDescBg rounded-md h-52 p-5 overflow-y-scroll">
                                <p>{prop.description}</p>
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

                    <p className="">Comments</p>

                    <div className="border-2 border-black h-32 rounded-lg">

                    </div>


                    <CommentsComponent />
                </Modal.Body>


            </Modal>
        </>
    );
}
