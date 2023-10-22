import styled from "styled-components";
import {PointerEvent,KeyboardEvent,RefObject} from 'react'
import { BaseObject, IStyledComponent } from "styled-components/dist/types";

interface videoProp {
muted:boolean,
loop:boolean,
autoPlay:boolean,
preload:string;
children:JSX.Element
}
interface ImgProp{
    src:string
}
interface MenuBut{
    id?:string,
    onClick:()=>void,
    children:string
}
interface pageProp{
    back:string,
    children:JSX.Element[]
}
interface But{
    id:string,
    onKeyUp?:(e:KeyboardEvent<HTMLButtonElement>)=>void,
    children:string,
    onClick:(e:PointerEvent<HTMLButtonElement>)=>void,
    value?:number,
    type?:string,
}
interface back{
    id:string,
    onClick:()=>void,
    children:JSX.Element
}
interface Check{
    ref:RefObject<HTMLInputElement>,
    type:string
} 
interface text{
    children:string
}
interface color{
    children:Array<string|Element[]>
    color:boolean
}
export const Wrapper:IStyledComponent<'web',BaseObject>=styled.div`
font-family:system-ui;
position:relative;
width:1280px;
height:720px;
margin:auto
`
export const Video:IStyledComponent<'web',videoProp>=styled.video`
width:100%;
height:100%;
`
export const Door:IStyledComponent<'web',BaseObject>=styled.div`
position:absolute;
width:100%;
display:flex;
align-items:center;
justify-content:end;
height:100%;
`
export const Block:IStyledComponent<'web',BaseObject>=styled.div`
width:300px;
height:400px;
background-color:rgb(118, 217, 248);
display:flex;
z-index:100;
flex-direction:column;
align-items:center
`
export const MenuTitle:IStyledComponent<'web',BaseObject>=styled.div`
padding:20px 10px;
text-align:center;
width:96%;
text-transform:uppercase;
font-size:20px;
font-weight:bold
`
export const Img:IStyledComponent<'web',ImgProp>=styled.img`
width:150px;
height:150px;
margin-bottom:20px
`
export const Text:IStyledComponent<'web',BaseObject>=styled.div`
width:100%;
text-align:center;
font-size:18px
`
export const MenuButton:IStyledComponent<'web',MenuBut>=styled.button`
width:200px;
height:40px;
border:none;
background-color:black;
color:rgb(118, 217, 248);
margin-top:10px
`
export const PageMain:IStyledComponent<'web',pageProp>=styled.div`
font-family:system-ui;
background:url(${({back}:pageProp)=>back}) no-repeat;
background-size:100% 100%;
display:flex;
justify-content:space-between;
width:1280px;
height:720px;
margin:auto
`
export const PageLeft:IStyledComponent<'web',BaseObject>=styled.div`
width:370px;
height:100%;
background-color:rgb(118, 217, 248);
`
export const FinalLeft:IStyledComponent<'web',BaseObject>=styled(PageLeft)`
 display:flex;
 justify-content:center;
 align-items:center;
`
export const PageRight:IStyledComponent<'web',BaseObject>=styled.div`
width:400px;
height:100%;
display:flex;
flex-direction:coloumn;
flex-wrap:wrap;
align-content:space-between;
`
export const PageText:IStyledComponent<'web',BaseObject>=styled.div`
width:80%;
margin:60px auto 10px auto;
text-align:center;
font-size:26px;
`
export const PagePhone:IStyledComponent<'web',color>=styled.div`
width:75%;
margin: auto;
text-align:center;
font-size:31px;
font-weight:bolder;
color:${({color}:color)=>color?'red':'black'}
`
export const PageSub:IStyledComponent<'web',BaseObject>=styled(PageText)`
margin:20px auto;
font-weight:400;
font-size:16px
`
export const PageBut:IStyledComponent<'web',BaseObject>=styled.div`
width:290px;
margin:10px auto;
display:grid;
row-gap: 5px;
column-gap: 0px;
grid-template-columns: repeat(auto-fill,minmax(85px,1fr));
`
export const Button:IStyledComponent<'web',But>=styled.button`
  width:90px;
  height:40px;
  background-color:transparent;
  border:2px solid black;
  &:hover {
   background-color:black;
   color:white
  }
`
export const DopBut:IStyledComponent<'web',BaseObject>=styled.div`
display:flex;
justify-content:space-between;
width:290px;
margin:5px auto;
`
export const DelButton:IStyledComponent<'web',But>=styled(Button)`
width:180px;

`
export const DopButton:IStyledComponent<'web',But>=styled(Button)`
 margin-right:5px
`
export const CheckBlock:IStyledComponent<'web',BaseObject>=styled.div`
margin:10px auto;
width:240px;
display:flex;
align-items:center;
`
export const Checkbox:IStyledComponent<'web',Check>=styled.input`
width:40px;
height:40px;

`
export const CheckText:IStyledComponent<'web',text>=styled.div`
width:90%;
padding:10px;

color:grey;
font-size:12px
`
export const SubBlock:IStyledComponent<'web',BaseObject>=styled.div`
width:340px;
margin:20px;
display:flex;
justify-content:center;
align-items:center
`
export const SubButton:IStyledComponent<'web',MenuBut>=styled(Button)`
width:290px;
`
export const Error:IStyledComponent<'web',BaseObject>=styled.div`
text-align:center;
width:300px;
margin:20px auto;
color:red;
font-size:20px;
font-weight:bold
`
export const RightBut:IStyledComponent<'web',back>=styled.button`
width:80px;
height:40px;
background-color:white;
&:hover {
    background-color:black;
    color:white
   }
`
export const Cres:IStyledComponent<'web',BaseObject>=styled.div`
 rotate:45deg;
 font-size:48px;
 margin-top:-8px
`
export const RightStart:IStyledComponent<'web',BaseObject>=styled.div`
 width:380px;
 display:flex;
 justify-content:end;
 margin-top:20px
`
export const RightEnd:IStyledComponent<'web',BaseObject>=styled(RightStart)`
 justify-content:end;
 margin-bottom:20px
`
export const RightText:IStyledComponent<'web',BaseObject>=styled.div`
color:white;
width:150px;
height:100%;
padding:10px;
text-align:center;
font-size:18px
`
export const Post:IStyledComponent<'web',BaseObject>=styled.div`
width:200px;
text-align:center;
`
export const PostTitle:IStyledComponent<'web',BaseObject>=styled.div`
 width:100%;
 font-size:35px;
  font-weight:bold
`
export const PostSub:IStyledComponent<'web',BaseObject>=styled.div`
width:100%;
 font-size:14px;
`