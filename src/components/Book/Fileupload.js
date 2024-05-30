import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import './Fileupload.css'
import {Link} from 'react-router-dom';

function Fileupload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
	  <>
	  	<div className="contain_img">
	{imageUrls.map((url) => {
        return <img className="imgmap" src={url} />;
      })}
	</div>
    <div className="fileupload">
		<p className='inputpara'>Upload the images of aadhar card and driving license.</p>
      <input
	  className="inputfile"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
	  <br/><br/><br/>
      <button className="inpbtn" onClick={uploadFile}> Upload</button><br/><br/>
      <Link to="/confirmbooking"><button className="inptn"> Confirm Booking</button></Link>
     
    </div>

	</>
  );
}

export default Fileupload;

