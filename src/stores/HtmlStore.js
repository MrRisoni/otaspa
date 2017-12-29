import {observable, action} from 'mobx';

class HtmlStore {


    @observable
    priceBoxMargin =5;

    @observable
    showCarCarousel = true;

    @action
    toggleCarCarousel()
    {
        this.showCarCarousel = !this.showCarCarousel;
    }

    @action changeHeight(newHeight){

        console.log(newHeight);
        if (newHeight <= 622) {
            this.priceBoxMargin = 5;
        }
        else {
            this.priceBoxMargin = (165.0/(1200 - 622)) *( newHeight  - 622) ;
            this.priceBoxMargin = 3 * this.priceBoxMargin;
            this.priceBoxMargin = parseInt(this.priceBoxMargin);
        }
        console.log(this.priceBoxMargin);
    }
}

export default HtmlStore;