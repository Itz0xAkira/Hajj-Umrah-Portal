import './App.css'

function App() {

  return (
    <div className="App h-screen w-screen grid grid-flow-col grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1">
      <NavigationSection backgroundImage={"/hajj.jpg"} headerEnglish={"Hajj"} headerArabic={"حج"} descriptionEnglish={"Hajj Services"} descriptionArabic={"خدمات الحج"} url={"https://hajj.mcdcumrah.com"} />
      <NavigationSection backgroundImage={"/umrah.jpg"} headerEnglish={"Umrah"} headerArabic={"عمره"} descriptionEnglish={"Umrah Services"} descriptionArabic={"خدمات العمرة"} url={"https://umrah.mcdcumrah.com"} />
    </div>
  )
}

const NavigationSection = ({ backgroundImage, headerArabic, headerEnglish, descriptionEnglish, descriptionArabic, url }) => (
  <a className="group relative col-span-1 border border-1 border-[#252525] flex justify-center items-center cursor-pointer" href={url}>
    <div className="absolute md:top-0 bottom-5 z-10 h-52 md:h-52 md:z-0  rounded-xl md:rounded-none bg-[#FFFFFFC0] md:bg-[#FFFFFFB0] opacity-100 group-hover:opacity-0 md:group-hover:opacity-100  transition-all duration-200 ease-in-out ">
    <img className='h-full' src="/logo.png" alt="" />
    </div>
    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-10 transition-all duration-200 ease-in-out" />
    <div className="h-auto p-5 md:h-1/2 w-2/3 md:w-1/2 flex flex-col justify-center items-center gap-5 bg-[#0A0A0A00] group-hover:bg-[#0A0A0AA0] transition-all duration-200 ease-in-out rounded-md ">
      <h1 className=' md:text-6xl text-[#f5f6fa]'>{headerEnglish}</h1>
      <h2 className='md:text-4xl text-[#f5f6fa]'>{headerArabic}</h2>
      <p className='relative italic mt-6 text-xl font-light translate-y-1/2 text-[#FFFFFF00] group-hover:text-[#f5f6fa] group-hover:translate-y-0 transition-all duration-300 ease-in-out '>{descriptionEnglish}</p>
      <p className='relative italic text-xl font-light translate-y-1/2 text-[#FFFFFF00] group-hover:text-[#f5f6fa] group-hover:translate-y-0 transition-all duration-300 ease-in-out'>{descriptionArabic}</p>
      <i className="relative fa-solid fa-arrow-right text-6xl -translate-x-1/2 text-[#FFFFFF00] group-hover:text-[#f5f6fa] group-hover:translate-x-0 transition-all duration-300 ease-in-out"/>
    </div>
    <img src={backgroundImage} className="absolute min-h-full max-h-full w-full object-cover -z-[1]" alt="" />
  </a>)


export default App
