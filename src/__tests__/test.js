import otastore from '../store';


describe('OtaStore', () => {
    it('creates new todos', () => {

        expect(otastore.paxTypes.length).toBe(3)

        otastore.addPassenger();

        expect(otastore.paxTypes.length).toBe(3);
        expect(otastore.passengers.length).toBe(3);

        let totalPaxes =0;
        otastore.paxTypes.forEach( (px) => {
            totalPaxes += px.count;
        })

        expect(otastore.passengers.length).toBe(3);


    });
});