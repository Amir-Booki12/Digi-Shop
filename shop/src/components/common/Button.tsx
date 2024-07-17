
type Props= {
    text:string,
    to:string
}

const Button = ({text,to}:Props) => {
  return (
    <div className="mx-auto">
        <a className=" font-IranSansBold rounded-[85px] py-3 px-14 bg-[#2196F3] text-white text-base shadow-primary" href={to}>
            {text}
        </a>
    </div>
  )
}

export default Button