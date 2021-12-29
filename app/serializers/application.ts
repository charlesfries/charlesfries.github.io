import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(
    store: any,
    primaryModelClass: any,
    payload: any,
    id: any,
    requestType: any
  ) {
    const response: any = super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
    return {
      data: response.map((repository: any) => {
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
