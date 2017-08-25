import OtaStore from '../store';


describe('OtaStore', () => {
    it('removes a passenger', () => {

        const otastore = new OtaStore();

        let activePassengers = 0;
        expect(otastore.paxTypes.length).toBe(3)



        otastore.removePassenger(1);
        expect(otastore.paxTypes.length).toBe(3);


        expect( countActivePassengers(otastore) ).toBe(1);



    });
});

function countActivePassengers(store) {

    let active = 0;
    store.passengers.forEach( (ps) => {
        if (ps.active) {
            active++;
        }
    });
    return active;
}