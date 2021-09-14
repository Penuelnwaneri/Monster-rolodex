import './search-box.style.css';

export const SearchBox = ({onHandleChange}) =>{
return (
    <input className = 'search-box'type = 'search' placeholder = 'search monsters' onChange={onHandleChange}/> 
)
}