import type { Dict } from '../../../types';

import { ExtendedSerializableError, SerializedError } from './core';


export class NotAcceptableError extends ExtendedSerializableError {
  public override readonly statusCode = 406 as const;
  public override readonly name = 'NotAcceptableError' as const;

  constructor(message: string, action?: string, location?: string, context?: Dict<any>, errors?: SerializedError[]) {
    super(message, {
      action,
      errors,
      context,
      location,
      statusCode: 406 as const,
    });
  }
}

export default NotAcceptableError;