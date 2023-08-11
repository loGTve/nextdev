import Link from "next/link";

export default function Home() {
  const myName = 'loGTve';

  return (
    <div>
      
       <h4 className="title"> {myName} </h4>
      <div className="title-sub"> Web By {myName} </div>
    </div>
  )
}