
async function handleLoad(){
try {
    //@ts-ignore
const {data} = await axios.get('/IP');
console.log(data);
const {} = data;
console.log(Object.values(data)[1]);

displayIP(Object.values(data)[1])
} catch (error) {
    console.log(error);
    
}
}

function displayIP(IP){
    try {
        const root = document.querySelector('#root');
        root.innerHTML = `${IP}`
    } catch (error) {
        console.log(error);
        
    }
}