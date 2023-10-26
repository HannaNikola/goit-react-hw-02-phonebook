

export const Filter = ({ filter, onFilterChange }) => {
    return (
        <div>
            <p>Find contacts by Name</p>
            <label htmlFor="filter">Search contacts: </label>
            <input
                type="text"
                id="filter"
                value={filter}
                onChange={onFilterChange}
            />
        </div>
    )

    
}