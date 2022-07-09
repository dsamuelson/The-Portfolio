import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'


function Nav(props) {
    const dispatch = useDispatch();
    const categoryStore = useSelector(state => state.categories);
    const currentCategory = categoryStore.currentCategory
    const categories = categoryStore.categories;

    useEffect(()=> {
        document.title = currentCategory.name;
    }, [currentCategory, dispatch])

    return (
        <header>
            <h2>
                <a href="/">David Samuelson</a>
            </h2>
            <nav>
                <ul className="nav-ul">
                    {categories.map((category) => (
                        <li
                        className={`nav-li ${category.name === currentCategory.name && 'nav-active'}`}
                        key={category.name}>
                            <span onClick={() => {
                                dispatch({
                                    type: "CURRENT_CATEGORY",
                                    currentCategory: {...category}
                                })
                            }}
                            title={category.description}>
                            {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}

export default Nav;