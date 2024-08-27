import { List } from "@mui/material"
import { useSelector } from "react-redux"
import Listdetail from "./Listdetail"

const Listgroup = () => {

    const {edit} = useSelector(state => state.edit)


  return (
    <div>

    <List sx={{marginTop:"50px"}}>

    {
        edit.map(item => <Listdetail key={item.id} item={item}/>)
    }

    </List>
      
    </div>
  )
}

export default Listgroup
