export default function Footer() {
   return <div className="container flex items-center mx-auto"> 
   <p className="block items-center py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-teal-800 md:p-0 dark:text-white">
   &copy; {new Date().getFullYear()} - Alexander Eremin.
   </p>
    
    </div>;
}
