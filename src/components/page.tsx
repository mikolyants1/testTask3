import img from '../assets/back.jpg'
import QR from '../assets/qr.png'
import {useState,KeyboardEvent,useReducer,PointerEvent,useRef,useEffect} from 'react'
import { Button, DopBut, PageBut,PageLeft,PageMain,PagePhone,Error,Img,PageRight,
PageSub,PageText,DelButton,DopButton, CheckBlock, Checkbox, CheckText, SubBlock, 
SubButton, RightBut,Cres, RightStart, RightEnd, RightText} from './style'
import { Navigate } from 'react-router-dom'
interface state{
    auth:boolean,
    error:boolean,
    back:boolean
}
interface action{
    [i:string]:boolean
}
export default function Page():JSX.Element{
  const Arr:number[]=Array.from(Array(9).keys())
  const [num,setNum]=useState<string[]>([
    "_","_","_","_","_","_","_","_","_","_",
  ])
  const ref=useRef<HTMLInputElement>(null!)
  const timer=useRef<NodeJS.Timeout>(null!)
  const [state,dispatch]=useReducer(
 (prv:state,nxt:action)=>({...prv,...nxt}),
 {auth:false,error:false,back:false})
useEffect(():void=>{
clearTimeout(timer.current)
timer.current=setTimeout(():void=>{
    dispatch({back:true})
  },10000)
})
const addValue=(e:KeyboardEvent<Element>):void=>{
 const buts:NodeListOf<HTMLButtonElement>=document.querySelectorAll('#but')
 let index:number=0
 buts.forEach((item:HTMLButtonElement,i:number)=>{
  if (document.activeElement==item) index=i
 })
 if ([...Arr,9].some((x:number):boolean=>x==Number(e.key))){
    const idx:number = num.indexOf("_") 
     if (idx!==-1){
     const left:string[]=num.slice(0,idx)
    const right:string[]=num.slice(idx+1)
     setNum([...left,e.key,...right])
      }
 }
  switch (e.key) {
    case 'Backspace':
      const idx:number=getLastNum(num)
      if (idx!==-1){
        const left:string[]=num.slice(0,idx)
        const right:string[]=num.slice(idx+1)
        setNum([...left, "_",...right])
          }
    break;
    case 'ArrowUp':
    buts[index<3?index:index-3].focus()
    break;
    case 'ArrowDown':
    buts[index>6?index+1:index+3].focus()
    break;
    case 'ArrowLeft':
     buts[index!==0?index-1:index].focus()
    break;
    case 'ArrowRight':
     buts[index!==buts.length-1?index+1:index].focus()
    break;
    default:
    break;
  }
  }
const press=(move:string)=>
(e:PointerEvent<HTMLButtonElement>):void=>{ 
  const idx:number = move=='add' ? 
  num.indexOf("_") : getLastNum(num)
  if (idx!==-1){
   const left:string[]=num.slice(0,idx)
   const right:string[]=num.slice(idx+1)
   setNum([...left,move=='add' ? 
   e.currentTarget.value : "_",...right])
 }
}
const getLastNum=(arr:string[]):number=>{
    let x:number=0
    arr.forEach((item:string,i:number):void=>{
       if (item!=='_') x=i
    })
    return x
   }
const submit=():void=>{
 if (num.indexOf('_')==-1){
 if (ref.current.checked) dispatch({auth:true})
 } else {
 dispatch({error:true})
 }
}
const back=():void=>{
  dispatch({back:true})
}
  if (state.auth){
    return <Navigate to='/final' />
  }
  if (state.back){
    return <Navigate to='/' />
  }
    return (
       <PageMain back={`..${img}`} >
         <PageLeft>
           <PageText>
              Введите ваш номер мобильного телефона
           </PageText>
           <PagePhone color={state.error}>
              +7
             {num.map((item:string,i:number):any=>(
              <span key={i}>
                {`${i==0?'(':''}`}
                {`${i==6||i==8?'-':''}`}
                {item} 
                {`${i==2?')':''}`}
              </span>
             ))}
           </PagePhone>
           <PageSub>
              И с вами свяжется наш менеджер для дальнейшей консультации
           </PageSub>
           <PageBut>
             {Arr.map((i:number):JSX.Element=>(
              <Button id='but' value={i+1} onKeyUp={addValue}
                onClick={press('add')} type='text'>
                  {`${i+1}`}
              </Button>
             ))}
           </PageBut>
           <DopBut>
             <DelButton id='but' onKeyUp={addValue}
              onClick={press('del')}>
                стереть
             </DelButton>
             <DopButton id='but' onKeyUp={addValue}
              onClick={press('add')} value={0}>
                0
             </DopButton>
           </DopBut>
            {state.error?(
             <Error>
                НЕВЕРНО ВВЕДЕН НОМЕР
             </Error>
               ):(
             <CheckBlock>
               <Checkbox ref={ref}
                type="checkbox"
                />
               <CheckText>
                  Согласие на обработку персональных данных
               </CheckText>
             </CheckBlock>
            )}
           <SubBlock>
             <SubButton id='but' onClick={submit}>
                Подтвердить
             </SubButton>
           </SubBlock>
         </PageLeft>
         <PageRight>
           <RightStart>
             <RightBut id='back' onClick={back}>
               <Cres>
                 +
               </Cres>
             </RightBut>
           </RightStart> 
           <RightEnd>
             <RightText>
               Сканируйте QR код для получения 
               дополнительной информации
             </RightText>
             <Img src={QR} />
           </RightEnd>
         </PageRight>
       </PageMain>
    )
}