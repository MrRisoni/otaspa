import ItineraryStore from './ItineraryStore';
import OtaStore from './OtaStore';
import HtmlStore from './HtmlStore';


class MasterStore {

    constructor() {
        this.otaStore = new OtaStore(this);
        this.itineraryStore = new ItineraryStore(this);
        this.htmlStore = new HtmlStore(this);
    }

}

export default MasterStore;