import React, { useEffect, useRef } from 'react';
import EasyCropper from '../Sticker/EasyCropper';


function StickerMakeModal({ modalHandler }) {
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, [])
  

  return (
    <div className=" h-screen w-screen" >
      <div className="h-screen bg-opacity-75 bg-gray-400 flex justify-center items-center" onClick={(e)=> e.stopPropagation()}>
        <div className=" fixed border-2 bg-white opacity-100" ref={focusRef}>
          <EasyCropper modalHandler={modalHandler} />
        </div>
      </div>
    </div>

  );
}

export default StickerMakeModal;
