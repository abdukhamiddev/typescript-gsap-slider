import gsap, { Expo } from "gsap"
import { Subject } from "rxjs"






export interface SlideParams {
    collection: any[]
    verticalTranslatePosition?: number
    elemPadding?: number
    elemMargin?: number
    duration?: number
    ease?: any
}
export interface TranslateParams {
    element: any
    x: number
    y: number
    ease?: any
    duration?: number
    collection?: any[]
    propWidth?: number
    index?: number
}
export class InfiniteSlider {
    public collectionLength: number

    public activeIndex = 0

    public progressIndex = 0
    public indexChange = new Subject<number>()
    public progressIndexChange = new Subject<number>()


    constructor() { }



    public slide({ collection = [], elemPadding = 0, elemMargin = 0, verticalTranslatePosition = 0, ease = Expo.easeInOut as any, duration = 1 }: SlideParams) {
        this.increaseProgressIndex()
        collection.map((element, index) => {

        })

    }
    public resetBackwards({ collection, propWidth, index }) {
        if (this.activeIndex === index) {
            gsap.to(collection[this.activeIndex], {
                duration: 0,
                x: propWidth * (collection.length - 1 - this.activeIndex),
                y: -(25 * collection.length - 25)
            })
                .then(() => setTimeout(() => this.increaseIndex()))
        }
    }

    private increaseIndex(): void {
        this.activeIndex = (this.progressIndex + 1) % this.collectionLength
        this.indexChange.next(this.progressIndex)
    }
    private increaseProgressIndex(): void {
        this.progressIndex = (this.progressIndex + 1) % this.collectionLength
        this.progressIndexChange.next(this.progressIndex)
    }
}