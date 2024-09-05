import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
                <div className='mt-28 items-center justify-center text-center '>
                    <h1 className='text-2xl md:text-4xl '>We're delighted to have you {" "}
                        <span className='text-pink-500'>here! :)</span>
                    </h1>
                    <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ab quas enim, quibusdam voluptatem architecto ipsam? Optio maiores eveniet natus temporibus ex cupiditate nihil beatae modi minima, laboriosam a earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione dolorem aliquid consequatur cupiditate numquam quo harum omnis ut voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet cupiditate reprehenderit porro quas suscipit vel ex omnis expedita aut, explicabo atque eveniet, quae ab perferendis libero corporis. Laborum, fugiat.</p>
                    <Link to="/">
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
