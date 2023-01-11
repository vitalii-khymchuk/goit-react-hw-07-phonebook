import PropTypes from 'prop-types';
import React from 'react';
import ImageUploading from 'react-images-uploading';
import {
  UploadedAvatar,
  AvatarWrapper,
  AddImageBtn,
  ChangeImageBtn,
} from './Uploder.styled';
import { base64ToBlob, blobToBase64 } from 'base64-blob';
import { fromBlob } from 'image-resize-compress';
import { Box } from 'components/reusableComponents';
import { AiOutlinePlusCircle, AiOutlineReload } from 'react-icons/ai';
import { useEffect } from 'react';

const convertB64ToBlob = b64Data => base64ToBlob(b64Data);
const convertBlobToB64 = blobFile => blobToBase64(blobFile);
const compressBlobImg = (blobFile, resolution) => {
  const quality = 80;
  const width = 150;
  const height = 150;
  const format = 'jpeg';
  return fromBlob(blobFile, quality, width, height, format);
};

const Uploader = ({ onPhotoUpload, preloadPhoto = null }) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  useEffect(() => {
    if (preloadPhoto) {
      setImages([{ data_url: preloadPhoto }]);
    }
  }, [preloadPhoto]);

  const onPhotoChange = async (imageList, addUpdateIndex) => {
    // data for submit
    const base64Image = imageList[0].data_url;
    const blobImage = await convertB64ToBlob(base64Image);
    const compressedBlobImg = await compressBlobImg(blobImage);
    const compressedB64Image = await convertBlobToB64(compressedBlobImg);
    onPhotoUpload(compressedB64Image);
    setImages(imageList);
  };

  return (
    <Box className="App" display="flex" justifyContent="center">
      <ImageUploading
        multiple={false}
        value={images}
        onChange={onPhotoChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {!images[0] && (
              <AddImageBtn
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <AiOutlinePlusCircle size={48} />
                <span>
                  Click or Drop here <br /> to add image
                </span>
              </AddImageBtn>
            )}
            &nbsp;
            {imageList.map((image, index) => (
              <AvatarWrapper key={index} className="image-item">
                <UploadedAvatar src={image['data_url']} alt="" width="100" />
                <ChangeImageBtn onClick={() => onImageUpdate(index)}>
                  <AiOutlineReload size={64} color="rgba(200, 200, 200, 0.5)" />
                </ChangeImageBtn>
              </AvatarWrapper>
            ))}
          </div>
        )}
      </ImageUploading>
    </Box>
  );
};

Uploader.propTypes = {
  onPhotoUpload: PropTypes.func.isRequired,
  preloadPhoto: PropTypes.string,
};

export default Uploader;
