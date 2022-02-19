const redisom = require('redis-om');

class Invitee extends redisom.Entity {};

let inviteeSchema = new redisom.Schema(Invitee,
    {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        emailAddress: { type: 'string' },
        phoneNumber: { type: 'string' },
        address1: { type: 'string' },
        address2: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        zipCode: { type: 'string' },
        country: { type: 'string' },
        hasPlusOne: { type: 'boolean' },
        plusOneFirstName: { type: 'string' },
        plusOneLastName: { type: 'string' },
        isInvitedToRehearsalDinner: { type: 'boolean' },
        hasRsvpd: { type: 'boolean' },
        isAttendingWedding: { type: 'boolean' },
        isAttendingRehearsalDinner: { type: 'boolean' },
        isBringingPlusOneToWedding: { type: 'boolean' },
        isBringingPlusOneToRehearsalDinner: { type: 'boolean' },
        dietaryRestrictions: { type: 'string' },
    },
    {
        dataStructure: 'JSON',
    }
)

const addInvitee = async (data) => {
    const client = new redisom.Client();
    const redisUrl = process.env.REACT_APP_REDIS_URL;
    await client.open(redisUrl);
    const repository = new redisom.Repository(inviteeSchema, client);

    const invitee = repository.createEntity(data);
    const id = await repository.save(invitee);
    console.log('NEW INVITEE ADDED ' + id);

    await client.close();
    return id;
}

const createInviteeIndex = async () => {
    const client = new redisom.Client();
    const redisUrl = process.env.REACT_APP_REDIS_URL;
    await client.open(redisUrl);
    const repository = new redisom.Repository(inviteeSchema, client);

    await repository.createIndex();
    await client.close();
}

const searchInvitees = async (first, last) => {
    const client = new redisom.Client();
    const redisUrl = process.env.REACT_APP_REDIS_URL;
    await client.open(redisUrl);
    const repository = new redisom.Repository(inviteeSchema, client);

    const firstAndLastMatches = await repository.search()
        .where('firstName').equals(first)
        .and('lastName').equals(last)
        .return.all();

    const justLastNameMatches = await repository.search()
        .where('lastName').equals(last)
        .return.all();

    await client.close();

    return firstAndLastMatches.length > 0 ? firstAndLastMatches : justLastNameMatches;
}

module.exports = { addInvitee, createInviteeIndex, searchInvitees }
