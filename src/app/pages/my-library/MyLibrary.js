import AddGames from '../../features/add-game/AddGame';
import SortFilterSearch from '../../features/sort-filter-search/SortFilterSearch';
import Table from '../../shared/Table/Table';
import { useState } from 'react'


export default function MyLibrary() {

    let currentPage = "libraryPage";

    const [ libraryPageState, setLibraryPageState ] = useState(0)


    function refreshTable(){
        setLibraryPageState(libraryPageState+1)
    }

    return (
        <div className='px-10 mt-4'>
            <div className='flex justify-between'>
                <h3 className=' mb-4 text-3xl'>My Library</h3>
                <div className='flex   '>
                {/* NEEDS id HERE */}
                    <AddGames currentPage={currentPage} refreshTable={refreshTable}/>
                    <SortFilterSearch currentPage={currentPage}/>
                </div>
            </div>
            <div> 
            {/* NEEDS id HERE */}
                <Table currentPage={currentPage} fetchLink={'http://127.0.0.1:5000/game?user-id=somethinng'} rerenderValue={libraryPageState}/>
            </div>
        </div>
    );
}
