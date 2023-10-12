const User = {
  type: 'object',
  properties: {
    uid: {
      type: 'string',
    },
    first_name: {
      type: 'string',
      example: 'John',
    },
    last_name: {
      type: 'string',
      example: 'James',
    },
    password: {
      type: 'string',
      description: 'This will not be saved in the database',
    },
    email: {
      type: 'string',
      example: 'john@email.com',
    },
    image: {
      type: 'string',
      description: 'Image link',
    },
    created_at: {
      type: 'string',
    },
    updated_at: {
      type: 'string',
    }
  }
};

module.exports = { User };