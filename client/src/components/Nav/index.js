import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Nav() {
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
            <img src={require('../../assets/images/profile-pic.jpg')} className='profile-pic'/>
            <nav>
                <ul className="nav-ul">
                    {categories.map((category) => (
                        <li
                        className={`nav-li ${category.name === currentCategory.name && 'nav-active'}`}
                        key={category.name}>
                            <Link to={`/${category.name}`}>
                            <span onClick={() => {
                                dispatch({
                                    type: "CURRENT_CATEGORY",
                                    currentCategory: {...category}
                                })
                            }}
                            title={category.description}>
                            {category.name}
                            </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}

export default Nav;