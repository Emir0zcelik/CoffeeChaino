import { useState } from 'react';
import ProductPage from './ProductPage';

const Home = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  return (
    <div>
      <div class='relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20'>
        <div class='mx-auto max-w-xl lg:max-w-screen-xl'>
          <div class='mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left'>
            <div class='mb-6 max-w-xl'>
              <div>
                <p class='bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-200 px-3 py-px text-sm font-semibold tracking-wider text-green-900'>
                  This is CoffeeChaino
                </p>
              </div>
              <h2 class='mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug'>
                The #1 Producer <br />
                in
                <span class='inline-block text-green-500'>the World</span>
              </h2>
              <p class='text-base text-gray-700 md:text-lg'>
                Your exclusive destination for meticulously selected coffee
                beans, harmonizing brewing brilliance and flavor!
              </p>
            </div>
            <div class='flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start'>
              <a
                href='/'
                class='inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto'
              >
                {' '}
                Check Stocks{' '}
              </a>
              <a
                href='/'
                class='inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-green-500 px-4 font-semibold text-green-600 transition-colors duration-200 hover:border-y-green-400 hover:text-green-400 sm:w-auto'
              >
                Add New Beans!
              </a>
            </div>

            <div class='mt-6 flex justify-center -space-x-4 lg:justify-start'>
              <img
                class='h-12 w-12 rounded-full ring ring-white'
                src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <img
                class='h-12 w-12 rounded-full ring ring-white'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <img
                class='h-12 w-12 rounded-full ring ring-white'
                src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
              />
              <div class=''>
                <span class='pl-8 font-semibold'>Customer Reviews</span>
                <div class='flex w-auto items-center justify-center space-x-1 pl-8'>
                  <svg
                    class='h-auto w-5 fill-current text-yellow-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path d='M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z' />
                  </svg>
                  <span class='text-sm font-medium text-slate-400'>
                    {' '}
                    4.9 •{' '}
                    <a href='#' class='text-sm font-normal underline'>
                      129 reviews
                    </a>{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class='hidden h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='374.63'
              height='497.09'
              viewBox='0 0 374.63 497.09'
              className='absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2'
            >
              <circle
                cx='313.89'
                cy='31.94'
                r='31.94'
                fill='#ff6884'
                stroke-width='0'
              />
              <path
                d='m238.1,455.06c-4.39-24.84-6.55-50.04-6.88-75.26-.33-25.04,1.13-50.08,3.93-74.96,2.84-25.2,7.09-50.22,12.26-75.04,5.17-24.8,11.26-49.39,17.83-73.85s13.64-48.83,20.75-73.16c.87-2.98,1.74-5.96,2.62-8.94.54-1.86-2.35-2.65-2.89-.8-7.15,24.45-14.31,48.89-21.03,73.47-6.75,24.67-13.06,49.47-18.47,74.47-5.35,24.69-9.82,49.58-12.97,74.65s-5,50.36-5.07,75.66,1.62,50.25,5.46,75.07c.49,3.17,1.02,6.32,1.57,9.48.34,1.9,3.23,1.09,2.89-.8h0Z'
                fill='#f2f2f2'
                stroke-width='0'
              />
              <path
                d='m283.11,85.42c-1.75-8.84-.17-17.95.18-26.96s-.85-18.78-6.99-25.38c-4.89-5.27-12.08-7.63-18.94-9.78-1.77-.56-3.84-1.07-5.37-.02-1.58,1.09-1.78,3.31-1.81,5.23-.22,12.12.16,24.58,4.77,35.8s14.27,21.07,26.28,22.7'
                fill='#f2f2f2'
                stroke-width='0'
              />
              <path
                d='m258.11,170.42c-1.75-8.84-.17-17.95.18-26.96s-.85-18.78-6.99-25.38c-4.89-5.27-12.08-7.63-18.94-9.78-1.77-.56-3.84-1.07-5.37-.02-1.58,1.09-1.78,3.31-1.81,5.23-.22,12.12.16,24.58,4.77,35.8s14.27,21.07,26.28,22.7'
                fill='#f2f2f2'
                stroke-width='0'
              />
              <path
                d='m287.31,75.28c7.58-4.88,16.64-6.75,25.14-9.72s17.16-7.69,21.05-15.82c3.11-6.48,2.66-14.03,2.15-21.21-.13-1.85-.41-3.97-1.95-5-1.6-1.07-3.73-.44-5.53.23-11.36,4.25-22.8,9.17-31.55,17.57s-14.36,21.01-11.47,32.78'
                fill='#f2f2f2'
                stroke-width='0'
              />
              <path
                d='m269.31,142.28c7.58-4.88,16.64-6.75,25.14-9.72s17.16-7.69,21.05-15.82c3.11-6.48,2.66-14.03,2.15-21.21-.13-1.85-.41-3.97-1.95-5-1.6-1.07-3.73-.44-5.53.23-11.36,4.25-22.8,9.17-31.55,17.57s-14.36,21.01-11.47,32.78'
                fill='#f2f2f2'
                stroke-width='0'
              />
              <polygon
                points='160.17 165.69 153.06 121.26 201.06 101.7 208.17 169.25 160.17 165.69'
                fill='#ffb6b6'
                stroke-width='0'
              />
              <path
                d='m120.8,246.93s-.6,119.08-45.01,99.06c-23.1-10.41-57.19-54.31-57.19-54.31l14.09-13.49,38.45,32.14,7.24-63.93,42.42.51h0Z'
                fill='#ffb6b6'
                stroke-width='0'
              />
              <path
                d='m139.49,180.72s-29.43-8.33-45.32,14.55-24,108-24,108l42,21,27.32-143.55Z'
                fill='#e6e6e6'
                stroke-width='0'
              />
              <polygon
                points='299.12 244.03 317.79 314.63 363.07 448.83 339.49 462.21 280.22 328.67 265.24 257.42 299.12 244.03'
                fill='#ffb6b6'
                stroke-width='0'
              />
              <polygon
                points='209.14 143.42 155.56 144.38 151.14 160.42 108.17 185.27 112.64 339.92 245.64 351.92 264.8 246.67 269.64 186.92 213.64 162.92 209.14 143.42'
                fill='#e6e6e6'
                stroke-width='0'
              />
              <path
                d='m236.49,197.21s24.14-23.74,42.48-7.2c18.34,16.54,40.33,126.11,40.33,126.11l-38.81,19.09-44-138h0Z'
                fill='#e6e6e6'
                stroke-width='0'
              />
              <path
                d='m238.64,211.92s-22-1-40,4-69-6-69-6c12.29,41.85,4.12,85.6-16.5,130.5-27.22,33.41,3.35,96.8-43.5,130.5h195.16l-7.16-86-11-32s6-6,4-8-27-99-12-133h0s0,0,0,0h0Z'
                fill='#006241'
                stroke-width='0'
              />
              <polygon
                points='143.64 158.92 131.64 219.92 148.64 224.92 144.64 202.92 150.64 155.92 143.64 158.92'
                fill='#3f3d56'
                stroke-width='0'
              />
              <polygon
                points='214.64 157.92 221.43 239.42 230.64 238.92 224.64 161.92 214.64 157.92'
                fill='#3f3d56'
                stroke-width='0'
              />
              <path
                d='m251.76,352.92s-53.62,14.5-98.62,9.5l-41.65-27.24-1.85,4.74s36.12,45.28,63.06,42.64,81.94-18.64,81.94-22.64-2.88-7-2.88-7h0Z'
                fill='#3f3d56'
                stroke-width='0'
              />
              <ellipse
                cx='16.74'
                cy='273.98'
                rx='13.59'
                ry='21.06'
                transform='translate(-163.1 66.61) rotate(-37.43)'
                fill='#ffb6b6'
                stroke-width='0'
              />
              <ellipse
                cx='356.74'
                cy='463.98'
                rx='15.86'
                ry='24.59'
                transform='translate(-167.84 204.45) rotate(-26.12)'
                fill='#ffb6b6'
                stroke-width='0'
              />
              <path
                d='m247.93,363.06c5.92,7.45,5.97,18.48,13.83,24.6,3.26,2.54,7.95,3.89,11.96,2.41,3.97-1.46,6.22-5.14,6.67-9.23.48-4.35-1.33-8.49-3.93-11.89-2.81-3.67-6.42-7.14-10.33-9.62-3.62-2.3-8.03-3.5-12.21-2.11-4.22,1.4-6.72,4.81-6.82,9.25-.08,3.1.36,6.25.59,9.33l.69,9.4,1.42,19.29c.14,1.91,3.14,1.93,3,0l-2.22-30.17c-.18-2.39-.45-4.79-.48-7.18-.03-1.94.3-3.84,1.7-5.26,2.46-2.49,6.36-2.71,9.5-1.62,3.9,1.35,7.12,4.42,9.97,7.3,2.77,2.81,5.49,6.19,6.09,10.21.48,3.2-.44,7.05-3.35,8.86-3.19,1.98-7.44.92-10.27-1.21-3.71-2.79-5.66-7.41-7.27-11.61-1.73-4.52-3.37-9.05-6.41-12.87-1.2-1.51-3.31.62-2.12,2.12h0s0,0,0,0h0s0,0,0,0Z'
                fill='#3f3d56'
                stroke-width='0'
              />
              <path
                d='m247.22,359.93c-2.68,3.38-4.29,7.3-5.81,11.3-1.47,3.87-2.96,7.96-5.72,11.13-2.4,2.76-6.02,4.79-9.79,4.22-3.63-.55-5.81-3.77-6.06-7.27-.28-3.88,1.54-7.42,3.97-10.34,2.63-3.16,5.83-6.27,9.38-8.38,3.09-1.84,6.84-2.74,10.24-1.15,1.47.69,2.73,1.83,3.32,3.38.8,2.12.4,4.58.24,6.78-.83,11.29-1.66,22.59-2.49,33.88-.14,1.93,2.86,1.92,3,0,.84-11.38,1.67-22.75,2.51-34.13.18-2.5.47-5.14-.44-7.54-.7-1.84-1.98-3.34-3.63-4.4-3.5-2.26-7.95-2.23-11.7-.68-4.29,1.77-7.9,5.11-11.05,8.44-3.08,3.27-5.75,7.15-6.28,11.71-.45,3.9.78,8.21,3.96,10.7,3.46,2.71,8.13,2.5,11.96.73,10.34-4.78,10.14-18.24,16.52-26.26,1.19-1.5-.92-3.63-2.12-2.12h0Z'
                fill='#3f3d56'
                stroke-width='0'
              />
              <path
                d='m68.14,228.35s-22.67,21.48-60.85,0l5.97,71.59s.54.17,1.5.44c.69,2.51,2.59,4.58,5.17,5.39,8.31,2.63,24.29,6.21,35.09-.59,2.25-1.42,3.58-3.93,3.58-6.6v-.21c.84-.61,1.64-1.27,2.39-2.02l7.16-68.01Z'
                fill='#3f3d56'
                stroke-width='0'
              />
              <ellipse
                cx='37.71'
                cy='228.35'
                rx='30.42'
                ry='10.74'
                fill='#967259'
                stroke-width='0'
              />
              <path
                d='m360.14,416.35s-22.67,21.48-60.85,0l5.97,71.59s.54.17,1.5.44c.69,2.51,2.59,4.58,5.17,5.39,8.31,2.63,24.29,6.21,35.09-.59,2.25-1.42,3.58-3.93,3.58-6.6v-.21c.84-.61,1.64-1.27,2.39-2.02l7.16-68.01Z'
                fill='#3f3d56'
                stroke-width='0'
              />
              <ellipse
                cx='329.71'
                cy='416.35'
                rx='30.42'
                ry='10.74'
                fill='#967259'
                stroke-width='0'
              />
              <circle
                cx='172.3'
                cy='86.6'
                r='48.94'
                fill='#ffb6b6'
                stroke-width='0'
              />
              <path
                d='m157.72,24.99c9.8-2.23,17.05-12.63,25.16-11.53,17.61,2.38,32.82,16.9,34.67,18.99,7.7,8.71,10.01,17.6,12.66,27.85,2.81,10.85-.08,26.95-2.85,38.11-4.05,16.33-15.31,19.58-13.93,30.38.97,7.56,7.07,10.56,13.93,17.72,12.98,13.56,16.58,29.4,20.26,45.58,8.76,38.54-3.85,77.4-8.86,77.23-1.06-.04-1.97-2.56-3.8-7.6-5.59-15.44-2.84-20.16-6.33-25.32-6.23-9.23-19.56-.83-34.18-10.13-11.52-7.33-15.44-20.3-17.72-27.85-1.31-4.34-6.85-22.66,1.27-40.51,7.52-16.53,18.46-17.27,26.45-36.73,1.68-4.1,7.24-14.74,1.4-22.77-2.96-4.07-2.37,19.01-6.79,15.23-10.76-9.18-5.98-46.67-16-57.01-4.79-4.95-12.05-6.88-17.72-6.33-13.48,1.3-37.43,14.42-39.54,28.87-3.39,23.25,4.31,33.4,23.08,50.89,2.03,1.89-5.64.88-8.86,0-16.38-4.46-22.78-25.65-24.05-30.38-3.74-13.88-.92-25.33,1.27-34.18,2.79-11.32,5.79-23.5,16.46-31.65,6.31-4.82,12.77-6.29,24.05-8.86Z'
                fill='#2f2e41'
                stroke-width='0'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
