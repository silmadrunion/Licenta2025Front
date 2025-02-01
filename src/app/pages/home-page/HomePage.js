import { useState , useEffect } from 'react';
import AddGames from '../../features/add-game/AddGame';
import SortFilterSearch from '../../features/sort-filter-search/SortFilterSearch';
import Table from '../../shared/Table';


export default function HomePage() {

    // //state 
    const [HomePageState , setHomePageState ] = useState({ 
        dataForRows : []
    });      

    

    


let currentPage = "homePage";

    return (
        <div className='px-10'>

            <div className='flex'>
                <h3 className='title'>All Games</h3>
                <div className='grow'></div>
                <div className='flex felx-row'>
                    <AddGames />
                    <SortFilterSearch />
                </div>

            </div>

            <div> 
                <Table currentPage={currentPage} fetchLink={'http://127.0.0.1:5000/listings'} />
            </div>

        </div>
    );

}
