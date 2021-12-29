import JSONAPISerializer from '@ember-data/serializer/json-api';

import type Store from '@ember-data/store';
import type Model from '@ember-data/model';
// import type ModelRegistry from 'ember-data/types/registries/model';

interface PayloadRecord {
  id: string | number;
}

type Payload = PayloadRecord[];

// interface NormalizedResponseRecord {
//   type: keyof ModelRegistry;
//   id: string | number;
//   attributes: {
//     [key: string]: unknown;
//   }
// }

// interface NormalizedResponse {
//   data: NormalizedResponseRecord[];
// }

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(
    store: Store,
    primaryModelClass: Model,
    payload: Record<string, unknown>,
    id: string | number,
    requestType: string
  ): Record<string, unknown> {
    const response = super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    ) as Payload;
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
