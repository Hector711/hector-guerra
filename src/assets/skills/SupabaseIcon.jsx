import * as React from 'react';

export default function SupabaseIcon(props) {
  return (
    <svg
      width='256px'
      height='263px'
      viewBox='0 0 256 263'
      className='icons'
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          x1='20.8617445%'
          y1='20.6868812%'
          x2='63.4256086%'
          y2='44.0710077%'
          id='a'
        >
          <stop stopColor='#249361' offset='0%' />
          <stop stopColor='#3ECF8E' offset='100%' />
        </linearGradient>
        <linearGradient
          x1='1.99116498%'
          y1='-13.1584008%'
          x2='21.4025077%'
          y2='34.708062%'
          id='b'
        >
          <stop offset='0%' />
          <stop stopOpacity={0} offset='100%' />
        </linearGradient>
      </defs>
      <path
        d='M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292l-101.37 127.669z'
        fill='#aaaaaa'
      />
      <path
        d='M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292l-101.37 127.669z'
        fillOpacity={0.2}
        fill='#060606'
      />
      <path
        d='M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292L106.4 4.369z'
        fill='#aaaaaa'
      />
    </svg>
  );
}
