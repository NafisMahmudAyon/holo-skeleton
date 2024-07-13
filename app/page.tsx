// import Image from "next/image";
'use client'
import { useEffect, useState } from "react";
// import { Skeleton } from "@/lib/esm/index";
import { Skeleton } from "@/lib/cjs";



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setData({
        title: 'Example Title',
        content: 'This is the content of the example.',
        imageUrl: 'https://via.placeholder.com/150',
      });
      setLoading(false);
    }, 200000);
  }, []);
  return (
    <main className="">
      


      <div>
        {loading ? (
          <div className="flex flex-col gap-2">
            <Skeleton variant="h1" animation="pulse" />
            <Skeleton variant="p" animation="pulse" />
            <Skeleton variant="p" animation="pulse" className="w-56 bg-red-500" />
            <Skeleton variant="rectangular" animation="pulse" />
          </div>
        ) : (
          <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
            <img src={data.imageUrl} alt="Example" />
          </div>
        )}
      </div>




      
    </main>
  );
}
