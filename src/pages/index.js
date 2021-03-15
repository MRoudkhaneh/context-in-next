import React from "react";
import Filter from "../components/filter";
import {AddToStateAction} from "../context/action";
import {useContextState} from "../context";


const Home = () => {
    const data = [{
        name: "location",
        displayName: "مکان",
        items: [
            {
                name: "تهران",
                isChecked: false
            },
            {
                name: "البرز",
                isChecked: false
            },
            {
                name: "قم",
                isChecked: false
            },
        ]
    }];
    const data2 = [{
        name: "category",
        displayName: "دسته بندی",
        items: [
            {
                name: "برنامه نویس",
                isChecked: false
            },
            {
                name: "مدیر پروژه",
                isChecked: false
            },
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
