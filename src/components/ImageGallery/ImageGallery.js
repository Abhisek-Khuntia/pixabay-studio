import React, { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



const ImageGallery = ({images,query}) => {

  // States Of The Image 

    const[open,setOpen] = useState(false)
    const[currentImg,setCurrentImage]= useState('')

    let imageListContent; 
    if(images){
        imageListContent = (
            <GridList  cols={3} >
              <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>

              <ListSubheader component="div">{query ? <h3>Showing results for "{query}"</h3> : ''}</ListSubheader>

              </GridListTile>
              {images.map(img => (
                  <GridListTile key ={img.id}>
                      <img src={img.largeImageURL} alt=""/>

                      <GridListTileBar
                      title={img.tags}
                      subtitle={
                        <span>
                          by <strong>{img.user}</strong>
                        </span>
                      }
                      actionIcon={
                        <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                          <ZoomIn color="white" />
                        </IconButton>
                      }
              

                      />
                  </GridListTile>

              ))}
            </GridList>
          );
        } else {
          imageListContent = null;
        }
    
    const handleOpen=(img)=>{
        setOpen(true)
        setCurrentImage(img)
    }
    const handleClose=()=>{
        setOpen(false)
    }

    const actions = [
        <FlatButton label="Close" color="primary" onClick={handleClose} />
      ];

    return (
        <div>
            {imageListContent}
            <Dialog
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={handleClose}>
            <img src={currentImg} alt='' style={{ width: '100%' }}/>
            </Dialog>
        </div>
    );
}

 export default ImageGallery

