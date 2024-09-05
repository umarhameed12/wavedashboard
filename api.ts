import axios from "axios"
import { get } from "http"

const URL="http://localhost:8080/data"
export const getTablesDat =async()=>{
    try {
        return await axios.get(URL)
    } catch (error) {
        return JSON.stringify({error:"Table Data not found"})
    }
}