'use client'

import LoginComponent from "../Components/logincomponent"
import NavbarComponent from "@/Components/NavbarComponent";


export default function Home() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
        <LoginComponent></LoginComponent>
    </div>
  );
}
