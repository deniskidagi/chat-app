import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";


export default function Home() {
  return (
   <div>
    <h1 className="text-3xl text-red-600">Hello Next!</h1>
    <Button 
    as={Link}
    href="/members"
     radius="full"
     className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
     startContent={<FaRegSmile size={20}/>}
     >
 
    Members
    </Button>
   </div>
  );
}
