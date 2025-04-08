import {Button} from "@heroui/react";
import { LuCirclePlay } from "react-icons/lu";

export default function VideoButtom() {
  return <Button color="primary" variant="solid" className="ml-6 w-24 flex bg-blue-800 rounded-full shadow-lg" radius="full">
    <LuCirclePlay className="flex justify-start" /> Video</Button>;
}
