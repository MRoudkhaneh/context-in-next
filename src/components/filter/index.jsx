import React, {useEffect} from "react";
import {useContextDispatch, useContextState} from "../../context";
import {loadGetInitialProps} from "next/dist/next-server/lib/utils";

const Filter = ({filterList}) => {
    const dispatch = useContextDispatch();
    const selector = useContextState();
        console.log(selector);

    function test(e) {

        if (e.target.checked) {
            let checkedInputData = {
                type: e.target.name,
                name: e.target.value,
                isChecked: e.target.checked
            };
            dispatch({type: "ADD_ITEM", payload: checkedInputData});
        } else {
            console.log("unchecked")

        }
    }

    return (
        <div dir="rtl">
            {filterList.map(
                (item, index) => (
                    <div key={index}>
                        <h5>{item.displayName}</h5>
                        {item.items.map((i, l) => (
                            <div key={i.name}>
                                <input type="checkbox" id={i.name}
                                       value={i.name}
                                       name={item.name}
                                       onChange={(e) => test(e)}/>
                                <label htmlFor={i.name}>{i.name}</label>

                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    )
}

export default Filter;
