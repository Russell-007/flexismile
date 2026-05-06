import React,{useState} from "react";
import {Form,Button} from "react-bootstrap";
import axios from "axios";
import {createFFmpeg,fetchFile} from "@ffmpeg/ffmpeg"
import { useEffect } from "react";
import avi from "../../Assets/aviVid.avi";


const ffmpeg=createFFmpeg({log:true});



function Upload(){

    const [state, setState] = useState({
        fileContent:null
        
    })

const onChange=(e)=>{
    setState({
        fileContent:e.target.files[0]
    })
    console.log(e.target.files[0]);
}

const uploadHandler=()=>{

     const fd=new FormData();
     fd.append("fileContent",state.fileContent);
     fd.append("Name",state.fileContent.name);
    axios.post("http://infintrix.in/FlexAlignApi/FlexAlign.svc/UploadPhotosNew",fd,{
        onUploadProgress:ProgressEvent=>{
            console.log("Upload Progress:"+ Math.round(ProgressEvent.loaded/ProgressEvent.total*100)+"%");
        }
    })
    .then(res=>{
        console.log(res);
    });
   

}

const [ready, setReady] = useState(false);
const [video, setvideo] = useState();
const [mp4, setmp4] = useState();

const load=async()=>{
    await ffmpeg.load()
    setReady(true);

}

useEffect(()=>{
    load();
    // console.log("load");
},[])


const convertToMp4=async()=>{
    // ffmpeg.load();
    ffmpeg.FS('writeFile','aviVid.avi',await fetchFile(video));

    await ffmpeg.run('-i','aviVid.avi','-f','mp4','out.mp4');

    

    const data=ffmpeg.FS('readFile','out.mp4');
console.log(data);
    const url=URL.createObjectURL(new Blob([data.buffer],{type:'video/mp4'}))
    setmp4(url);

}
    return(
        <>
        {/* <input type="file" onChange={onChange} name="Name"/>
        <Button onClick={uploadHandler}>upload</Button> */}

{
    video && <video controls width="250" src={URL.createObjectURL(video)}>

    </video>
}

{/* item(0) for first file like [0]*/}
        <input type="file" onChange={(e)=>setvideo(e.target.files?.item(0))}/>   


        <Button variant="primary" className="btn" onClick={convertToMp4}>to mp4</Button>
        {
            mp4 && <video src={mp4} width="250" controls className="mt-5"></video>
        }



        {/* <video src={avi} width="250" controls></video> */}
        </>
    );
}


export default Upload;