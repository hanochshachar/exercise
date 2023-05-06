import axios from "axios";

export const getImagesByCategory = async (req, res) => {
    try {
        
        const {category, page} = req.query;
        const per = 9;
        const key = "36029078-1e5b5d48336178f7536ee618a"
        const data = await axios.get(`https://pixabay.com/api/?key=${key}&category=${category}&page=${page}&per_page=${per}`)
       console.log(data.data);
       
        res.send(data.data)
    } catch (error) {
        console.error(error);
        
    }
}