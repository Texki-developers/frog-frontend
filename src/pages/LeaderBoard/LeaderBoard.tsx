import React from 'react';

export default function LeaderBoard() {
  const holders = [
    { rank: 1, name: 'mehdi1363b', cats: 1092009, medal: '🥇' },
    { rank: 2, name: 'Itsma3ud', cats: 885489, medal: '🥈' },
    { rank: 3, name: 'GOLDENStateSupport', cats: 865268, medal: '🥉' },
    { rank: 4, name: 'Sunusi2020', cats: 445685 },
    { rank: 5, name: 'makstwain', cats: 390552 },
    { rank: 6, name: 'itwogd', cats: 256736 },
    { rank: 7, name: 'wangduanniao', cats: 220230 },
    { rank: 8, name: 'Michael11411', cats: 207589 },
  ];

  return (
    <div className='flex flex-col items-center p-4'>
      <div className='w-full'>
        <div className='mb-4'>
          <h1 className='text-2xl leading-10 font-semibold text-center'>Telegram Wall of Fame</h1>
          <div className='flex items-center bg-gray-100 p-4 rounded-full'>
            <div className='flex items-center'>
              <div className='bg-red-500 text-white rounded-full flex items-center justify-center w-10 h-10'>
                H
              </div>
              <div className='ml-4'>
                <p className='font-medium'>higihi23</p>
                <p className='text-gray-500'>818 CATS</p>
              </div>
            </div>
            <div className='ml-auto'>
              <p className='text-gray-500'>#615483</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-xl font-medium mb-2'>1,938,154 holders</h2>
          {holders.map(holder => (
            <div key={holder.rank} className='flex items-center p-4 border-b'>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${holder.medal ? 'bg-yellow-400' : 'bg-gray-100'}`}>
                {holder.medal || holder.name.charAt(0).toUpperCase()}
              </div>
              <div className='ml-4'>
                <p className='font-medium'>{holder.name}</p>
                <p className='text-gray-500'>{holder.cats.toLocaleString()} CATS</p>
              </div>
              <div className='ml-auto'>
                {holder.medal ? (
                  <span className='text-yellow-500'>{holder.medal}</span>
                ) : (
                  <p className='text-gray-500'>#{holder.rank}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
