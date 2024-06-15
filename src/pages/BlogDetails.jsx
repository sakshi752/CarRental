import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../store/context';
import { IoIosArrowBack } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { CiTimer } from "react-icons/ci";

const BlogDetails = () => {
    const { id } = useParams();
    const { blogData } = useContext(Context);
    const [blogDetails, setBlogDetails] = useState({});

    useEffect(() => {
        const data = blogData.find((data) => data.id === parseInt(id));
        if (data) {
            setBlogDetails(data);
        }
    }, [id, blogData]);

    return (
        <section className='w-[93%] lg:w-[80%] mx-auto relative pt-10'>
            <Link to={"/blogs"} className='absolute top-0 left-0 bg-blue-600 hover:bg-blue-800 text-white rounded-full p-3 m-4'>
                <IoIosArrowBack size={24} />
            </Link>
            <div className='flex w-full flex-col md:flex-row gap-6 mt-10'>
                <div className='flex flex-col w-full md:w-2/3'>
                    <div className='w-full'>
                        <img src={blogDetails.imgUrl} alt="Blog" className='w-full rounded shadow-md' />
                    </div>
                    <div className='mt-6 text-justify'>
                        <h1 className='text-2xl font-bold'>{blogDetails.title}</h1>
                        <div className='flex gap-10'>
                            <p className='flex items-center gap-2'><FaUser className='text-blue-700 text-lg' /> {blogDetails.author}</p>
                            <p className='flex items-center gap-2'><MdDateRange className='text-blue-700 text-lg' /> {blogDetails.date}</p>
                            <p className='flex items-center gap-2'><CiTimer className='text-blue-700 text-lg' />{blogDetails.time}</p>
                        </div>
                        <p className='mt-4 text-lg'>{blogDetails.description}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 w-full md:w-1/3'>
                    <h1 className='text-lg font-semibold text-blue-600'>Recent Blogs</h1>
                    <div className='flex flex-col gap-4'>
                        {blogData.map(({id,imgUrl,title})=>(
                            <div className='flex gap-2'>
                                <div className='w-20'>
                                    <img src={imgUrl} alt="" />
                                </div>
                                <Link to={`/blog-details/${id}`} className='text-lg font-semibold'>{title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default BlogDetails;
