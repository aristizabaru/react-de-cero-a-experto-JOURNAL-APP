export const fileUpload = async ( file ) => {

    if ( !file ) throw new Error( 'No tenemos un archivo para subir' );

    const cloudUrl = 'https://api.cloudinary.com/v1_1/droe41mlu/upload';

    const formData = new FormData();
    formData.append( 'upload_preset', 'react-journal' );
    formData.append( 'file', file );

    try {
        const response = await fetch( cloudUrl, {
            method: 'POST',
            body: formData,
        } );

        if ( !response.ok ) throw new Error( 'No se pudo subir la imagen' );

        const cloudResponse = await response.json();
        console.log( cloudResponse );

        return cloudResponse;

    } catch ( error ) {
        console.log( error );
        throw new Error( error.message );
    }

};

