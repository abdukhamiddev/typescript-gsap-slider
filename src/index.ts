import { getPhotos } from './util/api';
import { isArray } from 'lodash';
import { collectionState } from './state';
import collectionView from './Collection'
import '../sass/main.scss'
const CollectionController = async () => {
    try {
        const { data = [] } = await getPhotos(11)
        console.log(data);

        if (isArray(data) && data.length) {
            collectionState.data = data;
            collectionView.renderCollection(collectionState.data);
        }

    } catch (error) {
        console.log(error);


    }
}
const init = () => {
    window.addEventListener('load', () => CollectionController())
}


init()