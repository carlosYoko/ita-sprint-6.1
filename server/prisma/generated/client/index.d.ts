
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Roll
 * 
 */
export type Roll = $Result.DefaultSelection<Prisma.$RollPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs>;

  /**
   * `prisma.roll`: Exposes CRUD operations for the **Roll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rolls
    * const rolls = await prisma.roll.findMany()
    * ```
    */
  get roll(): Prisma.RollDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Player: 'Player',
    Roll: 'Roll'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'player' | 'roll'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>,
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Roll: {
        payload: Prisma.$RollPayload<ExtArgs>
        fields: Prisma.RollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RollFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RollFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          findFirst: {
            args: Prisma.RollFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RollFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          findMany: {
            args: Prisma.RollFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload>[]
          }
          create: {
            args: Prisma.RollCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          createMany: {
            args: Prisma.RollCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RollDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          update: {
            args: Prisma.RollUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          deleteMany: {
            args: Prisma.RollDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RollUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RollUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RollPayload>
          }
          aggregate: {
            args: Prisma.RollAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoll>
          }
          groupBy: {
            args: Prisma.RollGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RollGroupByOutputType>[]
          }
          count: {
            args: Prisma.RollCountArgs<ExtArgs>,
            result: $Utils.Optional<RollCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    rolls: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolls?: boolean | PlayerCountOutputTypeCountRollsArgs
  }

  // Custom InputTypes

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountRollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    rolls?: boolean | Player$rollsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolls?: boolean | Player$rollsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      rolls: Prisma.$RollPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }


  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Player that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
    **/
    create<T extends PlayerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Players.
     *     @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     *     @example
     *     // Create many Players
     *     const player = await prisma.player.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
    **/
    delete<T extends PlayerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rolls<T extends Player$rollsArgs<ExtArgs> = {}>(args?: Subset<T, Player$rollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Player model
   */ 
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly name: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }


  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
  }


  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }


  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
  }


  /**
   * Player.rolls
   */
  export type Player$rollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    where?: RollWhereInput
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[]
    cursor?: RollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RollScalarFieldEnum | RollScalarFieldEnum[]
  }


  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
  }



  /**
   * Model Roll
   */

  export type AggregateRoll = {
    _count: RollCountAggregateOutputType | null
    _avg: RollAvgAggregateOutputType | null
    _sum: RollSumAggregateOutputType | null
    _min: RollMinAggregateOutputType | null
    _max: RollMaxAggregateOutputType | null
  }

  export type RollAvgAggregateOutputType = {
    id: number | null
    dice1: number | null
    dice2: number | null
    playerId: number | null
  }

  export type RollSumAggregateOutputType = {
    id: number | null
    dice1: number | null
    dice2: number | null
    playerId: number | null
  }

  export type RollMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    dice1: number | null
    dice2: number | null
    isWinner: boolean | null
    playerId: number | null
  }

  export type RollMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    dice1: number | null
    dice2: number | null
    isWinner: boolean | null
    playerId: number | null
  }

  export type RollCountAggregateOutputType = {
    id: number
    createdAt: number
    dice1: number
    dice2: number
    isWinner: number
    playerId: number
    _all: number
  }


  export type RollAvgAggregateInputType = {
    id?: true
    dice1?: true
    dice2?: true
    playerId?: true
  }

  export type RollSumAggregateInputType = {
    id?: true
    dice1?: true
    dice2?: true
    playerId?: true
  }

  export type RollMinAggregateInputType = {
    id?: true
    createdAt?: true
    dice1?: true
    dice2?: true
    isWinner?: true
    playerId?: true
  }

  export type RollMaxAggregateInputType = {
    id?: true
    createdAt?: true
    dice1?: true
    dice2?: true
    isWinner?: true
    playerId?: true
  }

  export type RollCountAggregateInputType = {
    id?: true
    createdAt?: true
    dice1?: true
    dice2?: true
    isWinner?: true
    playerId?: true
    _all?: true
  }

  export type RollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roll to aggregate.
     */
    where?: RollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rolls to fetch.
     */
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rolls
    **/
    _count?: true | RollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RollMaxAggregateInputType
  }

  export type GetRollAggregateType<T extends RollAggregateArgs> = {
        [P in keyof T & keyof AggregateRoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoll[P]>
      : GetScalarType<T[P], AggregateRoll[P]>
  }




  export type RollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollWhereInput
    orderBy?: RollOrderByWithAggregationInput | RollOrderByWithAggregationInput[]
    by: RollScalarFieldEnum[] | RollScalarFieldEnum
    having?: RollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RollCountAggregateInputType | true
    _avg?: RollAvgAggregateInputType
    _sum?: RollSumAggregateInputType
    _min?: RollMinAggregateInputType
    _max?: RollMaxAggregateInputType
  }

  export type RollGroupByOutputType = {
    id: number
    createdAt: Date
    dice1: number
    dice2: number
    isWinner: boolean
    playerId: number
    _count: RollCountAggregateOutputType | null
    _avg: RollAvgAggregateOutputType | null
    _sum: RollSumAggregateOutputType | null
    _min: RollMinAggregateOutputType | null
    _max: RollMaxAggregateOutputType | null
  }

  type GetRollGroupByPayload<T extends RollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RollGroupByOutputType[P]>
            : GetScalarType<T[P], RollGroupByOutputType[P]>
        }
      >
    >


  export type RollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    dice1?: boolean
    dice2?: boolean
    isWinner?: boolean
    playerId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roll"]>

  export type RollSelectScalar = {
    id?: boolean
    createdAt?: boolean
    dice1?: boolean
    dice2?: boolean
    isWinner?: boolean
    playerId?: boolean
  }

  export type RollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }


  export type $RollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roll"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      dice1: number
      dice2: number
      isWinner: boolean
      playerId: number
    }, ExtArgs["result"]["roll"]>
    composites: {}
  }


  type RollGetPayload<S extends boolean | null | undefined | RollDefaultArgs> = $Result.GetResult<Prisma.$RollPayload, S>

  type RollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RollFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RollCountAggregateInputType | true
    }

  export interface RollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roll'], meta: { name: 'Roll' } }
    /**
     * Find zero or one Roll that matches the filter.
     * @param {RollFindUniqueArgs} args - Arguments to find a Roll
     * @example
     * // Get one Roll
     * const roll = await prisma.roll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RollFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RollFindUniqueArgs<ExtArgs>>
    ): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roll that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RollFindUniqueOrThrowArgs} args - Arguments to find a Roll
     * @example
     * // Get one Roll
     * const roll = await prisma.roll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RollFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RollFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollFindFirstArgs} args - Arguments to find a Roll
     * @example
     * // Get one Roll
     * const roll = await prisma.roll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RollFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RollFindFirstArgs<ExtArgs>>
    ): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollFindFirstOrThrowArgs} args - Arguments to find a Roll
     * @example
     * // Get one Roll
     * const roll = await prisma.roll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RollFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RollFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rolls
     * const rolls = await prisma.roll.findMany()
     * 
     * // Get first 10 Rolls
     * const rolls = await prisma.roll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rollWithIdOnly = await prisma.roll.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RollFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RollFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roll.
     * @param {RollCreateArgs} args - Arguments to create a Roll.
     * @example
     * // Create one Roll
     * const Roll = await prisma.roll.create({
     *   data: {
     *     // ... data to create a Roll
     *   }
     * })
     * 
    **/
    create<T extends RollCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RollCreateArgs<ExtArgs>>
    ): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rolls.
     *     @param {RollCreateManyArgs} args - Arguments to create many Rolls.
     *     @example
     *     // Create many Rolls
     *     const roll = await prisma.roll.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RollCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RollCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roll.
     * @param {RollDeleteArgs} args - Arguments to delete one Roll.
     * @example
     * // Delete one Roll
     * const Roll = await prisma.roll.delete({
     *   where: {
     *     // ... filter to delete one Roll
     *   }
     * })
     * 
    **/
    delete<T extends RollDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RollDeleteArgs<ExtArgs>>
    ): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roll.
     * @param {RollUpdateArgs} args - Arguments to update one Roll.
     * @example
     * // Update one Roll
     * const roll = await prisma.roll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RollUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RollUpdateArgs<ExtArgs>>
    ): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rolls.
     * @param {RollDeleteManyArgs} args - Arguments to filter Rolls to delete.
     * @example
     * // Delete a few Rolls
     * const { count } = await prisma.roll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RollDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RollDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rolls
     * const roll = await prisma.roll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RollUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RollUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roll.
     * @param {RollUpsertArgs} args - Arguments to update or create a Roll.
     * @example
     * // Update or create a Roll
     * const roll = await prisma.roll.upsert({
     *   create: {
     *     // ... data to create a Roll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roll we want to update
     *   }
     * })
    **/
    upsert<T extends RollUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RollUpsertArgs<ExtArgs>>
    ): Prisma__RollClient<$Result.GetResult<Prisma.$RollPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollCountArgs} args - Arguments to filter Rolls to count.
     * @example
     * // Count the number of Rolls
     * const count = await prisma.roll.count({
     *   where: {
     *     // ... the filter for the Rolls we want to count
     *   }
     * })
    **/
    count<T extends RollCountArgs>(
      args?: Subset<T, RollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RollAggregateArgs>(args: Subset<T, RollAggregateArgs>): Prisma.PrismaPromise<GetRollAggregateType<T>>

    /**
     * Group by Roll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RollGroupByArgs['orderBy'] }
        : { orderBy?: RollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roll model
   */
  readonly fields: RollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Roll model
   */ 
  interface RollFieldRefs {
    readonly id: FieldRef<"Roll", 'Int'>
    readonly createdAt: FieldRef<"Roll", 'DateTime'>
    readonly dice1: FieldRef<"Roll", 'Int'>
    readonly dice2: FieldRef<"Roll", 'Int'>
    readonly isWinner: FieldRef<"Roll", 'Boolean'>
    readonly playerId: FieldRef<"Roll", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Roll findUnique
   */
  export type RollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Roll to fetch.
     */
    where: RollWhereUniqueInput
  }


  /**
   * Roll findUniqueOrThrow
   */
  export type RollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Roll to fetch.
     */
    where: RollWhereUniqueInput
  }


  /**
   * Roll findFirst
   */
  export type RollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Roll to fetch.
     */
    where?: RollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rolls to fetch.
     */
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rolls.
     */
    cursor?: RollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rolls.
     */
    distinct?: RollScalarFieldEnum | RollScalarFieldEnum[]
  }


  /**
   * Roll findFirstOrThrow
   */
  export type RollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Roll to fetch.
     */
    where?: RollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rolls to fetch.
     */
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rolls.
     */
    cursor?: RollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rolls.
     */
    distinct?: RollScalarFieldEnum | RollScalarFieldEnum[]
  }


  /**
   * Roll findMany
   */
  export type RollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter, which Rolls to fetch.
     */
    where?: RollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rolls to fetch.
     */
    orderBy?: RollOrderByWithRelationInput | RollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rolls.
     */
    cursor?: RollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rolls.
     */
    skip?: number
    distinct?: RollScalarFieldEnum | RollScalarFieldEnum[]
  }


  /**
   * Roll create
   */
  export type RollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * The data needed to create a Roll.
     */
    data: XOR<RollCreateInput, RollUncheckedCreateInput>
  }


  /**
   * Roll createMany
   */
  export type RollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rolls.
     */
    data: RollCreateManyInput | RollCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Roll update
   */
  export type RollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * The data needed to update a Roll.
     */
    data: XOR<RollUpdateInput, RollUncheckedUpdateInput>
    /**
     * Choose, which Roll to update.
     */
    where: RollWhereUniqueInput
  }


  /**
   * Roll updateMany
   */
  export type RollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rolls.
     */
    data: XOR<RollUpdateManyMutationInput, RollUncheckedUpdateManyInput>
    /**
     * Filter which Rolls to update
     */
    where?: RollWhereInput
  }


  /**
   * Roll upsert
   */
  export type RollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * The filter to search for the Roll to update in case it exists.
     */
    where: RollWhereUniqueInput
    /**
     * In case the Roll found by the `where` argument doesn't exist, create a new Roll with this data.
     */
    create: XOR<RollCreateInput, RollUncheckedCreateInput>
    /**
     * In case the Roll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RollUpdateInput, RollUncheckedUpdateInput>
  }


  /**
   * Roll delete
   */
  export type RollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
    /**
     * Filter which Roll to delete.
     */
    where: RollWhereUniqueInput
  }


  /**
   * Roll deleteMany
   */
  export type RollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rolls to delete
     */
    where?: RollWhereInput
  }


  /**
   * Roll without action
   */
  export type RollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roll
     */
    select?: RollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RollInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const RollScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    dice1: 'dice1',
    dice2: 'dice2',
    isWinner: 'isWinner',
    playerId: 'playerId'
  };

  export type RollScalarFieldEnum = (typeof RollScalarFieldEnum)[keyof typeof RollScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    name?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    rolls?: RollListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    rolls?: RollOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    rolls?: RollListRelationFilter
  }, "id">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    name?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type RollWhereInput = {
    AND?: RollWhereInput | RollWhereInput[]
    OR?: RollWhereInput[]
    NOT?: RollWhereInput | RollWhereInput[]
    id?: IntFilter<"Roll"> | number
    createdAt?: DateTimeFilter<"Roll"> | Date | string
    dice1?: IntFilter<"Roll"> | number
    dice2?: IntFilter<"Roll"> | number
    isWinner?: BoolFilter<"Roll"> | boolean
    playerId?: IntFilter<"Roll"> | number
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }

  export type RollOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dice1?: SortOrder
    dice2?: SortOrder
    isWinner?: SortOrder
    playerId?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type RollWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RollWhereInput | RollWhereInput[]
    OR?: RollWhereInput[]
    NOT?: RollWhereInput | RollWhereInput[]
    createdAt?: DateTimeFilter<"Roll"> | Date | string
    dice1?: IntFilter<"Roll"> | number
    dice2?: IntFilter<"Roll"> | number
    isWinner?: BoolFilter<"Roll"> | boolean
    playerId?: IntFilter<"Roll"> | number
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }, "id">

  export type RollOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dice1?: SortOrder
    dice2?: SortOrder
    isWinner?: SortOrder
    playerId?: SortOrder
    _count?: RollCountOrderByAggregateInput
    _avg?: RollAvgOrderByAggregateInput
    _max?: RollMaxOrderByAggregateInput
    _min?: RollMinOrderByAggregateInput
    _sum?: RollSumOrderByAggregateInput
  }

  export type RollScalarWhereWithAggregatesInput = {
    AND?: RollScalarWhereWithAggregatesInput | RollScalarWhereWithAggregatesInput[]
    OR?: RollScalarWhereWithAggregatesInput[]
    NOT?: RollScalarWhereWithAggregatesInput | RollScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roll"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Roll"> | Date | string
    dice1?: IntWithAggregatesFilter<"Roll"> | number
    dice2?: IntWithAggregatesFilter<"Roll"> | number
    isWinner?: BoolWithAggregatesFilter<"Roll"> | boolean
    playerId?: IntWithAggregatesFilter<"Roll"> | number
  }

  export type PlayerCreateInput = {
    name: string
    createdAt?: Date | string
    rolls?: RollCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    rolls?: RollUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolls?: RollUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolls?: RollUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RollCreateInput = {
    createdAt?: Date | string
    dice1: number
    dice2: number
    isWinner: boolean
    player: PlayerCreateNestedOneWithoutRollsInput
  }

  export type RollUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    dice1: number
    dice2: number
    isWinner: boolean
    playerId: number
  }

  export type RollUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dice1?: IntFieldUpdateOperationsInput | number
    dice2?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    player?: PlayerUpdateOneRequiredWithoutRollsNestedInput
  }

  export type RollUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dice1?: IntFieldUpdateOperationsInput | number
    dice2?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    playerId?: IntFieldUpdateOperationsInput | number
  }

  export type RollCreateManyInput = {
    id?: number
    createdAt?: Date | string
    dice1: number
    dice2: number
    isWinner: boolean
    playerId: number
  }

  export type RollUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dice1?: IntFieldUpdateOperationsInput | number
    dice2?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RollUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dice1?: IntFieldUpdateOperationsInput | number
    dice2?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    playerId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RollListRelationFilter = {
    every?: RollWhereInput
    some?: RollWhereInput
    none?: RollWhereInput
  }

  export type RollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlayerRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type RollCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dice1?: SortOrder
    dice2?: SortOrder
    isWinner?: SortOrder
    playerId?: SortOrder
  }

  export type RollAvgOrderByAggregateInput = {
    id?: SortOrder
    dice1?: SortOrder
    dice2?: SortOrder
    playerId?: SortOrder
  }

  export type RollMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dice1?: SortOrder
    dice2?: SortOrder
    isWinner?: SortOrder
    playerId?: SortOrder
  }

  export type RollMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dice1?: SortOrder
    dice2?: SortOrder
    isWinner?: SortOrder
    playerId?: SortOrder
  }

  export type RollSumOrderByAggregateInput = {
    id?: SortOrder
    dice1?: SortOrder
    dice2?: SortOrder
    playerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RollCreateNestedManyWithoutPlayerInput = {
    create?: XOR<RollCreateWithoutPlayerInput, RollUncheckedCreateWithoutPlayerInput> | RollCreateWithoutPlayerInput[] | RollUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RollCreateOrConnectWithoutPlayerInput | RollCreateOrConnectWithoutPlayerInput[]
    createMany?: RollCreateManyPlayerInputEnvelope
    connect?: RollWhereUniqueInput | RollWhereUniqueInput[]
  }

  export type RollUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<RollCreateWithoutPlayerInput, RollUncheckedCreateWithoutPlayerInput> | RollCreateWithoutPlayerInput[] | RollUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RollCreateOrConnectWithoutPlayerInput | RollCreateOrConnectWithoutPlayerInput[]
    createMany?: RollCreateManyPlayerInputEnvelope
    connect?: RollWhereUniqueInput | RollWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RollUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<RollCreateWithoutPlayerInput, RollUncheckedCreateWithoutPlayerInput> | RollCreateWithoutPlayerInput[] | RollUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RollCreateOrConnectWithoutPlayerInput | RollCreateOrConnectWithoutPlayerInput[]
    upsert?: RollUpsertWithWhereUniqueWithoutPlayerInput | RollUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: RollCreateManyPlayerInputEnvelope
    set?: RollWhereUniqueInput | RollWhereUniqueInput[]
    disconnect?: RollWhereUniqueInput | RollWhereUniqueInput[]
    delete?: RollWhereUniqueInput | RollWhereUniqueInput[]
    connect?: RollWhereUniqueInput | RollWhereUniqueInput[]
    update?: RollUpdateWithWhereUniqueWithoutPlayerInput | RollUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: RollUpdateManyWithWhereWithoutPlayerInput | RollUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: RollScalarWhereInput | RollScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RollUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<RollCreateWithoutPlayerInput, RollUncheckedCreateWithoutPlayerInput> | RollCreateWithoutPlayerInput[] | RollUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RollCreateOrConnectWithoutPlayerInput | RollCreateOrConnectWithoutPlayerInput[]
    upsert?: RollUpsertWithWhereUniqueWithoutPlayerInput | RollUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: RollCreateManyPlayerInputEnvelope
    set?: RollWhereUniqueInput | RollWhereUniqueInput[]
    disconnect?: RollWhereUniqueInput | RollWhereUniqueInput[]
    delete?: RollWhereUniqueInput | RollWhereUniqueInput[]
    connect?: RollWhereUniqueInput | RollWhereUniqueInput[]
    update?: RollUpdateWithWhereUniqueWithoutPlayerInput | RollUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: RollUpdateManyWithWhereWithoutPlayerInput | RollUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: RollScalarWhereInput | RollScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutRollsInput = {
    create?: XOR<PlayerCreateWithoutRollsInput, PlayerUncheckedCreateWithoutRollsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutRollsInput
    connect?: PlayerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlayerUpdateOneRequiredWithoutRollsNestedInput = {
    create?: XOR<PlayerCreateWithoutRollsInput, PlayerUncheckedCreateWithoutRollsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutRollsInput
    upsert?: PlayerUpsertWithoutRollsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutRollsInput, PlayerUpdateWithoutRollsInput>, PlayerUncheckedUpdateWithoutRollsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RollCreateWithoutPlayerInput = {
    createdAt?: Date | string
    dice1: number
    dice2: number
    isWinner: boolean
  }

  export type RollUncheckedCreateWithoutPlayerInput = {
    id?: number
    createdAt?: Date | string
    dice1: number
    dice2: number
    isWinner: boolean
  }

  export type RollCreateOrConnectWithoutPlayerInput = {
    where: RollWhereUniqueInput
    create: XOR<RollCreateWithoutPlayerInput, RollUncheckedCreateWithoutPlayerInput>
  }

  export type RollCreateManyPlayerInputEnvelope = {
    data: RollCreateManyPlayerInput | RollCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type RollUpsertWithWhereUniqueWithoutPlayerInput = {
    where: RollWhereUniqueInput
    update: XOR<RollUpdateWithoutPlayerInput, RollUncheckedUpdateWithoutPlayerInput>
    create: XOR<RollCreateWithoutPlayerInput, RollUncheckedCreateWithoutPlayerInput>
  }

  export type RollUpdateWithWhereUniqueWithoutPlayerInput = {
    where: RollWhereUniqueInput
    data: XOR<RollUpdateWithoutPlayerInput, RollUncheckedUpdateWithoutPlayerInput>
  }

  export type RollUpdateManyWithWhereWithoutPlayerInput = {
    where: RollScalarWhereInput
    data: XOR<RollUpdateManyMutationInput, RollUncheckedUpdateManyWithoutPlayerInput>
  }

  export type RollScalarWhereInput = {
    AND?: RollScalarWhereInput | RollScalarWhereInput[]
    OR?: RollScalarWhereInput[]
    NOT?: RollScalarWhereInput | RollScalarWhereInput[]
    id?: IntFilter<"Roll"> | number
    createdAt?: DateTimeFilter<"Roll"> | Date | string
    dice1?: IntFilter<"Roll"> | number
    dice2?: IntFilter<"Roll"> | number
    isWinner?: BoolFilter<"Roll"> | boolean
    playerId?: IntFilter<"Roll"> | number
  }

  export type PlayerCreateWithoutRollsInput = {
    name: string
    createdAt?: Date | string
  }

  export type PlayerUncheckedCreateWithoutRollsInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type PlayerCreateOrConnectWithoutRollsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutRollsInput, PlayerUncheckedCreateWithoutRollsInput>
  }

  export type PlayerUpsertWithoutRollsInput = {
    update: XOR<PlayerUpdateWithoutRollsInput, PlayerUncheckedUpdateWithoutRollsInput>
    create: XOR<PlayerCreateWithoutRollsInput, PlayerUncheckedCreateWithoutRollsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutRollsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutRollsInput, PlayerUncheckedUpdateWithoutRollsInput>
  }

  export type PlayerUpdateWithoutRollsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateWithoutRollsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RollCreateManyPlayerInput = {
    id?: number
    createdAt?: Date | string
    dice1: number
    dice2: number
    isWinner: boolean
  }

  export type RollUpdateWithoutPlayerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dice1?: IntFieldUpdateOperationsInput | number
    dice2?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RollUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dice1?: IntFieldUpdateOperationsInput | number
    dice2?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RollUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dice1?: IntFieldUpdateOperationsInput | number
    dice2?: IntFieldUpdateOperationsInput | number
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PlayerCountOutputTypeDefaultArgs instead
     */
    export type PlayerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerDefaultArgs instead
     */
    export type PlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RollDefaultArgs instead
     */
    export type RollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RollDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}