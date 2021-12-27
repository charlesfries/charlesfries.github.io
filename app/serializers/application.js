import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const response = super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
    return {
      data: response.map((repository) => {
        const { id, ...attributes } = repository;
        return {
          type: 'repository',
          id,
          attributes,
        };
      }),
    };
  }
}
