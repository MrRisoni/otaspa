import ItineraryStore from './ItineraryStore';
import OtaStore from './OtaStore';


class MasterStore {

    constructor() {
        this.otaStore = new OtaStore(this);
        this.itineraryStore = new ItineraryStore(this);
    }

}

export default MasterStore;