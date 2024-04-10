import { useState } from "react";
import { useAppSelector } from "./hooks/store";
import { SortType } from "../const";
import { useDispatch } from "react-redux";
import { getSort, getSortedCards } from "../store/action";

export default function SortTypeComponent(): JSX.Element {
    const [opened, setOpened] = useState(false);
    
    const dispatch = useDispatch();
    const selectedType = useAppSelector((state) => state.sortType);

    function toggleMenu() {
        setOpened(!opened);
    };

    function selectType(type: SortType) {
        dispatch(getSort(type));
        dispatch(getSortedCards());
        setOpened(false);
    };

    return( 
        <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={toggleMenu}>
          {selectedType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${opened ? 'places__options--opened' : 'places__options--closed'}`}>
            {Object.values(SortType).map((type) => (
                <li 
                key={type}
                className={`places__option ${selectedType === type ? 'places__option--active' : ''}`} 
                tabIndex={0}
                onClick={() => selectType(type)}
                >{type}</li>
            ))}
        </ul>
      </form>
    );
}
