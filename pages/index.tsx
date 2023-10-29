import { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, #B59676, #8B0000)' }}>
      {/* <h1 className='text-8xl flex-shrink font-mono text-slate-200 pt-20 px-10'>
        <a href="https://www.fontspace.com/category/hindi">
          <img src="https://see.fontimg.com/api/renderfont4/Gg5D/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RS1TaGFndW4/samarkan-normal.png" alt="Hindi fonts" />
        </a>
      </h1> */}
      <div className="flex flex-col justify-center items-center h-screen">
        <div className='pb-96'>
          <div className="flex justify-center ">
            <div className="flex justify-center px-20">
              <Link href="/create">
                <button className="text-xl border-gray-400 h-20 w-80 font-mono shadow-2xl bg-opacity-25 rounded-2xl bg-slate-800 hover:bg-slate-500 text-white font-bold py-2 px-4">
                  Make a new Lotto
                </button>
              </Link>
            </div>
            <Link href="/listingmain">

            <button className="h-20 w-80 border-gray-400 text-xl bg-opacity-25 shadow-2xl font-mono bg-slate-800 rounded-2xl hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
             Lotto Lux Arena
            </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;