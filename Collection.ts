import { isArray } from 'lodash';
import { InfiniteSlider } from './src/InfiniteSlider';
import { domUtils } from './src/util/utils';
import { CollectionImage } from './src/state';


export const constants = {
    COLLECTION_ELEMENT_WIDTH: 300,
    COLLECTION_ELEMENT_PADDING: 40,
    COLLECTION_ITEM_COUNT: 3

}
class CollectionView extends InfiniteSlider {

    progress = 0
    tl = gsap.timeline()
    public elements = new Map([
        ['showcase', domUtils.get('.showcase')],
        ['bottom-left', domUtils.get('.bottom-left')]
    ]);


    constructor() {
        super()
        this.init();
        this.progressIndexChange.subscribe((_) => {
            this.toggleActive();
            this.updateProgress();
        })
        this.indexChange.subscribe((_) => this.enableButton())

    }
    public init() {
        this.createCollection()
    }
    public get collection(): HTMLElement[] {
        const { get, toArray } = domUtils
        const collection = toArray(get('.collection').children)
        return isArray(collection) && collection.length && collection
    }

    public renderCollection(data: CollectionImage[]): void {
        this.collectionLength = data.length
        data.map((d, i) => {
            this.d
        })
    }


    public displayCollection(data: CollectionImage, collectionContainer: HTMLElement, index): void {
        const fig = domUtils.create('figure'), img = domUtils.create
    }
}