import LocalStorage from "../StorageService.ts";
require('jest-localstorage-mock');
// import 'fakelocalstorage/auto';

const testData = {key: 'myvalue'}
beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
});
    describe('LocalStorage', () => {
    })
    test('should set and get data in local storage', async () => {
        await LocalStorage.prototype.SetItem('mykey', testData.key);
        const data = await LocalStorage.prototype.GetItem('mykey');
        expect(testData.key).toEqual(data);
    })
    it('should set and remove data in local storage', async() => {
        await LocalStorage.prototype.SetItem('mykey', testData.key);
        await LocalStorage.prototype.RemoveItem('mykey');
        const data = await LocalStorage.prototype.GetItem('mykey');
        expect(data).toBe(null);
    })
    it('should clear data in local storage', async() => {
        await LocalStorage.prototype.SetItem('mykey', testData.key);
        await LocalStorage.prototype.SetItem('mykey2', testData.key);
        await LocalStorage.prototype.Clear();
        const data = await LocalStorage.prototype.GetItem('mykey');
        const data2 = await LocalStorage.prototype.GetItem('mykey2');
        expect(data && data2).toBe(null);
    })

