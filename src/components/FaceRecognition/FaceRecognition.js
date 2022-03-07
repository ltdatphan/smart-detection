import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div>
      {imageUrl !== "" && box.length == 0 ? (
        <h1 className="white f1">No faces found</h1>
      ) : (
        <h1 className="white f1">
          Found <span className="red f1">{box.length}</span> faces
        </h1>
      )}
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputImage"
            alt=""
            src={imageUrl}
            width="500px"
            height="auto"
          ></img>

          <div>
            {box.map((currItem, index) => (
              <div
                key={index}
                className="bounding-box"
                style={{
                  top: currItem.topRow,
                  right: currItem.rightCol,
                  bottom: currItem.bottomRow,
                  left: currItem.leftCol,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
