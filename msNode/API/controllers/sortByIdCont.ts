import axios from "axios";

export const sortById = async (req, res) => {
    try {
        const per = 12;
        const key = "36029078-1e5b5d48336178f7536ee618a"
        const data = await axios.get(`https://pixabay.com/api/?key=${key}&category=music&&per_page=${per}`)
        const array = data.data.hits
        const sort = array.sort((a, b) => a.id - b.id)
        
        res.send(sort)
        
    } catch (error) {
        res.send({error: error.message})
    }
}