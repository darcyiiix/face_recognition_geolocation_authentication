import { useDispatch, useSelector } from "react-redux"
import { getActiveDistance, getEuclideanSimilarity, getEuclideanValue, getManhattanSimilarity, getManhattanValue, setActiveDistance, setEuclideanValue, setManhattanValue } from "../../features/dashboard/similaritySlice"
import { Threshold } from "./Threshold"
import { SimilarityResult } from "./SimilarityResult"
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState, useEffect } from 'react';
import QRSuccess  from './face_id_blue.gif';
//import QRSuccess from './check_blue.gif';
export const Similarity = () => {

    const [ scanResult, setScanResult ] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 1700,
                height: 1700,
            },
            fps: 5,
        });
    
        scanner.render(success, error);
    
        function success(result){
            scanner.clear();
            setScanResult(result);
        }
    
        function error(err){
            console.warn(err);
        }
    },[])


    return (

        <>
        <div className="col-12 my-box mb-4 similarity-test">
            <div className="heading">
                <h4>Welcome to face recognition and geolocation based authentication system</h4>
            </div>
            
        </div>

        <h1 className="heading_scan">Scan QR Code</h1>

            <div className="qr_success">

            {
            scanResult 
            ? <div className="img__success"> Success: <a href={"http://" + scanResult }>{scanResult}</a>
               <img src={QRSuccess} alt="Green Check Animation" />
            </div> 
                
            : <div id="reader"></div>
            }

            </div>
            
        </>

    )
}