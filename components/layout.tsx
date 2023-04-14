// 모든 레이아웃을 집어넣는 개념
import { ReactNode } from "react";
import Header from "./header"
import Footer from "./footer"

export default function Layout({children} : {children: ReactNode}){
    return (
        <div className="bg-primary">
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}