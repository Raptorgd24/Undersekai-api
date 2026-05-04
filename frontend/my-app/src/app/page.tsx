"use client"

import { useState } from "react"
import About from "@/components/about"
import HomeComponent from "@/components/home"

enum PagesToRender {
  HOME,
  ABOUT,
  LOGIN
}

export default function Home() {
  const [pageToRender, setPageToRender] = useState<PagesToRender>(PagesToRender.HOME)
  const [num, setNum] = useState<number>(0)
  return (
    <div className="flex flex-col gap-10">
     <button className="bg-amber-900" type="button" onClick={() => setPageToRender(PagesToRender.HOME)}>Home</button>
     <button className="bg-amber-900" type="button" onClick={() => setPageToRender(PagesToRender.ABOUT)}>About</button>
     <button className="bg-amber-900" type="button" onClick={() => setNum(num + 1)}>+</button>
     <div>
      {
        pageToRender === PagesToRender.HOME && <HomeComponent num={num} setNum={setNum} />
      }
      {
        pageToRender === PagesToRender.ABOUT && <About />
      }
     </div>
    </div>
  )
}