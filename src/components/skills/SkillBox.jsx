
const SkillBox = ({from,to,img}) => {
  return (
    <div className="px-3 py-4">
      <div className="grid items-start justify-center ">
        <div className="relative group ">
          <div className={`absolute -inset-1 bg-gradient-to-r  from-[${from}] to-[${to}] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
          <button className={`relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600`}>
            <img src={img} className="w-24 m-auto drop-shadow-lg " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
