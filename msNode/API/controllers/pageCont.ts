import axios from 'axios';

export const getPagination = async (req, res) => {
    try {
        const {per} = req.query; 
        const key = "36029078-1e5b5d48336178f7536ee618a"
        const data = await axios.get(`https://pixabay.com/api/?key=${key}&category=music&&per_page=${per}&`)
        const array = data.data.hits
        res.send(array)
    } catch (error) {
        res.send({error: error.message})
    }
}