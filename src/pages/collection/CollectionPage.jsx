import React from "react";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shopSelectors";
import './CollectionPage.scss'

const CollectionPage = ({collection}) => (
    <div className='collection-page'>
        {console.log('............................')}
        {/*{console.log(match)}*/}
        {/*{console.log(match.params.collectionId)}*/}
        {console.log(collection)}
        <h2 className='title'>Collection Page</h2>
        {/*<h3>/ {match.params.collectionId} /</h3>*/}
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage)