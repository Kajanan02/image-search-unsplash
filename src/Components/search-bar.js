import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import ImageDetails from "./image-details";
import Loader from "react-loader-spinner";

const SearchBar = ()=>{
    const clientID = 'b79d009ec0a36fceefd796ecf2c8f7981dba4259264bcf5db2cadc07100b697d'
    const [images, setImages] = useState([]);
    const [search, setSearch] = useState("");
    const [submit, setSubmit] = useState(false);
    const [load, setLoad] = useState(false);
    const [selectedImageData, setSelectedImageData] = useState(null);

    function handleSearch(e){
        setSearch(e.target.value);
        console.log(search);
    }
    function handleSubmit(){
       
    }

    console.log(images)

    useEffect(()=>{
        if(!submit){
            return
        }
        setLoad(true)
        axios.get('https://api.unsplash.com/search/photos/?client_id='+ clientID + '&query=' + search)
        .then(res =>{
            setImages(res.data.results)
            setLoad(false);
            setSubmit(false);
    })
    
    },[submit])

    return (
    <div>
        <div className="container container-box mt-5 p-3">
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <h4>Image Search</h4>
                <Form.Control type="text" placeholder="Search Here..."
                              className="d-inline w-900 mt-2"
                              onChange={handleSearch}/>
                <Button variant="primary" className={"m-b-5px"} onClick={()=> setSubmit(true) }>Search</Button>
            </Form.Group>
        </Form>
        </div>
        <div className={'container mt-5 d-flex justify-content-center'}>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={load}
      />
        </div>

            <div className={'container image-box'} hidden={load}>
                    {images && images.map((data,index)=>(
                        <img src={data.urls.thumb} key={index} height={'auto'} width={'250px'} onClick={()=> setSelectedImageData(data)} className={'btn mt-0 mb-0 p-0'}/>
                    ))}
            </div>

        {selectedImageData &&
        <ImageDetails imageData={selectedImageData} onClose={() => setSelectedImageData(null)}/>
        }
    </div>
    );
}
export default SearchBar;