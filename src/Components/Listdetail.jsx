import { Box, Button, Divider, ListItem, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import {edit,remove} from "../Slice/EditSlice"


const Listdetail = ({item}) => {

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(remove(id))
    }

    const handleEdit = (item) => {
        dispatch(edit(item))
    }

    


  return (
    <div>
      <ListItem>
        <Box sx={{flexGrow:"1"}}>

        <Typography variant="h4"> Name : </Typography>
        <Typography variant="h4">Email : </Typography>
        <Typography variant="h4">password : </Typography>
        <Typography variant="h4">State : </Typography>

        <Divider/>

        </Box>

        <Box>
            <Button variant="outlined" size="small" color="warning" sx={{marginRight:"5px"}} endIcon={<EditIcon/>} onClick={()=>handleEdit(item)}>Edit</Button>
            <Button variant="outlined" size="small" color="error" endIcon={<DeleteIcon/>} onClick={()=>handleDelete(item.id)}>Delete</Button>
        </Box>
      </ListItem>
    </div>
  )
}

export default Listdetail
