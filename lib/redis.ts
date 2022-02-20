import { Client, Entity, Schema, Repository, EntityCreationData } from 'redis-om';

const client = new Client();

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

class Car extends Entity{}

let schema = new Schema(
    Car,
    {
        make: { type: 'string' },
        model: { type: 'string' },
        image: { type: 'string' },
        description: { type: 'string', textSearch: true },
    },
    {
        dataStructure: 'JSON'
    }
)

export async function createCar(data: EntityCreationData) {
    await connect();

    const repository = new Repository(schema, client);

    const car = repository.createEntity(data);

    const id = await repository.save(car);

}

export async function createIndex() {
    await connect();

    const repository = new Repository(schema, client);
    await repository.createIndex();
}

export async function searchCars(query: any) {
    await connect();

    const repository = new Repository(schema, client);

    let cars = await repository.search()
            .where('make').eq(query)
            .or('model').eq(query)
            .or('description').matches(query)
            .return.all();

    return cars;
}