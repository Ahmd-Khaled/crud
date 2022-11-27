import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import './searchInput.scss';

const SearchInput = ({ id, name, inputType, placeholder, onChange, clearSearch }) => {
    const searchInpRef = useRef();

    const clearSearchFn = () => {
        clearSearch();
        searchInpRef.current.value = '';
    }
    return (
        <div className='InpBox'>
            <div className='InpWrapper'>
                <input
                    className='inpField'
                    id='inpTxt'
                    name={name}
                    type={inputType ? inputType : 'text'}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={searchInpRef}
                />
                <FontAwesomeIcon onClick={clearSearchFn} className='closeIcon' icon={faXmark} />
            </div>
        </div>
    )
}

export default SearchInput;
