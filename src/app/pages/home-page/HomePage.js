import { useState } from 'react';
import AddGames from '../../features/add-game/AddGame';
import SortFilterSearch from '../../features/sort-filter-search/SortFilterSearch';
import Table from '../../shared/Table';


export default function HomePage() {



let currentPage = "home";

    return (
        <div>
            <div>
                <h3>All Games</h3>
                <AddGames />
                <SortFilterSearch />
            </div>

            <div>
                <Table currentPage={currentPage} dataForRows={currentPage}/>
            </div>


        </div>
    );

}
