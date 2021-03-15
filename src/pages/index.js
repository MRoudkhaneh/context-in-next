import React from "react";
import Filter from "../components/filter";
import {AddToStateAction} from "../context/action";
import {useContextState} from "../context";


const Home = () => {
    const data = [{
        name: "location",
        displayName: "موقعیعت",
        items: [
            "تهران",
            "البرز",
            "قم"
        ]
    }];
    const data2 = [{
        name: "category",
        displayName: "دسته بندی",
        items: [
            "برنامه نویس",
            "مدیر پروژه",
        ]
    }];

    return (
        <div>
            <Filter filterList={data}/>
            <Filter filterList={data2}/>


        </div>
    )
}

export const getServerSideProps = async () => {


    return {
        props: {}
    }
}

export default Home;
