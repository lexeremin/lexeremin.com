export default function Footer() {
   return (
      <footer className="flex justify-center mx-auto w-full">
         <p className="block items-center py-2 pr-4 pl-3 rounded bg-transparent-10 text-teal-800 md:p-0">
            &copy; {new Date().getFullYear()} - Alexander Eremin.
         </p>
      </footer>
   );
}
