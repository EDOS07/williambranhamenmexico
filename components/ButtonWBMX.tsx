import {Button} from "@heroui/react";

interface attributeBtn{
  whidth?: string;
  label: string;
  text?: string;
  colortext?: string;
}


export default function ButtonWBMX(btn: attributeBtn) {
  return <Button color="primary" className={`${btn.whidth || "widt-32"} font-extrabold text-6xl ${btn.colortext}`}>{btn.label} 
  <p className={`font-normal text-sm ${btn.colortext}`}>{btn.text}</p></Button>
  ;
}