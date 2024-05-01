'use client'
import { Logincomponent } from "@/Components/LoginComponent";
import NavbarComponent from "../Components/NavbarComponent";


export default function Home() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Logincomponent></Logincomponent>
    </div>
  );
}
