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
        <div>
            <div>
                <h3>All Games</h3>
                <AddGames />
                <SortFilterSearch />
            </div>

            <div> 
                <Table currentPage={currentPage} fetchLink={'http://127.0.0.1:5000/listings'} />
            </div>


        </div>
    );

}
