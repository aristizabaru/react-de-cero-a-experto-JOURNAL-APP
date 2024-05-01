import { ImageList, ImageListItem } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const ImageGallery = ( { images = [] } ) => {
    return (
        <ImageList sx={ { width: '100%', height: 420 } } cols={ 3 } rowHeight={ 300 }>
            { images.map( ( imagen ) => (
                <ImageListItem key={ imagen }>
                    <img
                        srcSet={ `${imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                        src={ `${imagen}?w=164&h=164&fit=crop&auto=format` }
                        alt='Imagen de la nota'
                        loading="lazy"
                    />
                </ImageListItem>
            ) ) }
        </ImageList>
    );
};
