import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collections-overview.component';

const ShopPage =  ({collections}) => ( 
    <div className='shop-page'>
       <CollectionsOverview />
    </div>
)

export default ShopPage;