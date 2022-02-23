import Image from 'next/image';

export default function Teapot() {
   return (
      <div className="flex">
         <div>
            <h2 className=" p-8 m-8 text-xl font-bold  dark:text-gray-300">
               418 I&lsquo;m a teapot...
            </h2>
         </div>
         <div className="p-8 m-8">
            <Image src="/static/teapot.png" width={500} height={300} />
         </div>
      </div>
   );
}
