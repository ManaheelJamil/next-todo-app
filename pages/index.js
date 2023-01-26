"use client"
import { Button,
Flex,
Heading,
ListItem,
Text,
Input,
Image,
Spacer,
UnorderedList} from "@chakra-ui/react";
import { CloseButton } from '@chakra-ui/react'
import { useState } from "react";

export default function page() {
    const [tasks,setTasks] = useState(["1","2","3"]);
    const [Item,setItem] = useState("");
    function removeItem(taskName){
            setTasks(tasks.filter(task => {
                return task != taskName;
            }))
    }
    function AddItem(){
        if (Item != "" && !tasks.includes(Item)){
            let temp = tasks;
            temp.push(Item);
            setTasks(temp);
            setItem("");
        }
    }
    return <Flex justifyContent="center" alignItems="center" bg="gray.200"alignContent="center" width="100%" height="100%" flexDirection= "column">
<Heading fontSize="60px" fontWeight="extrabold" fontFamily="initial">ToDo-List</Heading><br/>
<Image
shadow="5px 5px 15px gray"
width="75%"
height="7%"
  src='./image/images.jpg'
  alt='Dan Abramov'
/><br/>   <Text alignContent="left">Enter Your Item</Text>
<Input placeholder="Enter Your new item"
        fontSize="18px"
        // bg="blackAlpha.800"
        color="white"
        value={Item}
        onChange ={(e)=>{
            setItem(e.target.value)
        }}/>
        <br/>
                 <Button onClick={AddItem} bg="teal" width="100%" color="white" shadow="5px 5px 15px gray"> AddItem </Button>
                 <br/>
       <Flex> <UnorderedList>
            {tasks.map((task) => {
                return <ListItem key = {task.indexOf} spacing='24px'>
                    {task}
                    <button mL={10} 
                    onClick ={()=>{
                        removeItem(task);
                    }}> Remove Item
                    </button>
                </ListItem>
            })}
        </UnorderedList></Flex>
        <br/>
       
        
    </Flex>
}