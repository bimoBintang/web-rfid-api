
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RfidCard
 * 
 */
export type RfidCard = $Result.DefaultSelection<Prisma.$RfidCardPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model AdminActivity
 * 
 */
export type AdminActivity = $Result.DefaultSelection<Prisma.$AdminActivityPayload>
/**
 * Model DeviceTelemetry
 * 
 */
export type DeviceTelemetry = $Result.DefaultSelection<Prisma.$DeviceTelemetryPayload>
/**
 * Model ApiToken
 * 
 */
export type ApiToken = $Result.DefaultSelection<Prisma.$ApiTokenPayload>
/**
 * Model SystemSetting
 * 
 */
export type SystemSetting = $Result.DefaultSelection<Prisma.$SystemSettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  LATE: 'LATE',
  ABSENT: 'ABSENT',
  LEAVE: 'LEAVE',
  PENDING: 'PENDING'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rfidCard`: Exposes CRUD operations for the **RfidCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RfidCards
    * const rfidCards = await prisma.rfidCard.findMany()
    * ```
    */
  get rfidCard(): Prisma.RfidCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminActivity`: Exposes CRUD operations for the **AdminActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminActivities
    * const adminActivities = await prisma.adminActivity.findMany()
    * ```
    */
  get adminActivity(): Prisma.AdminActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceTelemetry`: Exposes CRUD operations for the **DeviceTelemetry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceTelemetries
    * const deviceTelemetries = await prisma.deviceTelemetry.findMany()
    * ```
    */
  get deviceTelemetry(): Prisma.DeviceTelemetryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiToken`: Exposes CRUD operations for the **ApiToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiTokens
    * const apiTokens = await prisma.apiToken.findMany()
    * ```
    */
  get apiToken(): Prisma.ApiTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSetting.findMany()
    * ```
    */
  get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Admin: 'Admin',
    User: 'User',
    RfidCard: 'RfidCard',
    Device: 'Device',
    Schedule: 'Schedule',
    Attendance: 'Attendance',
    AdminActivity: 'AdminActivity',
    DeviceTelemetry: 'DeviceTelemetry',
    ApiToken: 'ApiToken',
    SystemSetting: 'SystemSetting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "user" | "rfidCard" | "device" | "schedule" | "attendance" | "adminActivity" | "deviceTelemetry" | "apiToken" | "systemSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RfidCard: {
        payload: Prisma.$RfidCardPayload<ExtArgs>
        fields: Prisma.RfidCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RfidCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RfidCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>
          }
          findFirst: {
            args: Prisma.RfidCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RfidCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>
          }
          findMany: {
            args: Prisma.RfidCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>[]
          }
          create: {
            args: Prisma.RfidCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>
          }
          createMany: {
            args: Prisma.RfidCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RfidCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>[]
          }
          delete: {
            args: Prisma.RfidCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>
          }
          update: {
            args: Prisma.RfidCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>
          }
          deleteMany: {
            args: Prisma.RfidCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RfidCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RfidCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>[]
          }
          upsert: {
            args: Prisma.RfidCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfidCardPayload>
          }
          aggregate: {
            args: Prisma.RfidCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRfidCard>
          }
          groupBy: {
            args: Prisma.RfidCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RfidCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RfidCardCountArgs<ExtArgs>
            result: $Utils.Optional<RfidCardCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      AdminActivity: {
        payload: Prisma.$AdminActivityPayload<ExtArgs>
        fields: Prisma.AdminActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          findFirst: {
            args: Prisma.AdminActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          findMany: {
            args: Prisma.AdminActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>[]
          }
          create: {
            args: Prisma.AdminActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          createMany: {
            args: Prisma.AdminActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>[]
          }
          delete: {
            args: Prisma.AdminActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          update: {
            args: Prisma.AdminActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          deleteMany: {
            args: Prisma.AdminActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>[]
          }
          upsert: {
            args: Prisma.AdminActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          aggregate: {
            args: Prisma.AdminActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminActivity>
          }
          groupBy: {
            args: Prisma.AdminActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminActivityCountArgs<ExtArgs>
            result: $Utils.Optional<AdminActivityCountAggregateOutputType> | number
          }
        }
      }
      DeviceTelemetry: {
        payload: Prisma.$DeviceTelemetryPayload<ExtArgs>
        fields: Prisma.DeviceTelemetryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceTelemetryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceTelemetryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>
          }
          findFirst: {
            args: Prisma.DeviceTelemetryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceTelemetryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>
          }
          findMany: {
            args: Prisma.DeviceTelemetryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>[]
          }
          create: {
            args: Prisma.DeviceTelemetryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>
          }
          createMany: {
            args: Prisma.DeviceTelemetryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceTelemetryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>[]
          }
          delete: {
            args: Prisma.DeviceTelemetryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>
          }
          update: {
            args: Prisma.DeviceTelemetryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>
          }
          deleteMany: {
            args: Prisma.DeviceTelemetryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceTelemetryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceTelemetryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>[]
          }
          upsert: {
            args: Prisma.DeviceTelemetryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>
          }
          aggregate: {
            args: Prisma.DeviceTelemetryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceTelemetry>
          }
          groupBy: {
            args: Prisma.DeviceTelemetryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceTelemetryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceTelemetryCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceTelemetryCountAggregateOutputType> | number
          }
        }
      }
      ApiToken: {
        payload: Prisma.$ApiTokenPayload<ExtArgs>
        fields: Prisma.ApiTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          findFirst: {
            args: Prisma.ApiTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          findMany: {
            args: Prisma.ApiTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          create: {
            args: Prisma.ApiTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          createMany: {
            args: Prisma.ApiTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          delete: {
            args: Prisma.ApiTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          update: {
            args: Prisma.ApiTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          deleteMany: {
            args: Prisma.ApiTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          upsert: {
            args: Prisma.ApiTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          aggregate: {
            args: Prisma.ApiTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiToken>
          }
          groupBy: {
            args: Prisma.ApiTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ApiTokenCountAggregateOutputType> | number
          }
        }
      }
      SystemSetting: {
        payload: Prisma.$SystemSettingPayload<ExtArgs>
        fields: Prisma.SystemSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findMany: {
            args: Prisma.SystemSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          create: {
            args: Prisma.SystemSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          createMany: {
            args: Prisma.SystemSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          update: {
            args: Prisma.SystemSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSetting>
          }
          groupBy: {
            args: Prisma.SystemSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    user?: UserOmit
    rfidCard?: RfidCardOmit
    device?: DeviceOmit
    schedule?: ScheduleOmit
    attendance?: AttendanceOmit
    adminActivity?: AdminActivityOmit
    deviceTelemetry?: DeviceTelemetryOmit
    apiToken?: ApiTokenOmit
    systemSetting?: SystemSettingOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    activities: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | AdminCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActivityWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    attendances: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type RfidCardCountOutputType
   */

  export type RfidCardCountOutputType = {
    attendances: number
  }

  export type RfidCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | RfidCardCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * RfidCardCountOutputType without action
   */
  export type RfidCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCardCountOutputType
     */
    select?: RfidCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RfidCardCountOutputType without action
   */
  export type RfidCardCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    attendances: number
    telemetry: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | DeviceCountOutputTypeCountAttendancesArgs
    telemetry?: boolean | DeviceCountOutputTypeCountTelemetryArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountTelemetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTelemetryWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    attendances: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | ScheduleCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activities?: boolean | Admin$activitiesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | Admin$activitiesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      activities: Prisma.$AdminActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends Admin$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly isActive: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.activities
   */
  export type Admin$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    where?: AdminActivityWhereInput
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    cursor?: AdminActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nim: string | null
    fullName: string | null
    department: string | null
    position: string | null
    email: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nim: string | null
    fullName: string | null
    department: string | null
    position: string | null
    email: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nim: number
    fullName: number
    department: number
    position: number
    email: number
    phoneNumber: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nim?: true
    fullName?: true
    department?: true
    position?: true
    email?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nim?: true
    fullName?: true
    department?: true
    position?: true
    email?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nim?: true
    fullName?: true
    department?: true
    position?: true
    email?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nim: string
    fullName: string
    department: string | null
    position: string | null
    email: string | null
    phoneNumber: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    fullName?: boolean
    department?: boolean
    position?: boolean
    email?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rfidCard?: boolean | User$rfidCardArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    fullName?: boolean
    department?: boolean
    position?: boolean
    email?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    fullName?: boolean
    department?: boolean
    position?: boolean
    email?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nim?: boolean
    fullName?: boolean
    department?: boolean
    position?: boolean
    email?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "fullName" | "department" | "position" | "email" | "phoneNumber" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfidCard?: boolean | User$rfidCardArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rfidCard: Prisma.$RfidCardPayload<ExtArgs> | null
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nim: string
      fullName: string
      department: string | null
      position: string | null
      email: string | null
      phoneNumber: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rfidCard<T extends User$rfidCardArgs<ExtArgs> = {}>(args?: Subset<T, User$rfidCardArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nim: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly position: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.rfidCard
   */
  export type User$rfidCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    where?: RfidCardWhereInput
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RfidCard
   */

  export type AggregateRfidCard = {
    _count: RfidCardCountAggregateOutputType | null
    _avg: RfidCardAvgAggregateOutputType | null
    _sum: RfidCardSumAggregateOutputType | null
    _min: RfidCardMinAggregateOutputType | null
    _max: RfidCardMaxAggregateOutputType | null
  }

  export type RfidCardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RfidCardSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RfidCardMinAggregateOutputType = {
    id: number | null
    cardUid: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type RfidCardMaxAggregateOutputType = {
    id: number | null
    cardUid: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type RfidCardCountAggregateOutputType = {
    id: number
    cardUid: number
    isActive: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type RfidCardAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RfidCardSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RfidCardMinAggregateInputType = {
    id?: true
    cardUid?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RfidCardMaxAggregateInputType = {
    id?: true
    cardUid?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RfidCardCountAggregateInputType = {
    id?: true
    cardUid?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type RfidCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RfidCard to aggregate.
     */
    where?: RfidCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RfidCards to fetch.
     */
    orderBy?: RfidCardOrderByWithRelationInput | RfidCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RfidCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RfidCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RfidCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RfidCards
    **/
    _count?: true | RfidCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RfidCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RfidCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RfidCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RfidCardMaxAggregateInputType
  }

  export type GetRfidCardAggregateType<T extends RfidCardAggregateArgs> = {
        [P in keyof T & keyof AggregateRfidCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRfidCard[P]>
      : GetScalarType<T[P], AggregateRfidCard[P]>
  }




  export type RfidCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RfidCardWhereInput
    orderBy?: RfidCardOrderByWithAggregationInput | RfidCardOrderByWithAggregationInput[]
    by: RfidCardScalarFieldEnum[] | RfidCardScalarFieldEnum
    having?: RfidCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RfidCardCountAggregateInputType | true
    _avg?: RfidCardAvgAggregateInputType
    _sum?: RfidCardSumAggregateInputType
    _min?: RfidCardMinAggregateInputType
    _max?: RfidCardMaxAggregateInputType
  }

  export type RfidCardGroupByOutputType = {
    id: number
    cardUid: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: RfidCardCountAggregateOutputType | null
    _avg: RfidCardAvgAggregateOutputType | null
    _sum: RfidCardSumAggregateOutputType | null
    _min: RfidCardMinAggregateOutputType | null
    _max: RfidCardMaxAggregateOutputType | null
  }

  type GetRfidCardGroupByPayload<T extends RfidCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RfidCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RfidCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RfidCardGroupByOutputType[P]>
            : GetScalarType<T[P], RfidCardGroupByOutputType[P]>
        }
      >
    >


  export type RfidCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardUid?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    attendances?: boolean | RfidCard$attendancesArgs<ExtArgs>
    _count?: boolean | RfidCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rfidCard"]>

  export type RfidCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardUid?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rfidCard"]>

  export type RfidCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardUid?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rfidCard"]>

  export type RfidCardSelectScalar = {
    id?: boolean
    cardUid?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type RfidCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardUid" | "isActive" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["rfidCard"]>
  export type RfidCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    attendances?: boolean | RfidCard$attendancesArgs<ExtArgs>
    _count?: boolean | RfidCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RfidCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RfidCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RfidCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RfidCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cardUid: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["rfidCard"]>
    composites: {}
  }

  type RfidCardGetPayload<S extends boolean | null | undefined | RfidCardDefaultArgs> = $Result.GetResult<Prisma.$RfidCardPayload, S>

  type RfidCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RfidCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RfidCardCountAggregateInputType | true
    }

  export interface RfidCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RfidCard'], meta: { name: 'RfidCard' } }
    /**
     * Find zero or one RfidCard that matches the filter.
     * @param {RfidCardFindUniqueArgs} args - Arguments to find a RfidCard
     * @example
     * // Get one RfidCard
     * const rfidCard = await prisma.rfidCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RfidCardFindUniqueArgs>(args: SelectSubset<T, RfidCardFindUniqueArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RfidCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RfidCardFindUniqueOrThrowArgs} args - Arguments to find a RfidCard
     * @example
     * // Get one RfidCard
     * const rfidCard = await prisma.rfidCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RfidCardFindUniqueOrThrowArgs>(args: SelectSubset<T, RfidCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RfidCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidCardFindFirstArgs} args - Arguments to find a RfidCard
     * @example
     * // Get one RfidCard
     * const rfidCard = await prisma.rfidCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RfidCardFindFirstArgs>(args?: SelectSubset<T, RfidCardFindFirstArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RfidCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidCardFindFirstOrThrowArgs} args - Arguments to find a RfidCard
     * @example
     * // Get one RfidCard
     * const rfidCard = await prisma.rfidCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RfidCardFindFirstOrThrowArgs>(args?: SelectSubset<T, RfidCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RfidCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RfidCards
     * const rfidCards = await prisma.rfidCard.findMany()
     * 
     * // Get first 10 RfidCards
     * const rfidCards = await prisma.rfidCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rfidCardWithIdOnly = await prisma.rfidCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RfidCardFindManyArgs>(args?: SelectSubset<T, RfidCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RfidCard.
     * @param {RfidCardCreateArgs} args - Arguments to create a RfidCard.
     * @example
     * // Create one RfidCard
     * const RfidCard = await prisma.rfidCard.create({
     *   data: {
     *     // ... data to create a RfidCard
     *   }
     * })
     * 
     */
    create<T extends RfidCardCreateArgs>(args: SelectSubset<T, RfidCardCreateArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RfidCards.
     * @param {RfidCardCreateManyArgs} args - Arguments to create many RfidCards.
     * @example
     * // Create many RfidCards
     * const rfidCard = await prisma.rfidCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RfidCardCreateManyArgs>(args?: SelectSubset<T, RfidCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RfidCards and returns the data saved in the database.
     * @param {RfidCardCreateManyAndReturnArgs} args - Arguments to create many RfidCards.
     * @example
     * // Create many RfidCards
     * const rfidCard = await prisma.rfidCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RfidCards and only return the `id`
     * const rfidCardWithIdOnly = await prisma.rfidCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RfidCardCreateManyAndReturnArgs>(args?: SelectSubset<T, RfidCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RfidCard.
     * @param {RfidCardDeleteArgs} args - Arguments to delete one RfidCard.
     * @example
     * // Delete one RfidCard
     * const RfidCard = await prisma.rfidCard.delete({
     *   where: {
     *     // ... filter to delete one RfidCard
     *   }
     * })
     * 
     */
    delete<T extends RfidCardDeleteArgs>(args: SelectSubset<T, RfidCardDeleteArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RfidCard.
     * @param {RfidCardUpdateArgs} args - Arguments to update one RfidCard.
     * @example
     * // Update one RfidCard
     * const rfidCard = await prisma.rfidCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RfidCardUpdateArgs>(args: SelectSubset<T, RfidCardUpdateArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RfidCards.
     * @param {RfidCardDeleteManyArgs} args - Arguments to filter RfidCards to delete.
     * @example
     * // Delete a few RfidCards
     * const { count } = await prisma.rfidCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RfidCardDeleteManyArgs>(args?: SelectSubset<T, RfidCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RfidCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RfidCards
     * const rfidCard = await prisma.rfidCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RfidCardUpdateManyArgs>(args: SelectSubset<T, RfidCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RfidCards and returns the data updated in the database.
     * @param {RfidCardUpdateManyAndReturnArgs} args - Arguments to update many RfidCards.
     * @example
     * // Update many RfidCards
     * const rfidCard = await prisma.rfidCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RfidCards and only return the `id`
     * const rfidCardWithIdOnly = await prisma.rfidCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RfidCardUpdateManyAndReturnArgs>(args: SelectSubset<T, RfidCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RfidCard.
     * @param {RfidCardUpsertArgs} args - Arguments to update or create a RfidCard.
     * @example
     * // Update or create a RfidCard
     * const rfidCard = await prisma.rfidCard.upsert({
     *   create: {
     *     // ... data to create a RfidCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RfidCard we want to update
     *   }
     * })
     */
    upsert<T extends RfidCardUpsertArgs>(args: SelectSubset<T, RfidCardUpsertArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RfidCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidCardCountArgs} args - Arguments to filter RfidCards to count.
     * @example
     * // Count the number of RfidCards
     * const count = await prisma.rfidCard.count({
     *   where: {
     *     // ... the filter for the RfidCards we want to count
     *   }
     * })
    **/
    count<T extends RfidCardCountArgs>(
      args?: Subset<T, RfidCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RfidCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RfidCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RfidCardAggregateArgs>(args: Subset<T, RfidCardAggregateArgs>): Prisma.PrismaPromise<GetRfidCardAggregateType<T>>

    /**
     * Group by RfidCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidCardGroupByArgs} args - Group by arguments.
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
      T extends RfidCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RfidCardGroupByArgs['orderBy'] }
        : { orderBy?: RfidCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RfidCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRfidCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RfidCard model
   */
  readonly fields: RfidCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RfidCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RfidCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends RfidCard$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, RfidCard$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RfidCard model
   */
  interface RfidCardFieldRefs {
    readonly id: FieldRef<"RfidCard", 'Int'>
    readonly cardUid: FieldRef<"RfidCard", 'String'>
    readonly isActive: FieldRef<"RfidCard", 'Boolean'>
    readonly createdAt: FieldRef<"RfidCard", 'DateTime'>
    readonly updatedAt: FieldRef<"RfidCard", 'DateTime'>
    readonly userId: FieldRef<"RfidCard", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RfidCard findUnique
   */
  export type RfidCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * Filter, which RfidCard to fetch.
     */
    where: RfidCardWhereUniqueInput
  }

  /**
   * RfidCard findUniqueOrThrow
   */
  export type RfidCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * Filter, which RfidCard to fetch.
     */
    where: RfidCardWhereUniqueInput
  }

  /**
   * RfidCard findFirst
   */
  export type RfidCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * Filter, which RfidCard to fetch.
     */
    where?: RfidCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RfidCards to fetch.
     */
    orderBy?: RfidCardOrderByWithRelationInput | RfidCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RfidCards.
     */
    cursor?: RfidCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RfidCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RfidCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RfidCards.
     */
    distinct?: RfidCardScalarFieldEnum | RfidCardScalarFieldEnum[]
  }

  /**
   * RfidCard findFirstOrThrow
   */
  export type RfidCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * Filter, which RfidCard to fetch.
     */
    where?: RfidCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RfidCards to fetch.
     */
    orderBy?: RfidCardOrderByWithRelationInput | RfidCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RfidCards.
     */
    cursor?: RfidCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RfidCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RfidCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RfidCards.
     */
    distinct?: RfidCardScalarFieldEnum | RfidCardScalarFieldEnum[]
  }

  /**
   * RfidCard findMany
   */
  export type RfidCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * Filter, which RfidCards to fetch.
     */
    where?: RfidCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RfidCards to fetch.
     */
    orderBy?: RfidCardOrderByWithRelationInput | RfidCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RfidCards.
     */
    cursor?: RfidCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RfidCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RfidCards.
     */
    skip?: number
    distinct?: RfidCardScalarFieldEnum | RfidCardScalarFieldEnum[]
  }

  /**
   * RfidCard create
   */
  export type RfidCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * The data needed to create a RfidCard.
     */
    data: XOR<RfidCardCreateInput, RfidCardUncheckedCreateInput>
  }

  /**
   * RfidCard createMany
   */
  export type RfidCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RfidCards.
     */
    data: RfidCardCreateManyInput | RfidCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RfidCard createManyAndReturn
   */
  export type RfidCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * The data used to create many RfidCards.
     */
    data: RfidCardCreateManyInput | RfidCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RfidCard update
   */
  export type RfidCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * The data needed to update a RfidCard.
     */
    data: XOR<RfidCardUpdateInput, RfidCardUncheckedUpdateInput>
    /**
     * Choose, which RfidCard to update.
     */
    where: RfidCardWhereUniqueInput
  }

  /**
   * RfidCard updateMany
   */
  export type RfidCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RfidCards.
     */
    data: XOR<RfidCardUpdateManyMutationInput, RfidCardUncheckedUpdateManyInput>
    /**
     * Filter which RfidCards to update
     */
    where?: RfidCardWhereInput
    /**
     * Limit how many RfidCards to update.
     */
    limit?: number
  }

  /**
   * RfidCard updateManyAndReturn
   */
  export type RfidCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * The data used to update RfidCards.
     */
    data: XOR<RfidCardUpdateManyMutationInput, RfidCardUncheckedUpdateManyInput>
    /**
     * Filter which RfidCards to update
     */
    where?: RfidCardWhereInput
    /**
     * Limit how many RfidCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RfidCard upsert
   */
  export type RfidCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * The filter to search for the RfidCard to update in case it exists.
     */
    where: RfidCardWhereUniqueInput
    /**
     * In case the RfidCard found by the `where` argument doesn't exist, create a new RfidCard with this data.
     */
    create: XOR<RfidCardCreateInput, RfidCardUncheckedCreateInput>
    /**
     * In case the RfidCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RfidCardUpdateInput, RfidCardUncheckedUpdateInput>
  }

  /**
   * RfidCard delete
   */
  export type RfidCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
    /**
     * Filter which RfidCard to delete.
     */
    where: RfidCardWhereUniqueInput
  }

  /**
   * RfidCard deleteMany
   */
  export type RfidCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RfidCards to delete
     */
    where?: RfidCardWhereInput
    /**
     * Limit how many RfidCards to delete.
     */
    limit?: number
  }

  /**
   * RfidCard.attendances
   */
  export type RfidCard$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * RfidCard without action
   */
  export type RfidCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfidCard
     */
    select?: RfidCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RfidCard
     */
    omit?: RfidCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfidCardInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    deviceName: string | null
    macAddress: string | null
    ipAddress: string | null
    location: string | null
    isActive: boolean | null
    lastOnline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    deviceName: string | null
    macAddress: string | null
    ipAddress: string | null
    location: string | null
    isActive: boolean | null
    lastOnline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    deviceName: number
    macAddress: number
    ipAddress: number
    location: number
    isActive: number
    lastOnline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    deviceName?: true
    macAddress?: true
    ipAddress?: true
    location?: true
    isActive?: true
    lastOnline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    deviceName?: true
    macAddress?: true
    ipAddress?: true
    location?: true
    isActive?: true
    lastOnline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    deviceName?: true
    macAddress?: true
    ipAddress?: true
    location?: true
    isActive?: true
    lastOnline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    deviceName: string
    macAddress: string
    ipAddress: string | null
    location: string | null
    isActive: boolean
    lastOnline: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceName?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    location?: boolean
    isActive?: boolean
    lastOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendances?: boolean | Device$attendancesArgs<ExtArgs>
    telemetry?: boolean | Device$telemetryArgs<ExtArgs>
    apiToken?: boolean | Device$apiTokenArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceName?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    location?: boolean
    isActive?: boolean
    lastOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceName?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    location?: boolean
    isActive?: boolean
    lastOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    deviceName?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    location?: boolean
    isActive?: boolean
    lastOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceName" | "macAddress" | "ipAddress" | "location" | "isActive" | "lastOnline" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | Device$attendancesArgs<ExtArgs>
    telemetry?: boolean | Device$telemetryArgs<ExtArgs>
    apiToken?: boolean | Device$apiTokenArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      telemetry: Prisma.$DeviceTelemetryPayload<ExtArgs>[]
      apiToken: Prisma.$ApiTokenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deviceName: string
      macAddress: string
      ipAddress: string | null
      location: string | null
      isActive: boolean
      lastOnline: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends Device$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Device$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telemetry<T extends Device$telemetryArgs<ExtArgs> = {}>(args?: Subset<T, Device$telemetryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiToken<T extends Device$apiTokenArgs<ExtArgs> = {}>(args?: Subset<T, Device$apiTokenArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly deviceName: FieldRef<"Device", 'String'>
    readonly macAddress: FieldRef<"Device", 'String'>
    readonly ipAddress: FieldRef<"Device", 'String'>
    readonly location: FieldRef<"Device", 'String'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly lastOnline: FieldRef<"Device", 'DateTime'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.attendances
   */
  export type Device$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Device.telemetry
   */
  export type Device$telemetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    where?: DeviceTelemetryWhereInput
    orderBy?: DeviceTelemetryOrderByWithRelationInput | DeviceTelemetryOrderByWithRelationInput[]
    cursor?: DeviceTelemetryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceTelemetryScalarFieldEnum | DeviceTelemetryScalarFieldEnum[]
  }

  /**
   * Device.apiToken
   */
  export type Device$apiTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    where?: ApiTokenWhereInput
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    name: string | null
    checkInStart: Date | null
    checkInEnd: Date | null
    checkOutStart: Date | null
    checkOutEnd: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    checkInStart: Date | null
    checkInEnd: Date | null
    checkOutStart: Date | null
    checkOutEnd: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    name: number
    checkInStart: number
    checkInEnd: number
    checkOutStart: number
    checkOutEnd: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    name?: true
    checkInStart?: true
    checkInEnd?: true
    checkOutStart?: true
    checkOutEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    name?: true
    checkInStart?: true
    checkInEnd?: true
    checkOutStart?: true
    checkOutEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    name?: true
    checkInStart?: true
    checkInEnd?: true
    checkOutStart?: true
    checkOutEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    name: string
    checkInStart: Date
    checkInEnd: Date
    checkOutStart: Date
    checkOutEnd: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    checkInStart?: boolean
    checkInEnd?: boolean
    checkOutStart?: boolean
    checkOutEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendances?: boolean | Schedule$attendancesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    checkInStart?: boolean
    checkInEnd?: boolean
    checkOutStart?: boolean
    checkOutEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    checkInStart?: boolean
    checkInEnd?: boolean
    checkOutStart?: boolean
    checkOutEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    name?: boolean
    checkInStart?: boolean
    checkInEnd?: boolean
    checkOutStart?: boolean
    checkOutEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "checkInStart" | "checkInEnd" | "checkOutStart" | "checkOutEnd" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | Schedule$attendancesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      checkInStart: Date
      checkInEnd: Date
      checkOutStart: Date
      checkOutEnd: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends Schedule$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly name: FieldRef<"Schedule", 'String'>
    readonly checkInStart: FieldRef<"Schedule", 'DateTime'>
    readonly checkInEnd: FieldRef<"Schedule", 'DateTime'>
    readonly checkOutStart: FieldRef<"Schedule", 'DateTime'>
    readonly checkOutEnd: FieldRef<"Schedule", 'DateTime'>
    readonly isActive: FieldRef<"Schedule", 'Boolean'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.attendances
   */
  export type Schedule$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    rfidCardId: number | null
    deviceId: number | null
    scheduleId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    rfidCardId: number | null
    deviceId: number | null
    scheduleId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    date: Date | null
    checkInTime: Date | null
    checkOutTime: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    rfidCardId: number | null
    deviceId: number | null
    scheduleId: number | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    checkInTime: Date | null
    checkOutTime: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    rfidCardId: number | null
    deviceId: number | null
    scheduleId: number | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    date: number
    checkInTime: number
    checkOutTime: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    rfidCardId: number
    deviceId: number
    scheduleId: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    userId?: true
    rfidCardId?: true
    deviceId?: true
    scheduleId?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    userId?: true
    rfidCardId?: true
    deviceId?: true
    scheduleId?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    date?: true
    checkInTime?: true
    checkOutTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    rfidCardId?: true
    deviceId?: true
    scheduleId?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    date?: true
    checkInTime?: true
    checkOutTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    rfidCardId?: true
    deviceId?: true
    scheduleId?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    date?: true
    checkInTime?: true
    checkOutTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    rfidCardId?: true
    deviceId?: true
    scheduleId?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    date: Date
    checkInTime: Date | null
    checkOutTime: Date | null
    status: $Enums.AttendanceStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    rfidCardId: number
    deviceId: number
    scheduleId: number
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    rfidCardId?: boolean
    deviceId?: boolean
    scheduleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rfidCard?: boolean | RfidCardDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    rfidCardId?: boolean
    deviceId?: boolean
    scheduleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rfidCard?: boolean | RfidCardDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    rfidCardId?: boolean
    deviceId?: boolean
    scheduleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rfidCard?: boolean | RfidCardDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    date?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    rfidCardId?: boolean
    deviceId?: boolean
    scheduleId?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "checkInTime" | "checkOutTime" | "status" | "notes" | "createdAt" | "updatedAt" | "userId" | "rfidCardId" | "deviceId" | "scheduleId", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rfidCard?: boolean | RfidCardDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rfidCard?: boolean | RfidCardDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rfidCard?: boolean | RfidCardDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rfidCard: Prisma.$RfidCardPayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs>
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      checkInTime: Date | null
      checkOutTime: Date | null
      status: $Enums.AttendanceStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: number
      rfidCardId: number
      deviceId: number
      scheduleId: number
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rfidCard<T extends RfidCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RfidCardDefaultArgs<ExtArgs>>): Prisma__RfidCardClient<$Result.GetResult<Prisma.$RfidCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly checkInTime: FieldRef<"Attendance", 'DateTime'>
    readonly checkOutTime: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly notes: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
    readonly userId: FieldRef<"Attendance", 'Int'>
    readonly rfidCardId: FieldRef<"Attendance", 'Int'>
    readonly deviceId: FieldRef<"Attendance", 'Int'>
    readonly scheduleId: FieldRef<"Attendance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model AdminActivity
   */

  export type AggregateAdminActivity = {
    _count: AdminActivityCountAggregateOutputType | null
    _avg: AdminActivityAvgAggregateOutputType | null
    _sum: AdminActivitySumAggregateOutputType | null
    _min: AdminActivityMinAggregateOutputType | null
    _max: AdminActivityMaxAggregateOutputType | null
  }

  export type AdminActivityAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type AdminActivitySumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type AdminActivityMinAggregateOutputType = {
    id: number | null
    action: string | null
    description: string | null
    ipAddress: string | null
    timestamp: Date | null
    adminId: number | null
  }

  export type AdminActivityMaxAggregateOutputType = {
    id: number | null
    action: string | null
    description: string | null
    ipAddress: string | null
    timestamp: Date | null
    adminId: number | null
  }

  export type AdminActivityCountAggregateOutputType = {
    id: number
    action: number
    description: number
    ipAddress: number
    timestamp: number
    adminId: number
    _all: number
  }


  export type AdminActivityAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type AdminActivitySumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type AdminActivityMinAggregateInputType = {
    id?: true
    action?: true
    description?: true
    ipAddress?: true
    timestamp?: true
    adminId?: true
  }

  export type AdminActivityMaxAggregateInputType = {
    id?: true
    action?: true
    description?: true
    ipAddress?: true
    timestamp?: true
    adminId?: true
  }

  export type AdminActivityCountAggregateInputType = {
    id?: true
    action?: true
    description?: true
    ipAddress?: true
    timestamp?: true
    adminId?: true
    _all?: true
  }

  export type AdminActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActivity to aggregate.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminActivities
    **/
    _count?: true | AdminActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminActivityMaxAggregateInputType
  }

  export type GetAdminActivityAggregateType<T extends AdminActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminActivity[P]>
      : GetScalarType<T[P], AggregateAdminActivity[P]>
  }




  export type AdminActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActivityWhereInput
    orderBy?: AdminActivityOrderByWithAggregationInput | AdminActivityOrderByWithAggregationInput[]
    by: AdminActivityScalarFieldEnum[] | AdminActivityScalarFieldEnum
    having?: AdminActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminActivityCountAggregateInputType | true
    _avg?: AdminActivityAvgAggregateInputType
    _sum?: AdminActivitySumAggregateInputType
    _min?: AdminActivityMinAggregateInputType
    _max?: AdminActivityMaxAggregateInputType
  }

  export type AdminActivityGroupByOutputType = {
    id: number
    action: string
    description: string
    ipAddress: string | null
    timestamp: Date
    adminId: number
    _count: AdminActivityCountAggregateOutputType | null
    _avg: AdminActivityAvgAggregateOutputType | null
    _sum: AdminActivitySumAggregateOutputType | null
    _min: AdminActivityMinAggregateOutputType | null
    _max: AdminActivityMaxAggregateOutputType | null
  }

  type GetAdminActivityGroupByPayload<T extends AdminActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminActivityGroupByOutputType[P]>
            : GetScalarType<T[P], AdminActivityGroupByOutputType[P]>
        }
      >
    >


  export type AdminActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    adminId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminActivity"]>

  export type AdminActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    adminId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminActivity"]>

  export type AdminActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    adminId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminActivity"]>

  export type AdminActivitySelectScalar = {
    id?: boolean
    action?: boolean
    description?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    adminId?: boolean
  }

  export type AdminActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "description" | "ipAddress" | "timestamp" | "adminId", ExtArgs["result"]["adminActivity"]>
  export type AdminActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type AdminActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type AdminActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $AdminActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminActivity"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      description: string
      ipAddress: string | null
      timestamp: Date
      adminId: number
    }, ExtArgs["result"]["adminActivity"]>
    composites: {}
  }

  type AdminActivityGetPayload<S extends boolean | null | undefined | AdminActivityDefaultArgs> = $Result.GetResult<Prisma.$AdminActivityPayload, S>

  type AdminActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminActivityCountAggregateInputType | true
    }

  export interface AdminActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminActivity'], meta: { name: 'AdminActivity' } }
    /**
     * Find zero or one AdminActivity that matches the filter.
     * @param {AdminActivityFindUniqueArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminActivityFindUniqueArgs>(args: SelectSubset<T, AdminActivityFindUniqueArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminActivityFindUniqueOrThrowArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindFirstArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminActivityFindFirstArgs>(args?: SelectSubset<T, AdminActivityFindFirstArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindFirstOrThrowArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminActivities
     * const adminActivities = await prisma.adminActivity.findMany()
     * 
     * // Get first 10 AdminActivities
     * const adminActivities = await prisma.adminActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminActivityWithIdOnly = await prisma.adminActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminActivityFindManyArgs>(args?: SelectSubset<T, AdminActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminActivity.
     * @param {AdminActivityCreateArgs} args - Arguments to create a AdminActivity.
     * @example
     * // Create one AdminActivity
     * const AdminActivity = await prisma.adminActivity.create({
     *   data: {
     *     // ... data to create a AdminActivity
     *   }
     * })
     * 
     */
    create<T extends AdminActivityCreateArgs>(args: SelectSubset<T, AdminActivityCreateArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminActivities.
     * @param {AdminActivityCreateManyArgs} args - Arguments to create many AdminActivities.
     * @example
     * // Create many AdminActivities
     * const adminActivity = await prisma.adminActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminActivityCreateManyArgs>(args?: SelectSubset<T, AdminActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminActivities and returns the data saved in the database.
     * @param {AdminActivityCreateManyAndReturnArgs} args - Arguments to create many AdminActivities.
     * @example
     * // Create many AdminActivities
     * const adminActivity = await prisma.adminActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminActivities and only return the `id`
     * const adminActivityWithIdOnly = await prisma.adminActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminActivity.
     * @param {AdminActivityDeleteArgs} args - Arguments to delete one AdminActivity.
     * @example
     * // Delete one AdminActivity
     * const AdminActivity = await prisma.adminActivity.delete({
     *   where: {
     *     // ... filter to delete one AdminActivity
     *   }
     * })
     * 
     */
    delete<T extends AdminActivityDeleteArgs>(args: SelectSubset<T, AdminActivityDeleteArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminActivity.
     * @param {AdminActivityUpdateArgs} args - Arguments to update one AdminActivity.
     * @example
     * // Update one AdminActivity
     * const adminActivity = await prisma.adminActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminActivityUpdateArgs>(args: SelectSubset<T, AdminActivityUpdateArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminActivities.
     * @param {AdminActivityDeleteManyArgs} args - Arguments to filter AdminActivities to delete.
     * @example
     * // Delete a few AdminActivities
     * const { count } = await prisma.adminActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminActivityDeleteManyArgs>(args?: SelectSubset<T, AdminActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminActivities
     * const adminActivity = await prisma.adminActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminActivityUpdateManyArgs>(args: SelectSubset<T, AdminActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminActivities and returns the data updated in the database.
     * @param {AdminActivityUpdateManyAndReturnArgs} args - Arguments to update many AdminActivities.
     * @example
     * // Update many AdminActivities
     * const adminActivity = await prisma.adminActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminActivities and only return the `id`
     * const adminActivityWithIdOnly = await prisma.adminActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminActivity.
     * @param {AdminActivityUpsertArgs} args - Arguments to update or create a AdminActivity.
     * @example
     * // Update or create a AdminActivity
     * const adminActivity = await prisma.adminActivity.upsert({
     *   create: {
     *     // ... data to create a AdminActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminActivity we want to update
     *   }
     * })
     */
    upsert<T extends AdminActivityUpsertArgs>(args: SelectSubset<T, AdminActivityUpsertArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityCountArgs} args - Arguments to filter AdminActivities to count.
     * @example
     * // Count the number of AdminActivities
     * const count = await prisma.adminActivity.count({
     *   where: {
     *     // ... the filter for the AdminActivities we want to count
     *   }
     * })
    **/
    count<T extends AdminActivityCountArgs>(
      args?: Subset<T, AdminActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminActivityAggregateArgs>(args: Subset<T, AdminActivityAggregateArgs>): Prisma.PrismaPromise<GetAdminActivityAggregateType<T>>

    /**
     * Group by AdminActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityGroupByArgs} args - Group by arguments.
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
      T extends AdminActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminActivityGroupByArgs['orderBy'] }
        : { orderBy?: AdminActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminActivity model
   */
  readonly fields: AdminActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminActivity model
   */
  interface AdminActivityFieldRefs {
    readonly id: FieldRef<"AdminActivity", 'Int'>
    readonly action: FieldRef<"AdminActivity", 'String'>
    readonly description: FieldRef<"AdminActivity", 'String'>
    readonly ipAddress: FieldRef<"AdminActivity", 'String'>
    readonly timestamp: FieldRef<"AdminActivity", 'DateTime'>
    readonly adminId: FieldRef<"AdminActivity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AdminActivity findUnique
   */
  export type AdminActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity findUniqueOrThrow
   */
  export type AdminActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity findFirst
   */
  export type AdminActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActivities.
     */
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity findFirstOrThrow
   */
  export type AdminActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActivities.
     */
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity findMany
   */
  export type AdminActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivities to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity create
   */
  export type AdminActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminActivity.
     */
    data: XOR<AdminActivityCreateInput, AdminActivityUncheckedCreateInput>
  }

  /**
   * AdminActivity createMany
   */
  export type AdminActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminActivities.
     */
    data: AdminActivityCreateManyInput | AdminActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminActivity createManyAndReturn
   */
  export type AdminActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * The data used to create many AdminActivities.
     */
    data: AdminActivityCreateManyInput | AdminActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminActivity update
   */
  export type AdminActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminActivity.
     */
    data: XOR<AdminActivityUpdateInput, AdminActivityUncheckedUpdateInput>
    /**
     * Choose, which AdminActivity to update.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity updateMany
   */
  export type AdminActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminActivities.
     */
    data: XOR<AdminActivityUpdateManyMutationInput, AdminActivityUncheckedUpdateManyInput>
    /**
     * Filter which AdminActivities to update
     */
    where?: AdminActivityWhereInput
    /**
     * Limit how many AdminActivities to update.
     */
    limit?: number
  }

  /**
   * AdminActivity updateManyAndReturn
   */
  export type AdminActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * The data used to update AdminActivities.
     */
    data: XOR<AdminActivityUpdateManyMutationInput, AdminActivityUncheckedUpdateManyInput>
    /**
     * Filter which AdminActivities to update
     */
    where?: AdminActivityWhereInput
    /**
     * Limit how many AdminActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminActivity upsert
   */
  export type AdminActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminActivity to update in case it exists.
     */
    where: AdminActivityWhereUniqueInput
    /**
     * In case the AdminActivity found by the `where` argument doesn't exist, create a new AdminActivity with this data.
     */
    create: XOR<AdminActivityCreateInput, AdminActivityUncheckedCreateInput>
    /**
     * In case the AdminActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminActivityUpdateInput, AdminActivityUncheckedUpdateInput>
  }

  /**
   * AdminActivity delete
   */
  export type AdminActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter which AdminActivity to delete.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity deleteMany
   */
  export type AdminActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActivities to delete
     */
    where?: AdminActivityWhereInput
    /**
     * Limit how many AdminActivities to delete.
     */
    limit?: number
  }

  /**
   * AdminActivity without action
   */
  export type AdminActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
  }


  /**
   * Model DeviceTelemetry
   */

  export type AggregateDeviceTelemetry = {
    _count: DeviceTelemetryCountAggregateOutputType | null
    _avg: DeviceTelemetryAvgAggregateOutputType | null
    _sum: DeviceTelemetrySumAggregateOutputType | null
    _min: DeviceTelemetryMinAggregateOutputType | null
    _max: DeviceTelemetryMaxAggregateOutputType | null
  }

  export type DeviceTelemetryAvgAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
    batteryLevel: number | null
    signalStrength: number | null
    deviceId: number | null
  }

  export type DeviceTelemetrySumAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
    batteryLevel: number | null
    signalStrength: number | null
    deviceId: number | null
  }

  export type DeviceTelemetryMinAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
    batteryLevel: number | null
    signalStrength: number | null
    timestamp: Date | null
    deviceId: number | null
  }

  export type DeviceTelemetryMaxAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
    batteryLevel: number | null
    signalStrength: number | null
    timestamp: Date | null
    deviceId: number | null
  }

  export type DeviceTelemetryCountAggregateOutputType = {
    id: number
    temperature: number
    humidity: number
    batteryLevel: number
    signalStrength: number
    timestamp: number
    deviceId: number
    _all: number
  }


  export type DeviceTelemetryAvgAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    batteryLevel?: true
    signalStrength?: true
    deviceId?: true
  }

  export type DeviceTelemetrySumAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    batteryLevel?: true
    signalStrength?: true
    deviceId?: true
  }

  export type DeviceTelemetryMinAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    batteryLevel?: true
    signalStrength?: true
    timestamp?: true
    deviceId?: true
  }

  export type DeviceTelemetryMaxAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    batteryLevel?: true
    signalStrength?: true
    timestamp?: true
    deviceId?: true
  }

  export type DeviceTelemetryCountAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    batteryLevel?: true
    signalStrength?: true
    timestamp?: true
    deviceId?: true
    _all?: true
  }

  export type DeviceTelemetryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceTelemetry to aggregate.
     */
    where?: DeviceTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTelemetries to fetch.
     */
    orderBy?: DeviceTelemetryOrderByWithRelationInput | DeviceTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceTelemetries
    **/
    _count?: true | DeviceTelemetryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceTelemetryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceTelemetrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceTelemetryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceTelemetryMaxAggregateInputType
  }

  export type GetDeviceTelemetryAggregateType<T extends DeviceTelemetryAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceTelemetry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceTelemetry[P]>
      : GetScalarType<T[P], AggregateDeviceTelemetry[P]>
  }




  export type DeviceTelemetryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTelemetryWhereInput
    orderBy?: DeviceTelemetryOrderByWithAggregationInput | DeviceTelemetryOrderByWithAggregationInput[]
    by: DeviceTelemetryScalarFieldEnum[] | DeviceTelemetryScalarFieldEnum
    having?: DeviceTelemetryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceTelemetryCountAggregateInputType | true
    _avg?: DeviceTelemetryAvgAggregateInputType
    _sum?: DeviceTelemetrySumAggregateInputType
    _min?: DeviceTelemetryMinAggregateInputType
    _max?: DeviceTelemetryMaxAggregateInputType
  }

  export type DeviceTelemetryGroupByOutputType = {
    id: number
    temperature: number | null
    humidity: number | null
    batteryLevel: number | null
    signalStrength: number | null
    timestamp: Date
    deviceId: number
    _count: DeviceTelemetryCountAggregateOutputType | null
    _avg: DeviceTelemetryAvgAggregateOutputType | null
    _sum: DeviceTelemetrySumAggregateOutputType | null
    _min: DeviceTelemetryMinAggregateOutputType | null
    _max: DeviceTelemetryMaxAggregateOutputType | null
  }

  type GetDeviceTelemetryGroupByPayload<T extends DeviceTelemetryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceTelemetryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceTelemetryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceTelemetryGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceTelemetryGroupByOutputType[P]>
        }
      >
    >


  export type DeviceTelemetrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperature?: boolean
    humidity?: boolean
    batteryLevel?: boolean
    signalStrength?: boolean
    timestamp?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceTelemetry"]>

  export type DeviceTelemetrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperature?: boolean
    humidity?: boolean
    batteryLevel?: boolean
    signalStrength?: boolean
    timestamp?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceTelemetry"]>

  export type DeviceTelemetrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperature?: boolean
    humidity?: boolean
    batteryLevel?: boolean
    signalStrength?: boolean
    timestamp?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceTelemetry"]>

  export type DeviceTelemetrySelectScalar = {
    id?: boolean
    temperature?: boolean
    humidity?: boolean
    batteryLevel?: boolean
    signalStrength?: boolean
    timestamp?: boolean
    deviceId?: boolean
  }

  export type DeviceTelemetryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "temperature" | "humidity" | "batteryLevel" | "signalStrength" | "timestamp" | "deviceId", ExtArgs["result"]["deviceTelemetry"]>
  export type DeviceTelemetryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceTelemetryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceTelemetryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DeviceTelemetryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceTelemetry"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      temperature: number | null
      humidity: number | null
      batteryLevel: number | null
      signalStrength: number | null
      timestamp: Date
      deviceId: number
    }, ExtArgs["result"]["deviceTelemetry"]>
    composites: {}
  }

  type DeviceTelemetryGetPayload<S extends boolean | null | undefined | DeviceTelemetryDefaultArgs> = $Result.GetResult<Prisma.$DeviceTelemetryPayload, S>

  type DeviceTelemetryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceTelemetryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceTelemetryCountAggregateInputType | true
    }

  export interface DeviceTelemetryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceTelemetry'], meta: { name: 'DeviceTelemetry' } }
    /**
     * Find zero or one DeviceTelemetry that matches the filter.
     * @param {DeviceTelemetryFindUniqueArgs} args - Arguments to find a DeviceTelemetry
     * @example
     * // Get one DeviceTelemetry
     * const deviceTelemetry = await prisma.deviceTelemetry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceTelemetryFindUniqueArgs>(args: SelectSubset<T, DeviceTelemetryFindUniqueArgs<ExtArgs>>): Prisma__DeviceTelemetryClient<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceTelemetry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceTelemetryFindUniqueOrThrowArgs} args - Arguments to find a DeviceTelemetry
     * @example
     * // Get one DeviceTelemetry
     * const deviceTelemetry = await prisma.deviceTelemetry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceTelemetryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceTelemetryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceTelemetryClient<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceTelemetry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTelemetryFindFirstArgs} args - Arguments to find a DeviceTelemetry
     * @example
     * // Get one DeviceTelemetry
     * const deviceTelemetry = await prisma.deviceTelemetry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceTelemetryFindFirstArgs>(args?: SelectSubset<T, DeviceTelemetryFindFirstArgs<ExtArgs>>): Prisma__DeviceTelemetryClient<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceTelemetry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTelemetryFindFirstOrThrowArgs} args - Arguments to find a DeviceTelemetry
     * @example
     * // Get one DeviceTelemetry
     * const deviceTelemetry = await prisma.deviceTelemetry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceTelemetryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceTelemetryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceTelemetryClient<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceTelemetries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTelemetryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceTelemetries
     * const deviceTelemetries = await prisma.deviceTelemetry.findMany()
     * 
     * // Get first 10 DeviceTelemetries
     * const deviceTelemetries = await prisma.deviceTelemetry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceTelemetryWithIdOnly = await prisma.deviceTelemetry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceTelemetryFindManyArgs>(args?: SelectSubset<T, DeviceTelemetryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceTelemetry.
     * @param {DeviceTelemetryCreateArgs} args - Arguments to create a DeviceTelemetry.
     * @example
     * // Create one DeviceTelemetry
     * const DeviceTelemetry = await prisma.deviceTelemetry.create({
     *   data: {
     *     // ... data to create a DeviceTelemetry
     *   }
     * })
     * 
     */
    create<T extends DeviceTelemetryCreateArgs>(args: SelectSubset<T, DeviceTelemetryCreateArgs<ExtArgs>>): Prisma__DeviceTelemetryClient<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceTelemetries.
     * @param {DeviceTelemetryCreateManyArgs} args - Arguments to create many DeviceTelemetries.
     * @example
     * // Create many DeviceTelemetries
     * const deviceTelemetry = await prisma.deviceTelemetry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceTelemetryCreateManyArgs>(args?: SelectSubset<T, DeviceTelemetryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceTelemetries and returns the data saved in the database.
     * @param {DeviceTelemetryCreateManyAndReturnArgs} args - Arguments to create many DeviceTelemetries.
     * @example
     * // Create many DeviceTelemetries
     * const deviceTelemetry = await prisma.deviceTelemetry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceTelemetries and only return the `id`
     * const deviceTelemetryWithIdOnly = await prisma.deviceTelemetry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceTelemetryCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceTelemetryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceTelemetry.
     * @param {DeviceTelemetryDeleteArgs} args - Arguments to delete one DeviceTelemetry.
     * @example
     * // Delete one DeviceTelemetry
     * const DeviceTelemetry = await prisma.deviceTelemetry.delete({
     *   where: {
     *     // ... filter to delete one DeviceTelemetry
     *   }
     * })
     * 
     */
    delete<T extends DeviceTelemetryDeleteArgs>(args: SelectSubset<T, DeviceTelemetryDeleteArgs<ExtArgs>>): Prisma__DeviceTelemetryClient<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceTelemetry.
     * @param {DeviceTelemetryUpdateArgs} args - Arguments to update one DeviceTelemetry.
     * @example
     * // Update one DeviceTelemetry
     * const deviceTelemetry = await prisma.deviceTelemetry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceTelemetryUpdateArgs>(args: SelectSubset<T, DeviceTelemetryUpdateArgs<ExtArgs>>): Prisma__DeviceTelemetryClient<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceTelemetries.
     * @param {DeviceTelemetryDeleteManyArgs} args - Arguments to filter DeviceTelemetries to delete.
     * @example
     * // Delete a few DeviceTelemetries
     * const { count } = await prisma.deviceTelemetry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceTelemetryDeleteManyArgs>(args?: SelectSubset<T, DeviceTelemetryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTelemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTelemetryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceTelemetries
     * const deviceTelemetry = await prisma.deviceTelemetry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceTelemetryUpdateManyArgs>(args: SelectSubset<T, DeviceTelemetryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTelemetries and returns the data updated in the database.
     * @param {DeviceTelemetryUpdateManyAndReturnArgs} args - Arguments to update many DeviceTelemetries.
     * @example
     * // Update many DeviceTelemetries
     * const deviceTelemetry = await prisma.deviceTelemetry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceTelemetries and only return the `id`
     * const deviceTelemetryWithIdOnly = await prisma.deviceTelemetry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceTelemetryUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceTelemetryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceTelemetry.
     * @param {DeviceTelemetryUpsertArgs} args - Arguments to update or create a DeviceTelemetry.
     * @example
     * // Update or create a DeviceTelemetry
     * const deviceTelemetry = await prisma.deviceTelemetry.upsert({
     *   create: {
     *     // ... data to create a DeviceTelemetry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceTelemetry we want to update
     *   }
     * })
     */
    upsert<T extends DeviceTelemetryUpsertArgs>(args: SelectSubset<T, DeviceTelemetryUpsertArgs<ExtArgs>>): Prisma__DeviceTelemetryClient<$Result.GetResult<Prisma.$DeviceTelemetryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceTelemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTelemetryCountArgs} args - Arguments to filter DeviceTelemetries to count.
     * @example
     * // Count the number of DeviceTelemetries
     * const count = await prisma.deviceTelemetry.count({
     *   where: {
     *     // ... the filter for the DeviceTelemetries we want to count
     *   }
     * })
    **/
    count<T extends DeviceTelemetryCountArgs>(
      args?: Subset<T, DeviceTelemetryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceTelemetryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceTelemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTelemetryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceTelemetryAggregateArgs>(args: Subset<T, DeviceTelemetryAggregateArgs>): Prisma.PrismaPromise<GetDeviceTelemetryAggregateType<T>>

    /**
     * Group by DeviceTelemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTelemetryGroupByArgs} args - Group by arguments.
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
      T extends DeviceTelemetryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceTelemetryGroupByArgs['orderBy'] }
        : { orderBy?: DeviceTelemetryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceTelemetryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceTelemetryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceTelemetry model
   */
  readonly fields: DeviceTelemetryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceTelemetry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceTelemetryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceTelemetry model
   */
  interface DeviceTelemetryFieldRefs {
    readonly id: FieldRef<"DeviceTelemetry", 'Int'>
    readonly temperature: FieldRef<"DeviceTelemetry", 'Float'>
    readonly humidity: FieldRef<"DeviceTelemetry", 'Float'>
    readonly batteryLevel: FieldRef<"DeviceTelemetry", 'Float'>
    readonly signalStrength: FieldRef<"DeviceTelemetry", 'Int'>
    readonly timestamp: FieldRef<"DeviceTelemetry", 'DateTime'>
    readonly deviceId: FieldRef<"DeviceTelemetry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeviceTelemetry findUnique
   */
  export type DeviceTelemetryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTelemetry to fetch.
     */
    where: DeviceTelemetryWhereUniqueInput
  }

  /**
   * DeviceTelemetry findUniqueOrThrow
   */
  export type DeviceTelemetryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTelemetry to fetch.
     */
    where: DeviceTelemetryWhereUniqueInput
  }

  /**
   * DeviceTelemetry findFirst
   */
  export type DeviceTelemetryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTelemetry to fetch.
     */
    where?: DeviceTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTelemetries to fetch.
     */
    orderBy?: DeviceTelemetryOrderByWithRelationInput | DeviceTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTelemetries.
     */
    cursor?: DeviceTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTelemetries.
     */
    distinct?: DeviceTelemetryScalarFieldEnum | DeviceTelemetryScalarFieldEnum[]
  }

  /**
   * DeviceTelemetry findFirstOrThrow
   */
  export type DeviceTelemetryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTelemetry to fetch.
     */
    where?: DeviceTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTelemetries to fetch.
     */
    orderBy?: DeviceTelemetryOrderByWithRelationInput | DeviceTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTelemetries.
     */
    cursor?: DeviceTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTelemetries.
     */
    distinct?: DeviceTelemetryScalarFieldEnum | DeviceTelemetryScalarFieldEnum[]
  }

  /**
   * DeviceTelemetry findMany
   */
  export type DeviceTelemetryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTelemetries to fetch.
     */
    where?: DeviceTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTelemetries to fetch.
     */
    orderBy?: DeviceTelemetryOrderByWithRelationInput | DeviceTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceTelemetries.
     */
    cursor?: DeviceTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTelemetries.
     */
    skip?: number
    distinct?: DeviceTelemetryScalarFieldEnum | DeviceTelemetryScalarFieldEnum[]
  }

  /**
   * DeviceTelemetry create
   */
  export type DeviceTelemetryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceTelemetry.
     */
    data: XOR<DeviceTelemetryCreateInput, DeviceTelemetryUncheckedCreateInput>
  }

  /**
   * DeviceTelemetry createMany
   */
  export type DeviceTelemetryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceTelemetries.
     */
    data: DeviceTelemetryCreateManyInput | DeviceTelemetryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceTelemetry createManyAndReturn
   */
  export type DeviceTelemetryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceTelemetries.
     */
    data: DeviceTelemetryCreateManyInput | DeviceTelemetryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceTelemetry update
   */
  export type DeviceTelemetryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceTelemetry.
     */
    data: XOR<DeviceTelemetryUpdateInput, DeviceTelemetryUncheckedUpdateInput>
    /**
     * Choose, which DeviceTelemetry to update.
     */
    where: DeviceTelemetryWhereUniqueInput
  }

  /**
   * DeviceTelemetry updateMany
   */
  export type DeviceTelemetryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceTelemetries.
     */
    data: XOR<DeviceTelemetryUpdateManyMutationInput, DeviceTelemetryUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTelemetries to update
     */
    where?: DeviceTelemetryWhereInput
    /**
     * Limit how many DeviceTelemetries to update.
     */
    limit?: number
  }

  /**
   * DeviceTelemetry updateManyAndReturn
   */
  export type DeviceTelemetryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * The data used to update DeviceTelemetries.
     */
    data: XOR<DeviceTelemetryUpdateManyMutationInput, DeviceTelemetryUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTelemetries to update
     */
    where?: DeviceTelemetryWhereInput
    /**
     * Limit how many DeviceTelemetries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceTelemetry upsert
   */
  export type DeviceTelemetryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceTelemetry to update in case it exists.
     */
    where: DeviceTelemetryWhereUniqueInput
    /**
     * In case the DeviceTelemetry found by the `where` argument doesn't exist, create a new DeviceTelemetry with this data.
     */
    create: XOR<DeviceTelemetryCreateInput, DeviceTelemetryUncheckedCreateInput>
    /**
     * In case the DeviceTelemetry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceTelemetryUpdateInput, DeviceTelemetryUncheckedUpdateInput>
  }

  /**
   * DeviceTelemetry delete
   */
  export type DeviceTelemetryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
    /**
     * Filter which DeviceTelemetry to delete.
     */
    where: DeviceTelemetryWhereUniqueInput
  }

  /**
   * DeviceTelemetry deleteMany
   */
  export type DeviceTelemetryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceTelemetries to delete
     */
    where?: DeviceTelemetryWhereInput
    /**
     * Limit how many DeviceTelemetries to delete.
     */
    limit?: number
  }

  /**
   * DeviceTelemetry without action
   */
  export type DeviceTelemetryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTelemetry
     */
    select?: DeviceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceTelemetry
     */
    omit?: DeviceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTelemetryInclude<ExtArgs> | null
  }


  /**
   * Model ApiToken
   */

  export type AggregateApiToken = {
    _count: ApiTokenCountAggregateOutputType | null
    _avg: ApiTokenAvgAggregateOutputType | null
    _sum: ApiTokenSumAggregateOutputType | null
    _min: ApiTokenMinAggregateOutputType | null
    _max: ApiTokenMaxAggregateOutputType | null
  }

  export type ApiTokenAvgAggregateOutputType = {
    id: number | null
    deviceId: number | null
  }

  export type ApiTokenSumAggregateOutputType = {
    id: number | null
    deviceId: number | null
  }

  export type ApiTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
    deviceId: number | null
  }

  export type ApiTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
    deviceId: number | null
  }

  export type ApiTokenCountAggregateOutputType = {
    id: number
    token: number
    description: number
    isActive: number
    createdAt: number
    expiresAt: number
    deviceId: number
    _all: number
  }


  export type ApiTokenAvgAggregateInputType = {
    id?: true
    deviceId?: true
  }

  export type ApiTokenSumAggregateInputType = {
    id?: true
    deviceId?: true
  }

  export type ApiTokenMinAggregateInputType = {
    id?: true
    token?: true
    description?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
    deviceId?: true
  }

  export type ApiTokenMaxAggregateInputType = {
    id?: true
    token?: true
    description?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
    deviceId?: true
  }

  export type ApiTokenCountAggregateInputType = {
    id?: true
    token?: true
    description?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
    deviceId?: true
    _all?: true
  }

  export type ApiTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiToken to aggregate.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiTokens
    **/
    _count?: true | ApiTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiTokenMaxAggregateInputType
  }

  export type GetApiTokenAggregateType<T extends ApiTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateApiToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiToken[P]>
      : GetScalarType<T[P], AggregateApiToken[P]>
  }




  export type ApiTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiTokenWhereInput
    orderBy?: ApiTokenOrderByWithAggregationInput | ApiTokenOrderByWithAggregationInput[]
    by: ApiTokenScalarFieldEnum[] | ApiTokenScalarFieldEnum
    having?: ApiTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiTokenCountAggregateInputType | true
    _avg?: ApiTokenAvgAggregateInputType
    _sum?: ApiTokenSumAggregateInputType
    _min?: ApiTokenMinAggregateInputType
    _max?: ApiTokenMaxAggregateInputType
  }

  export type ApiTokenGroupByOutputType = {
    id: number
    token: string
    description: string | null
    isActive: boolean
    createdAt: Date
    expiresAt: Date | null
    deviceId: number
    _count: ApiTokenCountAggregateOutputType | null
    _avg: ApiTokenAvgAggregateOutputType | null
    _sum: ApiTokenSumAggregateOutputType | null
    _min: ApiTokenMinAggregateOutputType | null
    _max: ApiTokenMaxAggregateOutputType | null
  }

  type GetApiTokenGroupByPayload<T extends ApiTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ApiTokenGroupByOutputType[P]>
        }
      >
    >


  export type ApiTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectScalar = {
    id?: boolean
    token?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    deviceId?: boolean
  }

  export type ApiTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "description" | "isActive" | "createdAt" | "expiresAt" | "deviceId", ExtArgs["result"]["apiToken"]>
  export type ApiTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type ApiTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type ApiTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $ApiTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiToken"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      description: string | null
      isActive: boolean
      createdAt: Date
      expiresAt: Date | null
      deviceId: number
    }, ExtArgs["result"]["apiToken"]>
    composites: {}
  }

  type ApiTokenGetPayload<S extends boolean | null | undefined | ApiTokenDefaultArgs> = $Result.GetResult<Prisma.$ApiTokenPayload, S>

  type ApiTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiTokenCountAggregateInputType | true
    }

  export interface ApiTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiToken'], meta: { name: 'ApiToken' } }
    /**
     * Find zero or one ApiToken that matches the filter.
     * @param {ApiTokenFindUniqueArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiTokenFindUniqueArgs>(args: SelectSubset<T, ApiTokenFindUniqueArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiTokenFindUniqueOrThrowArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindFirstArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiTokenFindFirstArgs>(args?: SelectSubset<T, ApiTokenFindFirstArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindFirstOrThrowArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiTokens
     * const apiTokens = await prisma.apiToken.findMany()
     * 
     * // Get first 10 ApiTokens
     * const apiTokens = await prisma.apiToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiTokenWithIdOnly = await prisma.apiToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiTokenFindManyArgs>(args?: SelectSubset<T, ApiTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiToken.
     * @param {ApiTokenCreateArgs} args - Arguments to create a ApiToken.
     * @example
     * // Create one ApiToken
     * const ApiToken = await prisma.apiToken.create({
     *   data: {
     *     // ... data to create a ApiToken
     *   }
     * })
     * 
     */
    create<T extends ApiTokenCreateArgs>(args: SelectSubset<T, ApiTokenCreateArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiTokens.
     * @param {ApiTokenCreateManyArgs} args - Arguments to create many ApiTokens.
     * @example
     * // Create many ApiTokens
     * const apiToken = await prisma.apiToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiTokenCreateManyArgs>(args?: SelectSubset<T, ApiTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiTokens and returns the data saved in the database.
     * @param {ApiTokenCreateManyAndReturnArgs} args - Arguments to create many ApiTokens.
     * @example
     * // Create many ApiTokens
     * const apiToken = await prisma.apiToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiTokens and only return the `id`
     * const apiTokenWithIdOnly = await prisma.apiToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiToken.
     * @param {ApiTokenDeleteArgs} args - Arguments to delete one ApiToken.
     * @example
     * // Delete one ApiToken
     * const ApiToken = await prisma.apiToken.delete({
     *   where: {
     *     // ... filter to delete one ApiToken
     *   }
     * })
     * 
     */
    delete<T extends ApiTokenDeleteArgs>(args: SelectSubset<T, ApiTokenDeleteArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiToken.
     * @param {ApiTokenUpdateArgs} args - Arguments to update one ApiToken.
     * @example
     * // Update one ApiToken
     * const apiToken = await prisma.apiToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiTokenUpdateArgs>(args: SelectSubset<T, ApiTokenUpdateArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiTokens.
     * @param {ApiTokenDeleteManyArgs} args - Arguments to filter ApiTokens to delete.
     * @example
     * // Delete a few ApiTokens
     * const { count } = await prisma.apiToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiTokenDeleteManyArgs>(args?: SelectSubset<T, ApiTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiTokens
     * const apiToken = await prisma.apiToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiTokenUpdateManyArgs>(args: SelectSubset<T, ApiTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiTokens and returns the data updated in the database.
     * @param {ApiTokenUpdateManyAndReturnArgs} args - Arguments to update many ApiTokens.
     * @example
     * // Update many ApiTokens
     * const apiToken = await prisma.apiToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiTokens and only return the `id`
     * const apiTokenWithIdOnly = await prisma.apiToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiToken.
     * @param {ApiTokenUpsertArgs} args - Arguments to update or create a ApiToken.
     * @example
     * // Update or create a ApiToken
     * const apiToken = await prisma.apiToken.upsert({
     *   create: {
     *     // ... data to create a ApiToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiToken we want to update
     *   }
     * })
     */
    upsert<T extends ApiTokenUpsertArgs>(args: SelectSubset<T, ApiTokenUpsertArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenCountArgs} args - Arguments to filter ApiTokens to count.
     * @example
     * // Count the number of ApiTokens
     * const count = await prisma.apiToken.count({
     *   where: {
     *     // ... the filter for the ApiTokens we want to count
     *   }
     * })
    **/
    count<T extends ApiTokenCountArgs>(
      args?: Subset<T, ApiTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiTokenAggregateArgs>(args: Subset<T, ApiTokenAggregateArgs>): Prisma.PrismaPromise<GetApiTokenAggregateType<T>>

    /**
     * Group by ApiToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenGroupByArgs} args - Group by arguments.
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
      T extends ApiTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiTokenGroupByArgs['orderBy'] }
        : { orderBy?: ApiTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiToken model
   */
  readonly fields: ApiTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiToken model
   */
  interface ApiTokenFieldRefs {
    readonly id: FieldRef<"ApiToken", 'Int'>
    readonly token: FieldRef<"ApiToken", 'String'>
    readonly description: FieldRef<"ApiToken", 'String'>
    readonly isActive: FieldRef<"ApiToken", 'Boolean'>
    readonly createdAt: FieldRef<"ApiToken", 'DateTime'>
    readonly expiresAt: FieldRef<"ApiToken", 'DateTime'>
    readonly deviceId: FieldRef<"ApiToken", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApiToken findUnique
   */
  export type ApiTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken findUniqueOrThrow
   */
  export type ApiTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken findFirst
   */
  export type ApiTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiTokens.
     */
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken findFirstOrThrow
   */
  export type ApiTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiTokens.
     */
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken findMany
   */
  export type ApiTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiTokens to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken create
   */
  export type ApiTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiToken.
     */
    data: XOR<ApiTokenCreateInput, ApiTokenUncheckedCreateInput>
  }

  /**
   * ApiToken createMany
   */
  export type ApiTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiTokens.
     */
    data: ApiTokenCreateManyInput | ApiTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiToken createManyAndReturn
   */
  export type ApiTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ApiTokens.
     */
    data: ApiTokenCreateManyInput | ApiTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiToken update
   */
  export type ApiTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiToken.
     */
    data: XOR<ApiTokenUpdateInput, ApiTokenUncheckedUpdateInput>
    /**
     * Choose, which ApiToken to update.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken updateMany
   */
  export type ApiTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiTokens.
     */
    data: XOR<ApiTokenUpdateManyMutationInput, ApiTokenUncheckedUpdateManyInput>
    /**
     * Filter which ApiTokens to update
     */
    where?: ApiTokenWhereInput
    /**
     * Limit how many ApiTokens to update.
     */
    limit?: number
  }

  /**
   * ApiToken updateManyAndReturn
   */
  export type ApiTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * The data used to update ApiTokens.
     */
    data: XOR<ApiTokenUpdateManyMutationInput, ApiTokenUncheckedUpdateManyInput>
    /**
     * Filter which ApiTokens to update
     */
    where?: ApiTokenWhereInput
    /**
     * Limit how many ApiTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiToken upsert
   */
  export type ApiTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiToken to update in case it exists.
     */
    where: ApiTokenWhereUniqueInput
    /**
     * In case the ApiToken found by the `where` argument doesn't exist, create a new ApiToken with this data.
     */
    create: XOR<ApiTokenCreateInput, ApiTokenUncheckedCreateInput>
    /**
     * In case the ApiToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiTokenUpdateInput, ApiTokenUncheckedUpdateInput>
  }

  /**
   * ApiToken delete
   */
  export type ApiTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter which ApiToken to delete.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken deleteMany
   */
  export type ApiTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiTokens to delete
     */
    where?: ApiTokenWhereInput
    /**
     * Limit how many ApiTokens to delete.
     */
    limit?: number
  }

  /**
   * ApiToken without action
   */
  export type ApiTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiToken
     */
    omit?: ApiTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
  }


  /**
   * Model SystemSetting
   */

  export type AggregateSystemSetting = {
    _count: SystemSettingCountAggregateOutputType | null
    _avg: SystemSettingAvgAggregateOutputType | null
    _sum: SystemSettingSumAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  export type SystemSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SystemSettingSumAggregateOutputType = {
    id: number | null
  }

  export type SystemSettingMinAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SystemSettingMaxAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SystemSettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingAvgAggregateInputType = {
    id?: true
  }

  export type SystemSettingSumAggregateInputType = {
    id?: true
  }

  export type SystemSettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type SystemSettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type SystemSettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSetting to aggregate.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingMaxAggregateInputType
  }

  export type GetSystemSettingAggregateType<T extends SystemSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSetting[P]>
      : GetScalarType<T[P], AggregateSystemSetting[P]>
  }




  export type SystemSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingWhereInput
    orderBy?: SystemSettingOrderByWithAggregationInput | SystemSettingOrderByWithAggregationInput[]
    by: SystemSettingScalarFieldEnum[] | SystemSettingScalarFieldEnum
    having?: SystemSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingCountAggregateInputType | true
    _avg?: SystemSettingAvgAggregateInputType
    _sum?: SystemSettingSumAggregateInputType
    _min?: SystemSettingMinAggregateInputType
    _max?: SystemSettingMaxAggregateInputType
  }

  export type SystemSettingGroupByOutputType = {
    id: number
    key: string
    value: string
    description: string | null
    updatedAt: Date
    _count: SystemSettingCountAggregateOutputType | null
    _avg: SystemSettingAvgAggregateOutputType | null
    _sum: SystemSettingSumAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  type GetSystemSettingGroupByPayload<T extends SystemSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "updatedAt", ExtArgs["result"]["systemSetting"]>

  export type $SystemSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      value: string
      description: string | null
      updatedAt: Date
    }, ExtArgs["result"]["systemSetting"]>
    composites: {}
  }

  type SystemSettingGetPayload<S extends boolean | null | undefined | SystemSettingDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingPayload, S>

  type SystemSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingCountAggregateInputType | true
    }

  export interface SystemSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSetting'], meta: { name: 'SystemSetting' } }
    /**
     * Find zero or one SystemSetting that matches the filter.
     * @param {SystemSettingFindUniqueArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingFindUniqueArgs>(args: SelectSubset<T, SystemSettingFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingFindUniqueOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingFindFirstArgs>(args?: SelectSubset<T, SystemSettingFindFirstArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingFindManyArgs>(args?: SelectSubset<T, SystemSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSetting.
     * @param {SystemSettingCreateArgs} args - Arguments to create a SystemSetting.
     * @example
     * // Create one SystemSetting
     * const SystemSetting = await prisma.systemSetting.create({
     *   data: {
     *     // ... data to create a SystemSetting
     *   }
     * })
     * 
     */
    create<T extends SystemSettingCreateArgs>(args: SelectSubset<T, SystemSettingCreateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingCreateManyArgs>(args?: SelectSubset<T, SystemSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSetting.
     * @param {SystemSettingDeleteArgs} args - Arguments to delete one SystemSetting.
     * @example
     * // Delete one SystemSetting
     * const SystemSetting = await prisma.systemSetting.delete({
     *   where: {
     *     // ... filter to delete one SystemSetting
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingDeleteArgs>(args: SelectSubset<T, SystemSettingDeleteArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSetting.
     * @param {SystemSettingUpdateArgs} args - Arguments to update one SystemSetting.
     * @example
     * // Update one SystemSetting
     * const systemSetting = await prisma.systemSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingUpdateArgs>(args: SelectSubset<T, SystemSettingUpdateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingDeleteManyArgs>(args?: SelectSubset<T, SystemSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingUpdateManyArgs>(args: SelectSubset<T, SystemSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSetting.
     * @param {SystemSettingUpsertArgs} args - Arguments to update or create a SystemSetting.
     * @example
     * // Update or create a SystemSetting
     * const systemSetting = await prisma.systemSetting.upsert({
     *   create: {
     *     // ... data to create a SystemSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSetting we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingUpsertArgs>(args: SelectSubset<T, SystemSettingUpsertArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSetting.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingCountArgs>(
      args?: Subset<T, SystemSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemSettingAggregateArgs>(args: Subset<T, SystemSettingAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingAggregateType<T>>

    /**
     * Group by SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingGroupByArgs} args - Group by arguments.
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
      T extends SystemSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSetting model
   */
  readonly fields: SystemSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSetting model
   */
  interface SystemSettingFieldRefs {
    readonly id: FieldRef<"SystemSetting", 'Int'>
    readonly key: FieldRef<"SystemSetting", 'String'>
    readonly value: FieldRef<"SystemSetting", 'String'>
    readonly description: FieldRef<"SystemSetting", 'String'>
    readonly updatedAt: FieldRef<"SystemSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSetting findUnique
   */
  export type SystemSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findUniqueOrThrow
   */
  export type SystemSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findFirst
   */
  export type SystemSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findFirstOrThrow
   */
  export type SystemSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findMany
   */
  export type SystemSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting create
   */
  export type SystemSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSetting.
     */
    data: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
  }

  /**
   * SystemSetting createMany
   */
  export type SystemSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSetting createManyAndReturn
   */
  export type SystemSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSetting update
   */
  export type SystemSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSetting.
     */
    data: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
    /**
     * Choose, which SystemSetting to update.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting updateMany
   */
  export type SystemSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting updateManyAndReturn
   */
  export type SystemSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting upsert
   */
  export type SystemSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSetting to update in case it exists.
     */
    where: SystemSettingWhereUniqueInput
    /**
     * In case the SystemSetting found by the `where` argument doesn't exist, create a new SystemSetting with this data.
     */
    create: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
    /**
     * In case the SystemSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
  }

  /**
   * SystemSetting delete
   */
  export type SystemSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter which SystemSetting to delete.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting deleteMany
   */
  export type SystemSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSetting without action
   */
  export type SystemSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    fullName: 'fullName',
    department: 'department',
    position: 'position',
    email: 'email',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RfidCardScalarFieldEnum: {
    id: 'id',
    cardUid: 'cardUid',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type RfidCardScalarFieldEnum = (typeof RfidCardScalarFieldEnum)[keyof typeof RfidCardScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    deviceName: 'deviceName',
    macAddress: 'macAddress',
    ipAddress: 'ipAddress',
    location: 'location',
    isActive: 'isActive',
    lastOnline: 'lastOnline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    checkInStart: 'checkInStart',
    checkInEnd: 'checkInEnd',
    checkOutStart: 'checkOutStart',
    checkOutEnd: 'checkOutEnd',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    date: 'date',
    checkInTime: 'checkInTime',
    checkOutTime: 'checkOutTime',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    rfidCardId: 'rfidCardId',
    deviceId: 'deviceId',
    scheduleId: 'scheduleId'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AdminActivityScalarFieldEnum: {
    id: 'id',
    action: 'action',
    description: 'description',
    ipAddress: 'ipAddress',
    timestamp: 'timestamp',
    adminId: 'adminId'
  };

  export type AdminActivityScalarFieldEnum = (typeof AdminActivityScalarFieldEnum)[keyof typeof AdminActivityScalarFieldEnum]


  export const DeviceTelemetryScalarFieldEnum: {
    id: 'id',
    temperature: 'temperature',
    humidity: 'humidity',
    batteryLevel: 'batteryLevel',
    signalStrength: 'signalStrength',
    timestamp: 'timestamp',
    deviceId: 'deviceId'
  };

  export type DeviceTelemetryScalarFieldEnum = (typeof DeviceTelemetryScalarFieldEnum)[keyof typeof DeviceTelemetryScalarFieldEnum]


  export const ApiTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    deviceId: 'deviceId'
  };

  export type ApiTokenScalarFieldEnum = (typeof ApiTokenScalarFieldEnum)[keyof typeof ApiTokenScalarFieldEnum]


  export const SystemSettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    activities?: AdminActivityListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activities?: AdminActivityOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    activities?: AdminActivityListRelationFilter
  }, "id" | "username" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nim?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    position?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rfidCard?: XOR<RfidCardNullableScalarRelationFilter, RfidCardWhereInput> | null
    attendances?: AttendanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    fullName?: SortOrder
    department?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rfidCard?: RfidCardOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nim?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    position?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rfidCard?: XOR<RfidCardNullableScalarRelationFilter, RfidCardWhereInput> | null
    attendances?: AttendanceListRelationFilter
  }, "id" | "nim">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    fullName?: SortOrder
    department?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nim?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    position?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RfidCardWhereInput = {
    AND?: RfidCardWhereInput | RfidCardWhereInput[]
    OR?: RfidCardWhereInput[]
    NOT?: RfidCardWhereInput | RfidCardWhereInput[]
    id?: IntFilter<"RfidCard"> | number
    cardUid?: StringFilter<"RfidCard"> | string
    isActive?: BoolFilter<"RfidCard"> | boolean
    createdAt?: DateTimeFilter<"RfidCard"> | Date | string
    updatedAt?: DateTimeFilter<"RfidCard"> | Date | string
    userId?: IntFilter<"RfidCard"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendances?: AttendanceListRelationFilter
  }

  export type RfidCardOrderByWithRelationInput = {
    id?: SortOrder
    cardUid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type RfidCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cardUid?: string
    userId?: number
    AND?: RfidCardWhereInput | RfidCardWhereInput[]
    OR?: RfidCardWhereInput[]
    NOT?: RfidCardWhereInput | RfidCardWhereInput[]
    isActive?: BoolFilter<"RfidCard"> | boolean
    createdAt?: DateTimeFilter<"RfidCard"> | Date | string
    updatedAt?: DateTimeFilter<"RfidCard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendances?: AttendanceListRelationFilter
  }, "id" | "cardUid" | "userId">

  export type RfidCardOrderByWithAggregationInput = {
    id?: SortOrder
    cardUid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: RfidCardCountOrderByAggregateInput
    _avg?: RfidCardAvgOrderByAggregateInput
    _max?: RfidCardMaxOrderByAggregateInput
    _min?: RfidCardMinOrderByAggregateInput
    _sum?: RfidCardSumOrderByAggregateInput
  }

  export type RfidCardScalarWhereWithAggregatesInput = {
    AND?: RfidCardScalarWhereWithAggregatesInput | RfidCardScalarWhereWithAggregatesInput[]
    OR?: RfidCardScalarWhereWithAggregatesInput[]
    NOT?: RfidCardScalarWhereWithAggregatesInput | RfidCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RfidCard"> | number
    cardUid?: StringWithAggregatesFilter<"RfidCard"> | string
    isActive?: BoolWithAggregatesFilter<"RfidCard"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RfidCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RfidCard"> | Date | string
    userId?: IntWithAggregatesFilter<"RfidCard"> | number
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    deviceName?: StringFilter<"Device"> | string
    macAddress?: StringFilter<"Device"> | string
    ipAddress?: StringNullableFilter<"Device"> | string | null
    location?: StringNullableFilter<"Device"> | string | null
    isActive?: BoolFilter<"Device"> | boolean
    lastOnline?: DateTimeNullableFilter<"Device"> | Date | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    attendances?: AttendanceListRelationFilter
    telemetry?: DeviceTelemetryListRelationFilter
    apiToken?: XOR<ApiTokenNullableScalarRelationFilter, ApiTokenWhereInput> | null
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    deviceName?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastOnline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendances?: AttendanceOrderByRelationAggregateInput
    telemetry?: DeviceTelemetryOrderByRelationAggregateInput
    apiToken?: ApiTokenOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    macAddress?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    deviceName?: StringFilter<"Device"> | string
    ipAddress?: StringNullableFilter<"Device"> | string | null
    location?: StringNullableFilter<"Device"> | string | null
    isActive?: BoolFilter<"Device"> | boolean
    lastOnline?: DateTimeNullableFilter<"Device"> | Date | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    attendances?: AttendanceListRelationFilter
    telemetry?: DeviceTelemetryListRelationFilter
    apiToken?: XOR<ApiTokenNullableScalarRelationFilter, ApiTokenWhereInput> | null
  }, "id" | "macAddress">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    deviceName?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastOnline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    deviceName?: StringWithAggregatesFilter<"Device"> | string
    macAddress?: StringWithAggregatesFilter<"Device"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Device"> | string | null
    location?: StringNullableWithAggregatesFilter<"Device"> | string | null
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    lastOnline?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    name?: StringFilter<"Schedule"> | string
    checkInStart?: DateTimeFilter<"Schedule"> | Date | string
    checkInEnd?: DateTimeFilter<"Schedule"> | Date | string
    checkOutStart?: DateTimeFilter<"Schedule"> | Date | string
    checkOutEnd?: DateTimeFilter<"Schedule"> | Date | string
    isActive?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    attendances?: AttendanceListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    checkInStart?: SortOrder
    checkInEnd?: SortOrder
    checkOutStart?: SortOrder
    checkOutEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    name?: StringFilter<"Schedule"> | string
    checkInStart?: DateTimeFilter<"Schedule"> | Date | string
    checkInEnd?: DateTimeFilter<"Schedule"> | Date | string
    checkOutStart?: DateTimeFilter<"Schedule"> | Date | string
    checkOutEnd?: DateTimeFilter<"Schedule"> | Date | string
    isActive?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    attendances?: AttendanceListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    checkInStart?: SortOrder
    checkInEnd?: SortOrder
    checkOutStart?: SortOrder
    checkOutEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    name?: StringWithAggregatesFilter<"Schedule"> | string
    checkInStart?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    checkInEnd?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    checkOutStart?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    checkOutEnd?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Schedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkInTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    userId?: IntFilter<"Attendance"> | number
    rfidCardId?: IntFilter<"Attendance"> | number
    deviceId?: IntFilter<"Attendance"> | number
    scheduleId?: IntFilter<"Attendance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rfidCard?: XOR<RfidCardScalarRelationFilter, RfidCardWhereInput>
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    checkInTime?: SortOrderInput | SortOrder
    checkOutTime?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    rfidCardId?: SortOrder
    deviceId?: SortOrder
    scheduleId?: SortOrder
    user?: UserOrderByWithRelationInput
    rfidCard?: RfidCardOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_date?: AttendanceUserIdDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkInTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    userId?: IntFilter<"Attendance"> | number
    rfidCardId?: IntFilter<"Attendance"> | number
    deviceId?: IntFilter<"Attendance"> | number
    scheduleId?: IntFilter<"Attendance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rfidCard?: XOR<RfidCardScalarRelationFilter, RfidCardWhereInput>
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id" | "userId_date">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    checkInTime?: SortOrderInput | SortOrder
    checkOutTime?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    rfidCardId?: SortOrder
    deviceId?: SortOrder
    scheduleId?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    checkInTime?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    checkOutTime?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    userId?: IntWithAggregatesFilter<"Attendance"> | number
    rfidCardId?: IntWithAggregatesFilter<"Attendance"> | number
    deviceId?: IntWithAggregatesFilter<"Attendance"> | number
    scheduleId?: IntWithAggregatesFilter<"Attendance"> | number
  }

  export type AdminActivityWhereInput = {
    AND?: AdminActivityWhereInput | AdminActivityWhereInput[]
    OR?: AdminActivityWhereInput[]
    NOT?: AdminActivityWhereInput | AdminActivityWhereInput[]
    id?: IntFilter<"AdminActivity"> | number
    action?: StringFilter<"AdminActivity"> | string
    description?: StringFilter<"AdminActivity"> | string
    ipAddress?: StringNullableFilter<"AdminActivity"> | string | null
    timestamp?: DateTimeFilter<"AdminActivity"> | Date | string
    adminId?: IntFilter<"AdminActivity"> | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type AdminActivityOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    adminId?: SortOrder
    admin?: AdminOrderByWithRelationInput
  }

  export type AdminActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminActivityWhereInput | AdminActivityWhereInput[]
    OR?: AdminActivityWhereInput[]
    NOT?: AdminActivityWhereInput | AdminActivityWhereInput[]
    action?: StringFilter<"AdminActivity"> | string
    description?: StringFilter<"AdminActivity"> | string
    ipAddress?: StringNullableFilter<"AdminActivity"> | string | null
    timestamp?: DateTimeFilter<"AdminActivity"> | Date | string
    adminId?: IntFilter<"AdminActivity"> | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id">

  export type AdminActivityOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    adminId?: SortOrder
    _count?: AdminActivityCountOrderByAggregateInput
    _avg?: AdminActivityAvgOrderByAggregateInput
    _max?: AdminActivityMaxOrderByAggregateInput
    _min?: AdminActivityMinOrderByAggregateInput
    _sum?: AdminActivitySumOrderByAggregateInput
  }

  export type AdminActivityScalarWhereWithAggregatesInput = {
    AND?: AdminActivityScalarWhereWithAggregatesInput | AdminActivityScalarWhereWithAggregatesInput[]
    OR?: AdminActivityScalarWhereWithAggregatesInput[]
    NOT?: AdminActivityScalarWhereWithAggregatesInput | AdminActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminActivity"> | number
    action?: StringWithAggregatesFilter<"AdminActivity"> | string
    description?: StringWithAggregatesFilter<"AdminActivity"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"AdminActivity"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"AdminActivity"> | Date | string
    adminId?: IntWithAggregatesFilter<"AdminActivity"> | number
  }

  export type DeviceTelemetryWhereInput = {
    AND?: DeviceTelemetryWhereInput | DeviceTelemetryWhereInput[]
    OR?: DeviceTelemetryWhereInput[]
    NOT?: DeviceTelemetryWhereInput | DeviceTelemetryWhereInput[]
    id?: IntFilter<"DeviceTelemetry"> | number
    temperature?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    humidity?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    batteryLevel?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    signalStrength?: IntNullableFilter<"DeviceTelemetry"> | number | null
    timestamp?: DateTimeFilter<"DeviceTelemetry"> | Date | string
    deviceId?: IntFilter<"DeviceTelemetry"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type DeviceTelemetryOrderByWithRelationInput = {
    id?: SortOrder
    temperature?: SortOrderInput | SortOrder
    humidity?: SortOrderInput | SortOrder
    batteryLevel?: SortOrderInput | SortOrder
    signalStrength?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceTelemetryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceTelemetryWhereInput | DeviceTelemetryWhereInput[]
    OR?: DeviceTelemetryWhereInput[]
    NOT?: DeviceTelemetryWhereInput | DeviceTelemetryWhereInput[]
    temperature?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    humidity?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    batteryLevel?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    signalStrength?: IntNullableFilter<"DeviceTelemetry"> | number | null
    timestamp?: DateTimeFilter<"DeviceTelemetry"> | Date | string
    deviceId?: IntFilter<"DeviceTelemetry"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type DeviceTelemetryOrderByWithAggregationInput = {
    id?: SortOrder
    temperature?: SortOrderInput | SortOrder
    humidity?: SortOrderInput | SortOrder
    batteryLevel?: SortOrderInput | SortOrder
    signalStrength?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
    _count?: DeviceTelemetryCountOrderByAggregateInput
    _avg?: DeviceTelemetryAvgOrderByAggregateInput
    _max?: DeviceTelemetryMaxOrderByAggregateInput
    _min?: DeviceTelemetryMinOrderByAggregateInput
    _sum?: DeviceTelemetrySumOrderByAggregateInput
  }

  export type DeviceTelemetryScalarWhereWithAggregatesInput = {
    AND?: DeviceTelemetryScalarWhereWithAggregatesInput | DeviceTelemetryScalarWhereWithAggregatesInput[]
    OR?: DeviceTelemetryScalarWhereWithAggregatesInput[]
    NOT?: DeviceTelemetryScalarWhereWithAggregatesInput | DeviceTelemetryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeviceTelemetry"> | number
    temperature?: FloatNullableWithAggregatesFilter<"DeviceTelemetry"> | number | null
    humidity?: FloatNullableWithAggregatesFilter<"DeviceTelemetry"> | number | null
    batteryLevel?: FloatNullableWithAggregatesFilter<"DeviceTelemetry"> | number | null
    signalStrength?: IntNullableWithAggregatesFilter<"DeviceTelemetry"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"DeviceTelemetry"> | Date | string
    deviceId?: IntWithAggregatesFilter<"DeviceTelemetry"> | number
  }

  export type ApiTokenWhereInput = {
    AND?: ApiTokenWhereInput | ApiTokenWhereInput[]
    OR?: ApiTokenWhereInput[]
    NOT?: ApiTokenWhereInput | ApiTokenWhereInput[]
    id?: IntFilter<"ApiToken"> | number
    token?: StringFilter<"ApiToken"> | string
    description?: StringNullableFilter<"ApiToken"> | string | null
    isActive?: BoolFilter<"ApiToken"> | boolean
    createdAt?: DateTimeFilter<"ApiToken"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ApiToken"> | Date | string | null
    deviceId?: IntFilter<"ApiToken"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type ApiTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    deviceId?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type ApiTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    deviceId?: number
    AND?: ApiTokenWhereInput | ApiTokenWhereInput[]
    OR?: ApiTokenWhereInput[]
    NOT?: ApiTokenWhereInput | ApiTokenWhereInput[]
    description?: StringNullableFilter<"ApiToken"> | string | null
    isActive?: BoolFilter<"ApiToken"> | boolean
    createdAt?: DateTimeFilter<"ApiToken"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ApiToken"> | Date | string | null
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id" | "token" | "deviceId">

  export type ApiTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    deviceId?: SortOrder
    _count?: ApiTokenCountOrderByAggregateInput
    _avg?: ApiTokenAvgOrderByAggregateInput
    _max?: ApiTokenMaxOrderByAggregateInput
    _min?: ApiTokenMinOrderByAggregateInput
    _sum?: ApiTokenSumOrderByAggregateInput
  }

  export type ApiTokenScalarWhereWithAggregatesInput = {
    AND?: ApiTokenScalarWhereWithAggregatesInput | ApiTokenScalarWhereWithAggregatesInput[]
    OR?: ApiTokenScalarWhereWithAggregatesInput[]
    NOT?: ApiTokenScalarWhereWithAggregatesInput | ApiTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApiToken"> | number
    token?: StringWithAggregatesFilter<"ApiToken"> | string
    description?: StringNullableWithAggregatesFilter<"ApiToken"> | string | null
    isActive?: BoolWithAggregatesFilter<"ApiToken"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ApiToken"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiToken"> | Date | string | null
    deviceId?: IntWithAggregatesFilter<"ApiToken"> | number
  }

  export type SystemSettingWhereInput = {
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    id?: IntFilter<"SystemSetting"> | number
    key?: StringFilter<"SystemSetting"> | string
    value?: StringFilter<"SystemSetting"> | string
    description?: StringNullableFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
  }

  export type SystemSettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    value?: StringFilter<"SystemSetting"> | string
    description?: StringNullableFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
  }, "id" | "key">

  export type SystemSettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingCountOrderByAggregateInput
    _avg?: SystemSettingAvgOrderByAggregateInput
    _max?: SystemSettingMaxOrderByAggregateInput
    _min?: SystemSettingMinOrderByAggregateInput
    _sum?: SystemSettingSumOrderByAggregateInput
  }

  export type SystemSettingScalarWhereWithAggregatesInput = {
    AND?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    OR?: SystemSettingScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemSetting"> | number
    key?: StringWithAggregatesFilter<"SystemSetting"> | string
    value?: StringWithAggregatesFilter<"SystemSetting"> | string
    description?: StringNullableWithAggregatesFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSetting"> | Date | string
  }

  export type AdminCreateInput = {
    username: string
    password: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: AdminActivityCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: AdminActivityUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: AdminActivityUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: AdminActivityUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    nim: string
    fullName: string
    department?: string | null
    position?: string | null
    email?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rfidCard?: RfidCardCreateNestedOneWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nim: string
    fullName: string
    department?: string | null
    position?: string | null
    email?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rfidCard?: RfidCardUncheckedCreateNestedOneWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfidCard?: RfidCardUpdateOneWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfidCard?: RfidCardUncheckedUpdateOneWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nim: string
    fullName: string
    department?: string | null
    position?: string | null
    email?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RfidCardCreateInput = {
    cardUid: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRfidCardInput
    attendances?: AttendanceCreateNestedManyWithoutRfidCardInput
  }

  export type RfidCardUncheckedCreateInput = {
    id?: number
    cardUid: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    attendances?: AttendanceUncheckedCreateNestedManyWithoutRfidCardInput
  }

  export type RfidCardUpdateInput = {
    cardUid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRfidCardNestedInput
    attendances?: AttendanceUpdateManyWithoutRfidCardNestedInput
  }

  export type RfidCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardUid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    attendances?: AttendanceUncheckedUpdateManyWithoutRfidCardNestedInput
  }

  export type RfidCardCreateManyInput = {
    id?: number
    cardUid: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type RfidCardUpdateManyMutationInput = {
    cardUid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RfidCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardUid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateInput = {
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutDeviceInput
    telemetry?: DeviceTelemetryCreateNestedManyWithoutDeviceInput
    apiToken?: ApiTokenCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutDeviceInput
    telemetry?: DeviceTelemetryUncheckedCreateNestedManyWithoutDeviceInput
    apiToken?: ApiTokenUncheckedCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutDeviceNestedInput
    telemetry?: DeviceTelemetryUpdateManyWithoutDeviceNestedInput
    apiToken?: ApiTokenUpdateOneWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutDeviceNestedInput
    telemetry?: DeviceTelemetryUncheckedUpdateManyWithoutDeviceNestedInput
    apiToken?: ApiTokenUncheckedUpdateOneWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: number
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    name: string
    checkInStart: Date | string
    checkInEnd: Date | string
    checkOutStart: Date | string
    checkOutEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    name: string
    checkInStart: Date | string
    checkInEnd: Date | string
    checkOutStart: Date | string
    checkOutEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    checkInStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    checkInStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: number
    name: string
    checkInStart: Date | string
    checkInEnd: Date | string
    checkOutStart: Date | string
    checkOutEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    checkInStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    checkInStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAttendancesInput
    rfidCard: RfidCardCreateNestedOneWithoutAttendancesInput
    device: DeviceCreateNestedOneWithoutAttendancesInput
    schedule: ScheduleCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    rfidCardId: number
    deviceId: number
    scheduleId: number
  }

  export type AttendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    rfidCard?: RfidCardUpdateOneRequiredWithoutAttendancesNestedInput
    device?: DeviceUpdateOneRequiredWithoutAttendancesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    rfidCardId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateManyInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    rfidCardId: number
    deviceId: number
    scheduleId: number
  }

  export type AttendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    rfidCardId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type AdminActivityCreateInput = {
    action: string
    description: string
    ipAddress?: string | null
    timestamp?: Date | string
    admin: AdminCreateNestedOneWithoutActivitiesInput
  }

  export type AdminActivityUncheckedCreateInput = {
    id?: number
    action: string
    description: string
    ipAddress?: string | null
    timestamp?: Date | string
    adminId: number
  }

  export type AdminActivityUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type AdminActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type AdminActivityCreateManyInput = {
    id?: number
    action: string
    description: string
    ipAddress?: string | null
    timestamp?: Date | string
    adminId: number
  }

  export type AdminActivityUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceTelemetryCreateInput = {
    temperature?: number | null
    humidity?: number | null
    batteryLevel?: number | null
    signalStrength?: number | null
    timestamp?: Date | string
    device: DeviceCreateNestedOneWithoutTelemetryInput
  }

  export type DeviceTelemetryUncheckedCreateInput = {
    id?: number
    temperature?: number | null
    humidity?: number | null
    batteryLevel?: number | null
    signalStrength?: number | null
    timestamp?: Date | string
    deviceId: number
  }

  export type DeviceTelemetryUpdateInput = {
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutTelemetryNestedInput
  }

  export type DeviceTelemetryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceTelemetryCreateManyInput = {
    id?: number
    temperature?: number | null
    humidity?: number | null
    batteryLevel?: number | null
    signalStrength?: number | null
    timestamp?: Date | string
    deviceId: number
  }

  export type DeviceTelemetryUpdateManyMutationInput = {
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTelemetryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type ApiTokenCreateInput = {
    token: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
    device: DeviceCreateNestedOneWithoutApiTokenInput
  }

  export type ApiTokenUncheckedCreateInput = {
    id?: number
    token: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
    deviceId: number
  }

  export type ApiTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: DeviceUpdateOneRequiredWithoutApiTokenNestedInput
  }

  export type ApiTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type ApiTokenCreateManyInput = {
    id?: number
    token: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
    deviceId: number
  }

  export type ApiTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemSettingCreateInput = {
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUncheckedCreateInput = {
    id?: number
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingCreateManyInput = {
    id?: number
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminActivityListRelationFilter = {
    every?: AdminActivityWhereInput
    some?: AdminActivityWhereInput
    none?: AdminActivityWhereInput
  }

  export type AdminActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RfidCardNullableScalarRelationFilter = {
    is?: RfidCardWhereInput | null
    isNot?: RfidCardWhereInput | null
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    fullName?: SortOrder
    department?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    fullName?: SortOrder
    department?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    fullName?: SortOrder
    department?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RfidCardCountOrderByAggregateInput = {
    id?: SortOrder
    cardUid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RfidCardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RfidCardMaxOrderByAggregateInput = {
    id?: SortOrder
    cardUid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RfidCardMinOrderByAggregateInput = {
    id?: SortOrder
    cardUid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RfidCardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DeviceTelemetryListRelationFilter = {
    every?: DeviceTelemetryWhereInput
    some?: DeviceTelemetryWhereInput
    none?: DeviceTelemetryWhereInput
  }

  export type ApiTokenNullableScalarRelationFilter = {
    is?: ApiTokenWhereInput | null
    isNot?: ApiTokenWhereInput | null
  }

  export type DeviceTelemetryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    lastOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    lastOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    lastOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    checkInStart?: SortOrder
    checkInEnd?: SortOrder
    checkOutStart?: SortOrder
    checkOutEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    checkInStart?: SortOrder
    checkInEnd?: SortOrder
    checkOutStart?: SortOrder
    checkOutEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    checkInStart?: SortOrder
    checkInEnd?: SortOrder
    checkOutStart?: SortOrder
    checkOutEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type RfidCardScalarRelationFilter = {
    is?: RfidCardWhereInput
    isNot?: RfidCardWhereInput
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type AttendanceUserIdDateCompoundUniqueInput = {
    userId: number
    date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    rfidCardId?: SortOrder
    deviceId?: SortOrder
    scheduleId?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rfidCardId?: SortOrder
    deviceId?: SortOrder
    scheduleId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    rfidCardId?: SortOrder
    deviceId?: SortOrder
    scheduleId?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    rfidCardId?: SortOrder
    deviceId?: SortOrder
    scheduleId?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rfidCardId?: SortOrder
    deviceId?: SortOrder
    scheduleId?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type AdminActivityCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    adminId?: SortOrder
  }

  export type AdminActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type AdminActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    adminId?: SortOrder
  }

  export type AdminActivityMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    adminId?: SortOrder
  }

  export type AdminActivitySumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DeviceTelemetryCountOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    batteryLevel?: SortOrder
    signalStrength?: SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceTelemetryAvgOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    batteryLevel?: SortOrder
    signalStrength?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceTelemetryMaxOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    batteryLevel?: SortOrder
    signalStrength?: SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceTelemetryMinOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    batteryLevel?: SortOrder
    signalStrength?: SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceTelemetrySumOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    batteryLevel?: SortOrder
    signalStrength?: SortOrder
    deviceId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ApiTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    deviceId?: SortOrder
  }

  export type ApiTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
  }

  export type ApiTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    deviceId?: SortOrder
  }

  export type ApiTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    deviceId?: SortOrder
  }

  export type ApiTokenSumOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
  }

  export type SystemSettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SystemSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminActivityCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput> | AdminActivityCreateWithoutAdminInput[] | AdminActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActivityCreateOrConnectWithoutAdminInput | AdminActivityCreateOrConnectWithoutAdminInput[]
    createMany?: AdminActivityCreateManyAdminInputEnvelope
    connect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
  }

  export type AdminActivityUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput> | AdminActivityCreateWithoutAdminInput[] | AdminActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActivityCreateOrConnectWithoutAdminInput | AdminActivityCreateOrConnectWithoutAdminInput[]
    createMany?: AdminActivityCreateManyAdminInputEnvelope
    connect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminActivityUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput> | AdminActivityCreateWithoutAdminInput[] | AdminActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActivityCreateOrConnectWithoutAdminInput | AdminActivityCreateOrConnectWithoutAdminInput[]
    upsert?: AdminActivityUpsertWithWhereUniqueWithoutAdminInput | AdminActivityUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminActivityCreateManyAdminInputEnvelope
    set?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    disconnect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    delete?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    connect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    update?: AdminActivityUpdateWithWhereUniqueWithoutAdminInput | AdminActivityUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminActivityUpdateManyWithWhereWithoutAdminInput | AdminActivityUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminActivityScalarWhereInput | AdminActivityScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminActivityUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput> | AdminActivityCreateWithoutAdminInput[] | AdminActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActivityCreateOrConnectWithoutAdminInput | AdminActivityCreateOrConnectWithoutAdminInput[]
    upsert?: AdminActivityUpsertWithWhereUniqueWithoutAdminInput | AdminActivityUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminActivityCreateManyAdminInputEnvelope
    set?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    disconnect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    delete?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    connect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    update?: AdminActivityUpdateWithWhereUniqueWithoutAdminInput | AdminActivityUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminActivityUpdateManyWithWhereWithoutAdminInput | AdminActivityUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminActivityScalarWhereInput | AdminActivityScalarWhereInput[]
  }

  export type RfidCardCreateNestedOneWithoutUserInput = {
    create?: XOR<RfidCardCreateWithoutUserInput, RfidCardUncheckedCreateWithoutUserInput>
    connectOrCreate?: RfidCardCreateOrConnectWithoutUserInput
    connect?: RfidCardWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type RfidCardUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RfidCardCreateWithoutUserInput, RfidCardUncheckedCreateWithoutUserInput>
    connectOrCreate?: RfidCardCreateOrConnectWithoutUserInput
    connect?: RfidCardWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RfidCardUpdateOneWithoutUserNestedInput = {
    create?: XOR<RfidCardCreateWithoutUserInput, RfidCardUncheckedCreateWithoutUserInput>
    connectOrCreate?: RfidCardCreateOrConnectWithoutUserInput
    upsert?: RfidCardUpsertWithoutUserInput
    disconnect?: RfidCardWhereInput | boolean
    delete?: RfidCardWhereInput | boolean
    connect?: RfidCardWhereUniqueInput
    update?: XOR<XOR<RfidCardUpdateToOneWithWhereWithoutUserInput, RfidCardUpdateWithoutUserInput>, RfidCardUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type RfidCardUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RfidCardCreateWithoutUserInput, RfidCardUncheckedCreateWithoutUserInput>
    connectOrCreate?: RfidCardCreateOrConnectWithoutUserInput
    upsert?: RfidCardUpsertWithoutUserInput
    disconnect?: RfidCardWhereInput | boolean
    delete?: RfidCardWhereInput | boolean
    connect?: RfidCardWhereUniqueInput
    update?: XOR<XOR<RfidCardUpdateToOneWithWhereWithoutUserInput, RfidCardUpdateWithoutUserInput>, RfidCardUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRfidCardInput = {
    create?: XOR<UserCreateWithoutRfidCardInput, UserUncheckedCreateWithoutRfidCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutRfidCardInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutRfidCardInput = {
    create?: XOR<AttendanceCreateWithoutRfidCardInput, AttendanceUncheckedCreateWithoutRfidCardInput> | AttendanceCreateWithoutRfidCardInput[] | AttendanceUncheckedCreateWithoutRfidCardInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRfidCardInput | AttendanceCreateOrConnectWithoutRfidCardInput[]
    createMany?: AttendanceCreateManyRfidCardInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutRfidCardInput = {
    create?: XOR<AttendanceCreateWithoutRfidCardInput, AttendanceUncheckedCreateWithoutRfidCardInput> | AttendanceCreateWithoutRfidCardInput[] | AttendanceUncheckedCreateWithoutRfidCardInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRfidCardInput | AttendanceCreateOrConnectWithoutRfidCardInput[]
    createMany?: AttendanceCreateManyRfidCardInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRfidCardNestedInput = {
    create?: XOR<UserCreateWithoutRfidCardInput, UserUncheckedCreateWithoutRfidCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutRfidCardInput
    upsert?: UserUpsertWithoutRfidCardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRfidCardInput, UserUpdateWithoutRfidCardInput>, UserUncheckedUpdateWithoutRfidCardInput>
  }

  export type AttendanceUpdateManyWithoutRfidCardNestedInput = {
    create?: XOR<AttendanceCreateWithoutRfidCardInput, AttendanceUncheckedCreateWithoutRfidCardInput> | AttendanceCreateWithoutRfidCardInput[] | AttendanceUncheckedCreateWithoutRfidCardInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRfidCardInput | AttendanceCreateOrConnectWithoutRfidCardInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutRfidCardInput | AttendanceUpsertWithWhereUniqueWithoutRfidCardInput[]
    createMany?: AttendanceCreateManyRfidCardInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutRfidCardInput | AttendanceUpdateWithWhereUniqueWithoutRfidCardInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutRfidCardInput | AttendanceUpdateManyWithWhereWithoutRfidCardInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutRfidCardNestedInput = {
    create?: XOR<AttendanceCreateWithoutRfidCardInput, AttendanceUncheckedCreateWithoutRfidCardInput> | AttendanceCreateWithoutRfidCardInput[] | AttendanceUncheckedCreateWithoutRfidCardInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRfidCardInput | AttendanceCreateOrConnectWithoutRfidCardInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutRfidCardInput | AttendanceUpsertWithWhereUniqueWithoutRfidCardInput[]
    createMany?: AttendanceCreateManyRfidCardInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutRfidCardInput | AttendanceUpdateWithWhereUniqueWithoutRfidCardInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutRfidCardInput | AttendanceUpdateManyWithWhereWithoutRfidCardInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AttendanceCreateWithoutDeviceInput, AttendanceUncheckedCreateWithoutDeviceInput> | AttendanceCreateWithoutDeviceInput[] | AttendanceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutDeviceInput | AttendanceCreateOrConnectWithoutDeviceInput[]
    createMany?: AttendanceCreateManyDeviceInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type DeviceTelemetryCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceTelemetryCreateWithoutDeviceInput, DeviceTelemetryUncheckedCreateWithoutDeviceInput> | DeviceTelemetryCreateWithoutDeviceInput[] | DeviceTelemetryUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceTelemetryCreateOrConnectWithoutDeviceInput | DeviceTelemetryCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceTelemetryCreateManyDeviceInputEnvelope
    connect?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
  }

  export type ApiTokenCreateNestedOneWithoutDeviceInput = {
    create?: XOR<ApiTokenCreateWithoutDeviceInput, ApiTokenUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: ApiTokenCreateOrConnectWithoutDeviceInput
    connect?: ApiTokenWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AttendanceCreateWithoutDeviceInput, AttendanceUncheckedCreateWithoutDeviceInput> | AttendanceCreateWithoutDeviceInput[] | AttendanceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutDeviceInput | AttendanceCreateOrConnectWithoutDeviceInput[]
    createMany?: AttendanceCreateManyDeviceInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type DeviceTelemetryUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceTelemetryCreateWithoutDeviceInput, DeviceTelemetryUncheckedCreateWithoutDeviceInput> | DeviceTelemetryCreateWithoutDeviceInput[] | DeviceTelemetryUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceTelemetryCreateOrConnectWithoutDeviceInput | DeviceTelemetryCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceTelemetryCreateManyDeviceInputEnvelope
    connect?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
  }

  export type ApiTokenUncheckedCreateNestedOneWithoutDeviceInput = {
    create?: XOR<ApiTokenCreateWithoutDeviceInput, ApiTokenUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: ApiTokenCreateOrConnectWithoutDeviceInput
    connect?: ApiTokenWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AttendanceUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AttendanceCreateWithoutDeviceInput, AttendanceUncheckedCreateWithoutDeviceInput> | AttendanceCreateWithoutDeviceInput[] | AttendanceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutDeviceInput | AttendanceCreateOrConnectWithoutDeviceInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutDeviceInput | AttendanceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AttendanceCreateManyDeviceInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutDeviceInput | AttendanceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutDeviceInput | AttendanceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type DeviceTelemetryUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceTelemetryCreateWithoutDeviceInput, DeviceTelemetryUncheckedCreateWithoutDeviceInput> | DeviceTelemetryCreateWithoutDeviceInput[] | DeviceTelemetryUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceTelemetryCreateOrConnectWithoutDeviceInput | DeviceTelemetryCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceTelemetryUpsertWithWhereUniqueWithoutDeviceInput | DeviceTelemetryUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceTelemetryCreateManyDeviceInputEnvelope
    set?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
    disconnect?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
    delete?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
    connect?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
    update?: DeviceTelemetryUpdateWithWhereUniqueWithoutDeviceInput | DeviceTelemetryUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceTelemetryUpdateManyWithWhereWithoutDeviceInput | DeviceTelemetryUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceTelemetryScalarWhereInput | DeviceTelemetryScalarWhereInput[]
  }

  export type ApiTokenUpdateOneWithoutDeviceNestedInput = {
    create?: XOR<ApiTokenCreateWithoutDeviceInput, ApiTokenUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: ApiTokenCreateOrConnectWithoutDeviceInput
    upsert?: ApiTokenUpsertWithoutDeviceInput
    disconnect?: ApiTokenWhereInput | boolean
    delete?: ApiTokenWhereInput | boolean
    connect?: ApiTokenWhereUniqueInput
    update?: XOR<XOR<ApiTokenUpdateToOneWithWhereWithoutDeviceInput, ApiTokenUpdateWithoutDeviceInput>, ApiTokenUncheckedUpdateWithoutDeviceInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AttendanceCreateWithoutDeviceInput, AttendanceUncheckedCreateWithoutDeviceInput> | AttendanceCreateWithoutDeviceInput[] | AttendanceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutDeviceInput | AttendanceCreateOrConnectWithoutDeviceInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutDeviceInput | AttendanceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AttendanceCreateManyDeviceInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutDeviceInput | AttendanceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutDeviceInput | AttendanceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type DeviceTelemetryUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceTelemetryCreateWithoutDeviceInput, DeviceTelemetryUncheckedCreateWithoutDeviceInput> | DeviceTelemetryCreateWithoutDeviceInput[] | DeviceTelemetryUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceTelemetryCreateOrConnectWithoutDeviceInput | DeviceTelemetryCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceTelemetryUpsertWithWhereUniqueWithoutDeviceInput | DeviceTelemetryUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceTelemetryCreateManyDeviceInputEnvelope
    set?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
    disconnect?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
    delete?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
    connect?: DeviceTelemetryWhereUniqueInput | DeviceTelemetryWhereUniqueInput[]
    update?: DeviceTelemetryUpdateWithWhereUniqueWithoutDeviceInput | DeviceTelemetryUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceTelemetryUpdateManyWithWhereWithoutDeviceInput | DeviceTelemetryUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceTelemetryScalarWhereInput | DeviceTelemetryScalarWhereInput[]
  }

  export type ApiTokenUncheckedUpdateOneWithoutDeviceNestedInput = {
    create?: XOR<ApiTokenCreateWithoutDeviceInput, ApiTokenUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: ApiTokenCreateOrConnectWithoutDeviceInput
    upsert?: ApiTokenUpsertWithoutDeviceInput
    disconnect?: ApiTokenWhereInput | boolean
    delete?: ApiTokenWhereInput | boolean
    connect?: ApiTokenWhereUniqueInput
    update?: XOR<XOR<ApiTokenUpdateToOneWithWhereWithoutDeviceInput, ApiTokenUpdateWithoutDeviceInput>, ApiTokenUncheckedUpdateWithoutDeviceInput>
  }

  export type AttendanceCreateNestedManyWithoutScheduleInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput> | AttendanceCreateWithoutScheduleInput[] | AttendanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput | AttendanceCreateOrConnectWithoutScheduleInput[]
    createMany?: AttendanceCreateManyScheduleInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput> | AttendanceCreateWithoutScheduleInput[] | AttendanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput | AttendanceCreateOrConnectWithoutScheduleInput[]
    createMany?: AttendanceCreateManyScheduleInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput> | AttendanceCreateWithoutScheduleInput[] | AttendanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput | AttendanceCreateOrConnectWithoutScheduleInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutScheduleInput | AttendanceUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: AttendanceCreateManyScheduleInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutScheduleInput | AttendanceUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutScheduleInput | AttendanceUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput> | AttendanceCreateWithoutScheduleInput[] | AttendanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput | AttendanceCreateOrConnectWithoutScheduleInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutScheduleInput | AttendanceUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: AttendanceCreateManyScheduleInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutScheduleInput | AttendanceUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutScheduleInput | AttendanceUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type RfidCardCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<RfidCardCreateWithoutAttendancesInput, RfidCardUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: RfidCardCreateOrConnectWithoutAttendancesInput
    connect?: RfidCardWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<DeviceCreateWithoutAttendancesInput, DeviceUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAttendancesInput
    connect?: DeviceWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ScheduleCreateWithoutAttendancesInput, ScheduleUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutAttendancesInput
    connect?: ScheduleWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type RfidCardUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<RfidCardCreateWithoutAttendancesInput, RfidCardUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: RfidCardCreateOrConnectWithoutAttendancesInput
    upsert?: RfidCardUpsertWithoutAttendancesInput
    connect?: RfidCardWhereUniqueInput
    update?: XOR<XOR<RfidCardUpdateToOneWithWhereWithoutAttendancesInput, RfidCardUpdateWithoutAttendancesInput>, RfidCardUncheckedUpdateWithoutAttendancesInput>
  }

  export type DeviceUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<DeviceCreateWithoutAttendancesInput, DeviceUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAttendancesInput
    upsert?: DeviceUpsertWithoutAttendancesInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutAttendancesInput, DeviceUpdateWithoutAttendancesInput>, DeviceUncheckedUpdateWithoutAttendancesInput>
  }

  export type ScheduleUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ScheduleCreateWithoutAttendancesInput, ScheduleUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutAttendancesInput
    upsert?: ScheduleUpsertWithoutAttendancesInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutAttendancesInput, ScheduleUpdateWithoutAttendancesInput>, ScheduleUncheckedUpdateWithoutAttendancesInput>
  }

  export type AdminCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivitiesInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivitiesInput
    upsert?: AdminUpsertWithoutActivitiesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutActivitiesInput, AdminUpdateWithoutActivitiesInput>, AdminUncheckedUpdateWithoutActivitiesInput>
  }

  export type DeviceCreateNestedOneWithoutTelemetryInput = {
    create?: XOR<DeviceCreateWithoutTelemetryInput, DeviceUncheckedCreateWithoutTelemetryInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutTelemetryInput
    connect?: DeviceWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUpdateOneRequiredWithoutTelemetryNestedInput = {
    create?: XOR<DeviceCreateWithoutTelemetryInput, DeviceUncheckedCreateWithoutTelemetryInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutTelemetryInput
    upsert?: DeviceUpsertWithoutTelemetryInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutTelemetryInput, DeviceUpdateWithoutTelemetryInput>, DeviceUncheckedUpdateWithoutTelemetryInput>
  }

  export type DeviceCreateNestedOneWithoutApiTokenInput = {
    create?: XOR<DeviceCreateWithoutApiTokenInput, DeviceUncheckedCreateWithoutApiTokenInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutApiTokenInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutApiTokenNestedInput = {
    create?: XOR<DeviceCreateWithoutApiTokenInput, DeviceUncheckedCreateWithoutApiTokenInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutApiTokenInput
    upsert?: DeviceUpsertWithoutApiTokenInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutApiTokenInput, DeviceUpdateWithoutApiTokenInput>, DeviceUncheckedUpdateWithoutApiTokenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AdminActivityCreateWithoutAdminInput = {
    action: string
    description: string
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type AdminActivityUncheckedCreateWithoutAdminInput = {
    id?: number
    action: string
    description: string
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type AdminActivityCreateOrConnectWithoutAdminInput = {
    where: AdminActivityWhereUniqueInput
    create: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput>
  }

  export type AdminActivityCreateManyAdminInputEnvelope = {
    data: AdminActivityCreateManyAdminInput | AdminActivityCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AdminActivityUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminActivityWhereUniqueInput
    update: XOR<AdminActivityUpdateWithoutAdminInput, AdminActivityUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput>
  }

  export type AdminActivityUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminActivityWhereUniqueInput
    data: XOR<AdminActivityUpdateWithoutAdminInput, AdminActivityUncheckedUpdateWithoutAdminInput>
  }

  export type AdminActivityUpdateManyWithWhereWithoutAdminInput = {
    where: AdminActivityScalarWhereInput
    data: XOR<AdminActivityUpdateManyMutationInput, AdminActivityUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminActivityScalarWhereInput = {
    AND?: AdminActivityScalarWhereInput | AdminActivityScalarWhereInput[]
    OR?: AdminActivityScalarWhereInput[]
    NOT?: AdminActivityScalarWhereInput | AdminActivityScalarWhereInput[]
    id?: IntFilter<"AdminActivity"> | number
    action?: StringFilter<"AdminActivity"> | string
    description?: StringFilter<"AdminActivity"> | string
    ipAddress?: StringNullableFilter<"AdminActivity"> | string | null
    timestamp?: DateTimeFilter<"AdminActivity"> | Date | string
    adminId?: IntFilter<"AdminActivity"> | number
  }

  export type RfidCardCreateWithoutUserInput = {
    cardUid: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutRfidCardInput
  }

  export type RfidCardUncheckedCreateWithoutUserInput = {
    id?: number
    cardUid: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutRfidCardInput
  }

  export type RfidCardCreateOrConnectWithoutUserInput = {
    where: RfidCardWhereUniqueInput
    create: XOR<RfidCardCreateWithoutUserInput, RfidCardUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateWithoutUserInput = {
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rfidCard: RfidCardCreateNestedOneWithoutAttendancesInput
    device: DeviceCreateNestedOneWithoutAttendancesInput
    schedule: ScheduleCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rfidCardId: number
    deviceId: number
    scheduleId: number
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RfidCardUpsertWithoutUserInput = {
    update: XOR<RfidCardUpdateWithoutUserInput, RfidCardUncheckedUpdateWithoutUserInput>
    create: XOR<RfidCardCreateWithoutUserInput, RfidCardUncheckedCreateWithoutUserInput>
    where?: RfidCardWhereInput
  }

  export type RfidCardUpdateToOneWithWhereWithoutUserInput = {
    where?: RfidCardWhereInput
    data: XOR<RfidCardUpdateWithoutUserInput, RfidCardUncheckedUpdateWithoutUserInput>
  }

  export type RfidCardUpdateWithoutUserInput = {
    cardUid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutRfidCardNestedInput
  }

  export type RfidCardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardUid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutRfidCardNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkInTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    userId?: IntFilter<"Attendance"> | number
    rfidCardId?: IntFilter<"Attendance"> | number
    deviceId?: IntFilter<"Attendance"> | number
    scheduleId?: IntFilter<"Attendance"> | number
  }

  export type UserCreateWithoutRfidCardInput = {
    nim: string
    fullName: string
    department?: string | null
    position?: string | null
    email?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRfidCardInput = {
    id?: number
    nim: string
    fullName: string
    department?: string | null
    position?: string | null
    email?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRfidCardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRfidCardInput, UserUncheckedCreateWithoutRfidCardInput>
  }

  export type AttendanceCreateWithoutRfidCardInput = {
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAttendancesInput
    device: DeviceCreateNestedOneWithoutAttendancesInput
    schedule: ScheduleCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutRfidCardInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    deviceId: number
    scheduleId: number
  }

  export type AttendanceCreateOrConnectWithoutRfidCardInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutRfidCardInput, AttendanceUncheckedCreateWithoutRfidCardInput>
  }

  export type AttendanceCreateManyRfidCardInputEnvelope = {
    data: AttendanceCreateManyRfidCardInput | AttendanceCreateManyRfidCardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRfidCardInput = {
    update: XOR<UserUpdateWithoutRfidCardInput, UserUncheckedUpdateWithoutRfidCardInput>
    create: XOR<UserCreateWithoutRfidCardInput, UserUncheckedCreateWithoutRfidCardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRfidCardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRfidCardInput, UserUncheckedUpdateWithoutRfidCardInput>
  }

  export type UserUpdateWithoutRfidCardInput = {
    nim?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRfidCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutRfidCardInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutRfidCardInput, AttendanceUncheckedUpdateWithoutRfidCardInput>
    create: XOR<AttendanceCreateWithoutRfidCardInput, AttendanceUncheckedCreateWithoutRfidCardInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutRfidCardInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutRfidCardInput, AttendanceUncheckedUpdateWithoutRfidCardInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutRfidCardInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutRfidCardInput>
  }

  export type AttendanceCreateWithoutDeviceInput = {
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAttendancesInput
    rfidCard: RfidCardCreateNestedOneWithoutAttendancesInput
    schedule: ScheduleCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutDeviceInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    rfidCardId: number
    scheduleId: number
  }

  export type AttendanceCreateOrConnectWithoutDeviceInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutDeviceInput, AttendanceUncheckedCreateWithoutDeviceInput>
  }

  export type AttendanceCreateManyDeviceInputEnvelope = {
    data: AttendanceCreateManyDeviceInput | AttendanceCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type DeviceTelemetryCreateWithoutDeviceInput = {
    temperature?: number | null
    humidity?: number | null
    batteryLevel?: number | null
    signalStrength?: number | null
    timestamp?: Date | string
  }

  export type DeviceTelemetryUncheckedCreateWithoutDeviceInput = {
    id?: number
    temperature?: number | null
    humidity?: number | null
    batteryLevel?: number | null
    signalStrength?: number | null
    timestamp?: Date | string
  }

  export type DeviceTelemetryCreateOrConnectWithoutDeviceInput = {
    where: DeviceTelemetryWhereUniqueInput
    create: XOR<DeviceTelemetryCreateWithoutDeviceInput, DeviceTelemetryUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceTelemetryCreateManyDeviceInputEnvelope = {
    data: DeviceTelemetryCreateManyDeviceInput | DeviceTelemetryCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type ApiTokenCreateWithoutDeviceInput = {
    token: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type ApiTokenUncheckedCreateWithoutDeviceInput = {
    id?: number
    token: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type ApiTokenCreateOrConnectWithoutDeviceInput = {
    where: ApiTokenWhereUniqueInput
    create: XOR<ApiTokenCreateWithoutDeviceInput, ApiTokenUncheckedCreateWithoutDeviceInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutDeviceInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutDeviceInput, AttendanceUncheckedUpdateWithoutDeviceInput>
    create: XOR<AttendanceCreateWithoutDeviceInput, AttendanceUncheckedCreateWithoutDeviceInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutDeviceInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutDeviceInput, AttendanceUncheckedUpdateWithoutDeviceInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutDeviceInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceTelemetryUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DeviceTelemetryWhereUniqueInput
    update: XOR<DeviceTelemetryUpdateWithoutDeviceInput, DeviceTelemetryUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceTelemetryCreateWithoutDeviceInput, DeviceTelemetryUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceTelemetryUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DeviceTelemetryWhereUniqueInput
    data: XOR<DeviceTelemetryUpdateWithoutDeviceInput, DeviceTelemetryUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceTelemetryUpdateManyWithWhereWithoutDeviceInput = {
    where: DeviceTelemetryScalarWhereInput
    data: XOR<DeviceTelemetryUpdateManyMutationInput, DeviceTelemetryUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceTelemetryScalarWhereInput = {
    AND?: DeviceTelemetryScalarWhereInput | DeviceTelemetryScalarWhereInput[]
    OR?: DeviceTelemetryScalarWhereInput[]
    NOT?: DeviceTelemetryScalarWhereInput | DeviceTelemetryScalarWhereInput[]
    id?: IntFilter<"DeviceTelemetry"> | number
    temperature?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    humidity?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    batteryLevel?: FloatNullableFilter<"DeviceTelemetry"> | number | null
    signalStrength?: IntNullableFilter<"DeviceTelemetry"> | number | null
    timestamp?: DateTimeFilter<"DeviceTelemetry"> | Date | string
    deviceId?: IntFilter<"DeviceTelemetry"> | number
  }

  export type ApiTokenUpsertWithoutDeviceInput = {
    update: XOR<ApiTokenUpdateWithoutDeviceInput, ApiTokenUncheckedUpdateWithoutDeviceInput>
    create: XOR<ApiTokenCreateWithoutDeviceInput, ApiTokenUncheckedCreateWithoutDeviceInput>
    where?: ApiTokenWhereInput
  }

  export type ApiTokenUpdateToOneWithWhereWithoutDeviceInput = {
    where?: ApiTokenWhereInput
    data: XOR<ApiTokenUpdateWithoutDeviceInput, ApiTokenUncheckedUpdateWithoutDeviceInput>
  }

  export type ApiTokenUpdateWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiTokenUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateWithoutScheduleInput = {
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAttendancesInput
    rfidCard: RfidCardCreateNestedOneWithoutAttendancesInput
    device: DeviceCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutScheduleInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    rfidCardId: number
    deviceId: number
  }

  export type AttendanceCreateOrConnectWithoutScheduleInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
  }

  export type AttendanceCreateManyScheduleInputEnvelope = {
    data: AttendanceCreateManyScheduleInput | AttendanceCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceUpsertWithWhereUniqueWithoutScheduleInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutScheduleInput, AttendanceUncheckedUpdateWithoutScheduleInput>
    create: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutScheduleInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutScheduleInput, AttendanceUncheckedUpdateWithoutScheduleInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutScheduleInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutScheduleInput>
  }

  export type UserCreateWithoutAttendancesInput = {
    nim: string
    fullName: string
    department?: string | null
    position?: string | null
    email?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rfidCard?: RfidCardCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: number
    nim: string
    fullName: string
    department?: string | null
    position?: string | null
    email?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rfidCard?: RfidCardUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type RfidCardCreateWithoutAttendancesInput = {
    cardUid: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRfidCardInput
  }

  export type RfidCardUncheckedCreateWithoutAttendancesInput = {
    id?: number
    cardUid: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type RfidCardCreateOrConnectWithoutAttendancesInput = {
    where: RfidCardWhereUniqueInput
    create: XOR<RfidCardCreateWithoutAttendancesInput, RfidCardUncheckedCreateWithoutAttendancesInput>
  }

  export type DeviceCreateWithoutAttendancesInput = {
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telemetry?: DeviceTelemetryCreateNestedManyWithoutDeviceInput
    apiToken?: ApiTokenCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutAttendancesInput = {
    id?: number
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telemetry?: DeviceTelemetryUncheckedCreateNestedManyWithoutDeviceInput
    apiToken?: ApiTokenUncheckedCreateNestedOneWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutAttendancesInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutAttendancesInput, DeviceUncheckedCreateWithoutAttendancesInput>
  }

  export type ScheduleCreateWithoutAttendancesInput = {
    name: string
    checkInStart: Date | string
    checkInEnd: Date | string
    checkOutStart: Date | string
    checkOutEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUncheckedCreateWithoutAttendancesInput = {
    id?: number
    name: string
    checkInStart: Date | string
    checkInEnd: Date | string
    checkOutStart: Date | string
    checkOutEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutAttendancesInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutAttendancesInput, ScheduleUncheckedCreateWithoutAttendancesInput>
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    nim?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfidCard?: RfidCardUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfidCard?: RfidCardUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RfidCardUpsertWithoutAttendancesInput = {
    update: XOR<RfidCardUpdateWithoutAttendancesInput, RfidCardUncheckedUpdateWithoutAttendancesInput>
    create: XOR<RfidCardCreateWithoutAttendancesInput, RfidCardUncheckedCreateWithoutAttendancesInput>
    where?: RfidCardWhereInput
  }

  export type RfidCardUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: RfidCardWhereInput
    data: XOR<RfidCardUpdateWithoutAttendancesInput, RfidCardUncheckedUpdateWithoutAttendancesInput>
  }

  export type RfidCardUpdateWithoutAttendancesInput = {
    cardUid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRfidCardNestedInput
  }

  export type RfidCardUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardUid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUpsertWithoutAttendancesInput = {
    update: XOR<DeviceUpdateWithoutAttendancesInput, DeviceUncheckedUpdateWithoutAttendancesInput>
    create: XOR<DeviceCreateWithoutAttendancesInput, DeviceUncheckedCreateWithoutAttendancesInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutAttendancesInput, DeviceUncheckedUpdateWithoutAttendancesInput>
  }

  export type DeviceUpdateWithoutAttendancesInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telemetry?: DeviceTelemetryUpdateManyWithoutDeviceNestedInput
    apiToken?: ApiTokenUpdateOneWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telemetry?: DeviceTelemetryUncheckedUpdateManyWithoutDeviceNestedInput
    apiToken?: ApiTokenUncheckedUpdateOneWithoutDeviceNestedInput
  }

  export type ScheduleUpsertWithoutAttendancesInput = {
    update: XOR<ScheduleUpdateWithoutAttendancesInput, ScheduleUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ScheduleCreateWithoutAttendancesInput, ScheduleUncheckedCreateWithoutAttendancesInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutAttendancesInput, ScheduleUncheckedUpdateWithoutAttendancesInput>
  }

  export type ScheduleUpdateWithoutAttendancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    checkInStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    checkInStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutStart?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateWithoutActivitiesInput = {
    username: string
    password: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutActivitiesInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutActivitiesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
  }

  export type AdminUpsertWithoutActivitiesInput = {
    update: XOR<AdminUpdateWithoutActivitiesInput, AdminUncheckedUpdateWithoutActivitiesInput>
    create: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutActivitiesInput, AdminUncheckedUpdateWithoutActivitiesInput>
  }

  export type AdminUpdateWithoutActivitiesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateWithoutTelemetryInput = {
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutDeviceInput
    apiToken?: ApiTokenCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutTelemetryInput = {
    id?: number
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutDeviceInput
    apiToken?: ApiTokenUncheckedCreateNestedOneWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutTelemetryInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutTelemetryInput, DeviceUncheckedCreateWithoutTelemetryInput>
  }

  export type DeviceUpsertWithoutTelemetryInput = {
    update: XOR<DeviceUpdateWithoutTelemetryInput, DeviceUncheckedUpdateWithoutTelemetryInput>
    create: XOR<DeviceCreateWithoutTelemetryInput, DeviceUncheckedCreateWithoutTelemetryInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutTelemetryInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutTelemetryInput, DeviceUncheckedUpdateWithoutTelemetryInput>
  }

  export type DeviceUpdateWithoutTelemetryInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutDeviceNestedInput
    apiToken?: ApiTokenUpdateOneWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutTelemetryInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutDeviceNestedInput
    apiToken?: ApiTokenUncheckedUpdateOneWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutApiTokenInput = {
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutDeviceInput
    telemetry?: DeviceTelemetryCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutApiTokenInput = {
    id?: number
    deviceName: string
    macAddress: string
    ipAddress?: string | null
    location?: string | null
    isActive?: boolean
    lastOnline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutDeviceInput
    telemetry?: DeviceTelemetryUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutApiTokenInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutApiTokenInput, DeviceUncheckedCreateWithoutApiTokenInput>
  }

  export type DeviceUpsertWithoutApiTokenInput = {
    update: XOR<DeviceUpdateWithoutApiTokenInput, DeviceUncheckedUpdateWithoutApiTokenInput>
    create: XOR<DeviceCreateWithoutApiTokenInput, DeviceUncheckedCreateWithoutApiTokenInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutApiTokenInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutApiTokenInput, DeviceUncheckedUpdateWithoutApiTokenInput>
  }

  export type DeviceUpdateWithoutApiTokenInput = {
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutDeviceNestedInput
    telemetry?: DeviceTelemetryUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutApiTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceName?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutDeviceNestedInput
    telemetry?: DeviceTelemetryUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type AdminActivityCreateManyAdminInput = {
    id?: number
    action: string
    description: string
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type AdminActivityUpdateWithoutAdminInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyUserInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rfidCardId: number
    deviceId: number
    scheduleId: number
  }

  export type AttendanceUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfidCard?: RfidCardUpdateOneRequiredWithoutAttendancesNestedInput
    device?: DeviceUpdateOneRequiredWithoutAttendancesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfidCardId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfidCardId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateManyRfidCardInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    deviceId: number
    scheduleId: number
  }

  export type AttendanceUpdateWithoutRfidCardInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    device?: DeviceUpdateOneRequiredWithoutAttendancesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutRfidCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyWithoutRfidCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateManyDeviceInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    rfidCardId: number
    scheduleId: number
  }

  export type DeviceTelemetryCreateManyDeviceInput = {
    id?: number
    temperature?: number | null
    humidity?: number | null
    batteryLevel?: number | null
    signalStrength?: number | null
    timestamp?: Date | string
  }

  export type AttendanceUpdateWithoutDeviceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    rfidCard?: RfidCardUpdateOneRequiredWithoutAttendancesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    rfidCardId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    rfidCardId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceTelemetryUpdateWithoutDeviceInput = {
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTelemetryUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTelemetryUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    signalStrength?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyScheduleInput = {
    id?: number
    date?: Date | string
    checkInTime?: Date | string | null
    checkOutTime?: Date | string | null
    status?: $Enums.AttendanceStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    rfidCardId: number
    deviceId: number
  }

  export type AttendanceUpdateWithoutScheduleInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    rfidCard?: RfidCardUpdateOneRequiredWithoutAttendancesNestedInput
    device?: DeviceUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    rfidCardId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    rfidCardId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
  }



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