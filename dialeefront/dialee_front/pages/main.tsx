
import WithMenuTemplate from "../components/templates/WithMenuTemplate"
import {GetStaticProps} from 'next';

export const getStaticProps:GetStaticProps=async(context) =>{
    return {
      props: {}, // will be passed to the page component as props
    }
  }
 const MainPage=()=>{
    return(
            <WithMenuTemplate>
               
            
            </WithMenuTemplate>
     
    )
}
export default MainPage;