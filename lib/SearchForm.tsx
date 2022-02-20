import Image from 'next/image';
import React, { useState } from 'react'

const SearchForm = () => {
    const [hits, setHits] = useState([]);

    const search = async (event: any) => {

        const q = event.target.value;

        if (q.length > 2) {
            const params = new URLSearchParams({ q });

            const res = await fetch('/api/search?' + params);

            const result = await res.json();
            console.log(result);
            setHits(result['cars']);
        }

    }

    return (
        <div>
            <div className='p-4 bg-white'>
                <label className='text-xl font-mono font-semibold' htmlFor="search">Search:</label>
                <input onChange={search} type="text" className='p-2 rounded-md bg-gray-200 outline-sky-500' />
            </div>

            <ul className='h-[60vh] overflow-y-auto'>
                {hits.map((hit: any) => (
                    <li key={hit.entityId} className='bg-sky-900/30 rounded-md p-4 ring-1 ring-inset shadow-md mb-4'>
                        <div className='text-xl font-semibold capitalize mb-2'>
                            {hit.make} {hit.model}
                        </div>
                        <div className='grid gap-3'>
                            <Image
                                src={hit.image}
                                alt={hit.model}
                                width={350}
                                height={200}
                                layout='fixed'
                            />
                            <p className='text-base'>
                                {hit.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SearchForm