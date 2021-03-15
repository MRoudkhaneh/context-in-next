import React,{useEffect} from "react";
import {useContextDispatch, useContextState} from "../../context";
import {loadGetInitialProps} from "next/dist/next-server/lib/utils";

const Filter = ({filterList}) => {
    const dispatch = useContextDispatch();
    const selector = useContextState();
    console.log(selector.filter);

    function test(e) {
        if (e.target.checked) {
            let checkedInputData = {
                location: e.target.value
            };
            dispatch({type: "ADD", payload: checkedInputData});
        } else {

        }
    }

    return (
        <div dir="rtl">
            {filterList.map(
                (item, index) => (
                    <div key={index}>
                        <h5>{item.displayName}</h5>
                        {item.items.map((i, index) => (
                            <div>
                                <input type="checkbox" id={i}
                                       value={i}
                                       name={item.name}
                                       // checked={selector.filter.item.name}
                                       onClick={(e) => test(e)}/>
                                <label htmlFor={i}>{i}</label>
                                <p>{selector.filter[`${item.name[0]}`]}</p>
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    )
}

export default Filter;
