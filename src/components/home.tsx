import { useState,useEffect} from "react";
import { Wrapper,Video, Door, Block, MenuTitle, Img,Text, MenuButton } from "./style";
import img from '../assets/qr.png'
import { Navigate } from "react-router-dom";

interface props{
 onClick:()=>void
}
export default function Home():JSX.Element{
const [show,setShow]=useState<boolean>(false)
const [nav,setNav]=useState<boolean>(false)
useEffect(():void=>{
  setTimeout(():void=>setShow(true),4000)
},[])
if (nav) {
    return <Navigate to='page' />
 }
    return (
        <Wrapper>
         {show&&<Menu onClick={()=>setNav(true)} />}
          <Video muted loop preload='auto' autoPlay>
            <source type="video/mp4"
             src='../src/assets/IMG_1953 (1).MP4'
             />
          </Video>
        </Wrapper>
    )
}
function Menu(props:props):JSX.Element{
    return (
        <Door>
          <Block>
            <MenuTitle>
             Исполните мечту вашего малыша! подарите ему собаку!
            </MenuTitle>
            <Img src={img} />
            <Text>
            Cканируйте QR-код
            </Text>
            <Text>
             или нажмите OK
            </Text>
            <MenuButton {...props}>
                OK
            </MenuButton>
          </Block>
        </Door>
    )
}