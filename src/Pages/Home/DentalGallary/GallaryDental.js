import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const GallaryDental = () => {

    const [images, setImage] = useState()

    useEffect(() => {
        fetch('Gallary.json')
            .then(res => res.json())
            .then(data => {
                setImage(data)
            })
    }, [])
    // console.log(images?.img)

    return (
        <section className='images_background4 my-10 md:px-10 py-10'>
            <h1 className="md:text-3xl text-3xl text-primary font-bold text-center py-t lg:mb-1">Dental Services Gallary</h1>
            <p className='text-center md:px-40 pb-5'>Aesthetic dentistry uses techniques available to <br />modern medicine to give you a more natural, healthy look. </p>
            <PhotoProvider>

                <div className="foo">
                    <div className="container grid grid-cols-1 gap-4 p-4 mx-auto md:grid-cols-3 ">

                        {images?.map((item, index) => (
                            <PhotoView key={index} src={item?.img}>
                                <div className="img-gradient rounded-xl">
                                    <img className="w-full h-full rounded-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={item?.img} alt="" />
                                </div>
                            </PhotoView>
                        ))}

                    </div>
                </div>

            </PhotoProvider>


        </section>
    );
};

export default GallaryDental;