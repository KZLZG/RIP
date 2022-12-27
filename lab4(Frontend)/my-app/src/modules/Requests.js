const getProds = async () =>{
    const res = await fetch(`http://127.0.0.1:8000/rowe/`)
        .then((response) => {
            return response.json();
        }).catch(()=>{
            return {resultCount:0, results:[]}
        })
    return res
}
