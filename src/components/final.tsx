import img from '../assets/back.jpg'
import qr from '../assets/qr.png'
import {useState} from 'react'
import {Img,PageRight, RightBut,Cres, RightStart, RightEnd,
 RightText,PageMain, FinalLeft,Post,PostSub,PostTitle} from './style'
import { Navigate } from 'react-router-dom'
export default function Page():JSX.Element{
const [auth,setAuth]=useState<boolean>(false)
const back=():void=>{
  setAuth(true)
}
 if (auth){
    return <Navigate to='/page' />
  }
    return (
       <PageMain back={`..${img}`} >
         <FinalLeft>
            <Post>
               <PostTitle>
                  Заявка принята
               </PostTitle>
               <PostSub>
                  Держите телефон под рукой.<br />
                  Скоро с вами свяжется наш менеджер
               </PostSub>
            </Post>
         </FinalLeft>
         <PageRight>
           <RightStart>
             <RightBut id='back'
             onClick={back}>
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
             <Img src={qr} />
           </RightEnd>
         </PageRight>
       </PageMain>
    )
}