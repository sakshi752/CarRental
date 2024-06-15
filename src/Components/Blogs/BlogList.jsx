import React, { useContext } from 'react'
import { Context } from '../../store/context';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { CiTimer } from "react-icons/ci";

const BlogList = () => {
    const { blogData } = useContext(Context);
    return (
        <section className='mt-16 w-11/12 lg:w-4/5 mx-auto flex flex-col gap-10'>
            <h1 className='flex justify-center text-3xl font-semibold text-blue-700'>Our Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {blogData.map(({ id, title, author, date, time, imgUrl, description }) => (
                    <div key={id} className='border border-gray-300 rounded-lg shadow-lg overflow-hidden'>
                        <div className='h-48'>
                            <img src={imgUrl} alt={title} className='w-full h-full object-cover' />
                        </div>
                        <div className='px-4 py-2 flex flex-col gap-2 mb-5'>
                            <h1 className='text-xl font-semibold text-gray-800'>{title}</h1>
                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2'><FaUser className='text-blue-700 text-lg' /> {author}</p>
                                <p className='flex items-center gap-2'><MdDateRange className='text-blue-700 text-lg' /> {date}</p>
                                <p className='flex items-center gap-2'><CiTimer className='text-blue-700 text-lg' />{time}</p>
                            </div>

                        </div>
                        <div className='px-4 pb-4 flex justify-center gap-2 mt-'>

                            <Link to={`/blog-details/${id}`} className='text-blue-600 border border-blue-600 py-1 px-3 rounded-md w-1/2 text-center'>Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BlogList
