
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model StudentParent
 * 
 */
export type StudentParent = $Result.DefaultSelection<Prisma.$StudentParentPayload>
/**
 * Model University
 * 
 */
export type University = $Result.DefaultSelection<Prisma.$UniversityPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model ApplicationRequirement
 * 
 */
export type ApplicationRequirement = $Result.DefaultSelection<Prisma.$ApplicationRequirementPayload>
/**
 * Model ApplicationNote
 * 
 */
export type ApplicationNote = $Result.DefaultSelection<Prisma.$ApplicationNotePayload>
/**
 * Model ApplicationDocument
 * 
 */
export type ApplicationDocument = $Result.DefaultSelection<Prisma.$ApplicationDocumentPayload>
/**
 * Model SyncLog
 * 
 */
export type SyncLog = $Result.DefaultSelection<Prisma.$SyncLogPayload>
/**
 * Model CommunicationRecord
 * 
 */
export type CommunicationRecord = $Result.DefaultSelection<Prisma.$CommunicationRecordPayload>
/**
 * Model ObservationRecord
 * 
 */
export type ObservationRecord = $Result.DefaultSelection<Prisma.$ObservationRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ApplicationType: {
  EARLY_DECISION: 'EARLY_DECISION',
  EARLY_ACTION: 'EARLY_ACTION',
  REGULAR_DECISION: 'REGULAR_DECISION',
  ROLLING_ADMISSION: 'ROLLING_ADMISSION'
};

export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType]


export const ApplicationStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  SUBMITTED: 'SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  WAITLISTED: 'WAITLISTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const UniversitySource: {
  COMMON_APP: 'COMMON_APP',
  OPEN_DATA: 'OPEN_DATA'
};

export type UniversitySource = (typeof UniversitySource)[keyof typeof UniversitySource]

}

export type ApplicationType = $Enums.ApplicationType

export const ApplicationType: typeof $Enums.ApplicationType

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type UniversitySource = $Enums.UniversitySource

export const UniversitySource: typeof $Enums.UniversitySource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.studentParent`: Exposes CRUD operations for the **StudentParent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentParents
    * const studentParents = await prisma.studentParent.findMany()
    * ```
    */
  get studentParent(): Prisma.StudentParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.university`: Exposes CRUD operations for the **University** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universities
    * const universities = await prisma.university.findMany()
    * ```
    */
  get university(): Prisma.UniversityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationRequirement`: Exposes CRUD operations for the **ApplicationRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationRequirements
    * const applicationRequirements = await prisma.applicationRequirement.findMany()
    * ```
    */
  get applicationRequirement(): Prisma.ApplicationRequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationNote`: Exposes CRUD operations for the **ApplicationNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationNotes
    * const applicationNotes = await prisma.applicationNote.findMany()
    * ```
    */
  get applicationNote(): Prisma.ApplicationNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationDocument`: Exposes CRUD operations for the **ApplicationDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationDocuments
    * const applicationDocuments = await prisma.applicationDocument.findMany()
    * ```
    */
  get applicationDocument(): Prisma.ApplicationDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncLog`: Exposes CRUD operations for the **SyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncLogs
    * const syncLogs = await prisma.syncLog.findMany()
    * ```
    */
  get syncLog(): Prisma.SyncLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communicationRecord`: Exposes CRUD operations for the **CommunicationRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunicationRecords
    * const communicationRecords = await prisma.communicationRecord.findMany()
    * ```
    */
  get communicationRecord(): Prisma.CommunicationRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.observationRecord`: Exposes CRUD operations for the **ObservationRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObservationRecords
    * const observationRecords = await prisma.observationRecord.findMany()
    * ```
    */
  get observationRecord(): Prisma.ObservationRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Student: 'Student',
    Parent: 'Parent',
    Admin: 'Admin',
    StudentParent: 'StudentParent',
    University: 'University',
    Application: 'Application',
    ApplicationRequirement: 'ApplicationRequirement',
    ApplicationNote: 'ApplicationNote',
    ApplicationDocument: 'ApplicationDocument',
    SyncLog: 'SyncLog',
    CommunicationRecord: 'CommunicationRecord',
    ObservationRecord: 'ObservationRecord'
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
      modelProps: "student" | "parent" | "admin" | "studentParent" | "university" | "application" | "applicationRequirement" | "applicationNote" | "applicationDocument" | "syncLog" | "communicationRecord" | "observationRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
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
      StudentParent: {
        payload: Prisma.$StudentParentPayload<ExtArgs>
        fields: Prisma.StudentParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>
          }
          findFirst: {
            args: Prisma.StudentParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>
          }
          findMany: {
            args: Prisma.StudentParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>[]
          }
          create: {
            args: Prisma.StudentParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>
          }
          createMany: {
            args: Prisma.StudentParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>[]
          }
          delete: {
            args: Prisma.StudentParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>
          }
          update: {
            args: Prisma.StudentParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>
          }
          deleteMany: {
            args: Prisma.StudentParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentParentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>[]
          }
          upsert: {
            args: Prisma.StudentParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentParentPayload>
          }
          aggregate: {
            args: Prisma.StudentParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentParent>
          }
          groupBy: {
            args: Prisma.StudentParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentParentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentParentCountAggregateOutputType> | number
          }
        }
      }
      University: {
        payload: Prisma.$UniversityPayload<ExtArgs>
        fields: Prisma.UniversityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findFirst: {
            args: Prisma.UniversityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findMany: {
            args: Prisma.UniversityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          create: {
            args: Prisma.UniversityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          createMany: {
            args: Prisma.UniversityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniversityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          delete: {
            args: Prisma.UniversityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          update: {
            args: Prisma.UniversityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          deleteMany: {
            args: Prisma.UniversityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniversityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          upsert: {
            args: Prisma.UniversityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          aggregate: {
            args: Prisma.UniversityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversity>
          }
          groupBy: {
            args: Prisma.UniversityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniversityCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      ApplicationRequirement: {
        payload: Prisma.$ApplicationRequirementPayload<ExtArgs>
        fields: Prisma.ApplicationRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>
          }
          findFirst: {
            args: Prisma.ApplicationRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>
          }
          findMany: {
            args: Prisma.ApplicationRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>[]
          }
          create: {
            args: Prisma.ApplicationRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>
          }
          createMany: {
            args: Prisma.ApplicationRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>[]
          }
          delete: {
            args: Prisma.ApplicationRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>
          }
          update: {
            args: Prisma.ApplicationRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationRequirementPayload>
          }
          aggregate: {
            args: Prisma.ApplicationRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationRequirement>
          }
          groupBy: {
            args: Prisma.ApplicationRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationRequirementCountAggregateOutputType> | number
          }
        }
      }
      ApplicationNote: {
        payload: Prisma.$ApplicationNotePayload<ExtArgs>
        fields: Prisma.ApplicationNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>
          }
          findFirst: {
            args: Prisma.ApplicationNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>
          }
          findMany: {
            args: Prisma.ApplicationNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>[]
          }
          create: {
            args: Prisma.ApplicationNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>
          }
          createMany: {
            args: Prisma.ApplicationNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>[]
          }
          delete: {
            args: Prisma.ApplicationNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>
          }
          update: {
            args: Prisma.ApplicationNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>
          }
          deleteMany: {
            args: Prisma.ApplicationNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>[]
          }
          upsert: {
            args: Prisma.ApplicationNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationNotePayload>
          }
          aggregate: {
            args: Prisma.ApplicationNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationNote>
          }
          groupBy: {
            args: Prisma.ApplicationNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationNoteCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationNoteCountAggregateOutputType> | number
          }
        }
      }
      ApplicationDocument: {
        payload: Prisma.$ApplicationDocumentPayload<ExtArgs>
        fields: Prisma.ApplicationDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          findFirst: {
            args: Prisma.ApplicationDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          findMany: {
            args: Prisma.ApplicationDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>[]
          }
          create: {
            args: Prisma.ApplicationDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          createMany: {
            args: Prisma.ApplicationDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          update: {
            args: Prisma.ApplicationDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          aggregate: {
            args: Prisma.ApplicationDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationDocument>
          }
          groupBy: {
            args: Prisma.ApplicationDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDocumentCountAggregateOutputType> | number
          }
        }
      }
      SyncLog: {
        payload: Prisma.$SyncLogPayload<ExtArgs>
        fields: Prisma.SyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findFirst: {
            args: Prisma.SyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findMany: {
            args: Prisma.SyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          create: {
            args: Prisma.SyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          createMany: {
            args: Prisma.SyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          delete: {
            args: Prisma.SyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          update: {
            args: Prisma.SyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          deleteMany: {
            args: Prisma.SyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          upsert: {
            args: Prisma.SyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          aggregate: {
            args: Prisma.SyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncLog>
          }
          groupBy: {
            args: Prisma.SyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<SyncLogCountAggregateOutputType> | number
          }
        }
      }
      CommunicationRecord: {
        payload: Prisma.$CommunicationRecordPayload<ExtArgs>
        fields: Prisma.CommunicationRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunicationRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunicationRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>
          }
          findFirst: {
            args: Prisma.CommunicationRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunicationRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>
          }
          findMany: {
            args: Prisma.CommunicationRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>[]
          }
          create: {
            args: Prisma.CommunicationRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>
          }
          createMany: {
            args: Prisma.CommunicationRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunicationRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>[]
          }
          delete: {
            args: Prisma.CommunicationRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>
          }
          update: {
            args: Prisma.CommunicationRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>
          }
          deleteMany: {
            args: Prisma.CommunicationRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunicationRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunicationRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>[]
          }
          upsert: {
            args: Prisma.CommunicationRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationRecordPayload>
          }
          aggregate: {
            args: Prisma.CommunicationRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunicationRecord>
          }
          groupBy: {
            args: Prisma.CommunicationRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunicationRecordCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationRecordCountAggregateOutputType> | number
          }
        }
      }
      ObservationRecord: {
        payload: Prisma.$ObservationRecordPayload<ExtArgs>
        fields: Prisma.ObservationRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObservationRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObservationRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>
          }
          findFirst: {
            args: Prisma.ObservationRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObservationRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>
          }
          findMany: {
            args: Prisma.ObservationRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>[]
          }
          create: {
            args: Prisma.ObservationRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>
          }
          createMany: {
            args: Prisma.ObservationRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObservationRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>[]
          }
          delete: {
            args: Prisma.ObservationRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>
          }
          update: {
            args: Prisma.ObservationRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>
          }
          deleteMany: {
            args: Prisma.ObservationRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObservationRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObservationRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>[]
          }
          upsert: {
            args: Prisma.ObservationRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationRecordPayload>
          }
          aggregate: {
            args: Prisma.ObservationRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObservationRecord>
          }
          groupBy: {
            args: Prisma.ObservationRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObservationRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObservationRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ObservationRecordCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    student?: StudentOmit
    parent?: ParentOmit
    admin?: AdminOmit
    studentParent?: StudentParentOmit
    university?: UniversityOmit
    application?: ApplicationOmit
    applicationRequirement?: ApplicationRequirementOmit
    applicationNote?: ApplicationNoteOmit
    applicationDocument?: ApplicationDocumentOmit
    syncLog?: SyncLogOmit
    communicationRecord?: CommunicationRecordOmit
    observationRecord?: ObservationRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    applications: number
    parentLinks: number
    communications: number
    observations: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | StudentCountOutputTypeCountApplicationsArgs
    parentLinks?: boolean | StudentCountOutputTypeCountParentLinksArgs
    communications?: boolean | StudentCountOutputTypeCountCommunicationsArgs
    observations?: boolean | StudentCountOutputTypeCountObservationsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountParentLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentParentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCommunicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationRecordWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountObservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationRecordWhereInput
  }


  /**
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    studentLinks: number
    communications: number
    observations: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentLinks?: boolean | ParentCountOutputTypeCountStudentLinksArgs
    communications?: boolean | ParentCountOutputTypeCountCommunicationsArgs
    observations?: boolean | ParentCountOutputTypeCountObservationsArgs
  }

  // Custom InputTypes
  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountStudentLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentParentWhereInput
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountCommunicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationRecordWhereInput
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountObservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationRecordWhereInput
  }


  /**
   * Count Type UniversityCountOutputType
   */

  export type UniversityCountOutputType = {
    applications: number
  }

  export type UniversityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UniversityCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityCountOutputType
     */
    select?: UniversityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    documents: number
    appNotes: number
    requirements: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ApplicationCountOutputTypeCountDocumentsArgs
    appNotes?: boolean | ApplicationCountOutputTypeCountAppNotesArgs
    requirements?: boolean | ApplicationCountOutputTypeCountRequirementsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDocumentWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountAppNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationNoteWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationRequirementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    graduationYear: number | null
    gpa: Decimal | null
    satScore: number | null
    actScore: number | null
  }

  export type StudentSumAggregateOutputType = {
    graduationYear: number | null
    gpa: Decimal | null
    satScore: number | null
    actScore: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    graduationYear: number | null
    gpa: Decimal | null
    satScore: number | null
    actScore: number | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    graduationYear: number | null
    gpa: Decimal | null
    satScore: number | null
    actScore: number | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    graduationYear: number
    gpa: number
    satScore: number
    actScore: number
    targetCountries: number
    intendedMajors: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    graduationYear?: true
    gpa?: true
    satScore?: true
    actScore?: true
  }

  export type StudentSumAggregateInputType = {
    graduationYear?: true
    gpa?: true
    satScore?: true
    actScore?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    graduationYear?: true
    gpa?: true
    satScore?: true
    actScore?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    graduationYear?: true
    gpa?: true
    satScore?: true
    actScore?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    graduationYear?: true
    gpa?: true
    satScore?: true
    actScore?: true
    targetCountries?: true
    intendedMajors?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa: Decimal | null
    satScore: number | null
    actScore: number | null
    targetCountries: JsonValue | null
    intendedMajors: JsonValue | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    graduationYear?: boolean
    gpa?: boolean
    satScore?: boolean
    actScore?: boolean
    targetCountries?: boolean
    intendedMajors?: boolean
    applications?: boolean | Student$applicationsArgs<ExtArgs>
    parentLinks?: boolean | Student$parentLinksArgs<ExtArgs>
    communications?: boolean | Student$communicationsArgs<ExtArgs>
    observations?: boolean | Student$observationsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    graduationYear?: boolean
    gpa?: boolean
    satScore?: boolean
    actScore?: boolean
    targetCountries?: boolean
    intendedMajors?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    graduationYear?: boolean
    gpa?: boolean
    satScore?: boolean
    actScore?: boolean
    targetCountries?: boolean
    intendedMajors?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    graduationYear?: boolean
    gpa?: boolean
    satScore?: boolean
    actScore?: boolean
    targetCountries?: boolean
    intendedMajors?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "graduationYear" | "gpa" | "satScore" | "actScore" | "targetCountries" | "intendedMajors", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Student$applicationsArgs<ExtArgs>
    parentLinks?: boolean | Student$parentLinksArgs<ExtArgs>
    communications?: boolean | Student$communicationsArgs<ExtArgs>
    observations?: boolean | Student$observationsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      parentLinks: Prisma.$StudentParentPayload<ExtArgs>[]
      communications: Prisma.$CommunicationRecordPayload<ExtArgs>[]
      observations: Prisma.$ObservationRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      graduationYear: number
      gpa: Prisma.Decimal | null
      satScore: number | null
      actScore: number | null
      targetCountries: Prisma.JsonValue | null
      intendedMajors: Prisma.JsonValue | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Student$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parentLinks<T extends Student$parentLinksArgs<ExtArgs> = {}>(args?: Subset<T, Student$parentLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    communications<T extends Student$communicationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$communicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    observations<T extends Student$observationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$observationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly passwordHash: FieldRef<"Student", 'String'>
    readonly graduationYear: FieldRef<"Student", 'Int'>
    readonly gpa: FieldRef<"Student", 'Decimal'>
    readonly satScore: FieldRef<"Student", 'Int'>
    readonly actScore: FieldRef<"Student", 'Int'>
    readonly targetCountries: FieldRef<"Student", 'Json'>
    readonly intendedMajors: FieldRef<"Student", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.applications
   */
  export type Student$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Student.parentLinks
   */
  export type Student$parentLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    where?: StudentParentWhereInput
    orderBy?: StudentParentOrderByWithRelationInput | StudentParentOrderByWithRelationInput[]
    cursor?: StudentParentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentParentScalarFieldEnum | StudentParentScalarFieldEnum[]
  }

  /**
   * Student.communications
   */
  export type Student$communicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    where?: CommunicationRecordWhereInput
    orderBy?: CommunicationRecordOrderByWithRelationInput | CommunicationRecordOrderByWithRelationInput[]
    cursor?: CommunicationRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationRecordScalarFieldEnum | CommunicationRecordScalarFieldEnum[]
  }

  /**
   * Student.observations
   */
  export type Student$observationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    where?: ObservationRecordWhereInput
    orderBy?: ObservationRecordOrderByWithRelationInput | ObservationRecordOrderByWithRelationInput[]
    cursor?: ObservationRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationRecordScalarFieldEnum | ObservationRecordScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    phone: number
    createdAt: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phone?: true
    createdAt?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phone?: true
    createdAt?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    phone: string | null
    createdAt: Date
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    createdAt?: boolean
    studentLinks?: boolean | Parent$studentLinksArgs<ExtArgs>
    communications?: boolean | Parent$communicationsArgs<ExtArgs>
    observations?: boolean | Parent$observationsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "phone" | "createdAt", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentLinks?: boolean | Parent$studentLinksArgs<ExtArgs>
    communications?: boolean | Parent$communicationsArgs<ExtArgs>
    observations?: boolean | Parent$observationsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      studentLinks: Prisma.$StudentParentPayload<ExtArgs>[]
      communications: Prisma.$CommunicationRecordPayload<ExtArgs>[]
      observations: Prisma.$ObservationRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {ParentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents and returns the data updated in the database.
     * @param {ParentUpdateManyAndReturnArgs} args - Arguments to update many Parents.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParentUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
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
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentLinks<T extends Parent$studentLinksArgs<ExtArgs> = {}>(args?: Subset<T, Parent$studentLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    communications<T extends Parent$communicationsArgs<ExtArgs> = {}>(args?: Subset<T, Parent$communicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    observations<T extends Parent$observationsArgs<ExtArgs> = {}>(args?: Subset<T, Parent$observationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parent model
   */
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'String'>
    readonly name: FieldRef<"Parent", 'String'>
    readonly email: FieldRef<"Parent", 'String'>
    readonly passwordHash: FieldRef<"Parent", 'String'>
    readonly phone: FieldRef<"Parent", 'String'>
    readonly createdAt: FieldRef<"Parent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent createManyAndReturn
   */
  export type ParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent updateManyAndReturn
   */
  export type ParentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent.studentLinks
   */
  export type Parent$studentLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    where?: StudentParentWhereInput
    orderBy?: StudentParentOrderByWithRelationInput | StudentParentOrderByWithRelationInput[]
    cursor?: StudentParentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentParentScalarFieldEnum | StudentParentScalarFieldEnum[]
  }

  /**
   * Parent.communications
   */
  export type Parent$communicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    where?: CommunicationRecordWhereInput
    orderBy?: CommunicationRecordOrderByWithRelationInput | CommunicationRecordOrderByWithRelationInput[]
    cursor?: CommunicationRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationRecordScalarFieldEnum | CommunicationRecordScalarFieldEnum[]
  }

  /**
   * Parent.observations
   */
  export type Parent$observationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    where?: ObservationRecordWhereInput
    orderBy?: ObservationRecordOrderByWithRelationInput | ObservationRecordOrderByWithRelationInput[]
    cursor?: ObservationRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationRecordScalarFieldEnum | ObservationRecordScalarFieldEnum[]
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    lastLoginAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    lastLoginAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    permissions: number
    createdAt: number
    lastLoginAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    lastLoginAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    lastLoginAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    permissions?: true
    createdAt?: true
    lastLoginAt?: true
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
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: string
    permissions: JsonValue | null
    createdAt: Date
    lastLoginAt: Date | null
    _count: AdminCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "permissions" | "createdAt" | "lastLoginAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: string
      permissions: Prisma.JsonValue | null
      createdAt: Date
      lastLoginAt: Date | null
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
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly permissions: FieldRef<"Admin", 'Json'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly lastLoginAt: FieldRef<"Admin", 'DateTime'>
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
  }


  /**
   * Model StudentParent
   */

  export type AggregateStudentParent = {
    _count: StudentParentCountAggregateOutputType | null
    _min: StudentParentMinAggregateOutputType | null
    _max: StudentParentMaxAggregateOutputType | null
  }

  export type StudentParentMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    parentId: string | null
    relationship: string | null
    createdAt: Date | null
  }

  export type StudentParentMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    parentId: string | null
    relationship: string | null
    createdAt: Date | null
  }

  export type StudentParentCountAggregateOutputType = {
    id: number
    studentId: number
    parentId: number
    relationship: number
    createdAt: number
    _all: number
  }


  export type StudentParentMinAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    relationship?: true
    createdAt?: true
  }

  export type StudentParentMaxAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    relationship?: true
    createdAt?: true
  }

  export type StudentParentCountAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    relationship?: true
    createdAt?: true
    _all?: true
  }

  export type StudentParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentParent to aggregate.
     */
    where?: StudentParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentParents to fetch.
     */
    orderBy?: StudentParentOrderByWithRelationInput | StudentParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentParents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentParents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentParents
    **/
    _count?: true | StudentParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentParentMaxAggregateInputType
  }

  export type GetStudentParentAggregateType<T extends StudentParentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentParent[P]>
      : GetScalarType<T[P], AggregateStudentParent[P]>
  }




  export type StudentParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentParentWhereInput
    orderBy?: StudentParentOrderByWithAggregationInput | StudentParentOrderByWithAggregationInput[]
    by: StudentParentScalarFieldEnum[] | StudentParentScalarFieldEnum
    having?: StudentParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentParentCountAggregateInputType | true
    _min?: StudentParentMinAggregateInputType
    _max?: StudentParentMaxAggregateInputType
  }

  export type StudentParentGroupByOutputType = {
    id: string
    studentId: string
    parentId: string
    relationship: string | null
    createdAt: Date
    _count: StudentParentCountAggregateOutputType | null
    _min: StudentParentMinAggregateOutputType | null
    _max: StudentParentMaxAggregateOutputType | null
  }

  type GetStudentParentGroupByPayload<T extends StudentParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentParentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentParentGroupByOutputType[P]>
        }
      >
    >


  export type StudentParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    relationship?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentParent"]>

  export type StudentParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    relationship?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentParent"]>

  export type StudentParentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    relationship?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentParent"]>

  export type StudentParentSelectScalar = {
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    relationship?: boolean
    createdAt?: boolean
  }

  export type StudentParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "parentId" | "relationship" | "createdAt", ExtArgs["result"]["studentParent"]>
  export type StudentParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentParentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentParentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentParent"
    objects: {
      parent: Prisma.$ParentPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      parentId: string
      relationship: string | null
      createdAt: Date
    }, ExtArgs["result"]["studentParent"]>
    composites: {}
  }

  type StudentParentGetPayload<S extends boolean | null | undefined | StudentParentDefaultArgs> = $Result.GetResult<Prisma.$StudentParentPayload, S>

  type StudentParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentParentCountAggregateInputType | true
    }

  export interface StudentParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentParent'], meta: { name: 'StudentParent' } }
    /**
     * Find zero or one StudentParent that matches the filter.
     * @param {StudentParentFindUniqueArgs} args - Arguments to find a StudentParent
     * @example
     * // Get one StudentParent
     * const studentParent = await prisma.studentParent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentParentFindUniqueArgs>(args: SelectSubset<T, StudentParentFindUniqueArgs<ExtArgs>>): Prisma__StudentParentClient<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentParent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentParentFindUniqueOrThrowArgs} args - Arguments to find a StudentParent
     * @example
     * // Get one StudentParent
     * const studentParent = await prisma.studentParent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentParentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentParentClient<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentParent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentFindFirstArgs} args - Arguments to find a StudentParent
     * @example
     * // Get one StudentParent
     * const studentParent = await prisma.studentParent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentParentFindFirstArgs>(args?: SelectSubset<T, StudentParentFindFirstArgs<ExtArgs>>): Prisma__StudentParentClient<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentParent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentFindFirstOrThrowArgs} args - Arguments to find a StudentParent
     * @example
     * // Get one StudentParent
     * const studentParent = await prisma.studentParent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentParentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentParentClient<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentParents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentParents
     * const studentParents = await prisma.studentParent.findMany()
     * 
     * // Get first 10 StudentParents
     * const studentParents = await prisma.studentParent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentParentWithIdOnly = await prisma.studentParent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentParentFindManyArgs>(args?: SelectSubset<T, StudentParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentParent.
     * @param {StudentParentCreateArgs} args - Arguments to create a StudentParent.
     * @example
     * // Create one StudentParent
     * const StudentParent = await prisma.studentParent.create({
     *   data: {
     *     // ... data to create a StudentParent
     *   }
     * })
     * 
     */
    create<T extends StudentParentCreateArgs>(args: SelectSubset<T, StudentParentCreateArgs<ExtArgs>>): Prisma__StudentParentClient<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentParents.
     * @param {StudentParentCreateManyArgs} args - Arguments to create many StudentParents.
     * @example
     * // Create many StudentParents
     * const studentParent = await prisma.studentParent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentParentCreateManyArgs>(args?: SelectSubset<T, StudentParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentParents and returns the data saved in the database.
     * @param {StudentParentCreateManyAndReturnArgs} args - Arguments to create many StudentParents.
     * @example
     * // Create many StudentParents
     * const studentParent = await prisma.studentParent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentParents and only return the `id`
     * const studentParentWithIdOnly = await prisma.studentParent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentParentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentParent.
     * @param {StudentParentDeleteArgs} args - Arguments to delete one StudentParent.
     * @example
     * // Delete one StudentParent
     * const StudentParent = await prisma.studentParent.delete({
     *   where: {
     *     // ... filter to delete one StudentParent
     *   }
     * })
     * 
     */
    delete<T extends StudentParentDeleteArgs>(args: SelectSubset<T, StudentParentDeleteArgs<ExtArgs>>): Prisma__StudentParentClient<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentParent.
     * @param {StudentParentUpdateArgs} args - Arguments to update one StudentParent.
     * @example
     * // Update one StudentParent
     * const studentParent = await prisma.studentParent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentParentUpdateArgs>(args: SelectSubset<T, StudentParentUpdateArgs<ExtArgs>>): Prisma__StudentParentClient<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentParents.
     * @param {StudentParentDeleteManyArgs} args - Arguments to filter StudentParents to delete.
     * @example
     * // Delete a few StudentParents
     * const { count } = await prisma.studentParent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentParentDeleteManyArgs>(args?: SelectSubset<T, StudentParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentParents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentParents
     * const studentParent = await prisma.studentParent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentParentUpdateManyArgs>(args: SelectSubset<T, StudentParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentParents and returns the data updated in the database.
     * @param {StudentParentUpdateManyAndReturnArgs} args - Arguments to update many StudentParents.
     * @example
     * // Update many StudentParents
     * const studentParent = await prisma.studentParent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentParents and only return the `id`
     * const studentParentWithIdOnly = await prisma.studentParent.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentParentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentParentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentParent.
     * @param {StudentParentUpsertArgs} args - Arguments to update or create a StudentParent.
     * @example
     * // Update or create a StudentParent
     * const studentParent = await prisma.studentParent.upsert({
     *   create: {
     *     // ... data to create a StudentParent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentParent we want to update
     *   }
     * })
     */
    upsert<T extends StudentParentUpsertArgs>(args: SelectSubset<T, StudentParentUpsertArgs<ExtArgs>>): Prisma__StudentParentClient<$Result.GetResult<Prisma.$StudentParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentParents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentCountArgs} args - Arguments to filter StudentParents to count.
     * @example
     * // Count the number of StudentParents
     * const count = await prisma.studentParent.count({
     *   where: {
     *     // ... the filter for the StudentParents we want to count
     *   }
     * })
    **/
    count<T extends StudentParentCountArgs>(
      args?: Subset<T, StudentParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentParent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentParentAggregateArgs>(args: Subset<T, StudentParentAggregateArgs>): Prisma.PrismaPromise<GetStudentParentAggregateType<T>>

    /**
     * Group by StudentParent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentParentGroupByArgs} args - Group by arguments.
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
      T extends StudentParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentParentGroupByArgs['orderBy'] }
        : { orderBy?: StudentParentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentParent model
   */
  readonly fields: StudentParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentParent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentParent model
   */
  interface StudentParentFieldRefs {
    readonly id: FieldRef<"StudentParent", 'String'>
    readonly studentId: FieldRef<"StudentParent", 'String'>
    readonly parentId: FieldRef<"StudentParent", 'String'>
    readonly relationship: FieldRef<"StudentParent", 'String'>
    readonly createdAt: FieldRef<"StudentParent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentParent findUnique
   */
  export type StudentParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * Filter, which StudentParent to fetch.
     */
    where: StudentParentWhereUniqueInput
  }

  /**
   * StudentParent findUniqueOrThrow
   */
  export type StudentParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * Filter, which StudentParent to fetch.
     */
    where: StudentParentWhereUniqueInput
  }

  /**
   * StudentParent findFirst
   */
  export type StudentParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * Filter, which StudentParent to fetch.
     */
    where?: StudentParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentParents to fetch.
     */
    orderBy?: StudentParentOrderByWithRelationInput | StudentParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentParents.
     */
    cursor?: StudentParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentParents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentParents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentParents.
     */
    distinct?: StudentParentScalarFieldEnum | StudentParentScalarFieldEnum[]
  }

  /**
   * StudentParent findFirstOrThrow
   */
  export type StudentParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * Filter, which StudentParent to fetch.
     */
    where?: StudentParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentParents to fetch.
     */
    orderBy?: StudentParentOrderByWithRelationInput | StudentParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentParents.
     */
    cursor?: StudentParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentParents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentParents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentParents.
     */
    distinct?: StudentParentScalarFieldEnum | StudentParentScalarFieldEnum[]
  }

  /**
   * StudentParent findMany
   */
  export type StudentParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * Filter, which StudentParents to fetch.
     */
    where?: StudentParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentParents to fetch.
     */
    orderBy?: StudentParentOrderByWithRelationInput | StudentParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentParents.
     */
    cursor?: StudentParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentParents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentParents.
     */
    skip?: number
    distinct?: StudentParentScalarFieldEnum | StudentParentScalarFieldEnum[]
  }

  /**
   * StudentParent create
   */
  export type StudentParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentParent.
     */
    data: XOR<StudentParentCreateInput, StudentParentUncheckedCreateInput>
  }

  /**
   * StudentParent createMany
   */
  export type StudentParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentParents.
     */
    data: StudentParentCreateManyInput | StudentParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentParent createManyAndReturn
   */
  export type StudentParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * The data used to create many StudentParents.
     */
    data: StudentParentCreateManyInput | StudentParentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentParent update
   */
  export type StudentParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentParent.
     */
    data: XOR<StudentParentUpdateInput, StudentParentUncheckedUpdateInput>
    /**
     * Choose, which StudentParent to update.
     */
    where: StudentParentWhereUniqueInput
  }

  /**
   * StudentParent updateMany
   */
  export type StudentParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentParents.
     */
    data: XOR<StudentParentUpdateManyMutationInput, StudentParentUncheckedUpdateManyInput>
    /**
     * Filter which StudentParents to update
     */
    where?: StudentParentWhereInput
    /**
     * Limit how many StudentParents to update.
     */
    limit?: number
  }

  /**
   * StudentParent updateManyAndReturn
   */
  export type StudentParentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * The data used to update StudentParents.
     */
    data: XOR<StudentParentUpdateManyMutationInput, StudentParentUncheckedUpdateManyInput>
    /**
     * Filter which StudentParents to update
     */
    where?: StudentParentWhereInput
    /**
     * Limit how many StudentParents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentParent upsert
   */
  export type StudentParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentParent to update in case it exists.
     */
    where: StudentParentWhereUniqueInput
    /**
     * In case the StudentParent found by the `where` argument doesn't exist, create a new StudentParent with this data.
     */
    create: XOR<StudentParentCreateInput, StudentParentUncheckedCreateInput>
    /**
     * In case the StudentParent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentParentUpdateInput, StudentParentUncheckedUpdateInput>
  }

  /**
   * StudentParent delete
   */
  export type StudentParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
    /**
     * Filter which StudentParent to delete.
     */
    where: StudentParentWhereUniqueInput
  }

  /**
   * StudentParent deleteMany
   */
  export type StudentParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentParents to delete
     */
    where?: StudentParentWhereInput
    /**
     * Limit how many StudentParents to delete.
     */
    limit?: number
  }

  /**
   * StudentParent without action
   */
  export type StudentParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentParent
     */
    select?: StudentParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentParent
     */
    omit?: StudentParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentParentInclude<ExtArgs> | null
  }


  /**
   * Model University
   */

  export type AggregateUniversity = {
    _count: UniversityCountAggregateOutputType | null
    _avg: UniversityAvgAggregateOutputType | null
    _sum: UniversitySumAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  export type UniversityAvgAggregateOutputType = {
    usNewsRanking: number | null
    acceptanceRate: Decimal | null
    tuitionInState: Decimal | null
    tuitionOutState: Decimal | null
    applicationFee: Decimal | null
  }

  export type UniversitySumAggregateOutputType = {
    usNewsRanking: number | null
    acceptanceRate: Decimal | null
    tuitionInState: Decimal | null
    tuitionOutState: Decimal | null
    applicationFee: Decimal | null
  }

  export type UniversityMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    source: $Enums.UniversitySource | null
    name: string | null
    country: string | null
    state: string | null
    city: string | null
    usNewsRanking: number | null
    acceptanceRate: Decimal | null
    applicationSystem: string | null
    tuitionInState: Decimal | null
    tuitionOutState: Decimal | null
    applicationFee: Decimal | null
    lastSyncedAt: Date | null
    isActive: boolean | null
  }

  export type UniversityMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    source: $Enums.UniversitySource | null
    name: string | null
    country: string | null
    state: string | null
    city: string | null
    usNewsRanking: number | null
    acceptanceRate: Decimal | null
    applicationSystem: string | null
    tuitionInState: Decimal | null
    tuitionOutState: Decimal | null
    applicationFee: Decimal | null
    lastSyncedAt: Date | null
    isActive: boolean | null
  }

  export type UniversityCountAggregateOutputType = {
    id: number
    externalId: number
    source: number
    name: number
    country: number
    state: number
    city: number
    usNewsRanking: number
    acceptanceRate: number
    applicationSystem: number
    tuitionInState: number
    tuitionOutState: number
    applicationFee: number
    deadlines: number
    lastSyncedAt: number
    raw: number
    isActive: number
    _all: number
  }


  export type UniversityAvgAggregateInputType = {
    usNewsRanking?: true
    acceptanceRate?: true
    tuitionInState?: true
    tuitionOutState?: true
    applicationFee?: true
  }

  export type UniversitySumAggregateInputType = {
    usNewsRanking?: true
    acceptanceRate?: true
    tuitionInState?: true
    tuitionOutState?: true
    applicationFee?: true
  }

  export type UniversityMinAggregateInputType = {
    id?: true
    externalId?: true
    source?: true
    name?: true
    country?: true
    state?: true
    city?: true
    usNewsRanking?: true
    acceptanceRate?: true
    applicationSystem?: true
    tuitionInState?: true
    tuitionOutState?: true
    applicationFee?: true
    lastSyncedAt?: true
    isActive?: true
  }

  export type UniversityMaxAggregateInputType = {
    id?: true
    externalId?: true
    source?: true
    name?: true
    country?: true
    state?: true
    city?: true
    usNewsRanking?: true
    acceptanceRate?: true
    applicationSystem?: true
    tuitionInState?: true
    tuitionOutState?: true
    applicationFee?: true
    lastSyncedAt?: true
    isActive?: true
  }

  export type UniversityCountAggregateInputType = {
    id?: true
    externalId?: true
    source?: true
    name?: true
    country?: true
    state?: true
    city?: true
    usNewsRanking?: true
    acceptanceRate?: true
    applicationSystem?: true
    tuitionInState?: true
    tuitionOutState?: true
    applicationFee?: true
    deadlines?: true
    lastSyncedAt?: true
    raw?: true
    isActive?: true
    _all?: true
  }

  export type UniversityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which University to aggregate.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Universities
    **/
    _count?: true | UniversityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniversityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniversitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityMaxAggregateInputType
  }

  export type GetUniversityAggregateType<T extends UniversityAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversity[P]>
      : GetScalarType<T[P], AggregateUniversity[P]>
  }




  export type UniversityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityWhereInput
    orderBy?: UniversityOrderByWithAggregationInput | UniversityOrderByWithAggregationInput[]
    by: UniversityScalarFieldEnum[] | UniversityScalarFieldEnum
    having?: UniversityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityCountAggregateInputType | true
    _avg?: UniversityAvgAggregateInputType
    _sum?: UniversitySumAggregateInputType
    _min?: UniversityMinAggregateInputType
    _max?: UniversityMaxAggregateInputType
  }

  export type UniversityGroupByOutputType = {
    id: string
    externalId: string | null
    source: $Enums.UniversitySource | null
    name: string
    country: string | null
    state: string | null
    city: string | null
    usNewsRanking: number | null
    acceptanceRate: Decimal | null
    applicationSystem: string | null
    tuitionInState: Decimal | null
    tuitionOutState: Decimal | null
    applicationFee: Decimal | null
    deadlines: JsonValue | null
    lastSyncedAt: Date | null
    raw: JsonValue | null
    isActive: boolean
    _count: UniversityCountAggregateOutputType | null
    _avg: UniversityAvgAggregateOutputType | null
    _sum: UniversitySumAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  type GetUniversityGroupByPayload<T extends UniversityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityGroupByOutputType[P]>
        }
      >
    >


  export type UniversitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    source?: boolean
    name?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    usNewsRanking?: boolean
    acceptanceRate?: boolean
    applicationSystem?: boolean
    tuitionInState?: boolean
    tuitionOutState?: boolean
    applicationFee?: boolean
    deadlines?: boolean
    lastSyncedAt?: boolean
    raw?: boolean
    isActive?: boolean
    applications?: boolean | University$applicationsArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    source?: boolean
    name?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    usNewsRanking?: boolean
    acceptanceRate?: boolean
    applicationSystem?: boolean
    tuitionInState?: boolean
    tuitionOutState?: boolean
    applicationFee?: boolean
    deadlines?: boolean
    lastSyncedAt?: boolean
    raw?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    source?: boolean
    name?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    usNewsRanking?: boolean
    acceptanceRate?: boolean
    applicationSystem?: boolean
    tuitionInState?: boolean
    tuitionOutState?: boolean
    applicationFee?: boolean
    deadlines?: boolean
    lastSyncedAt?: boolean
    raw?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectScalar = {
    id?: boolean
    externalId?: boolean
    source?: boolean
    name?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    usNewsRanking?: boolean
    acceptanceRate?: boolean
    applicationSystem?: boolean
    tuitionInState?: boolean
    tuitionOutState?: boolean
    applicationFee?: boolean
    deadlines?: boolean
    lastSyncedAt?: boolean
    raw?: boolean
    isActive?: boolean
  }

  export type UniversityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "source" | "name" | "country" | "state" | "city" | "usNewsRanking" | "acceptanceRate" | "applicationSystem" | "tuitionInState" | "tuitionOutState" | "applicationFee" | "deadlines" | "lastSyncedAt" | "raw" | "isActive", ExtArgs["result"]["university"]>
  export type UniversityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | University$applicationsArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UniversityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UniversityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UniversityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "University"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string | null
      source: $Enums.UniversitySource | null
      name: string
      country: string | null
      state: string | null
      city: string | null
      usNewsRanking: number | null
      acceptanceRate: Prisma.Decimal | null
      applicationSystem: string | null
      tuitionInState: Prisma.Decimal | null
      tuitionOutState: Prisma.Decimal | null
      applicationFee: Prisma.Decimal | null
      deadlines: Prisma.JsonValue | null
      lastSyncedAt: Date | null
      raw: Prisma.JsonValue | null
      isActive: boolean
    }, ExtArgs["result"]["university"]>
    composites: {}
  }

  type UniversityGetPayload<S extends boolean | null | undefined | UniversityDefaultArgs> = $Result.GetResult<Prisma.$UniversityPayload, S>

  type UniversityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityCountAggregateInputType | true
    }

  export interface UniversityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['University'], meta: { name: 'University' } }
    /**
     * Find zero or one University that matches the filter.
     * @param {UniversityFindUniqueArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversityFindUniqueArgs>(args: SelectSubset<T, UniversityFindUniqueArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one University that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversityFindUniqueOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversityFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversityFindFirstArgs>(args?: SelectSubset<T, UniversityFindFirstArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversityFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universities
     * const universities = await prisma.university.findMany()
     * 
     * // Get first 10 Universities
     * const universities = await prisma.university.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universityWithIdOnly = await prisma.university.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniversityFindManyArgs>(args?: SelectSubset<T, UniversityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a University.
     * @param {UniversityCreateArgs} args - Arguments to create a University.
     * @example
     * // Create one University
     * const University = await prisma.university.create({
     *   data: {
     *     // ... data to create a University
     *   }
     * })
     * 
     */
    create<T extends UniversityCreateArgs>(args: SelectSubset<T, UniversityCreateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universities.
     * @param {UniversityCreateManyArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const university = await prisma.university.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversityCreateManyArgs>(args?: SelectSubset<T, UniversityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Universities and returns the data saved in the database.
     * @param {UniversityCreateManyAndReturnArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const university = await prisma.university.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Universities and only return the `id`
     * const universityWithIdOnly = await prisma.university.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniversityCreateManyAndReturnArgs>(args?: SelectSubset<T, UniversityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a University.
     * @param {UniversityDeleteArgs} args - Arguments to delete one University.
     * @example
     * // Delete one University
     * const University = await prisma.university.delete({
     *   where: {
     *     // ... filter to delete one University
     *   }
     * })
     * 
     */
    delete<T extends UniversityDeleteArgs>(args: SelectSubset<T, UniversityDeleteArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one University.
     * @param {UniversityUpdateArgs} args - Arguments to update one University.
     * @example
     * // Update one University
     * const university = await prisma.university.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversityUpdateArgs>(args: SelectSubset<T, UniversityUpdateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universities.
     * @param {UniversityDeleteManyArgs} args - Arguments to filter Universities to delete.
     * @example
     * // Delete a few Universities
     * const { count } = await prisma.university.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversityDeleteManyArgs>(args?: SelectSubset<T, UniversityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universities
     * const university = await prisma.university.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversityUpdateManyArgs>(args: SelectSubset<T, UniversityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities and returns the data updated in the database.
     * @param {UniversityUpdateManyAndReturnArgs} args - Arguments to update many Universities.
     * @example
     * // Update many Universities
     * const university = await prisma.university.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Universities and only return the `id`
     * const universityWithIdOnly = await prisma.university.updateManyAndReturn({
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
    updateManyAndReturn<T extends UniversityUpdateManyAndReturnArgs>(args: SelectSubset<T, UniversityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one University.
     * @param {UniversityUpsertArgs} args - Arguments to update or create a University.
     * @example
     * // Update or create a University
     * const university = await prisma.university.upsert({
     *   create: {
     *     // ... data to create a University
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the University we want to update
     *   }
     * })
     */
    upsert<T extends UniversityUpsertArgs>(args: SelectSubset<T, UniversityUpsertArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityCountArgs} args - Arguments to filter Universities to count.
     * @example
     * // Count the number of Universities
     * const count = await prisma.university.count({
     *   where: {
     *     // ... the filter for the Universities we want to count
     *   }
     * })
    **/
    count<T extends UniversityCountArgs>(
      args?: Subset<T, UniversityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniversityAggregateArgs>(args: Subset<T, UniversityAggregateArgs>): Prisma.PrismaPromise<GetUniversityAggregateType<T>>

    /**
     * Group by University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityGroupByArgs} args - Group by arguments.
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
      T extends UniversityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversityGroupByArgs['orderBy'] }
        : { orderBy?: UniversityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniversityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the University model
   */
  readonly fields: UniversityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for University.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends University$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, University$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the University model
   */
  interface UniversityFieldRefs {
    readonly id: FieldRef<"University", 'String'>
    readonly externalId: FieldRef<"University", 'String'>
    readonly source: FieldRef<"University", 'UniversitySource'>
    readonly name: FieldRef<"University", 'String'>
    readonly country: FieldRef<"University", 'String'>
    readonly state: FieldRef<"University", 'String'>
    readonly city: FieldRef<"University", 'String'>
    readonly usNewsRanking: FieldRef<"University", 'Int'>
    readonly acceptanceRate: FieldRef<"University", 'Decimal'>
    readonly applicationSystem: FieldRef<"University", 'String'>
    readonly tuitionInState: FieldRef<"University", 'Decimal'>
    readonly tuitionOutState: FieldRef<"University", 'Decimal'>
    readonly applicationFee: FieldRef<"University", 'Decimal'>
    readonly deadlines: FieldRef<"University", 'Json'>
    readonly lastSyncedAt: FieldRef<"University", 'DateTime'>
    readonly raw: FieldRef<"University", 'Json'>
    readonly isActive: FieldRef<"University", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * University findUnique
   */
  export type UniversityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findUniqueOrThrow
   */
  export type UniversityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findFirst
   */
  export type UniversityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findFirstOrThrow
   */
  export type UniversityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findMany
   */
  export type UniversityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which Universities to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University create
   */
  export type UniversityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to create a University.
     */
    data: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
  }

  /**
   * University createMany
   */
  export type UniversityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Universities.
     */
    data: UniversityCreateManyInput | UniversityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * University createManyAndReturn
   */
  export type UniversityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * The data used to create many Universities.
     */
    data: UniversityCreateManyInput | UniversityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * University update
   */
  export type UniversityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to update a University.
     */
    data: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
    /**
     * Choose, which University to update.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University updateMany
   */
  export type UniversityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Universities.
     */
    data: XOR<UniversityUpdateManyMutationInput, UniversityUncheckedUpdateManyInput>
    /**
     * Filter which Universities to update
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to update.
     */
    limit?: number
  }

  /**
   * University updateManyAndReturn
   */
  export type UniversityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * The data used to update Universities.
     */
    data: XOR<UniversityUpdateManyMutationInput, UniversityUncheckedUpdateManyInput>
    /**
     * Filter which Universities to update
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to update.
     */
    limit?: number
  }

  /**
   * University upsert
   */
  export type UniversityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The filter to search for the University to update in case it exists.
     */
    where: UniversityWhereUniqueInput
    /**
     * In case the University found by the `where` argument doesn't exist, create a new University with this data.
     */
    create: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
    /**
     * In case the University was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
  }

  /**
   * University delete
   */
  export type UniversityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter which University to delete.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University deleteMany
   */
  export type UniversityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universities to delete
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to delete.
     */
    limit?: number
  }

  /**
   * University.applications
   */
  export type University$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * University without action
   */
  export type UniversityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    universityId: string | null
    applicationType: $Enums.ApplicationType | null
    deadline: Date | null
    status: $Enums.ApplicationStatus | null
    submittedDate: Date | null
    decisionDate: Date | null
    decisionType: string | null
    notes: string | null
    createdAt: Date | null
    externalApplicationId: string | null
    syncedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    universityId: string | null
    applicationType: $Enums.ApplicationType | null
    deadline: Date | null
    status: $Enums.ApplicationStatus | null
    submittedDate: Date | null
    decisionDate: Date | null
    decisionType: string | null
    notes: string | null
    createdAt: Date | null
    externalApplicationId: string | null
    syncedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    studentId: number
    universityId: number
    applicationType: number
    deadline: number
    status: number
    submittedDate: number
    decisionDate: number
    decisionType: number
    notes: number
    createdAt: number
    externalApplicationId: number
    syncedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    studentId?: true
    universityId?: true
    applicationType?: true
    deadline?: true
    status?: true
    submittedDate?: true
    decisionDate?: true
    decisionType?: true
    notes?: true
    createdAt?: true
    externalApplicationId?: true
    syncedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    studentId?: true
    universityId?: true
    applicationType?: true
    deadline?: true
    status?: true
    submittedDate?: true
    decisionDate?: true
    decisionType?: true
    notes?: true
    createdAt?: true
    externalApplicationId?: true
    syncedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    studentId?: true
    universityId?: true
    applicationType?: true
    deadline?: true
    status?: true
    submittedDate?: true
    decisionDate?: true
    decisionType?: true
    notes?: true
    createdAt?: true
    externalApplicationId?: true
    syncedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    studentId: string
    universityId: string
    applicationType: $Enums.ApplicationType | null
    deadline: Date | null
    status: $Enums.ApplicationStatus | null
    submittedDate: Date | null
    decisionDate: Date | null
    decisionType: string | null
    notes: string | null
    createdAt: Date
    externalApplicationId: string | null
    syncedAt: Date | null
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    universityId?: boolean
    applicationType?: boolean
    deadline?: boolean
    status?: boolean
    submittedDate?: boolean
    decisionDate?: boolean
    decisionType?: boolean
    notes?: boolean
    createdAt?: boolean
    externalApplicationId?: boolean
    syncedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    documents?: boolean | Application$documentsArgs<ExtArgs>
    appNotes?: boolean | Application$appNotesArgs<ExtArgs>
    requirements?: boolean | Application$requirementsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    universityId?: boolean
    applicationType?: boolean
    deadline?: boolean
    status?: boolean
    submittedDate?: boolean
    decisionDate?: boolean
    decisionType?: boolean
    notes?: boolean
    createdAt?: boolean
    externalApplicationId?: boolean
    syncedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    universityId?: boolean
    applicationType?: boolean
    deadline?: boolean
    status?: boolean
    submittedDate?: boolean
    decisionDate?: boolean
    decisionType?: boolean
    notes?: boolean
    createdAt?: boolean
    externalApplicationId?: boolean
    syncedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    studentId?: boolean
    universityId?: boolean
    applicationType?: boolean
    deadline?: boolean
    status?: boolean
    submittedDate?: boolean
    decisionDate?: boolean
    decisionType?: boolean
    notes?: boolean
    createdAt?: boolean
    externalApplicationId?: boolean
    syncedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "universityId" | "applicationType" | "deadline" | "status" | "submittedDate" | "decisionDate" | "decisionType" | "notes" | "createdAt" | "externalApplicationId" | "syncedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    documents?: boolean | Application$documentsArgs<ExtArgs>
    appNotes?: boolean | Application$appNotesArgs<ExtArgs>
    requirements?: boolean | Application$requirementsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      university: Prisma.$UniversityPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
      documents: Prisma.$ApplicationDocumentPayload<ExtArgs>[]
      appNotes: Prisma.$ApplicationNotePayload<ExtArgs>[]
      requirements: Prisma.$ApplicationRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      universityId: string
      applicationType: $Enums.ApplicationType | null
      deadline: Date | null
      status: $Enums.ApplicationStatus | null
      submittedDate: Date | null
      decisionDate: Date | null
      decisionType: string | null
      notes: string | null
      createdAt: Date
      externalApplicationId: string | null
      syncedAt: Date | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    university<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Application$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Application$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appNotes<T extends Application$appNotesArgs<ExtArgs> = {}>(args?: Subset<T, Application$appNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requirements<T extends Application$requirementsArgs<ExtArgs> = {}>(args?: Subset<T, Application$requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly studentId: FieldRef<"Application", 'String'>
    readonly universityId: FieldRef<"Application", 'String'>
    readonly applicationType: FieldRef<"Application", 'ApplicationType'>
    readonly deadline: FieldRef<"Application", 'DateTime'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly submittedDate: FieldRef<"Application", 'DateTime'>
    readonly decisionDate: FieldRef<"Application", 'DateTime'>
    readonly decisionType: FieldRef<"Application", 'String'>
    readonly notes: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly externalApplicationId: FieldRef<"Application", 'String'>
    readonly syncedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.documents
   */
  export type Application$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    where?: ApplicationDocumentWhereInput
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    cursor?: ApplicationDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * Application.appNotes
   */
  export type Application$appNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    where?: ApplicationNoteWhereInput
    orderBy?: ApplicationNoteOrderByWithRelationInput | ApplicationNoteOrderByWithRelationInput[]
    cursor?: ApplicationNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationNoteScalarFieldEnum | ApplicationNoteScalarFieldEnum[]
  }

  /**
   * Application.requirements
   */
  export type Application$requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    where?: ApplicationRequirementWhereInput
    orderBy?: ApplicationRequirementOrderByWithRelationInput | ApplicationRequirementOrderByWithRelationInput[]
    cursor?: ApplicationRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationRequirementScalarFieldEnum | ApplicationRequirementScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationRequirement
   */

  export type AggregateApplicationRequirement = {
    _count: ApplicationRequirementCountAggregateOutputType | null
    _min: ApplicationRequirementMinAggregateOutputType | null
    _max: ApplicationRequirementMaxAggregateOutputType | null
  }

  export type ApplicationRequirementMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    requirementType: string | null
    status: string | null
    deadline: Date | null
    notes: string | null
  }

  export type ApplicationRequirementMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    requirementType: string | null
    status: string | null
    deadline: Date | null
    notes: string | null
  }

  export type ApplicationRequirementCountAggregateOutputType = {
    id: number
    applicationId: number
    requirementType: number
    status: number
    deadline: number
    notes: number
    _all: number
  }


  export type ApplicationRequirementMinAggregateInputType = {
    id?: true
    applicationId?: true
    requirementType?: true
    status?: true
    deadline?: true
    notes?: true
  }

  export type ApplicationRequirementMaxAggregateInputType = {
    id?: true
    applicationId?: true
    requirementType?: true
    status?: true
    deadline?: true
    notes?: true
  }

  export type ApplicationRequirementCountAggregateInputType = {
    id?: true
    applicationId?: true
    requirementType?: true
    status?: true
    deadline?: true
    notes?: true
    _all?: true
  }

  export type ApplicationRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationRequirement to aggregate.
     */
    where?: ApplicationRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationRequirements to fetch.
     */
    orderBy?: ApplicationRequirementOrderByWithRelationInput | ApplicationRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationRequirements
    **/
    _count?: true | ApplicationRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationRequirementMaxAggregateInputType
  }

  export type GetApplicationRequirementAggregateType<T extends ApplicationRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationRequirement[P]>
      : GetScalarType<T[P], AggregateApplicationRequirement[P]>
  }




  export type ApplicationRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationRequirementWhereInput
    orderBy?: ApplicationRequirementOrderByWithAggregationInput | ApplicationRequirementOrderByWithAggregationInput[]
    by: ApplicationRequirementScalarFieldEnum[] | ApplicationRequirementScalarFieldEnum
    having?: ApplicationRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationRequirementCountAggregateInputType | true
    _min?: ApplicationRequirementMinAggregateInputType
    _max?: ApplicationRequirementMaxAggregateInputType
  }

  export type ApplicationRequirementGroupByOutputType = {
    id: string
    applicationId: string
    requirementType: string
    status: string | null
    deadline: Date | null
    notes: string | null
    _count: ApplicationRequirementCountAggregateOutputType | null
    _min: ApplicationRequirementMinAggregateOutputType | null
    _max: ApplicationRequirementMaxAggregateOutputType | null
  }

  type GetApplicationRequirementGroupByPayload<T extends ApplicationRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationRequirementGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    requirementType?: boolean
    status?: boolean
    deadline?: boolean
    notes?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationRequirement"]>

  export type ApplicationRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    requirementType?: boolean
    status?: boolean
    deadline?: boolean
    notes?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationRequirement"]>

  export type ApplicationRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    requirementType?: boolean
    status?: boolean
    deadline?: boolean
    notes?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationRequirement"]>

  export type ApplicationRequirementSelectScalar = {
    id?: boolean
    applicationId?: boolean
    requirementType?: boolean
    status?: boolean
    deadline?: boolean
    notes?: boolean
  }

  export type ApplicationRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "requirementType" | "status" | "deadline" | "notes", ExtArgs["result"]["applicationRequirement"]>
  export type ApplicationRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationRequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $ApplicationRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationRequirement"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      requirementType: string
      status: string | null
      deadline: Date | null
      notes: string | null
    }, ExtArgs["result"]["applicationRequirement"]>
    composites: {}
  }

  type ApplicationRequirementGetPayload<S extends boolean | null | undefined | ApplicationRequirementDefaultArgs> = $Result.GetResult<Prisma.$ApplicationRequirementPayload, S>

  type ApplicationRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationRequirementCountAggregateInputType | true
    }

  export interface ApplicationRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationRequirement'], meta: { name: 'ApplicationRequirement' } }
    /**
     * Find zero or one ApplicationRequirement that matches the filter.
     * @param {ApplicationRequirementFindUniqueArgs} args - Arguments to find a ApplicationRequirement
     * @example
     * // Get one ApplicationRequirement
     * const applicationRequirement = await prisma.applicationRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationRequirementFindUniqueArgs>(args: SelectSubset<T, ApplicationRequirementFindUniqueArgs<ExtArgs>>): Prisma__ApplicationRequirementClient<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationRequirementFindUniqueOrThrowArgs} args - Arguments to find a ApplicationRequirement
     * @example
     * // Get one ApplicationRequirement
     * const applicationRequirement = await prisma.applicationRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationRequirementClient<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationRequirementFindFirstArgs} args - Arguments to find a ApplicationRequirement
     * @example
     * // Get one ApplicationRequirement
     * const applicationRequirement = await prisma.applicationRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationRequirementFindFirstArgs>(args?: SelectSubset<T, ApplicationRequirementFindFirstArgs<ExtArgs>>): Prisma__ApplicationRequirementClient<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationRequirementFindFirstOrThrowArgs} args - Arguments to find a ApplicationRequirement
     * @example
     * // Get one ApplicationRequirement
     * const applicationRequirement = await prisma.applicationRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationRequirementClient<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationRequirements
     * const applicationRequirements = await prisma.applicationRequirement.findMany()
     * 
     * // Get first 10 ApplicationRequirements
     * const applicationRequirements = await prisma.applicationRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationRequirementWithIdOnly = await prisma.applicationRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationRequirementFindManyArgs>(args?: SelectSubset<T, ApplicationRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationRequirement.
     * @param {ApplicationRequirementCreateArgs} args - Arguments to create a ApplicationRequirement.
     * @example
     * // Create one ApplicationRequirement
     * const ApplicationRequirement = await prisma.applicationRequirement.create({
     *   data: {
     *     // ... data to create a ApplicationRequirement
     *   }
     * })
     * 
     */
    create<T extends ApplicationRequirementCreateArgs>(args: SelectSubset<T, ApplicationRequirementCreateArgs<ExtArgs>>): Prisma__ApplicationRequirementClient<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationRequirements.
     * @param {ApplicationRequirementCreateManyArgs} args - Arguments to create many ApplicationRequirements.
     * @example
     * // Create many ApplicationRequirements
     * const applicationRequirement = await prisma.applicationRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationRequirementCreateManyArgs>(args?: SelectSubset<T, ApplicationRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationRequirements and returns the data saved in the database.
     * @param {ApplicationRequirementCreateManyAndReturnArgs} args - Arguments to create many ApplicationRequirements.
     * @example
     * // Create many ApplicationRequirements
     * const applicationRequirement = await prisma.applicationRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationRequirements and only return the `id`
     * const applicationRequirementWithIdOnly = await prisma.applicationRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationRequirement.
     * @param {ApplicationRequirementDeleteArgs} args - Arguments to delete one ApplicationRequirement.
     * @example
     * // Delete one ApplicationRequirement
     * const ApplicationRequirement = await prisma.applicationRequirement.delete({
     *   where: {
     *     // ... filter to delete one ApplicationRequirement
     *   }
     * })
     * 
     */
    delete<T extends ApplicationRequirementDeleteArgs>(args: SelectSubset<T, ApplicationRequirementDeleteArgs<ExtArgs>>): Prisma__ApplicationRequirementClient<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationRequirement.
     * @param {ApplicationRequirementUpdateArgs} args - Arguments to update one ApplicationRequirement.
     * @example
     * // Update one ApplicationRequirement
     * const applicationRequirement = await prisma.applicationRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationRequirementUpdateArgs>(args: SelectSubset<T, ApplicationRequirementUpdateArgs<ExtArgs>>): Prisma__ApplicationRequirementClient<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationRequirements.
     * @param {ApplicationRequirementDeleteManyArgs} args - Arguments to filter ApplicationRequirements to delete.
     * @example
     * // Delete a few ApplicationRequirements
     * const { count } = await prisma.applicationRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationRequirementDeleteManyArgs>(args?: SelectSubset<T, ApplicationRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationRequirements
     * const applicationRequirement = await prisma.applicationRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationRequirementUpdateManyArgs>(args: SelectSubset<T, ApplicationRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationRequirements and returns the data updated in the database.
     * @param {ApplicationRequirementUpdateManyAndReturnArgs} args - Arguments to update many ApplicationRequirements.
     * @example
     * // Update many ApplicationRequirements
     * const applicationRequirement = await prisma.applicationRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationRequirements and only return the `id`
     * const applicationRequirementWithIdOnly = await prisma.applicationRequirement.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationRequirement.
     * @param {ApplicationRequirementUpsertArgs} args - Arguments to update or create a ApplicationRequirement.
     * @example
     * // Update or create a ApplicationRequirement
     * const applicationRequirement = await prisma.applicationRequirement.upsert({
     *   create: {
     *     // ... data to create a ApplicationRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationRequirement we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationRequirementUpsertArgs>(args: SelectSubset<T, ApplicationRequirementUpsertArgs<ExtArgs>>): Prisma__ApplicationRequirementClient<$Result.GetResult<Prisma.$ApplicationRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationRequirementCountArgs} args - Arguments to filter ApplicationRequirements to count.
     * @example
     * // Count the number of ApplicationRequirements
     * const count = await prisma.applicationRequirement.count({
     *   where: {
     *     // ... the filter for the ApplicationRequirements we want to count
     *   }
     * })
    **/
    count<T extends ApplicationRequirementCountArgs>(
      args?: Subset<T, ApplicationRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationRequirementAggregateArgs>(args: Subset<T, ApplicationRequirementAggregateArgs>): Prisma.PrismaPromise<GetApplicationRequirementAggregateType<T>>

    /**
     * Group by ApplicationRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationRequirementGroupByArgs} args - Group by arguments.
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
      T extends ApplicationRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationRequirementGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationRequirementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationRequirement model
   */
  readonly fields: ApplicationRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApplicationRequirement model
   */
  interface ApplicationRequirementFieldRefs {
    readonly id: FieldRef<"ApplicationRequirement", 'String'>
    readonly applicationId: FieldRef<"ApplicationRequirement", 'String'>
    readonly requirementType: FieldRef<"ApplicationRequirement", 'String'>
    readonly status: FieldRef<"ApplicationRequirement", 'String'>
    readonly deadline: FieldRef<"ApplicationRequirement", 'DateTime'>
    readonly notes: FieldRef<"ApplicationRequirement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationRequirement findUnique
   */
  export type ApplicationRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationRequirement to fetch.
     */
    where: ApplicationRequirementWhereUniqueInput
  }

  /**
   * ApplicationRequirement findUniqueOrThrow
   */
  export type ApplicationRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationRequirement to fetch.
     */
    where: ApplicationRequirementWhereUniqueInput
  }

  /**
   * ApplicationRequirement findFirst
   */
  export type ApplicationRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationRequirement to fetch.
     */
    where?: ApplicationRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationRequirements to fetch.
     */
    orderBy?: ApplicationRequirementOrderByWithRelationInput | ApplicationRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationRequirements.
     */
    cursor?: ApplicationRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationRequirements.
     */
    distinct?: ApplicationRequirementScalarFieldEnum | ApplicationRequirementScalarFieldEnum[]
  }

  /**
   * ApplicationRequirement findFirstOrThrow
   */
  export type ApplicationRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationRequirement to fetch.
     */
    where?: ApplicationRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationRequirements to fetch.
     */
    orderBy?: ApplicationRequirementOrderByWithRelationInput | ApplicationRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationRequirements.
     */
    cursor?: ApplicationRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationRequirements.
     */
    distinct?: ApplicationRequirementScalarFieldEnum | ApplicationRequirementScalarFieldEnum[]
  }

  /**
   * ApplicationRequirement findMany
   */
  export type ApplicationRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationRequirements to fetch.
     */
    where?: ApplicationRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationRequirements to fetch.
     */
    orderBy?: ApplicationRequirementOrderByWithRelationInput | ApplicationRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationRequirements.
     */
    cursor?: ApplicationRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationRequirements.
     */
    skip?: number
    distinct?: ApplicationRequirementScalarFieldEnum | ApplicationRequirementScalarFieldEnum[]
  }

  /**
   * ApplicationRequirement create
   */
  export type ApplicationRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationRequirement.
     */
    data: XOR<ApplicationRequirementCreateInput, ApplicationRequirementUncheckedCreateInput>
  }

  /**
   * ApplicationRequirement createMany
   */
  export type ApplicationRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationRequirements.
     */
    data: ApplicationRequirementCreateManyInput | ApplicationRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationRequirement createManyAndReturn
   */
  export type ApplicationRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationRequirements.
     */
    data: ApplicationRequirementCreateManyInput | ApplicationRequirementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationRequirement update
   */
  export type ApplicationRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationRequirement.
     */
    data: XOR<ApplicationRequirementUpdateInput, ApplicationRequirementUncheckedUpdateInput>
    /**
     * Choose, which ApplicationRequirement to update.
     */
    where: ApplicationRequirementWhereUniqueInput
  }

  /**
   * ApplicationRequirement updateMany
   */
  export type ApplicationRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationRequirements.
     */
    data: XOR<ApplicationRequirementUpdateManyMutationInput, ApplicationRequirementUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationRequirements to update
     */
    where?: ApplicationRequirementWhereInput
    /**
     * Limit how many ApplicationRequirements to update.
     */
    limit?: number
  }

  /**
   * ApplicationRequirement updateManyAndReturn
   */
  export type ApplicationRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationRequirements.
     */
    data: XOR<ApplicationRequirementUpdateManyMutationInput, ApplicationRequirementUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationRequirements to update
     */
    where?: ApplicationRequirementWhereInput
    /**
     * Limit how many ApplicationRequirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationRequirement upsert
   */
  export type ApplicationRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationRequirement to update in case it exists.
     */
    where: ApplicationRequirementWhereUniqueInput
    /**
     * In case the ApplicationRequirement found by the `where` argument doesn't exist, create a new ApplicationRequirement with this data.
     */
    create: XOR<ApplicationRequirementCreateInput, ApplicationRequirementUncheckedCreateInput>
    /**
     * In case the ApplicationRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationRequirementUpdateInput, ApplicationRequirementUncheckedUpdateInput>
  }

  /**
   * ApplicationRequirement delete
   */
  export type ApplicationRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
    /**
     * Filter which ApplicationRequirement to delete.
     */
    where: ApplicationRequirementWhereUniqueInput
  }

  /**
   * ApplicationRequirement deleteMany
   */
  export type ApplicationRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationRequirements to delete
     */
    where?: ApplicationRequirementWhereInput
    /**
     * Limit how many ApplicationRequirements to delete.
     */
    limit?: number
  }

  /**
   * ApplicationRequirement without action
   */
  export type ApplicationRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationRequirement
     */
    select?: ApplicationRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationRequirement
     */
    omit?: ApplicationRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationRequirementInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationNote
   */

  export type AggregateApplicationNote = {
    _count: ApplicationNoteCountAggregateOutputType | null
    _min: ApplicationNoteMinAggregateOutputType | null
    _max: ApplicationNoteMaxAggregateOutputType | null
  }

  export type ApplicationNoteMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    authorType: string | null
    authorId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ApplicationNoteMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    authorType: string | null
    authorId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ApplicationNoteCountAggregateOutputType = {
    id: number
    applicationId: number
    authorType: number
    authorId: number
    content: number
    createdAt: number
    _all: number
  }


  export type ApplicationNoteMinAggregateInputType = {
    id?: true
    applicationId?: true
    authorType?: true
    authorId?: true
    content?: true
    createdAt?: true
  }

  export type ApplicationNoteMaxAggregateInputType = {
    id?: true
    applicationId?: true
    authorType?: true
    authorId?: true
    content?: true
    createdAt?: true
  }

  export type ApplicationNoteCountAggregateInputType = {
    id?: true
    applicationId?: true
    authorType?: true
    authorId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ApplicationNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationNote to aggregate.
     */
    where?: ApplicationNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationNotes to fetch.
     */
    orderBy?: ApplicationNoteOrderByWithRelationInput | ApplicationNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationNotes
    **/
    _count?: true | ApplicationNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationNoteMaxAggregateInputType
  }

  export type GetApplicationNoteAggregateType<T extends ApplicationNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationNote[P]>
      : GetScalarType<T[P], AggregateApplicationNote[P]>
  }




  export type ApplicationNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationNoteWhereInput
    orderBy?: ApplicationNoteOrderByWithAggregationInput | ApplicationNoteOrderByWithAggregationInput[]
    by: ApplicationNoteScalarFieldEnum[] | ApplicationNoteScalarFieldEnum
    having?: ApplicationNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationNoteCountAggregateInputType | true
    _min?: ApplicationNoteMinAggregateInputType
    _max?: ApplicationNoteMaxAggregateInputType
  }

  export type ApplicationNoteGroupByOutputType = {
    id: string
    applicationId: string
    authorType: string
    authorId: string
    content: string
    createdAt: Date
    _count: ApplicationNoteCountAggregateOutputType | null
    _min: ApplicationNoteMinAggregateOutputType | null
    _max: ApplicationNoteMaxAggregateOutputType | null
  }

  type GetApplicationNoteGroupByPayload<T extends ApplicationNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationNoteGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    authorType?: boolean
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationNote"]>

  export type ApplicationNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    authorType?: boolean
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationNote"]>

  export type ApplicationNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    authorType?: boolean
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationNote"]>

  export type ApplicationNoteSelectScalar = {
    id?: boolean
    applicationId?: boolean
    authorType?: boolean
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ApplicationNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "authorType" | "authorId" | "content" | "createdAt", ExtArgs["result"]["applicationNote"]>
  export type ApplicationNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $ApplicationNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationNote"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      authorType: string
      authorId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["applicationNote"]>
    composites: {}
  }

  type ApplicationNoteGetPayload<S extends boolean | null | undefined | ApplicationNoteDefaultArgs> = $Result.GetResult<Prisma.$ApplicationNotePayload, S>

  type ApplicationNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationNoteCountAggregateInputType | true
    }

  export interface ApplicationNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationNote'], meta: { name: 'ApplicationNote' } }
    /**
     * Find zero or one ApplicationNote that matches the filter.
     * @param {ApplicationNoteFindUniqueArgs} args - Arguments to find a ApplicationNote
     * @example
     * // Get one ApplicationNote
     * const applicationNote = await prisma.applicationNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationNoteFindUniqueArgs>(args: SelectSubset<T, ApplicationNoteFindUniqueArgs<ExtArgs>>): Prisma__ApplicationNoteClient<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationNoteFindUniqueOrThrowArgs} args - Arguments to find a ApplicationNote
     * @example
     * // Get one ApplicationNote
     * const applicationNote = await prisma.applicationNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationNoteClient<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationNoteFindFirstArgs} args - Arguments to find a ApplicationNote
     * @example
     * // Get one ApplicationNote
     * const applicationNote = await prisma.applicationNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationNoteFindFirstArgs>(args?: SelectSubset<T, ApplicationNoteFindFirstArgs<ExtArgs>>): Prisma__ApplicationNoteClient<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationNoteFindFirstOrThrowArgs} args - Arguments to find a ApplicationNote
     * @example
     * // Get one ApplicationNote
     * const applicationNote = await prisma.applicationNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationNoteClient<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationNotes
     * const applicationNotes = await prisma.applicationNote.findMany()
     * 
     * // Get first 10 ApplicationNotes
     * const applicationNotes = await prisma.applicationNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationNoteWithIdOnly = await prisma.applicationNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationNoteFindManyArgs>(args?: SelectSubset<T, ApplicationNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationNote.
     * @param {ApplicationNoteCreateArgs} args - Arguments to create a ApplicationNote.
     * @example
     * // Create one ApplicationNote
     * const ApplicationNote = await prisma.applicationNote.create({
     *   data: {
     *     // ... data to create a ApplicationNote
     *   }
     * })
     * 
     */
    create<T extends ApplicationNoteCreateArgs>(args: SelectSubset<T, ApplicationNoteCreateArgs<ExtArgs>>): Prisma__ApplicationNoteClient<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationNotes.
     * @param {ApplicationNoteCreateManyArgs} args - Arguments to create many ApplicationNotes.
     * @example
     * // Create many ApplicationNotes
     * const applicationNote = await prisma.applicationNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationNoteCreateManyArgs>(args?: SelectSubset<T, ApplicationNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationNotes and returns the data saved in the database.
     * @param {ApplicationNoteCreateManyAndReturnArgs} args - Arguments to create many ApplicationNotes.
     * @example
     * // Create many ApplicationNotes
     * const applicationNote = await prisma.applicationNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationNotes and only return the `id`
     * const applicationNoteWithIdOnly = await prisma.applicationNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationNote.
     * @param {ApplicationNoteDeleteArgs} args - Arguments to delete one ApplicationNote.
     * @example
     * // Delete one ApplicationNote
     * const ApplicationNote = await prisma.applicationNote.delete({
     *   where: {
     *     // ... filter to delete one ApplicationNote
     *   }
     * })
     * 
     */
    delete<T extends ApplicationNoteDeleteArgs>(args: SelectSubset<T, ApplicationNoteDeleteArgs<ExtArgs>>): Prisma__ApplicationNoteClient<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationNote.
     * @param {ApplicationNoteUpdateArgs} args - Arguments to update one ApplicationNote.
     * @example
     * // Update one ApplicationNote
     * const applicationNote = await prisma.applicationNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationNoteUpdateArgs>(args: SelectSubset<T, ApplicationNoteUpdateArgs<ExtArgs>>): Prisma__ApplicationNoteClient<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationNotes.
     * @param {ApplicationNoteDeleteManyArgs} args - Arguments to filter ApplicationNotes to delete.
     * @example
     * // Delete a few ApplicationNotes
     * const { count } = await prisma.applicationNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationNoteDeleteManyArgs>(args?: SelectSubset<T, ApplicationNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationNotes
     * const applicationNote = await prisma.applicationNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationNoteUpdateManyArgs>(args: SelectSubset<T, ApplicationNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationNotes and returns the data updated in the database.
     * @param {ApplicationNoteUpdateManyAndReturnArgs} args - Arguments to update many ApplicationNotes.
     * @example
     * // Update many ApplicationNotes
     * const applicationNote = await prisma.applicationNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationNotes and only return the `id`
     * const applicationNoteWithIdOnly = await prisma.applicationNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationNote.
     * @param {ApplicationNoteUpsertArgs} args - Arguments to update or create a ApplicationNote.
     * @example
     * // Update or create a ApplicationNote
     * const applicationNote = await prisma.applicationNote.upsert({
     *   create: {
     *     // ... data to create a ApplicationNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationNote we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationNoteUpsertArgs>(args: SelectSubset<T, ApplicationNoteUpsertArgs<ExtArgs>>): Prisma__ApplicationNoteClient<$Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationNoteCountArgs} args - Arguments to filter ApplicationNotes to count.
     * @example
     * // Count the number of ApplicationNotes
     * const count = await prisma.applicationNote.count({
     *   where: {
     *     // ... the filter for the ApplicationNotes we want to count
     *   }
     * })
    **/
    count<T extends ApplicationNoteCountArgs>(
      args?: Subset<T, ApplicationNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationNoteAggregateArgs>(args: Subset<T, ApplicationNoteAggregateArgs>): Prisma.PrismaPromise<GetApplicationNoteAggregateType<T>>

    /**
     * Group by ApplicationNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationNoteGroupByArgs} args - Group by arguments.
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
      T extends ApplicationNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationNoteGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationNote model
   */
  readonly fields: ApplicationNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApplicationNote model
   */
  interface ApplicationNoteFieldRefs {
    readonly id: FieldRef<"ApplicationNote", 'String'>
    readonly applicationId: FieldRef<"ApplicationNote", 'String'>
    readonly authorType: FieldRef<"ApplicationNote", 'String'>
    readonly authorId: FieldRef<"ApplicationNote", 'String'>
    readonly content: FieldRef<"ApplicationNote", 'String'>
    readonly createdAt: FieldRef<"ApplicationNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationNote findUnique
   */
  export type ApplicationNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationNote to fetch.
     */
    where: ApplicationNoteWhereUniqueInput
  }

  /**
   * ApplicationNote findUniqueOrThrow
   */
  export type ApplicationNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationNote to fetch.
     */
    where: ApplicationNoteWhereUniqueInput
  }

  /**
   * ApplicationNote findFirst
   */
  export type ApplicationNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationNote to fetch.
     */
    where?: ApplicationNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationNotes to fetch.
     */
    orderBy?: ApplicationNoteOrderByWithRelationInput | ApplicationNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationNotes.
     */
    cursor?: ApplicationNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationNotes.
     */
    distinct?: ApplicationNoteScalarFieldEnum | ApplicationNoteScalarFieldEnum[]
  }

  /**
   * ApplicationNote findFirstOrThrow
   */
  export type ApplicationNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationNote to fetch.
     */
    where?: ApplicationNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationNotes to fetch.
     */
    orderBy?: ApplicationNoteOrderByWithRelationInput | ApplicationNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationNotes.
     */
    cursor?: ApplicationNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationNotes.
     */
    distinct?: ApplicationNoteScalarFieldEnum | ApplicationNoteScalarFieldEnum[]
  }

  /**
   * ApplicationNote findMany
   */
  export type ApplicationNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationNotes to fetch.
     */
    where?: ApplicationNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationNotes to fetch.
     */
    orderBy?: ApplicationNoteOrderByWithRelationInput | ApplicationNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationNotes.
     */
    cursor?: ApplicationNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationNotes.
     */
    skip?: number
    distinct?: ApplicationNoteScalarFieldEnum | ApplicationNoteScalarFieldEnum[]
  }

  /**
   * ApplicationNote create
   */
  export type ApplicationNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationNote.
     */
    data: XOR<ApplicationNoteCreateInput, ApplicationNoteUncheckedCreateInput>
  }

  /**
   * ApplicationNote createMany
   */
  export type ApplicationNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationNotes.
     */
    data: ApplicationNoteCreateManyInput | ApplicationNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationNote createManyAndReturn
   */
  export type ApplicationNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationNotes.
     */
    data: ApplicationNoteCreateManyInput | ApplicationNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationNote update
   */
  export type ApplicationNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationNote.
     */
    data: XOR<ApplicationNoteUpdateInput, ApplicationNoteUncheckedUpdateInput>
    /**
     * Choose, which ApplicationNote to update.
     */
    where: ApplicationNoteWhereUniqueInput
  }

  /**
   * ApplicationNote updateMany
   */
  export type ApplicationNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationNotes.
     */
    data: XOR<ApplicationNoteUpdateManyMutationInput, ApplicationNoteUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationNotes to update
     */
    where?: ApplicationNoteWhereInput
    /**
     * Limit how many ApplicationNotes to update.
     */
    limit?: number
  }

  /**
   * ApplicationNote updateManyAndReturn
   */
  export type ApplicationNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationNotes.
     */
    data: XOR<ApplicationNoteUpdateManyMutationInput, ApplicationNoteUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationNotes to update
     */
    where?: ApplicationNoteWhereInput
    /**
     * Limit how many ApplicationNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationNote upsert
   */
  export type ApplicationNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationNote to update in case it exists.
     */
    where: ApplicationNoteWhereUniqueInput
    /**
     * In case the ApplicationNote found by the `where` argument doesn't exist, create a new ApplicationNote with this data.
     */
    create: XOR<ApplicationNoteCreateInput, ApplicationNoteUncheckedCreateInput>
    /**
     * In case the ApplicationNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationNoteUpdateInput, ApplicationNoteUncheckedUpdateInput>
  }

  /**
   * ApplicationNote delete
   */
  export type ApplicationNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
    /**
     * Filter which ApplicationNote to delete.
     */
    where: ApplicationNoteWhereUniqueInput
  }

  /**
   * ApplicationNote deleteMany
   */
  export type ApplicationNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationNotes to delete
     */
    where?: ApplicationNoteWhereInput
    /**
     * Limit how many ApplicationNotes to delete.
     */
    limit?: number
  }

  /**
   * ApplicationNote without action
   */
  export type ApplicationNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationNote
     */
    select?: ApplicationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationNote
     */
    omit?: ApplicationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationNoteInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationDocument
   */

  export type AggregateApplicationDocument = {
    _count: ApplicationDocumentCountAggregateOutputType | null
    _avg: ApplicationDocumentAvgAggregateOutputType | null
    _sum: ApplicationDocumentSumAggregateOutputType | null
    _min: ApplicationDocumentMinAggregateOutputType | null
    _max: ApplicationDocumentMaxAggregateOutputType | null
  }

  export type ApplicationDocumentAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type ApplicationDocumentSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type ApplicationDocumentMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    docType: string | null
    filename: string | null
    mimeType: string | null
    sizeBytes: number | null
    storagePath: string | null
    uploadedAt: Date | null
  }

  export type ApplicationDocumentMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    docType: string | null
    filename: string | null
    mimeType: string | null
    sizeBytes: number | null
    storagePath: string | null
    uploadedAt: Date | null
  }

  export type ApplicationDocumentCountAggregateOutputType = {
    id: number
    applicationId: number
    docType: number
    filename: number
    mimeType: number
    sizeBytes: number
    storagePath: number
    uploadedAt: number
    _all: number
  }


  export type ApplicationDocumentAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type ApplicationDocumentSumAggregateInputType = {
    sizeBytes?: true
  }

  export type ApplicationDocumentMinAggregateInputType = {
    id?: true
    applicationId?: true
    docType?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    storagePath?: true
    uploadedAt?: true
  }

  export type ApplicationDocumentMaxAggregateInputType = {
    id?: true
    applicationId?: true
    docType?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    storagePath?: true
    uploadedAt?: true
  }

  export type ApplicationDocumentCountAggregateInputType = {
    id?: true
    applicationId?: true
    docType?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    storagePath?: true
    uploadedAt?: true
    _all?: true
  }

  export type ApplicationDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDocument to aggregate.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationDocuments
    **/
    _count?: true | ApplicationDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationDocumentMaxAggregateInputType
  }

  export type GetApplicationDocumentAggregateType<T extends ApplicationDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationDocument[P]>
      : GetScalarType<T[P], AggregateApplicationDocument[P]>
  }




  export type ApplicationDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDocumentWhereInput
    orderBy?: ApplicationDocumentOrderByWithAggregationInput | ApplicationDocumentOrderByWithAggregationInput[]
    by: ApplicationDocumentScalarFieldEnum[] | ApplicationDocumentScalarFieldEnum
    having?: ApplicationDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationDocumentCountAggregateInputType | true
    _avg?: ApplicationDocumentAvgAggregateInputType
    _sum?: ApplicationDocumentSumAggregateInputType
    _min?: ApplicationDocumentMinAggregateInputType
    _max?: ApplicationDocumentMaxAggregateInputType
  }

  export type ApplicationDocumentGroupByOutputType = {
    id: string
    applicationId: string
    docType: string
    filename: string
    mimeType: string
    sizeBytes: number
    storagePath: string
    uploadedAt: Date
    _count: ApplicationDocumentCountAggregateOutputType | null
    _avg: ApplicationDocumentAvgAggregateOutputType | null
    _sum: ApplicationDocumentSumAggregateOutputType | null
    _min: ApplicationDocumentMinAggregateOutputType | null
    _max: ApplicationDocumentMaxAggregateOutputType | null
  }

  type GetApplicationDocumentGroupByPayload<T extends ApplicationDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    docType?: boolean
    filename?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    storagePath?: boolean
    uploadedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocument"]>

  export type ApplicationDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    docType?: boolean
    filename?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    storagePath?: boolean
    uploadedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocument"]>

  export type ApplicationDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    docType?: boolean
    filename?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    storagePath?: boolean
    uploadedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocument"]>

  export type ApplicationDocumentSelectScalar = {
    id?: boolean
    applicationId?: boolean
    docType?: boolean
    filename?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    storagePath?: boolean
    uploadedAt?: boolean
  }

  export type ApplicationDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "docType" | "filename" | "mimeType" | "sizeBytes" | "storagePath" | "uploadedAt", ExtArgs["result"]["applicationDocument"]>
  export type ApplicationDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $ApplicationDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationDocument"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      docType: string
      filename: string
      mimeType: string
      sizeBytes: number
      storagePath: string
      uploadedAt: Date
    }, ExtArgs["result"]["applicationDocument"]>
    composites: {}
  }

  type ApplicationDocumentGetPayload<S extends boolean | null | undefined | ApplicationDocumentDefaultArgs> = $Result.GetResult<Prisma.$ApplicationDocumentPayload, S>

  type ApplicationDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationDocumentCountAggregateInputType | true
    }

  export interface ApplicationDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationDocument'], meta: { name: 'ApplicationDocument' } }
    /**
     * Find zero or one ApplicationDocument that matches the filter.
     * @param {ApplicationDocumentFindUniqueArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationDocumentFindUniqueArgs>(args: SelectSubset<T, ApplicationDocumentFindUniqueArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationDocumentFindUniqueOrThrowArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindFirstArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationDocumentFindFirstArgs>(args?: SelectSubset<T, ApplicationDocumentFindFirstArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindFirstOrThrowArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocument.findMany()
     * 
     * // Get first 10 ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationDocumentWithIdOnly = await prisma.applicationDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationDocumentFindManyArgs>(args?: SelectSubset<T, ApplicationDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationDocument.
     * @param {ApplicationDocumentCreateArgs} args - Arguments to create a ApplicationDocument.
     * @example
     * // Create one ApplicationDocument
     * const ApplicationDocument = await prisma.applicationDocument.create({
     *   data: {
     *     // ... data to create a ApplicationDocument
     *   }
     * })
     * 
     */
    create<T extends ApplicationDocumentCreateArgs>(args: SelectSubset<T, ApplicationDocumentCreateArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationDocuments.
     * @param {ApplicationDocumentCreateManyArgs} args - Arguments to create many ApplicationDocuments.
     * @example
     * // Create many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationDocumentCreateManyArgs>(args?: SelectSubset<T, ApplicationDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationDocuments and returns the data saved in the database.
     * @param {ApplicationDocumentCreateManyAndReturnArgs} args - Arguments to create many ApplicationDocuments.
     * @example
     * // Create many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationDocuments and only return the `id`
     * const applicationDocumentWithIdOnly = await prisma.applicationDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationDocument.
     * @param {ApplicationDocumentDeleteArgs} args - Arguments to delete one ApplicationDocument.
     * @example
     * // Delete one ApplicationDocument
     * const ApplicationDocument = await prisma.applicationDocument.delete({
     *   where: {
     *     // ... filter to delete one ApplicationDocument
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDocumentDeleteArgs>(args: SelectSubset<T, ApplicationDocumentDeleteArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationDocument.
     * @param {ApplicationDocumentUpdateArgs} args - Arguments to update one ApplicationDocument.
     * @example
     * // Update one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationDocumentUpdateArgs>(args: SelectSubset<T, ApplicationDocumentUpdateArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationDocuments.
     * @param {ApplicationDocumentDeleteManyArgs} args - Arguments to filter ApplicationDocuments to delete.
     * @example
     * // Delete a few ApplicationDocuments
     * const { count } = await prisma.applicationDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDocumentDeleteManyArgs>(args?: SelectSubset<T, ApplicationDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationDocumentUpdateManyArgs>(args: SelectSubset<T, ApplicationDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDocuments and returns the data updated in the database.
     * @param {ApplicationDocumentUpdateManyAndReturnArgs} args - Arguments to update many ApplicationDocuments.
     * @example
     * // Update many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationDocuments and only return the `id`
     * const applicationDocumentWithIdOnly = await prisma.applicationDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationDocument.
     * @param {ApplicationDocumentUpsertArgs} args - Arguments to update or create a ApplicationDocument.
     * @example
     * // Update or create a ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.upsert({
     *   create: {
     *     // ... data to create a ApplicationDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationDocument we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationDocumentUpsertArgs>(args: SelectSubset<T, ApplicationDocumentUpsertArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentCountArgs} args - Arguments to filter ApplicationDocuments to count.
     * @example
     * // Count the number of ApplicationDocuments
     * const count = await prisma.applicationDocument.count({
     *   where: {
     *     // ... the filter for the ApplicationDocuments we want to count
     *   }
     * })
    **/
    count<T extends ApplicationDocumentCountArgs>(
      args?: Subset<T, ApplicationDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationDocumentAggregateArgs>(args: Subset<T, ApplicationDocumentAggregateArgs>): Prisma.PrismaPromise<GetApplicationDocumentAggregateType<T>>

    /**
     * Group by ApplicationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentGroupByArgs} args - Group by arguments.
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
      T extends ApplicationDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationDocument model
   */
  readonly fields: ApplicationDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApplicationDocument model
   */
  interface ApplicationDocumentFieldRefs {
    readonly id: FieldRef<"ApplicationDocument", 'String'>
    readonly applicationId: FieldRef<"ApplicationDocument", 'String'>
    readonly docType: FieldRef<"ApplicationDocument", 'String'>
    readonly filename: FieldRef<"ApplicationDocument", 'String'>
    readonly mimeType: FieldRef<"ApplicationDocument", 'String'>
    readonly sizeBytes: FieldRef<"ApplicationDocument", 'Int'>
    readonly storagePath: FieldRef<"ApplicationDocument", 'String'>
    readonly uploadedAt: FieldRef<"ApplicationDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationDocument findUnique
   */
  export type ApplicationDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument findUniqueOrThrow
   */
  export type ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument findFirst
   */
  export type ApplicationDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDocuments.
     */
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument findFirstOrThrow
   */
  export type ApplicationDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDocuments.
     */
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument findMany
   */
  export type ApplicationDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocuments to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument create
   */
  export type ApplicationDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationDocument.
     */
    data: XOR<ApplicationDocumentCreateInput, ApplicationDocumentUncheckedCreateInput>
  }

  /**
   * ApplicationDocument createMany
   */
  export type ApplicationDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationDocuments.
     */
    data: ApplicationDocumentCreateManyInput | ApplicationDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationDocument createManyAndReturn
   */
  export type ApplicationDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationDocuments.
     */
    data: ApplicationDocumentCreateManyInput | ApplicationDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDocument update
   */
  export type ApplicationDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationDocument.
     */
    data: XOR<ApplicationDocumentUpdateInput, ApplicationDocumentUncheckedUpdateInput>
    /**
     * Choose, which ApplicationDocument to update.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument updateMany
   */
  export type ApplicationDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentUpdateManyMutationInput, ApplicationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDocuments to update
     */
    where?: ApplicationDocumentWhereInput
    /**
     * Limit how many ApplicationDocuments to update.
     */
    limit?: number
  }

  /**
   * ApplicationDocument updateManyAndReturn
   */
  export type ApplicationDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentUpdateManyMutationInput, ApplicationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDocuments to update
     */
    where?: ApplicationDocumentWhereInput
    /**
     * Limit how many ApplicationDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDocument upsert
   */
  export type ApplicationDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationDocument to update in case it exists.
     */
    where: ApplicationDocumentWhereUniqueInput
    /**
     * In case the ApplicationDocument found by the `where` argument doesn't exist, create a new ApplicationDocument with this data.
     */
    create: XOR<ApplicationDocumentCreateInput, ApplicationDocumentUncheckedCreateInput>
    /**
     * In case the ApplicationDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationDocumentUpdateInput, ApplicationDocumentUncheckedUpdateInput>
  }

  /**
   * ApplicationDocument delete
   */
  export type ApplicationDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter which ApplicationDocument to delete.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument deleteMany
   */
  export type ApplicationDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDocuments to delete
     */
    where?: ApplicationDocumentWhereInput
    /**
     * Limit how many ApplicationDocuments to delete.
     */
    limit?: number
  }

  /**
   * ApplicationDocument without action
   */
  export type ApplicationDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
  }


  /**
   * Model SyncLog
   */

  export type AggregateSyncLog = {
    _count: SyncLogCountAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  export type SyncLogMinAggregateOutputType = {
    id: string | null
    source: $Enums.UniversitySource | null
    startedAt: Date | null
    finishedAt: Date | null
    status: string | null
    error: string | null
    cursor: string | null
  }

  export type SyncLogMaxAggregateOutputType = {
    id: string | null
    source: $Enums.UniversitySource | null
    startedAt: Date | null
    finishedAt: Date | null
    status: string | null
    error: string | null
    cursor: string | null
  }

  export type SyncLogCountAggregateOutputType = {
    id: number
    source: number
    startedAt: number
    finishedAt: number
    status: number
    error: number
    stats: number
    cursor: number
    _all: number
  }


  export type SyncLogMinAggregateInputType = {
    id?: true
    source?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    error?: true
    cursor?: true
  }

  export type SyncLogMaxAggregateInputType = {
    id?: true
    source?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    error?: true
    cursor?: true
  }

  export type SyncLogCountAggregateInputType = {
    id?: true
    source?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    error?: true
    stats?: true
    cursor?: true
    _all?: true
  }

  export type SyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLog to aggregate.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncLogs
    **/
    _count?: true | SyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncLogMaxAggregateInputType
  }

  export type GetSyncLogAggregateType<T extends SyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncLog[P]>
      : GetScalarType<T[P], AggregateSyncLog[P]>
  }




  export type SyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithAggregationInput | SyncLogOrderByWithAggregationInput[]
    by: SyncLogScalarFieldEnum[] | SyncLogScalarFieldEnum
    having?: SyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncLogCountAggregateInputType | true
    _min?: SyncLogMinAggregateInputType
    _max?: SyncLogMaxAggregateInputType
  }

  export type SyncLogGroupByOutputType = {
    id: string
    source: $Enums.UniversitySource
    startedAt: Date
    finishedAt: Date | null
    status: string
    error: string | null
    stats: JsonValue | null
    cursor: string | null
    _count: SyncLogCountAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  type GetSyncLogGroupByPayload<T extends SyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
        }
      >
    >


  export type SyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    error?: boolean
    stats?: boolean
    cursor?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    error?: boolean
    stats?: boolean
    cursor?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    error?: boolean
    stats?: boolean
    cursor?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectScalar = {
    id?: boolean
    source?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    error?: boolean
    stats?: boolean
    cursor?: boolean
  }

  export type SyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "startedAt" | "finishedAt" | "status" | "error" | "stats" | "cursor", ExtArgs["result"]["syncLog"]>

  export type $SyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: $Enums.UniversitySource
      startedAt: Date
      finishedAt: Date | null
      status: string
      error: string | null
      stats: Prisma.JsonValue | null
      cursor: string | null
    }, ExtArgs["result"]["syncLog"]>
    composites: {}
  }

  type SyncLogGetPayload<S extends boolean | null | undefined | SyncLogDefaultArgs> = $Result.GetResult<Prisma.$SyncLogPayload, S>

  type SyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncLogCountAggregateInputType | true
    }

  export interface SyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncLog'], meta: { name: 'SyncLog' } }
    /**
     * Find zero or one SyncLog that matches the filter.
     * @param {SyncLogFindUniqueArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncLogFindUniqueArgs>(args: SelectSubset<T, SyncLogFindUniqueArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncLogFindUniqueOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncLogFindFirstArgs>(args?: SelectSubset<T, SyncLogFindFirstArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncLogs
     * const syncLogs = await prisma.syncLog.findMany()
     * 
     * // Get first 10 SyncLogs
     * const syncLogs = await prisma.syncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncLogFindManyArgs>(args?: SelectSubset<T, SyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncLog.
     * @param {SyncLogCreateArgs} args - Arguments to create a SyncLog.
     * @example
     * // Create one SyncLog
     * const SyncLog = await prisma.syncLog.create({
     *   data: {
     *     // ... data to create a SyncLog
     *   }
     * })
     * 
     */
    create<T extends SyncLogCreateArgs>(args: SelectSubset<T, SyncLogCreateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncLogs.
     * @param {SyncLogCreateManyArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncLogCreateManyArgs>(args?: SelectSubset<T, SyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncLogs and returns the data saved in the database.
     * @param {SyncLogCreateManyAndReturnArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncLog.
     * @param {SyncLogDeleteArgs} args - Arguments to delete one SyncLog.
     * @example
     * // Delete one SyncLog
     * const SyncLog = await prisma.syncLog.delete({
     *   where: {
     *     // ... filter to delete one SyncLog
     *   }
     * })
     * 
     */
    delete<T extends SyncLogDeleteArgs>(args: SelectSubset<T, SyncLogDeleteArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncLog.
     * @param {SyncLogUpdateArgs} args - Arguments to update one SyncLog.
     * @example
     * // Update one SyncLog
     * const syncLog = await prisma.syncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncLogUpdateArgs>(args: SelectSubset<T, SyncLogUpdateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncLogs.
     * @param {SyncLogDeleteManyArgs} args - Arguments to filter SyncLogs to delete.
     * @example
     * // Delete a few SyncLogs
     * const { count } = await prisma.syncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncLogDeleteManyArgs>(args?: SelectSubset<T, SyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncLogUpdateManyArgs>(args: SelectSubset<T, SyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs and returns the data updated in the database.
     * @param {SyncLogUpdateManyAndReturnArgs} args - Arguments to update many SyncLogs.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SyncLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncLog.
     * @param {SyncLogUpsertArgs} args - Arguments to update or create a SyncLog.
     * @example
     * // Update or create a SyncLog
     * const syncLog = await prisma.syncLog.upsert({
     *   create: {
     *     // ... data to create a SyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncLog we want to update
     *   }
     * })
     */
    upsert<T extends SyncLogUpsertArgs>(args: SelectSubset<T, SyncLogUpsertArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogCountArgs} args - Arguments to filter SyncLogs to count.
     * @example
     * // Count the number of SyncLogs
     * const count = await prisma.syncLog.count({
     *   where: {
     *     // ... the filter for the SyncLogs we want to count
     *   }
     * })
    **/
    count<T extends SyncLogCountArgs>(
      args?: Subset<T, SyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncLogAggregateArgs>(args: Subset<T, SyncLogAggregateArgs>): Prisma.PrismaPromise<GetSyncLogAggregateType<T>>

    /**
     * Group by SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogGroupByArgs} args - Group by arguments.
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
      T extends SyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncLogGroupByArgs['orderBy'] }
        : { orderBy?: SyncLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncLog model
   */
  readonly fields: SyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SyncLog model
   */
  interface SyncLogFieldRefs {
    readonly id: FieldRef<"SyncLog", 'String'>
    readonly source: FieldRef<"SyncLog", 'UniversitySource'>
    readonly startedAt: FieldRef<"SyncLog", 'DateTime'>
    readonly finishedAt: FieldRef<"SyncLog", 'DateTime'>
    readonly status: FieldRef<"SyncLog", 'String'>
    readonly error: FieldRef<"SyncLog", 'String'>
    readonly stats: FieldRef<"SyncLog", 'Json'>
    readonly cursor: FieldRef<"SyncLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SyncLog findUnique
   */
  export type SyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findUniqueOrThrow
   */
  export type SyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findFirst
   */
  export type SyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findFirstOrThrow
   */
  export type SyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findMany
   */
  export type SyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLogs to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog create
   */
  export type SyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncLog.
     */
    data: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
  }

  /**
   * SyncLog createMany
   */
  export type SyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncLog createManyAndReturn
   */
  export type SyncLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncLog update
   */
  export type SyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncLog.
     */
    data: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
    /**
     * Choose, which SyncLog to update.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog updateMany
   */
  export type SyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog updateManyAndReturn
   */
  export type SyncLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog upsert
   */
  export type SyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncLog to update in case it exists.
     */
    where: SyncLogWhereUniqueInput
    /**
     * In case the SyncLog found by the `where` argument doesn't exist, create a new SyncLog with this data.
     */
    create: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
    /**
     * In case the SyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
  }

  /**
   * SyncLog delete
   */
  export type SyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter which SyncLog to delete.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog deleteMany
   */
  export type SyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLogs to delete
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to delete.
     */
    limit?: number
  }

  /**
   * SyncLog without action
   */
  export type SyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
  }


  /**
   * Model CommunicationRecord
   */

  export type AggregateCommunicationRecord = {
    _count: CommunicationRecordCountAggregateOutputType | null
    _min: CommunicationRecordMinAggregateOutputType | null
    _max: CommunicationRecordMaxAggregateOutputType | null
  }

  export type CommunicationRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    parentId: string | null
    title: string | null
    content: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunicationRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    parentId: string | null
    title: string | null
    content: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunicationRecordCountAggregateOutputType = {
    id: number
    studentId: number
    parentId: number
    title: number
    content: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunicationRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunicationRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunicationRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunicationRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationRecord to aggregate.
     */
    where?: CommunicationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationRecords to fetch.
     */
    orderBy?: CommunicationRecordOrderByWithRelationInput | CommunicationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunicationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunicationRecords
    **/
    _count?: true | CommunicationRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationRecordMaxAggregateInputType
  }

  export type GetCommunicationRecordAggregateType<T extends CommunicationRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunicationRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunicationRecord[P]>
      : GetScalarType<T[P], AggregateCommunicationRecord[P]>
  }




  export type CommunicationRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationRecordWhereInput
    orderBy?: CommunicationRecordOrderByWithAggregationInput | CommunicationRecordOrderByWithAggregationInput[]
    by: CommunicationRecordScalarFieldEnum[] | CommunicationRecordScalarFieldEnum
    having?: CommunicationRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationRecordCountAggregateInputType | true
    _min?: CommunicationRecordMinAggregateInputType
    _max?: CommunicationRecordMaxAggregateInputType
  }

  export type CommunicationRecordGroupByOutputType = {
    id: string
    studentId: string
    parentId: string
    title: string
    content: string
    type: string
    createdAt: Date
    updatedAt: Date | null
    _count: CommunicationRecordCountAggregateOutputType | null
    _min: CommunicationRecordMinAggregateOutputType | null
    _max: CommunicationRecordMaxAggregateOutputType | null
  }

  type GetCommunicationRecordGroupByPayload<T extends CommunicationRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationRecordGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationRecordGroupByOutputType[P]>
        }
      >
    >


  export type CommunicationRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationRecord"]>

  export type CommunicationRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationRecord"]>

  export type CommunicationRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationRecord"]>

  export type CommunicationRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunicationRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "parentId" | "title" | "content" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["communicationRecord"]>
  export type CommunicationRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }
  export type CommunicationRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }
  export type CommunicationRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }

  export type $CommunicationRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunicationRecord"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      parent: Prisma.$ParentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      parentId: string
      title: string
      content: string
      type: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["communicationRecord"]>
    composites: {}
  }

  type CommunicationRecordGetPayload<S extends boolean | null | undefined | CommunicationRecordDefaultArgs> = $Result.GetResult<Prisma.$CommunicationRecordPayload, S>

  type CommunicationRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunicationRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationRecordCountAggregateInputType | true
    }

  export interface CommunicationRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunicationRecord'], meta: { name: 'CommunicationRecord' } }
    /**
     * Find zero or one CommunicationRecord that matches the filter.
     * @param {CommunicationRecordFindUniqueArgs} args - Arguments to find a CommunicationRecord
     * @example
     * // Get one CommunicationRecord
     * const communicationRecord = await prisma.communicationRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunicationRecordFindUniqueArgs>(args: SelectSubset<T, CommunicationRecordFindUniqueArgs<ExtArgs>>): Prisma__CommunicationRecordClient<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunicationRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunicationRecordFindUniqueOrThrowArgs} args - Arguments to find a CommunicationRecord
     * @example
     * // Get one CommunicationRecord
     * const communicationRecord = await prisma.communicationRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunicationRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunicationRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunicationRecordClient<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunicationRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationRecordFindFirstArgs} args - Arguments to find a CommunicationRecord
     * @example
     * // Get one CommunicationRecord
     * const communicationRecord = await prisma.communicationRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunicationRecordFindFirstArgs>(args?: SelectSubset<T, CommunicationRecordFindFirstArgs<ExtArgs>>): Prisma__CommunicationRecordClient<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunicationRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationRecordFindFirstOrThrowArgs} args - Arguments to find a CommunicationRecord
     * @example
     * // Get one CommunicationRecord
     * const communicationRecord = await prisma.communicationRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunicationRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunicationRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunicationRecordClient<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunicationRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunicationRecords
     * const communicationRecords = await prisma.communicationRecord.findMany()
     * 
     * // Get first 10 CommunicationRecords
     * const communicationRecords = await prisma.communicationRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communicationRecordWithIdOnly = await prisma.communicationRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunicationRecordFindManyArgs>(args?: SelectSubset<T, CommunicationRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunicationRecord.
     * @param {CommunicationRecordCreateArgs} args - Arguments to create a CommunicationRecord.
     * @example
     * // Create one CommunicationRecord
     * const CommunicationRecord = await prisma.communicationRecord.create({
     *   data: {
     *     // ... data to create a CommunicationRecord
     *   }
     * })
     * 
     */
    create<T extends CommunicationRecordCreateArgs>(args: SelectSubset<T, CommunicationRecordCreateArgs<ExtArgs>>): Prisma__CommunicationRecordClient<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunicationRecords.
     * @param {CommunicationRecordCreateManyArgs} args - Arguments to create many CommunicationRecords.
     * @example
     * // Create many CommunicationRecords
     * const communicationRecord = await prisma.communicationRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunicationRecordCreateManyArgs>(args?: SelectSubset<T, CommunicationRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunicationRecords and returns the data saved in the database.
     * @param {CommunicationRecordCreateManyAndReturnArgs} args - Arguments to create many CommunicationRecords.
     * @example
     * // Create many CommunicationRecords
     * const communicationRecord = await prisma.communicationRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunicationRecords and only return the `id`
     * const communicationRecordWithIdOnly = await prisma.communicationRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunicationRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunicationRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunicationRecord.
     * @param {CommunicationRecordDeleteArgs} args - Arguments to delete one CommunicationRecord.
     * @example
     * // Delete one CommunicationRecord
     * const CommunicationRecord = await prisma.communicationRecord.delete({
     *   where: {
     *     // ... filter to delete one CommunicationRecord
     *   }
     * })
     * 
     */
    delete<T extends CommunicationRecordDeleteArgs>(args: SelectSubset<T, CommunicationRecordDeleteArgs<ExtArgs>>): Prisma__CommunicationRecordClient<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunicationRecord.
     * @param {CommunicationRecordUpdateArgs} args - Arguments to update one CommunicationRecord.
     * @example
     * // Update one CommunicationRecord
     * const communicationRecord = await prisma.communicationRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunicationRecordUpdateArgs>(args: SelectSubset<T, CommunicationRecordUpdateArgs<ExtArgs>>): Prisma__CommunicationRecordClient<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunicationRecords.
     * @param {CommunicationRecordDeleteManyArgs} args - Arguments to filter CommunicationRecords to delete.
     * @example
     * // Delete a few CommunicationRecords
     * const { count } = await prisma.communicationRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunicationRecordDeleteManyArgs>(args?: SelectSubset<T, CommunicationRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunicationRecords
     * const communicationRecord = await prisma.communicationRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunicationRecordUpdateManyArgs>(args: SelectSubset<T, CommunicationRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationRecords and returns the data updated in the database.
     * @param {CommunicationRecordUpdateManyAndReturnArgs} args - Arguments to update many CommunicationRecords.
     * @example
     * // Update many CommunicationRecords
     * const communicationRecord = await prisma.communicationRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunicationRecords and only return the `id`
     * const communicationRecordWithIdOnly = await prisma.communicationRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunicationRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunicationRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunicationRecord.
     * @param {CommunicationRecordUpsertArgs} args - Arguments to update or create a CommunicationRecord.
     * @example
     * // Update or create a CommunicationRecord
     * const communicationRecord = await prisma.communicationRecord.upsert({
     *   create: {
     *     // ... data to create a CommunicationRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunicationRecord we want to update
     *   }
     * })
     */
    upsert<T extends CommunicationRecordUpsertArgs>(args: SelectSubset<T, CommunicationRecordUpsertArgs<ExtArgs>>): Prisma__CommunicationRecordClient<$Result.GetResult<Prisma.$CommunicationRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunicationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationRecordCountArgs} args - Arguments to filter CommunicationRecords to count.
     * @example
     * // Count the number of CommunicationRecords
     * const count = await prisma.communicationRecord.count({
     *   where: {
     *     // ... the filter for the CommunicationRecords we want to count
     *   }
     * })
    **/
    count<T extends CommunicationRecordCountArgs>(
      args?: Subset<T, CommunicationRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunicationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunicationRecordAggregateArgs>(args: Subset<T, CommunicationRecordAggregateArgs>): Prisma.PrismaPromise<GetCommunicationRecordAggregateType<T>>

    /**
     * Group by CommunicationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationRecordGroupByArgs} args - Group by arguments.
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
      T extends CommunicationRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunicationRecordGroupByArgs['orderBy'] }
        : { orderBy?: CommunicationRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunicationRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunicationRecord model
   */
  readonly fields: CommunicationRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunicationRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunicationRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommunicationRecord model
   */
  interface CommunicationRecordFieldRefs {
    readonly id: FieldRef<"CommunicationRecord", 'String'>
    readonly studentId: FieldRef<"CommunicationRecord", 'String'>
    readonly parentId: FieldRef<"CommunicationRecord", 'String'>
    readonly title: FieldRef<"CommunicationRecord", 'String'>
    readonly content: FieldRef<"CommunicationRecord", 'String'>
    readonly type: FieldRef<"CommunicationRecord", 'String'>
    readonly createdAt: FieldRef<"CommunicationRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunicationRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunicationRecord findUnique
   */
  export type CommunicationRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationRecord to fetch.
     */
    where: CommunicationRecordWhereUniqueInput
  }

  /**
   * CommunicationRecord findUniqueOrThrow
   */
  export type CommunicationRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationRecord to fetch.
     */
    where: CommunicationRecordWhereUniqueInput
  }

  /**
   * CommunicationRecord findFirst
   */
  export type CommunicationRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationRecord to fetch.
     */
    where?: CommunicationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationRecords to fetch.
     */
    orderBy?: CommunicationRecordOrderByWithRelationInput | CommunicationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationRecords.
     */
    cursor?: CommunicationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationRecords.
     */
    distinct?: CommunicationRecordScalarFieldEnum | CommunicationRecordScalarFieldEnum[]
  }

  /**
   * CommunicationRecord findFirstOrThrow
   */
  export type CommunicationRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationRecord to fetch.
     */
    where?: CommunicationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationRecords to fetch.
     */
    orderBy?: CommunicationRecordOrderByWithRelationInput | CommunicationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationRecords.
     */
    cursor?: CommunicationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationRecords.
     */
    distinct?: CommunicationRecordScalarFieldEnum | CommunicationRecordScalarFieldEnum[]
  }

  /**
   * CommunicationRecord findMany
   */
  export type CommunicationRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationRecords to fetch.
     */
    where?: CommunicationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationRecords to fetch.
     */
    orderBy?: CommunicationRecordOrderByWithRelationInput | CommunicationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunicationRecords.
     */
    cursor?: CommunicationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationRecords.
     */
    skip?: number
    distinct?: CommunicationRecordScalarFieldEnum | CommunicationRecordScalarFieldEnum[]
  }

  /**
   * CommunicationRecord create
   */
  export type CommunicationRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunicationRecord.
     */
    data: XOR<CommunicationRecordCreateInput, CommunicationRecordUncheckedCreateInput>
  }

  /**
   * CommunicationRecord createMany
   */
  export type CommunicationRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunicationRecords.
     */
    data: CommunicationRecordCreateManyInput | CommunicationRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunicationRecord createManyAndReturn
   */
  export type CommunicationRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * The data used to create many CommunicationRecords.
     */
    data: CommunicationRecordCreateManyInput | CommunicationRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunicationRecord update
   */
  export type CommunicationRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunicationRecord.
     */
    data: XOR<CommunicationRecordUpdateInput, CommunicationRecordUncheckedUpdateInput>
    /**
     * Choose, which CommunicationRecord to update.
     */
    where: CommunicationRecordWhereUniqueInput
  }

  /**
   * CommunicationRecord updateMany
   */
  export type CommunicationRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunicationRecords.
     */
    data: XOR<CommunicationRecordUpdateManyMutationInput, CommunicationRecordUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationRecords to update
     */
    where?: CommunicationRecordWhereInput
    /**
     * Limit how many CommunicationRecords to update.
     */
    limit?: number
  }

  /**
   * CommunicationRecord updateManyAndReturn
   */
  export type CommunicationRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * The data used to update CommunicationRecords.
     */
    data: XOR<CommunicationRecordUpdateManyMutationInput, CommunicationRecordUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationRecords to update
     */
    where?: CommunicationRecordWhereInput
    /**
     * Limit how many CommunicationRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunicationRecord upsert
   */
  export type CommunicationRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunicationRecord to update in case it exists.
     */
    where: CommunicationRecordWhereUniqueInput
    /**
     * In case the CommunicationRecord found by the `where` argument doesn't exist, create a new CommunicationRecord with this data.
     */
    create: XOR<CommunicationRecordCreateInput, CommunicationRecordUncheckedCreateInput>
    /**
     * In case the CommunicationRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunicationRecordUpdateInput, CommunicationRecordUncheckedUpdateInput>
  }

  /**
   * CommunicationRecord delete
   */
  export type CommunicationRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
    /**
     * Filter which CommunicationRecord to delete.
     */
    where: CommunicationRecordWhereUniqueInput
  }

  /**
   * CommunicationRecord deleteMany
   */
  export type CommunicationRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationRecords to delete
     */
    where?: CommunicationRecordWhereInput
    /**
     * Limit how many CommunicationRecords to delete.
     */
    limit?: number
  }

  /**
   * CommunicationRecord without action
   */
  export type CommunicationRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationRecord
     */
    select?: CommunicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationRecord
     */
    omit?: CommunicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationRecordInclude<ExtArgs> | null
  }


  /**
   * Model ObservationRecord
   */

  export type AggregateObservationRecord = {
    _count: ObservationRecordCountAggregateOutputType | null
    _min: ObservationRecordMinAggregateOutputType | null
    _max: ObservationRecordMaxAggregateOutputType | null
  }

  export type ObservationRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    parentId: string | null
    title: string | null
    content: string | null
    category: string | null
    priority: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObservationRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    parentId: string | null
    title: string | null
    content: string | null
    category: string | null
    priority: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObservationRecordCountAggregateOutputType = {
    id: number
    studentId: number
    parentId: number
    title: number
    content: number
    category: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObservationRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    title?: true
    content?: true
    category?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObservationRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    title?: true
    content?: true
    category?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObservationRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    parentId?: true
    title?: true
    content?: true
    category?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObservationRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObservationRecord to aggregate.
     */
    where?: ObservationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObservationRecords to fetch.
     */
    orderBy?: ObservationRecordOrderByWithRelationInput | ObservationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObservationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObservationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObservationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObservationRecords
    **/
    _count?: true | ObservationRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObservationRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObservationRecordMaxAggregateInputType
  }

  export type GetObservationRecordAggregateType<T extends ObservationRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateObservationRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObservationRecord[P]>
      : GetScalarType<T[P], AggregateObservationRecord[P]>
  }




  export type ObservationRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationRecordWhereInput
    orderBy?: ObservationRecordOrderByWithAggregationInput | ObservationRecordOrderByWithAggregationInput[]
    by: ObservationRecordScalarFieldEnum[] | ObservationRecordScalarFieldEnum
    having?: ObservationRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObservationRecordCountAggregateInputType | true
    _min?: ObservationRecordMinAggregateInputType
    _max?: ObservationRecordMaxAggregateInputType
  }

  export type ObservationRecordGroupByOutputType = {
    id: string
    studentId: string
    parentId: string
    title: string
    content: string
    category: string
    priority: string
    createdAt: Date
    updatedAt: Date | null
    _count: ObservationRecordCountAggregateOutputType | null
    _min: ObservationRecordMinAggregateOutputType | null
    _max: ObservationRecordMaxAggregateOutputType | null
  }

  type GetObservationRecordGroupByPayload<T extends ObservationRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObservationRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObservationRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObservationRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ObservationRecordGroupByOutputType[P]>
        }
      >
    >


  export type ObservationRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observationRecord"]>

  export type ObservationRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observationRecord"]>

  export type ObservationRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observationRecord"]>

  export type ObservationRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    parentId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObservationRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "parentId" | "title" | "content" | "category" | "priority" | "createdAt" | "updatedAt", ExtArgs["result"]["observationRecord"]>
  export type ObservationRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }
  export type ObservationRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }
  export type ObservationRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }

  export type $ObservationRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObservationRecord"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      parent: Prisma.$ParentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      parentId: string
      title: string
      content: string
      category: string
      priority: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["observationRecord"]>
    composites: {}
  }

  type ObservationRecordGetPayload<S extends boolean | null | undefined | ObservationRecordDefaultArgs> = $Result.GetResult<Prisma.$ObservationRecordPayload, S>

  type ObservationRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObservationRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObservationRecordCountAggregateInputType | true
    }

  export interface ObservationRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObservationRecord'], meta: { name: 'ObservationRecord' } }
    /**
     * Find zero or one ObservationRecord that matches the filter.
     * @param {ObservationRecordFindUniqueArgs} args - Arguments to find a ObservationRecord
     * @example
     * // Get one ObservationRecord
     * const observationRecord = await prisma.observationRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObservationRecordFindUniqueArgs>(args: SelectSubset<T, ObservationRecordFindUniqueArgs<ExtArgs>>): Prisma__ObservationRecordClient<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObservationRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObservationRecordFindUniqueOrThrowArgs} args - Arguments to find a ObservationRecord
     * @example
     * // Get one ObservationRecord
     * const observationRecord = await prisma.observationRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObservationRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ObservationRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObservationRecordClient<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObservationRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationRecordFindFirstArgs} args - Arguments to find a ObservationRecord
     * @example
     * // Get one ObservationRecord
     * const observationRecord = await prisma.observationRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObservationRecordFindFirstArgs>(args?: SelectSubset<T, ObservationRecordFindFirstArgs<ExtArgs>>): Prisma__ObservationRecordClient<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObservationRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationRecordFindFirstOrThrowArgs} args - Arguments to find a ObservationRecord
     * @example
     * // Get one ObservationRecord
     * const observationRecord = await prisma.observationRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObservationRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ObservationRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObservationRecordClient<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObservationRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObservationRecords
     * const observationRecords = await prisma.observationRecord.findMany()
     * 
     * // Get first 10 ObservationRecords
     * const observationRecords = await prisma.observationRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const observationRecordWithIdOnly = await prisma.observationRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObservationRecordFindManyArgs>(args?: SelectSubset<T, ObservationRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObservationRecord.
     * @param {ObservationRecordCreateArgs} args - Arguments to create a ObservationRecord.
     * @example
     * // Create one ObservationRecord
     * const ObservationRecord = await prisma.observationRecord.create({
     *   data: {
     *     // ... data to create a ObservationRecord
     *   }
     * })
     * 
     */
    create<T extends ObservationRecordCreateArgs>(args: SelectSubset<T, ObservationRecordCreateArgs<ExtArgs>>): Prisma__ObservationRecordClient<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObservationRecords.
     * @param {ObservationRecordCreateManyArgs} args - Arguments to create many ObservationRecords.
     * @example
     * // Create many ObservationRecords
     * const observationRecord = await prisma.observationRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObservationRecordCreateManyArgs>(args?: SelectSubset<T, ObservationRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObservationRecords and returns the data saved in the database.
     * @param {ObservationRecordCreateManyAndReturnArgs} args - Arguments to create many ObservationRecords.
     * @example
     * // Create many ObservationRecords
     * const observationRecord = await prisma.observationRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObservationRecords and only return the `id`
     * const observationRecordWithIdOnly = await prisma.observationRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObservationRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ObservationRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ObservationRecord.
     * @param {ObservationRecordDeleteArgs} args - Arguments to delete one ObservationRecord.
     * @example
     * // Delete one ObservationRecord
     * const ObservationRecord = await prisma.observationRecord.delete({
     *   where: {
     *     // ... filter to delete one ObservationRecord
     *   }
     * })
     * 
     */
    delete<T extends ObservationRecordDeleteArgs>(args: SelectSubset<T, ObservationRecordDeleteArgs<ExtArgs>>): Prisma__ObservationRecordClient<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObservationRecord.
     * @param {ObservationRecordUpdateArgs} args - Arguments to update one ObservationRecord.
     * @example
     * // Update one ObservationRecord
     * const observationRecord = await prisma.observationRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObservationRecordUpdateArgs>(args: SelectSubset<T, ObservationRecordUpdateArgs<ExtArgs>>): Prisma__ObservationRecordClient<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObservationRecords.
     * @param {ObservationRecordDeleteManyArgs} args - Arguments to filter ObservationRecords to delete.
     * @example
     * // Delete a few ObservationRecords
     * const { count } = await prisma.observationRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObservationRecordDeleteManyArgs>(args?: SelectSubset<T, ObservationRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObservationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObservationRecords
     * const observationRecord = await prisma.observationRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObservationRecordUpdateManyArgs>(args: SelectSubset<T, ObservationRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObservationRecords and returns the data updated in the database.
     * @param {ObservationRecordUpdateManyAndReturnArgs} args - Arguments to update many ObservationRecords.
     * @example
     * // Update many ObservationRecords
     * const observationRecord = await prisma.observationRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ObservationRecords and only return the `id`
     * const observationRecordWithIdOnly = await prisma.observationRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ObservationRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ObservationRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ObservationRecord.
     * @param {ObservationRecordUpsertArgs} args - Arguments to update or create a ObservationRecord.
     * @example
     * // Update or create a ObservationRecord
     * const observationRecord = await prisma.observationRecord.upsert({
     *   create: {
     *     // ... data to create a ObservationRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObservationRecord we want to update
     *   }
     * })
     */
    upsert<T extends ObservationRecordUpsertArgs>(args: SelectSubset<T, ObservationRecordUpsertArgs<ExtArgs>>): Prisma__ObservationRecordClient<$Result.GetResult<Prisma.$ObservationRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObservationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationRecordCountArgs} args - Arguments to filter ObservationRecords to count.
     * @example
     * // Count the number of ObservationRecords
     * const count = await prisma.observationRecord.count({
     *   where: {
     *     // ... the filter for the ObservationRecords we want to count
     *   }
     * })
    **/
    count<T extends ObservationRecordCountArgs>(
      args?: Subset<T, ObservationRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObservationRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObservationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObservationRecordAggregateArgs>(args: Subset<T, ObservationRecordAggregateArgs>): Prisma.PrismaPromise<GetObservationRecordAggregateType<T>>

    /**
     * Group by ObservationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationRecordGroupByArgs} args - Group by arguments.
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
      T extends ObservationRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObservationRecordGroupByArgs['orderBy'] }
        : { orderBy?: ObservationRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObservationRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObservationRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObservationRecord model
   */
  readonly fields: ObservationRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObservationRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObservationRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ObservationRecord model
   */
  interface ObservationRecordFieldRefs {
    readonly id: FieldRef<"ObservationRecord", 'String'>
    readonly studentId: FieldRef<"ObservationRecord", 'String'>
    readonly parentId: FieldRef<"ObservationRecord", 'String'>
    readonly title: FieldRef<"ObservationRecord", 'String'>
    readonly content: FieldRef<"ObservationRecord", 'String'>
    readonly category: FieldRef<"ObservationRecord", 'String'>
    readonly priority: FieldRef<"ObservationRecord", 'String'>
    readonly createdAt: FieldRef<"ObservationRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ObservationRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ObservationRecord findUnique
   */
  export type ObservationRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * Filter, which ObservationRecord to fetch.
     */
    where: ObservationRecordWhereUniqueInput
  }

  /**
   * ObservationRecord findUniqueOrThrow
   */
  export type ObservationRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * Filter, which ObservationRecord to fetch.
     */
    where: ObservationRecordWhereUniqueInput
  }

  /**
   * ObservationRecord findFirst
   */
  export type ObservationRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * Filter, which ObservationRecord to fetch.
     */
    where?: ObservationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObservationRecords to fetch.
     */
    orderBy?: ObservationRecordOrderByWithRelationInput | ObservationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObservationRecords.
     */
    cursor?: ObservationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObservationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObservationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObservationRecords.
     */
    distinct?: ObservationRecordScalarFieldEnum | ObservationRecordScalarFieldEnum[]
  }

  /**
   * ObservationRecord findFirstOrThrow
   */
  export type ObservationRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * Filter, which ObservationRecord to fetch.
     */
    where?: ObservationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObservationRecords to fetch.
     */
    orderBy?: ObservationRecordOrderByWithRelationInput | ObservationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObservationRecords.
     */
    cursor?: ObservationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObservationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObservationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObservationRecords.
     */
    distinct?: ObservationRecordScalarFieldEnum | ObservationRecordScalarFieldEnum[]
  }

  /**
   * ObservationRecord findMany
   */
  export type ObservationRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * Filter, which ObservationRecords to fetch.
     */
    where?: ObservationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObservationRecords to fetch.
     */
    orderBy?: ObservationRecordOrderByWithRelationInput | ObservationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObservationRecords.
     */
    cursor?: ObservationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObservationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObservationRecords.
     */
    skip?: number
    distinct?: ObservationRecordScalarFieldEnum | ObservationRecordScalarFieldEnum[]
  }

  /**
   * ObservationRecord create
   */
  export type ObservationRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ObservationRecord.
     */
    data: XOR<ObservationRecordCreateInput, ObservationRecordUncheckedCreateInput>
  }

  /**
   * ObservationRecord createMany
   */
  export type ObservationRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObservationRecords.
     */
    data: ObservationRecordCreateManyInput | ObservationRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObservationRecord createManyAndReturn
   */
  export type ObservationRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ObservationRecords.
     */
    data: ObservationRecordCreateManyInput | ObservationRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObservationRecord update
   */
  export type ObservationRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ObservationRecord.
     */
    data: XOR<ObservationRecordUpdateInput, ObservationRecordUncheckedUpdateInput>
    /**
     * Choose, which ObservationRecord to update.
     */
    where: ObservationRecordWhereUniqueInput
  }

  /**
   * ObservationRecord updateMany
   */
  export type ObservationRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObservationRecords.
     */
    data: XOR<ObservationRecordUpdateManyMutationInput, ObservationRecordUncheckedUpdateManyInput>
    /**
     * Filter which ObservationRecords to update
     */
    where?: ObservationRecordWhereInput
    /**
     * Limit how many ObservationRecords to update.
     */
    limit?: number
  }

  /**
   * ObservationRecord updateManyAndReturn
   */
  export type ObservationRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * The data used to update ObservationRecords.
     */
    data: XOR<ObservationRecordUpdateManyMutationInput, ObservationRecordUncheckedUpdateManyInput>
    /**
     * Filter which ObservationRecords to update
     */
    where?: ObservationRecordWhereInput
    /**
     * Limit how many ObservationRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObservationRecord upsert
   */
  export type ObservationRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ObservationRecord to update in case it exists.
     */
    where: ObservationRecordWhereUniqueInput
    /**
     * In case the ObservationRecord found by the `where` argument doesn't exist, create a new ObservationRecord with this data.
     */
    create: XOR<ObservationRecordCreateInput, ObservationRecordUncheckedCreateInput>
    /**
     * In case the ObservationRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObservationRecordUpdateInput, ObservationRecordUncheckedUpdateInput>
  }

  /**
   * ObservationRecord delete
   */
  export type ObservationRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
    /**
     * Filter which ObservationRecord to delete.
     */
    where: ObservationRecordWhereUniqueInput
  }

  /**
   * ObservationRecord deleteMany
   */
  export type ObservationRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObservationRecords to delete
     */
    where?: ObservationRecordWhereInput
    /**
     * Limit how many ObservationRecords to delete.
     */
    limit?: number
  }

  /**
   * ObservationRecord without action
   */
  export type ObservationRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationRecord
     */
    select?: ObservationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObservationRecord
     */
    omit?: ObservationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationRecordInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    graduationYear: 'graduationYear',
    gpa: 'gpa',
    satScore: 'satScore',
    actScore: 'actScore',
    targetCountries: 'targetCountries',
    intendedMajors: 'intendedMajors'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    permissions: 'permissions',
    createdAt: 'createdAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const StudentParentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    parentId: 'parentId',
    relationship: 'relationship',
    createdAt: 'createdAt'
  };

  export type StudentParentScalarFieldEnum = (typeof StudentParentScalarFieldEnum)[keyof typeof StudentParentScalarFieldEnum]


  export const UniversityScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    source: 'source',
    name: 'name',
    country: 'country',
    state: 'state',
    city: 'city',
    usNewsRanking: 'usNewsRanking',
    acceptanceRate: 'acceptanceRate',
    applicationSystem: 'applicationSystem',
    tuitionInState: 'tuitionInState',
    tuitionOutState: 'tuitionOutState',
    applicationFee: 'applicationFee',
    deadlines: 'deadlines',
    lastSyncedAt: 'lastSyncedAt',
    raw: 'raw',
    isActive: 'isActive'
  };

  export type UniversityScalarFieldEnum = (typeof UniversityScalarFieldEnum)[keyof typeof UniversityScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    universityId: 'universityId',
    applicationType: 'applicationType',
    deadline: 'deadline',
    status: 'status',
    submittedDate: 'submittedDate',
    decisionDate: 'decisionDate',
    decisionType: 'decisionType',
    notes: 'notes',
    createdAt: 'createdAt',
    externalApplicationId: 'externalApplicationId',
    syncedAt: 'syncedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const ApplicationRequirementScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    requirementType: 'requirementType',
    status: 'status',
    deadline: 'deadline',
    notes: 'notes'
  };

  export type ApplicationRequirementScalarFieldEnum = (typeof ApplicationRequirementScalarFieldEnum)[keyof typeof ApplicationRequirementScalarFieldEnum]


  export const ApplicationNoteScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    authorType: 'authorType',
    authorId: 'authorId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ApplicationNoteScalarFieldEnum = (typeof ApplicationNoteScalarFieldEnum)[keyof typeof ApplicationNoteScalarFieldEnum]


  export const ApplicationDocumentScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    docType: 'docType',
    filename: 'filename',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    storagePath: 'storagePath',
    uploadedAt: 'uploadedAt'
  };

  export type ApplicationDocumentScalarFieldEnum = (typeof ApplicationDocumentScalarFieldEnum)[keyof typeof ApplicationDocumentScalarFieldEnum]


  export const SyncLogScalarFieldEnum: {
    id: 'id',
    source: 'source',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    status: 'status',
    error: 'error',
    stats: 'stats',
    cursor: 'cursor'
  };

  export type SyncLogScalarFieldEnum = (typeof SyncLogScalarFieldEnum)[keyof typeof SyncLogScalarFieldEnum]


  export const CommunicationRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    parentId: 'parentId',
    title: 'title',
    content: 'content',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunicationRecordScalarFieldEnum = (typeof CommunicationRecordScalarFieldEnum)[keyof typeof CommunicationRecordScalarFieldEnum]


  export const ObservationRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    parentId: 'parentId',
    title: 'title',
    content: 'content',
    category: 'category',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObservationRecordScalarFieldEnum = (typeof ObservationRecordScalarFieldEnum)[keyof typeof ObservationRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UniversitySource'
   */
  export type EnumUniversitySourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UniversitySource'>
    


  /**
   * Reference to a field of type 'UniversitySource[]'
   */
  export type ListEnumUniversitySourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UniversitySource[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApplicationType'
   */
  export type EnumApplicationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationType'>
    


  /**
   * Reference to a field of type 'ApplicationType[]'
   */
  export type ListEnumApplicationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationType[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


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


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    passwordHash?: StringFilter<"Student"> | string
    graduationYear?: IntFilter<"Student"> | number
    gpa?: DecimalNullableFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    satScore?: IntNullableFilter<"Student"> | number | null
    actScore?: IntNullableFilter<"Student"> | number | null
    targetCountries?: JsonNullableFilter<"Student">
    intendedMajors?: JsonNullableFilter<"Student">
    applications?: ApplicationListRelationFilter
    parentLinks?: StudentParentListRelationFilter
    communications?: CommunicationRecordListRelationFilter
    observations?: ObservationRecordListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    graduationYear?: SortOrder
    gpa?: SortOrderInput | SortOrder
    satScore?: SortOrderInput | SortOrder
    actScore?: SortOrderInput | SortOrder
    targetCountries?: SortOrderInput | SortOrder
    intendedMajors?: SortOrderInput | SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
    parentLinks?: StudentParentOrderByRelationAggregateInput
    communications?: CommunicationRecordOrderByRelationAggregateInput
    observations?: ObservationRecordOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    passwordHash?: StringFilter<"Student"> | string
    graduationYear?: IntFilter<"Student"> | number
    gpa?: DecimalNullableFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    satScore?: IntNullableFilter<"Student"> | number | null
    actScore?: IntNullableFilter<"Student"> | number | null
    targetCountries?: JsonNullableFilter<"Student">
    intendedMajors?: JsonNullableFilter<"Student">
    applications?: ApplicationListRelationFilter
    parentLinks?: StudentParentListRelationFilter
    communications?: CommunicationRecordListRelationFilter
    observations?: ObservationRecordListRelationFilter
  }, "id" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    graduationYear?: SortOrder
    gpa?: SortOrderInput | SortOrder
    satScore?: SortOrderInput | SortOrder
    actScore?: SortOrderInput | SortOrder
    targetCountries?: SortOrderInput | SortOrder
    intendedMajors?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    passwordHash?: StringWithAggregatesFilter<"Student"> | string
    graduationYear?: IntWithAggregatesFilter<"Student"> | number
    gpa?: DecimalNullableWithAggregatesFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    satScore?: IntNullableWithAggregatesFilter<"Student"> | number | null
    actScore?: IntNullableWithAggregatesFilter<"Student"> | number | null
    targetCountries?: JsonNullableWithAggregatesFilter<"Student">
    intendedMajors?: JsonNullableWithAggregatesFilter<"Student">
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: StringFilter<"Parent"> | string
    name?: StringFilter<"Parent"> | string
    email?: StringFilter<"Parent"> | string
    passwordHash?: StringFilter<"Parent"> | string
    phone?: StringNullableFilter<"Parent"> | string | null
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    studentLinks?: StudentParentListRelationFilter
    communications?: CommunicationRecordListRelationFilter
    observations?: ObservationRecordListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    studentLinks?: StudentParentOrderByRelationAggregateInput
    communications?: CommunicationRecordOrderByRelationAggregateInput
    observations?: ObservationRecordOrderByRelationAggregateInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    name?: StringFilter<"Parent"> | string
    passwordHash?: StringFilter<"Parent"> | string
    phone?: StringNullableFilter<"Parent"> | string | null
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    studentLinks?: StudentParentListRelationFilter
    communications?: CommunicationRecordListRelationFilter
    observations?: ObservationRecordListRelationFilter
  }, "id" | "email">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parent"> | string
    name?: StringWithAggregatesFilter<"Parent"> | string
    email?: StringWithAggregatesFilter<"Parent"> | string
    passwordHash?: StringWithAggregatesFilter<"Parent"> | string
    phone?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Parent"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    permissions?: JsonNullableFilter<"Admin">
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    permissions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    permissions?: JsonNullableFilter<"Admin">
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    permissions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    permissions?: JsonNullableWithAggregatesFilter<"Admin">
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type StudentParentWhereInput = {
    AND?: StudentParentWhereInput | StudentParentWhereInput[]
    OR?: StudentParentWhereInput[]
    NOT?: StudentParentWhereInput | StudentParentWhereInput[]
    id?: StringFilter<"StudentParent"> | string
    studentId?: StringFilter<"StudentParent"> | string
    parentId?: StringFilter<"StudentParent"> | string
    relationship?: StringNullableFilter<"StudentParent"> | string | null
    createdAt?: DateTimeFilter<"StudentParent"> | Date | string
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type StudentParentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    relationship?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    parent?: ParentOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type StudentParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_parentId?: StudentParentStudentIdParentIdCompoundUniqueInput
    AND?: StudentParentWhereInput | StudentParentWhereInput[]
    OR?: StudentParentWhereInput[]
    NOT?: StudentParentWhereInput | StudentParentWhereInput[]
    studentId?: StringFilter<"StudentParent"> | string
    parentId?: StringFilter<"StudentParent"> | string
    relationship?: StringNullableFilter<"StudentParent"> | string | null
    createdAt?: DateTimeFilter<"StudentParent"> | Date | string
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId_parentId">

  export type StudentParentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    relationship?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudentParentCountOrderByAggregateInput
    _max?: StudentParentMaxOrderByAggregateInput
    _min?: StudentParentMinOrderByAggregateInput
  }

  export type StudentParentScalarWhereWithAggregatesInput = {
    AND?: StudentParentScalarWhereWithAggregatesInput | StudentParentScalarWhereWithAggregatesInput[]
    OR?: StudentParentScalarWhereWithAggregatesInput[]
    NOT?: StudentParentScalarWhereWithAggregatesInput | StudentParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentParent"> | string
    studentId?: StringWithAggregatesFilter<"StudentParent"> | string
    parentId?: StringWithAggregatesFilter<"StudentParent"> | string
    relationship?: StringNullableWithAggregatesFilter<"StudentParent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentParent"> | Date | string
  }

  export type UniversityWhereInput = {
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    id?: StringFilter<"University"> | string
    externalId?: StringNullableFilter<"University"> | string | null
    source?: EnumUniversitySourceNullableFilter<"University"> | $Enums.UniversitySource | null
    name?: StringFilter<"University"> | string
    country?: StringNullableFilter<"University"> | string | null
    state?: StringNullableFilter<"University"> | string | null
    city?: StringNullableFilter<"University"> | string | null
    usNewsRanking?: IntNullableFilter<"University"> | number | null
    acceptanceRate?: DecimalNullableFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: StringNullableFilter<"University"> | string | null
    tuitionInState?: DecimalNullableFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: DecimalNullableFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    applicationFee?: DecimalNullableFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    deadlines?: JsonNullableFilter<"University">
    lastSyncedAt?: DateTimeNullableFilter<"University"> | Date | string | null
    raw?: JsonNullableFilter<"University">
    isActive?: BoolFilter<"University"> | boolean
    applications?: ApplicationListRelationFilter
  }

  export type UniversityOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    usNewsRanking?: SortOrderInput | SortOrder
    acceptanceRate?: SortOrderInput | SortOrder
    applicationSystem?: SortOrderInput | SortOrder
    tuitionInState?: SortOrderInput | SortOrder
    tuitionOutState?: SortOrderInput | SortOrder
    applicationFee?: SortOrderInput | SortOrder
    deadlines?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    raw?: SortOrderInput | SortOrder
    isActive?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type UniversityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    source?: EnumUniversitySourceNullableFilter<"University"> | $Enums.UniversitySource | null
    name?: StringFilter<"University"> | string
    country?: StringNullableFilter<"University"> | string | null
    state?: StringNullableFilter<"University"> | string | null
    city?: StringNullableFilter<"University"> | string | null
    usNewsRanking?: IntNullableFilter<"University"> | number | null
    acceptanceRate?: DecimalNullableFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: StringNullableFilter<"University"> | string | null
    tuitionInState?: DecimalNullableFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: DecimalNullableFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    applicationFee?: DecimalNullableFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    deadlines?: JsonNullableFilter<"University">
    lastSyncedAt?: DateTimeNullableFilter<"University"> | Date | string | null
    raw?: JsonNullableFilter<"University">
    isActive?: BoolFilter<"University"> | boolean
    applications?: ApplicationListRelationFilter
  }, "id" | "externalId">

  export type UniversityOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    usNewsRanking?: SortOrderInput | SortOrder
    acceptanceRate?: SortOrderInput | SortOrder
    applicationSystem?: SortOrderInput | SortOrder
    tuitionInState?: SortOrderInput | SortOrder
    tuitionOutState?: SortOrderInput | SortOrder
    applicationFee?: SortOrderInput | SortOrder
    deadlines?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    raw?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: UniversityCountOrderByAggregateInput
    _avg?: UniversityAvgOrderByAggregateInput
    _max?: UniversityMaxOrderByAggregateInput
    _min?: UniversityMinOrderByAggregateInput
    _sum?: UniversitySumOrderByAggregateInput
  }

  export type UniversityScalarWhereWithAggregatesInput = {
    AND?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    OR?: UniversityScalarWhereWithAggregatesInput[]
    NOT?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"University"> | string
    externalId?: StringNullableWithAggregatesFilter<"University"> | string | null
    source?: EnumUniversitySourceNullableWithAggregatesFilter<"University"> | $Enums.UniversitySource | null
    name?: StringWithAggregatesFilter<"University"> | string
    country?: StringNullableWithAggregatesFilter<"University"> | string | null
    state?: StringNullableWithAggregatesFilter<"University"> | string | null
    city?: StringNullableWithAggregatesFilter<"University"> | string | null
    usNewsRanking?: IntNullableWithAggregatesFilter<"University"> | number | null
    acceptanceRate?: DecimalNullableWithAggregatesFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: StringNullableWithAggregatesFilter<"University"> | string | null
    tuitionInState?: DecimalNullableWithAggregatesFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: DecimalNullableWithAggregatesFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    applicationFee?: DecimalNullableWithAggregatesFilter<"University"> | Decimal | DecimalJsLike | number | string | null
    deadlines?: JsonNullableWithAggregatesFilter<"University">
    lastSyncedAt?: DateTimeNullableWithAggregatesFilter<"University"> | Date | string | null
    raw?: JsonNullableWithAggregatesFilter<"University">
    isActive?: BoolWithAggregatesFilter<"University"> | boolean
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    studentId?: StringFilter<"Application"> | string
    universityId?: StringFilter<"Application"> | string
    applicationType?: EnumApplicationTypeNullableFilter<"Application"> | $Enums.ApplicationType | null
    deadline?: DateTimeNullableFilter<"Application"> | Date | string | null
    status?: EnumApplicationStatusNullableFilter<"Application"> | $Enums.ApplicationStatus | null
    submittedDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    decisionDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    decisionType?: StringNullableFilter<"Application"> | string | null
    notes?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    externalApplicationId?: StringNullableFilter<"Application"> | string | null
    syncedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    documents?: ApplicationDocumentListRelationFilter
    appNotes?: ApplicationNoteListRelationFilter
    requirements?: ApplicationRequirementListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    universityId?: SortOrder
    applicationType?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    submittedDate?: SortOrderInput | SortOrder
    decisionDate?: SortOrderInput | SortOrder
    decisionType?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    externalApplicationId?: SortOrderInput | SortOrder
    syncedAt?: SortOrderInput | SortOrder
    university?: UniversityOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    documents?: ApplicationDocumentOrderByRelationAggregateInput
    appNotes?: ApplicationNoteOrderByRelationAggregateInput
    requirements?: ApplicationRequirementOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    studentId?: StringFilter<"Application"> | string
    universityId?: StringFilter<"Application"> | string
    applicationType?: EnumApplicationTypeNullableFilter<"Application"> | $Enums.ApplicationType | null
    deadline?: DateTimeNullableFilter<"Application"> | Date | string | null
    status?: EnumApplicationStatusNullableFilter<"Application"> | $Enums.ApplicationStatus | null
    submittedDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    decisionDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    decisionType?: StringNullableFilter<"Application"> | string | null
    notes?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    externalApplicationId?: StringNullableFilter<"Application"> | string | null
    syncedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    documents?: ApplicationDocumentListRelationFilter
    appNotes?: ApplicationNoteListRelationFilter
    requirements?: ApplicationRequirementListRelationFilter
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    universityId?: SortOrder
    applicationType?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    submittedDate?: SortOrderInput | SortOrder
    decisionDate?: SortOrderInput | SortOrder
    decisionType?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    externalApplicationId?: SortOrderInput | SortOrder
    syncedAt?: SortOrderInput | SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    studentId?: StringWithAggregatesFilter<"Application"> | string
    universityId?: StringWithAggregatesFilter<"Application"> | string
    applicationType?: EnumApplicationTypeNullableWithAggregatesFilter<"Application"> | $Enums.ApplicationType | null
    deadline?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    status?: EnumApplicationStatusNullableWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus | null
    submittedDate?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    decisionDate?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    decisionType?: StringNullableWithAggregatesFilter<"Application"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Application"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    externalApplicationId?: StringNullableWithAggregatesFilter<"Application"> | string | null
    syncedAt?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
  }

  export type ApplicationRequirementWhereInput = {
    AND?: ApplicationRequirementWhereInput | ApplicationRequirementWhereInput[]
    OR?: ApplicationRequirementWhereInput[]
    NOT?: ApplicationRequirementWhereInput | ApplicationRequirementWhereInput[]
    id?: StringFilter<"ApplicationRequirement"> | string
    applicationId?: StringFilter<"ApplicationRequirement"> | string
    requirementType?: StringFilter<"ApplicationRequirement"> | string
    status?: StringNullableFilter<"ApplicationRequirement"> | string | null
    deadline?: DateTimeNullableFilter<"ApplicationRequirement"> | Date | string | null
    notes?: StringNullableFilter<"ApplicationRequirement"> | string | null
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type ApplicationRequirementOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    requirementType?: SortOrder
    status?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type ApplicationRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationRequirementWhereInput | ApplicationRequirementWhereInput[]
    OR?: ApplicationRequirementWhereInput[]
    NOT?: ApplicationRequirementWhereInput | ApplicationRequirementWhereInput[]
    applicationId?: StringFilter<"ApplicationRequirement"> | string
    requirementType?: StringFilter<"ApplicationRequirement"> | string
    status?: StringNullableFilter<"ApplicationRequirement"> | string | null
    deadline?: DateTimeNullableFilter<"ApplicationRequirement"> | Date | string | null
    notes?: StringNullableFilter<"ApplicationRequirement"> | string | null
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "id">

  export type ApplicationRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    requirementType?: SortOrder
    status?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ApplicationRequirementCountOrderByAggregateInput
    _max?: ApplicationRequirementMaxOrderByAggregateInput
    _min?: ApplicationRequirementMinOrderByAggregateInput
  }

  export type ApplicationRequirementScalarWhereWithAggregatesInput = {
    AND?: ApplicationRequirementScalarWhereWithAggregatesInput | ApplicationRequirementScalarWhereWithAggregatesInput[]
    OR?: ApplicationRequirementScalarWhereWithAggregatesInput[]
    NOT?: ApplicationRequirementScalarWhereWithAggregatesInput | ApplicationRequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicationRequirement"> | string
    applicationId?: StringWithAggregatesFilter<"ApplicationRequirement"> | string
    requirementType?: StringWithAggregatesFilter<"ApplicationRequirement"> | string
    status?: StringNullableWithAggregatesFilter<"ApplicationRequirement"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"ApplicationRequirement"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"ApplicationRequirement"> | string | null
  }

  export type ApplicationNoteWhereInput = {
    AND?: ApplicationNoteWhereInput | ApplicationNoteWhereInput[]
    OR?: ApplicationNoteWhereInput[]
    NOT?: ApplicationNoteWhereInput | ApplicationNoteWhereInput[]
    id?: StringFilter<"ApplicationNote"> | string
    applicationId?: StringFilter<"ApplicationNote"> | string
    authorType?: StringFilter<"ApplicationNote"> | string
    authorId?: StringFilter<"ApplicationNote"> | string
    content?: StringFilter<"ApplicationNote"> | string
    createdAt?: DateTimeFilter<"ApplicationNote"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type ApplicationNoteOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type ApplicationNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationNoteWhereInput | ApplicationNoteWhereInput[]
    OR?: ApplicationNoteWhereInput[]
    NOT?: ApplicationNoteWhereInput | ApplicationNoteWhereInput[]
    applicationId?: StringFilter<"ApplicationNote"> | string
    authorType?: StringFilter<"ApplicationNote"> | string
    authorId?: StringFilter<"ApplicationNote"> | string
    content?: StringFilter<"ApplicationNote"> | string
    createdAt?: DateTimeFilter<"ApplicationNote"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "id">

  export type ApplicationNoteOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ApplicationNoteCountOrderByAggregateInput
    _max?: ApplicationNoteMaxOrderByAggregateInput
    _min?: ApplicationNoteMinOrderByAggregateInput
  }

  export type ApplicationNoteScalarWhereWithAggregatesInput = {
    AND?: ApplicationNoteScalarWhereWithAggregatesInput | ApplicationNoteScalarWhereWithAggregatesInput[]
    OR?: ApplicationNoteScalarWhereWithAggregatesInput[]
    NOT?: ApplicationNoteScalarWhereWithAggregatesInput | ApplicationNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicationNote"> | string
    applicationId?: StringWithAggregatesFilter<"ApplicationNote"> | string
    authorType?: StringWithAggregatesFilter<"ApplicationNote"> | string
    authorId?: StringWithAggregatesFilter<"ApplicationNote"> | string
    content?: StringWithAggregatesFilter<"ApplicationNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApplicationNote"> | Date | string
  }

  export type ApplicationDocumentWhereInput = {
    AND?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    OR?: ApplicationDocumentWhereInput[]
    NOT?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    id?: StringFilter<"ApplicationDocument"> | string
    applicationId?: StringFilter<"ApplicationDocument"> | string
    docType?: StringFilter<"ApplicationDocument"> | string
    filename?: StringFilter<"ApplicationDocument"> | string
    mimeType?: StringFilter<"ApplicationDocument"> | string
    sizeBytes?: IntFilter<"ApplicationDocument"> | number
    storagePath?: StringFilter<"ApplicationDocument"> | string
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type ApplicationDocumentOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    docType?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storagePath?: SortOrder
    uploadedAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type ApplicationDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    OR?: ApplicationDocumentWhereInput[]
    NOT?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    applicationId?: StringFilter<"ApplicationDocument"> | string
    docType?: StringFilter<"ApplicationDocument"> | string
    filename?: StringFilter<"ApplicationDocument"> | string
    mimeType?: StringFilter<"ApplicationDocument"> | string
    sizeBytes?: IntFilter<"ApplicationDocument"> | number
    storagePath?: StringFilter<"ApplicationDocument"> | string
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "id">

  export type ApplicationDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    docType?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storagePath?: SortOrder
    uploadedAt?: SortOrder
    _count?: ApplicationDocumentCountOrderByAggregateInput
    _avg?: ApplicationDocumentAvgOrderByAggregateInput
    _max?: ApplicationDocumentMaxOrderByAggregateInput
    _min?: ApplicationDocumentMinOrderByAggregateInput
    _sum?: ApplicationDocumentSumOrderByAggregateInput
  }

  export type ApplicationDocumentScalarWhereWithAggregatesInput = {
    AND?: ApplicationDocumentScalarWhereWithAggregatesInput | ApplicationDocumentScalarWhereWithAggregatesInput[]
    OR?: ApplicationDocumentScalarWhereWithAggregatesInput[]
    NOT?: ApplicationDocumentScalarWhereWithAggregatesInput | ApplicationDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    applicationId?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    docType?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    filename?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    mimeType?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    sizeBytes?: IntWithAggregatesFilter<"ApplicationDocument"> | number
    storagePath?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"ApplicationDocument"> | Date | string
  }

  export type SyncLogWhereInput = {
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    id?: StringFilter<"SyncLog"> | string
    source?: EnumUniversitySourceFilter<"SyncLog"> | $Enums.UniversitySource
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    finishedAt?: DateTimeNullableFilter<"SyncLog"> | Date | string | null
    status?: StringFilter<"SyncLog"> | string
    error?: StringNullableFilter<"SyncLog"> | string | null
    stats?: JsonNullableFilter<"SyncLog">
    cursor?: StringNullableFilter<"SyncLog"> | string | null
  }

  export type SyncLogOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    stats?: SortOrderInput | SortOrder
    cursor?: SortOrderInput | SortOrder
  }

  export type SyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    source?: EnumUniversitySourceFilter<"SyncLog"> | $Enums.UniversitySource
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    finishedAt?: DateTimeNullableFilter<"SyncLog"> | Date | string | null
    status?: StringFilter<"SyncLog"> | string
    error?: StringNullableFilter<"SyncLog"> | string | null
    stats?: JsonNullableFilter<"SyncLog">
    cursor?: StringNullableFilter<"SyncLog"> | string | null
  }, "id">

  export type SyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    stats?: SortOrderInput | SortOrder
    cursor?: SortOrderInput | SortOrder
    _count?: SyncLogCountOrderByAggregateInput
    _max?: SyncLogMaxOrderByAggregateInput
    _min?: SyncLogMinOrderByAggregateInput
  }

  export type SyncLogScalarWhereWithAggregatesInput = {
    AND?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    OR?: SyncLogScalarWhereWithAggregatesInput[]
    NOT?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncLog"> | string
    source?: EnumUniversitySourceWithAggregatesFilter<"SyncLog"> | $Enums.UniversitySource
    startedAt?: DateTimeWithAggregatesFilter<"SyncLog"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"SyncLog"> | Date | string | null
    status?: StringWithAggregatesFilter<"SyncLog"> | string
    error?: StringNullableWithAggregatesFilter<"SyncLog"> | string | null
    stats?: JsonNullableWithAggregatesFilter<"SyncLog">
    cursor?: StringNullableWithAggregatesFilter<"SyncLog"> | string | null
  }

  export type CommunicationRecordWhereInput = {
    AND?: CommunicationRecordWhereInput | CommunicationRecordWhereInput[]
    OR?: CommunicationRecordWhereInput[]
    NOT?: CommunicationRecordWhereInput | CommunicationRecordWhereInput[]
    id?: StringFilter<"CommunicationRecord"> | string
    studentId?: StringFilter<"CommunicationRecord"> | string
    parentId?: StringFilter<"CommunicationRecord"> | string
    title?: StringFilter<"CommunicationRecord"> | string
    content?: StringFilter<"CommunicationRecord"> | string
    type?: StringFilter<"CommunicationRecord"> | string
    createdAt?: DateTimeFilter<"CommunicationRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"CommunicationRecord"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
  }

  export type CommunicationRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    parent?: ParentOrderByWithRelationInput
  }

  export type CommunicationRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunicationRecordWhereInput | CommunicationRecordWhereInput[]
    OR?: CommunicationRecordWhereInput[]
    NOT?: CommunicationRecordWhereInput | CommunicationRecordWhereInput[]
    studentId?: StringFilter<"CommunicationRecord"> | string
    parentId?: StringFilter<"CommunicationRecord"> | string
    title?: StringFilter<"CommunicationRecord"> | string
    content?: StringFilter<"CommunicationRecord"> | string
    type?: StringFilter<"CommunicationRecord"> | string
    createdAt?: DateTimeFilter<"CommunicationRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"CommunicationRecord"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
  }, "id">

  export type CommunicationRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CommunicationRecordCountOrderByAggregateInput
    _max?: CommunicationRecordMaxOrderByAggregateInput
    _min?: CommunicationRecordMinOrderByAggregateInput
  }

  export type CommunicationRecordScalarWhereWithAggregatesInput = {
    AND?: CommunicationRecordScalarWhereWithAggregatesInput | CommunicationRecordScalarWhereWithAggregatesInput[]
    OR?: CommunicationRecordScalarWhereWithAggregatesInput[]
    NOT?: CommunicationRecordScalarWhereWithAggregatesInput | CommunicationRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunicationRecord"> | string
    studentId?: StringWithAggregatesFilter<"CommunicationRecord"> | string
    parentId?: StringWithAggregatesFilter<"CommunicationRecord"> | string
    title?: StringWithAggregatesFilter<"CommunicationRecord"> | string
    content?: StringWithAggregatesFilter<"CommunicationRecord"> | string
    type?: StringWithAggregatesFilter<"CommunicationRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CommunicationRecord"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"CommunicationRecord"> | Date | string | null
  }

  export type ObservationRecordWhereInput = {
    AND?: ObservationRecordWhereInput | ObservationRecordWhereInput[]
    OR?: ObservationRecordWhereInput[]
    NOT?: ObservationRecordWhereInput | ObservationRecordWhereInput[]
    id?: StringFilter<"ObservationRecord"> | string
    studentId?: StringFilter<"ObservationRecord"> | string
    parentId?: StringFilter<"ObservationRecord"> | string
    title?: StringFilter<"ObservationRecord"> | string
    content?: StringFilter<"ObservationRecord"> | string
    category?: StringFilter<"ObservationRecord"> | string
    priority?: StringFilter<"ObservationRecord"> | string
    createdAt?: DateTimeFilter<"ObservationRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ObservationRecord"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
  }

  export type ObservationRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    parent?: ParentOrderByWithRelationInput
  }

  export type ObservationRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObservationRecordWhereInput | ObservationRecordWhereInput[]
    OR?: ObservationRecordWhereInput[]
    NOT?: ObservationRecordWhereInput | ObservationRecordWhereInput[]
    studentId?: StringFilter<"ObservationRecord"> | string
    parentId?: StringFilter<"ObservationRecord"> | string
    title?: StringFilter<"ObservationRecord"> | string
    content?: StringFilter<"ObservationRecord"> | string
    category?: StringFilter<"ObservationRecord"> | string
    priority?: StringFilter<"ObservationRecord"> | string
    createdAt?: DateTimeFilter<"ObservationRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ObservationRecord"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
  }, "id">

  export type ObservationRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ObservationRecordCountOrderByAggregateInput
    _max?: ObservationRecordMaxOrderByAggregateInput
    _min?: ObservationRecordMinOrderByAggregateInput
  }

  export type ObservationRecordScalarWhereWithAggregatesInput = {
    AND?: ObservationRecordScalarWhereWithAggregatesInput | ObservationRecordScalarWhereWithAggregatesInput[]
    OR?: ObservationRecordScalarWhereWithAggregatesInput[]
    NOT?: ObservationRecordScalarWhereWithAggregatesInput | ObservationRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ObservationRecord"> | string
    studentId?: StringWithAggregatesFilter<"ObservationRecord"> | string
    parentId?: StringWithAggregatesFilter<"ObservationRecord"> | string
    title?: StringWithAggregatesFilter<"ObservationRecord"> | string
    content?: StringWithAggregatesFilter<"ObservationRecord"> | string
    category?: StringWithAggregatesFilter<"ObservationRecord"> | string
    priority?: StringWithAggregatesFilter<"ObservationRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ObservationRecord"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ObservationRecord"> | Date | string | null
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    parentLinks?: StudentParentCreateNestedManyWithoutStudentInput
    communications?: CommunicationRecordCreateNestedManyWithoutStudentInput
    observations?: ObservationRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    parentLinks?: StudentParentUncheckedCreateNestedManyWithoutStudentInput
    communications?: CommunicationRecordUncheckedCreateNestedManyWithoutStudentInput
    observations?: ObservationRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    parentLinks?: StudentParentUpdateManyWithoutStudentNestedInput
    communications?: CommunicationRecordUpdateManyWithoutStudentNestedInput
    observations?: ObservationRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    parentLinks?: StudentParentUncheckedUpdateManyWithoutStudentNestedInput
    communications?: CommunicationRecordUncheckedUpdateManyWithoutStudentNestedInput
    observations?: ObservationRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ParentCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
    studentLinks?: StudentParentCreateNestedManyWithoutParentInput
    communications?: CommunicationRecordCreateNestedManyWithoutParentInput
    observations?: ObservationRecordCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
    studentLinks?: StudentParentUncheckedCreateNestedManyWithoutParentInput
    communications?: CommunicationRecordUncheckedCreateNestedManyWithoutParentInput
    observations?: ObservationRecordUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLinks?: StudentParentUpdateManyWithoutParentNestedInput
    communications?: CommunicationRecordUpdateManyWithoutParentNestedInput
    observations?: ObservationRecordUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLinks?: StudentParentUncheckedUpdateManyWithoutParentNestedInput
    communications?: CommunicationRecordUncheckedUpdateManyWithoutParentNestedInput
    observations?: ObservationRecordUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
  }

  export type ParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentParentCreateInput = {
    id?: string
    relationship?: string | null
    createdAt?: Date | string
    parent: ParentCreateNestedOneWithoutStudentLinksInput
    student: StudentCreateNestedOneWithoutParentLinksInput
  }

  export type StudentParentUncheckedCreateInput = {
    id?: string
    studentId: string
    parentId: string
    relationship?: string | null
    createdAt?: Date | string
  }

  export type StudentParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUpdateOneRequiredWithoutStudentLinksNestedInput
    student?: StudentUpdateOneRequiredWithoutParentLinksNestedInput
  }

  export type StudentParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentParentCreateManyInput = {
    id?: string
    studentId: string
    parentId: string
    relationship?: string | null
    createdAt?: Date | string
  }

  export type StudentParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityCreateInput = {
    id?: string
    externalId?: string | null
    source?: $Enums.UniversitySource | null
    name: string
    country?: string | null
    state?: string | null
    city?: string | null
    usNewsRanking?: number | null
    acceptanceRate?: Decimal | DecimalJsLike | number | string | null
    applicationSystem?: string | null
    tuitionInState?: Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: Decimal | DecimalJsLike | number | string | null
    applicationFee?: Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    applications?: ApplicationCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateInput = {
    id?: string
    externalId?: string | null
    source?: $Enums.UniversitySource | null
    name: string
    country?: string | null
    state?: string | null
    city?: string | null
    usNewsRanking?: number | null
    acceptanceRate?: Decimal | DecimalJsLike | number | string | null
    applicationSystem?: string | null
    tuitionInState?: Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: Decimal | DecimalJsLike | number | string | null
    applicationFee?: Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    applications?: ApplicationUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableEnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource | null
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    usNewsRanking?: NullableIntFieldUpdateOperationsInput | number | null
    acceptanceRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: NullableStringFieldUpdateOperationsInput | string | null
    tuitionInState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    applications?: ApplicationUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableEnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource | null
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    usNewsRanking?: NullableIntFieldUpdateOperationsInput | number | null
    acceptanceRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: NullableStringFieldUpdateOperationsInput | string | null
    tuitionInState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    applications?: ApplicationUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityCreateManyInput = {
    id?: string
    externalId?: string | null
    source?: $Enums.UniversitySource | null
    name: string
    country?: string | null
    state?: string | null
    city?: string | null
    usNewsRanking?: number | null
    acceptanceRate?: Decimal | DecimalJsLike | number | string | null
    applicationSystem?: string | null
    tuitionInState?: Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: Decimal | DecimalJsLike | number | string | null
    applicationFee?: Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
  }

  export type UniversityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableEnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource | null
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    usNewsRanking?: NullableIntFieldUpdateOperationsInput | number | null
    acceptanceRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: NullableStringFieldUpdateOperationsInput | string | null
    tuitionInState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UniversityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableEnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource | null
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    usNewsRanking?: NullableIntFieldUpdateOperationsInput | number | null
    acceptanceRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: NullableStringFieldUpdateOperationsInput | string | null
    tuitionInState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationCreateInput = {
    id?: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    university: UniversityCreateNestedOneWithoutApplicationsInput
    student: StudentCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
    appNotes?: ApplicationNoteCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    studentId: string
    universityId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
    appNotes?: ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    university?: UniversityUpdateOneRequiredWithoutApplicationsNestedInput
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
    appNotes?: ApplicationNoteUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
    appNotes?: ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    studentId: string
    universityId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationRequirementCreateInput = {
    id?: string
    requirementType: string
    status?: string | null
    deadline?: Date | string | null
    notes?: string | null
    application: ApplicationCreateNestedOneWithoutRequirementsInput
  }

  export type ApplicationRequirementUncheckedCreateInput = {
    id?: string
    applicationId: string
    requirementType: string
    status?: string | null
    deadline?: Date | string | null
    notes?: string | null
  }

  export type ApplicationRequirementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requirementType?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    application?: ApplicationUpdateOneRequiredWithoutRequirementsNestedInput
  }

  export type ApplicationRequirementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    requirementType?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationRequirementCreateManyInput = {
    id?: string
    applicationId: string
    requirementType: string
    status?: string | null
    deadline?: Date | string | null
    notes?: string | null
  }

  export type ApplicationRequirementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requirementType?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationRequirementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    requirementType?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationNoteCreateInput = {
    id?: string
    authorType: string
    authorId: string
    content: string
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAppNotesInput
  }

  export type ApplicationNoteUncheckedCreateInput = {
    id?: string
    applicationId: string
    authorType: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type ApplicationNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorType?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAppNotesNestedInput
  }

  export type ApplicationNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    authorType?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationNoteCreateManyInput = {
    id?: string
    applicationId: string
    authorType: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type ApplicationNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorType?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    authorType?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentCreateInput = {
    id?: string
    docType: string
    filename: string
    mimeType: string
    sizeBytes: number
    storagePath: string
    uploadedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutDocumentsInput
  }

  export type ApplicationDocumentUncheckedCreateInput = {
    id?: string
    applicationId: string
    docType: string
    filename: string
    mimeType: string
    sizeBytes: number
    storagePath: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ApplicationDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentCreateManyInput = {
    id?: string
    applicationId: string
    docType: string
    filename: string
    mimeType: string
    sizeBytes: number
    storagePath: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogCreateInput = {
    id?: string
    source: $Enums.UniversitySource
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status: string
    error?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    cursor?: string | null
  }

  export type SyncLogUncheckedCreateInput = {
    id?: string
    source: $Enums.UniversitySource
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status: string
    error?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    cursor?: string | null
  }

  export type SyncLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    cursor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    cursor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncLogCreateManyInput = {
    id?: string
    source: $Enums.UniversitySource
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status: string
    error?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    cursor?: string | null
  }

  export type SyncLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    cursor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    cursor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunicationRecordCreateInput = {
    id?: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    student: StudentCreateNestedOneWithoutCommunicationsInput
    parent: ParentCreateNestedOneWithoutCommunicationsInput
  }

  export type CommunicationRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    parentId: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CommunicationRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutCommunicationsNestedInput
    parent?: ParentUpdateOneRequiredWithoutCommunicationsNestedInput
  }

  export type CommunicationRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationRecordCreateManyInput = {
    id?: string
    studentId: string
    parentId: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CommunicationRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationRecordCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    student: StudentCreateNestedOneWithoutObservationsInput
    parent: ParentCreateNestedOneWithoutObservationsInput
  }

  export type ObservationRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    parentId: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutObservationsNestedInput
    parent?: ParentUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationRecordCreateManyInput = {
    id?: string
    studentId: string
    parentId: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type StudentParentListRelationFilter = {
    every?: StudentParentWhereInput
    some?: StudentParentWhereInput
    none?: StudentParentWhereInput
  }

  export type CommunicationRecordListRelationFilter = {
    every?: CommunicationRecordWhereInput
    some?: CommunicationRecordWhereInput
    none?: CommunicationRecordWhereInput
  }

  export type ObservationRecordListRelationFilter = {
    every?: ObservationRecordWhereInput
    some?: ObservationRecordWhereInput
    none?: ObservationRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentParentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunicationRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObservationRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    graduationYear?: SortOrder
    gpa?: SortOrder
    satScore?: SortOrder
    actScore?: SortOrder
    targetCountries?: SortOrder
    intendedMajors?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    graduationYear?: SortOrder
    gpa?: SortOrder
    satScore?: SortOrder
    actScore?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    graduationYear?: SortOrder
    gpa?: SortOrder
    satScore?: SortOrder
    actScore?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    graduationYear?: SortOrder
    gpa?: SortOrder
    satScore?: SortOrder
    actScore?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    graduationYear?: SortOrder
    gpa?: SortOrder
    satScore?: SortOrder
    actScore?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
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

  export type ParentScalarRelationFilter = {
    is?: ParentWhereInput
    isNot?: ParentWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentParentStudentIdParentIdCompoundUniqueInput = {
    studentId: string
    parentId: string
  }

  export type StudentParentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    relationship?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentParentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    relationship?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentParentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    relationship?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumUniversitySourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversitySource | EnumUniversitySourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUniversitySourceNullableFilter<$PrismaModel> | $Enums.UniversitySource | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UniversityCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    source?: SortOrder
    name?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    usNewsRanking?: SortOrder
    acceptanceRate?: SortOrder
    applicationSystem?: SortOrder
    tuitionInState?: SortOrder
    tuitionOutState?: SortOrder
    applicationFee?: SortOrder
    deadlines?: SortOrder
    lastSyncedAt?: SortOrder
    raw?: SortOrder
    isActive?: SortOrder
  }

  export type UniversityAvgOrderByAggregateInput = {
    usNewsRanking?: SortOrder
    acceptanceRate?: SortOrder
    tuitionInState?: SortOrder
    tuitionOutState?: SortOrder
    applicationFee?: SortOrder
  }

  export type UniversityMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    source?: SortOrder
    name?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    usNewsRanking?: SortOrder
    acceptanceRate?: SortOrder
    applicationSystem?: SortOrder
    tuitionInState?: SortOrder
    tuitionOutState?: SortOrder
    applicationFee?: SortOrder
    lastSyncedAt?: SortOrder
    isActive?: SortOrder
  }

  export type UniversityMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    source?: SortOrder
    name?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    usNewsRanking?: SortOrder
    acceptanceRate?: SortOrder
    applicationSystem?: SortOrder
    tuitionInState?: SortOrder
    tuitionOutState?: SortOrder
    applicationFee?: SortOrder
    lastSyncedAt?: SortOrder
    isActive?: SortOrder
  }

  export type UniversitySumOrderByAggregateInput = {
    usNewsRanking?: SortOrder
    acceptanceRate?: SortOrder
    tuitionInState?: SortOrder
    tuitionOutState?: SortOrder
    applicationFee?: SortOrder
  }

  export type EnumUniversitySourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversitySource | EnumUniversitySourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUniversitySourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.UniversitySource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUniversitySourceNullableFilter<$PrismaModel>
    _max?: NestedEnumUniversitySourceNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumApplicationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationType | EnumApplicationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationType[] | ListEnumApplicationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationType[] | ListEnumApplicationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationTypeNullableFilter<$PrismaModel> | $Enums.ApplicationType | null
  }

  export type EnumApplicationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableFilter<$PrismaModel> | $Enums.ApplicationStatus | null
  }

  export type UniversityScalarRelationFilter = {
    is?: UniversityWhereInput
    isNot?: UniversityWhereInput
  }

  export type ApplicationDocumentListRelationFilter = {
    every?: ApplicationDocumentWhereInput
    some?: ApplicationDocumentWhereInput
    none?: ApplicationDocumentWhereInput
  }

  export type ApplicationNoteListRelationFilter = {
    every?: ApplicationNoteWhereInput
    some?: ApplicationNoteWhereInput
    none?: ApplicationNoteWhereInput
  }

  export type ApplicationRequirementListRelationFilter = {
    every?: ApplicationRequirementWhereInput
    some?: ApplicationRequirementWhereInput
    none?: ApplicationRequirementWhereInput
  }

  export type ApplicationDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    universityId?: SortOrder
    applicationType?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    submittedDate?: SortOrder
    decisionDate?: SortOrder
    decisionType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    externalApplicationId?: SortOrder
    syncedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    universityId?: SortOrder
    applicationType?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    submittedDate?: SortOrder
    decisionDate?: SortOrder
    decisionType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    externalApplicationId?: SortOrder
    syncedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    universityId?: SortOrder
    applicationType?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    submittedDate?: SortOrder
    decisionDate?: SortOrder
    decisionType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    externalApplicationId?: SortOrder
    syncedAt?: SortOrder
  }

  export type EnumApplicationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationType | EnumApplicationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationType[] | ListEnumApplicationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationType[] | ListEnumApplicationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationTypeNullableFilter<$PrismaModel>
  }

  export type EnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
  }

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type ApplicationRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    requirementType?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    notes?: SortOrder
  }

  export type ApplicationRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    requirementType?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    notes?: SortOrder
  }

  export type ApplicationRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    requirementType?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    notes?: SortOrder
  }

  export type ApplicationNoteCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationNoteMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    docType?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storagePath?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApplicationDocumentAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type ApplicationDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    docType?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storagePath?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApplicationDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    docType?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storagePath?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApplicationDocumentSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type EnumUniversitySourceFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversitySource | EnumUniversitySourceFieldRefInput<$PrismaModel>
    in?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel>
    not?: NestedEnumUniversitySourceFilter<$PrismaModel> | $Enums.UniversitySource
  }

  export type SyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    error?: SortOrder
    stats?: SortOrder
    cursor?: SortOrder
  }

  export type SyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    error?: SortOrder
    cursor?: SortOrder
  }

  export type SyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    error?: SortOrder
    cursor?: SortOrder
  }

  export type EnumUniversitySourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversitySource | EnumUniversitySourceFieldRefInput<$PrismaModel>
    in?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel>
    not?: NestedEnumUniversitySourceWithAggregatesFilter<$PrismaModel> | $Enums.UniversitySource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUniversitySourceFilter<$PrismaModel>
    _max?: NestedEnumUniversitySourceFilter<$PrismaModel>
  }

  export type CommunicationRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObservationRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObservationRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObservationRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationCreateNestedManyWithoutStudentInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type StudentParentCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentParentCreateWithoutStudentInput, StudentParentUncheckedCreateWithoutStudentInput> | StudentParentCreateWithoutStudentInput[] | StudentParentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentParentCreateOrConnectWithoutStudentInput | StudentParentCreateOrConnectWithoutStudentInput[]
    createMany?: StudentParentCreateManyStudentInputEnvelope
    connect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
  }

  export type CommunicationRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<CommunicationRecordCreateWithoutStudentInput, CommunicationRecordUncheckedCreateWithoutStudentInput> | CommunicationRecordCreateWithoutStudentInput[] | CommunicationRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CommunicationRecordCreateOrConnectWithoutStudentInput | CommunicationRecordCreateOrConnectWithoutStudentInput[]
    createMany?: CommunicationRecordCreateManyStudentInputEnvelope
    connect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
  }

  export type ObservationRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<ObservationRecordCreateWithoutStudentInput, ObservationRecordUncheckedCreateWithoutStudentInput> | ObservationRecordCreateWithoutStudentInput[] | ObservationRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ObservationRecordCreateOrConnectWithoutStudentInput | ObservationRecordCreateOrConnectWithoutStudentInput[]
    createMany?: ObservationRecordCreateManyStudentInputEnvelope
    connect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type StudentParentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentParentCreateWithoutStudentInput, StudentParentUncheckedCreateWithoutStudentInput> | StudentParentCreateWithoutStudentInput[] | StudentParentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentParentCreateOrConnectWithoutStudentInput | StudentParentCreateOrConnectWithoutStudentInput[]
    createMany?: StudentParentCreateManyStudentInputEnvelope
    connect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
  }

  export type CommunicationRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CommunicationRecordCreateWithoutStudentInput, CommunicationRecordUncheckedCreateWithoutStudentInput> | CommunicationRecordCreateWithoutStudentInput[] | CommunicationRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CommunicationRecordCreateOrConnectWithoutStudentInput | CommunicationRecordCreateOrConnectWithoutStudentInput[]
    createMany?: CommunicationRecordCreateManyStudentInputEnvelope
    connect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
  }

  export type ObservationRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ObservationRecordCreateWithoutStudentInput, ObservationRecordUncheckedCreateWithoutStudentInput> | ObservationRecordCreateWithoutStudentInput[] | ObservationRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ObservationRecordCreateOrConnectWithoutStudentInput | ObservationRecordCreateOrConnectWithoutStudentInput[]
    createMany?: ObservationRecordCreateManyStudentInputEnvelope
    connect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutStudentInput | ApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutStudentInput | ApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutStudentInput | ApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type StudentParentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentParentCreateWithoutStudentInput, StudentParentUncheckedCreateWithoutStudentInput> | StudentParentCreateWithoutStudentInput[] | StudentParentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentParentCreateOrConnectWithoutStudentInput | StudentParentCreateOrConnectWithoutStudentInput[]
    upsert?: StudentParentUpsertWithWhereUniqueWithoutStudentInput | StudentParentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentParentCreateManyStudentInputEnvelope
    set?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    disconnect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    delete?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    connect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    update?: StudentParentUpdateWithWhereUniqueWithoutStudentInput | StudentParentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentParentUpdateManyWithWhereWithoutStudentInput | StudentParentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentParentScalarWhereInput | StudentParentScalarWhereInput[]
  }

  export type CommunicationRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CommunicationRecordCreateWithoutStudentInput, CommunicationRecordUncheckedCreateWithoutStudentInput> | CommunicationRecordCreateWithoutStudentInput[] | CommunicationRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CommunicationRecordCreateOrConnectWithoutStudentInput | CommunicationRecordCreateOrConnectWithoutStudentInput[]
    upsert?: CommunicationRecordUpsertWithWhereUniqueWithoutStudentInput | CommunicationRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CommunicationRecordCreateManyStudentInputEnvelope
    set?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    disconnect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    delete?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    connect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    update?: CommunicationRecordUpdateWithWhereUniqueWithoutStudentInput | CommunicationRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CommunicationRecordUpdateManyWithWhereWithoutStudentInput | CommunicationRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CommunicationRecordScalarWhereInput | CommunicationRecordScalarWhereInput[]
  }

  export type ObservationRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ObservationRecordCreateWithoutStudentInput, ObservationRecordUncheckedCreateWithoutStudentInput> | ObservationRecordCreateWithoutStudentInput[] | ObservationRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ObservationRecordCreateOrConnectWithoutStudentInput | ObservationRecordCreateOrConnectWithoutStudentInput[]
    upsert?: ObservationRecordUpsertWithWhereUniqueWithoutStudentInput | ObservationRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ObservationRecordCreateManyStudentInputEnvelope
    set?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    disconnect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    delete?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    connect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    update?: ObservationRecordUpdateWithWhereUniqueWithoutStudentInput | ObservationRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ObservationRecordUpdateManyWithWhereWithoutStudentInput | ObservationRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ObservationRecordScalarWhereInput | ObservationRecordScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutStudentInput | ApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutStudentInput | ApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutStudentInput | ApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type StudentParentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentParentCreateWithoutStudentInput, StudentParentUncheckedCreateWithoutStudentInput> | StudentParentCreateWithoutStudentInput[] | StudentParentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentParentCreateOrConnectWithoutStudentInput | StudentParentCreateOrConnectWithoutStudentInput[]
    upsert?: StudentParentUpsertWithWhereUniqueWithoutStudentInput | StudentParentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentParentCreateManyStudentInputEnvelope
    set?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    disconnect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    delete?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    connect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    update?: StudentParentUpdateWithWhereUniqueWithoutStudentInput | StudentParentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentParentUpdateManyWithWhereWithoutStudentInput | StudentParentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentParentScalarWhereInput | StudentParentScalarWhereInput[]
  }

  export type CommunicationRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CommunicationRecordCreateWithoutStudentInput, CommunicationRecordUncheckedCreateWithoutStudentInput> | CommunicationRecordCreateWithoutStudentInput[] | CommunicationRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CommunicationRecordCreateOrConnectWithoutStudentInput | CommunicationRecordCreateOrConnectWithoutStudentInput[]
    upsert?: CommunicationRecordUpsertWithWhereUniqueWithoutStudentInput | CommunicationRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CommunicationRecordCreateManyStudentInputEnvelope
    set?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    disconnect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    delete?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    connect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    update?: CommunicationRecordUpdateWithWhereUniqueWithoutStudentInput | CommunicationRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CommunicationRecordUpdateManyWithWhereWithoutStudentInput | CommunicationRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CommunicationRecordScalarWhereInput | CommunicationRecordScalarWhereInput[]
  }

  export type ObservationRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ObservationRecordCreateWithoutStudentInput, ObservationRecordUncheckedCreateWithoutStudentInput> | ObservationRecordCreateWithoutStudentInput[] | ObservationRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ObservationRecordCreateOrConnectWithoutStudentInput | ObservationRecordCreateOrConnectWithoutStudentInput[]
    upsert?: ObservationRecordUpsertWithWhereUniqueWithoutStudentInput | ObservationRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ObservationRecordCreateManyStudentInputEnvelope
    set?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    disconnect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    delete?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    connect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    update?: ObservationRecordUpdateWithWhereUniqueWithoutStudentInput | ObservationRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ObservationRecordUpdateManyWithWhereWithoutStudentInput | ObservationRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ObservationRecordScalarWhereInput | ObservationRecordScalarWhereInput[]
  }

  export type StudentParentCreateNestedManyWithoutParentInput = {
    create?: XOR<StudentParentCreateWithoutParentInput, StudentParentUncheckedCreateWithoutParentInput> | StudentParentCreateWithoutParentInput[] | StudentParentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentParentCreateOrConnectWithoutParentInput | StudentParentCreateOrConnectWithoutParentInput[]
    createMany?: StudentParentCreateManyParentInputEnvelope
    connect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
  }

  export type CommunicationRecordCreateNestedManyWithoutParentInput = {
    create?: XOR<CommunicationRecordCreateWithoutParentInput, CommunicationRecordUncheckedCreateWithoutParentInput> | CommunicationRecordCreateWithoutParentInput[] | CommunicationRecordUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommunicationRecordCreateOrConnectWithoutParentInput | CommunicationRecordCreateOrConnectWithoutParentInput[]
    createMany?: CommunicationRecordCreateManyParentInputEnvelope
    connect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
  }

  export type ObservationRecordCreateNestedManyWithoutParentInput = {
    create?: XOR<ObservationRecordCreateWithoutParentInput, ObservationRecordUncheckedCreateWithoutParentInput> | ObservationRecordCreateWithoutParentInput[] | ObservationRecordUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ObservationRecordCreateOrConnectWithoutParentInput | ObservationRecordCreateOrConnectWithoutParentInput[]
    createMany?: ObservationRecordCreateManyParentInputEnvelope
    connect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
  }

  export type StudentParentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<StudentParentCreateWithoutParentInput, StudentParentUncheckedCreateWithoutParentInput> | StudentParentCreateWithoutParentInput[] | StudentParentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentParentCreateOrConnectWithoutParentInput | StudentParentCreateOrConnectWithoutParentInput[]
    createMany?: StudentParentCreateManyParentInputEnvelope
    connect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
  }

  export type CommunicationRecordUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommunicationRecordCreateWithoutParentInput, CommunicationRecordUncheckedCreateWithoutParentInput> | CommunicationRecordCreateWithoutParentInput[] | CommunicationRecordUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommunicationRecordCreateOrConnectWithoutParentInput | CommunicationRecordCreateOrConnectWithoutParentInput[]
    createMany?: CommunicationRecordCreateManyParentInputEnvelope
    connect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
  }

  export type ObservationRecordUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ObservationRecordCreateWithoutParentInput, ObservationRecordUncheckedCreateWithoutParentInput> | ObservationRecordCreateWithoutParentInput[] | ObservationRecordUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ObservationRecordCreateOrConnectWithoutParentInput | ObservationRecordCreateOrConnectWithoutParentInput[]
    createMany?: ObservationRecordCreateManyParentInputEnvelope
    connect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentParentUpdateManyWithoutParentNestedInput = {
    create?: XOR<StudentParentCreateWithoutParentInput, StudentParentUncheckedCreateWithoutParentInput> | StudentParentCreateWithoutParentInput[] | StudentParentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentParentCreateOrConnectWithoutParentInput | StudentParentCreateOrConnectWithoutParentInput[]
    upsert?: StudentParentUpsertWithWhereUniqueWithoutParentInput | StudentParentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StudentParentCreateManyParentInputEnvelope
    set?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    disconnect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    delete?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    connect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    update?: StudentParentUpdateWithWhereUniqueWithoutParentInput | StudentParentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StudentParentUpdateManyWithWhereWithoutParentInput | StudentParentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StudentParentScalarWhereInput | StudentParentScalarWhereInput[]
  }

  export type CommunicationRecordUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommunicationRecordCreateWithoutParentInput, CommunicationRecordUncheckedCreateWithoutParentInput> | CommunicationRecordCreateWithoutParentInput[] | CommunicationRecordUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommunicationRecordCreateOrConnectWithoutParentInput | CommunicationRecordCreateOrConnectWithoutParentInput[]
    upsert?: CommunicationRecordUpsertWithWhereUniqueWithoutParentInput | CommunicationRecordUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommunicationRecordCreateManyParentInputEnvelope
    set?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    disconnect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    delete?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    connect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    update?: CommunicationRecordUpdateWithWhereUniqueWithoutParentInput | CommunicationRecordUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommunicationRecordUpdateManyWithWhereWithoutParentInput | CommunicationRecordUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommunicationRecordScalarWhereInput | CommunicationRecordScalarWhereInput[]
  }

  export type ObservationRecordUpdateManyWithoutParentNestedInput = {
    create?: XOR<ObservationRecordCreateWithoutParentInput, ObservationRecordUncheckedCreateWithoutParentInput> | ObservationRecordCreateWithoutParentInput[] | ObservationRecordUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ObservationRecordCreateOrConnectWithoutParentInput | ObservationRecordCreateOrConnectWithoutParentInput[]
    upsert?: ObservationRecordUpsertWithWhereUniqueWithoutParentInput | ObservationRecordUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ObservationRecordCreateManyParentInputEnvelope
    set?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    disconnect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    delete?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    connect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    update?: ObservationRecordUpdateWithWhereUniqueWithoutParentInput | ObservationRecordUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ObservationRecordUpdateManyWithWhereWithoutParentInput | ObservationRecordUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ObservationRecordScalarWhereInput | ObservationRecordScalarWhereInput[]
  }

  export type StudentParentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<StudentParentCreateWithoutParentInput, StudentParentUncheckedCreateWithoutParentInput> | StudentParentCreateWithoutParentInput[] | StudentParentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentParentCreateOrConnectWithoutParentInput | StudentParentCreateOrConnectWithoutParentInput[]
    upsert?: StudentParentUpsertWithWhereUniqueWithoutParentInput | StudentParentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StudentParentCreateManyParentInputEnvelope
    set?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    disconnect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    delete?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    connect?: StudentParentWhereUniqueInput | StudentParentWhereUniqueInput[]
    update?: StudentParentUpdateWithWhereUniqueWithoutParentInput | StudentParentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StudentParentUpdateManyWithWhereWithoutParentInput | StudentParentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StudentParentScalarWhereInput | StudentParentScalarWhereInput[]
  }

  export type CommunicationRecordUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommunicationRecordCreateWithoutParentInput, CommunicationRecordUncheckedCreateWithoutParentInput> | CommunicationRecordCreateWithoutParentInput[] | CommunicationRecordUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommunicationRecordCreateOrConnectWithoutParentInput | CommunicationRecordCreateOrConnectWithoutParentInput[]
    upsert?: CommunicationRecordUpsertWithWhereUniqueWithoutParentInput | CommunicationRecordUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommunicationRecordCreateManyParentInputEnvelope
    set?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    disconnect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    delete?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    connect?: CommunicationRecordWhereUniqueInput | CommunicationRecordWhereUniqueInput[]
    update?: CommunicationRecordUpdateWithWhereUniqueWithoutParentInput | CommunicationRecordUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommunicationRecordUpdateManyWithWhereWithoutParentInput | CommunicationRecordUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommunicationRecordScalarWhereInput | CommunicationRecordScalarWhereInput[]
  }

  export type ObservationRecordUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ObservationRecordCreateWithoutParentInput, ObservationRecordUncheckedCreateWithoutParentInput> | ObservationRecordCreateWithoutParentInput[] | ObservationRecordUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ObservationRecordCreateOrConnectWithoutParentInput | ObservationRecordCreateOrConnectWithoutParentInput[]
    upsert?: ObservationRecordUpsertWithWhereUniqueWithoutParentInput | ObservationRecordUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ObservationRecordCreateManyParentInputEnvelope
    set?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    disconnect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    delete?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    connect?: ObservationRecordWhereUniqueInput | ObservationRecordWhereUniqueInput[]
    update?: ObservationRecordUpdateWithWhereUniqueWithoutParentInput | ObservationRecordUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ObservationRecordUpdateManyWithWhereWithoutParentInput | ObservationRecordUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ObservationRecordScalarWhereInput | ObservationRecordScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ParentCreateNestedOneWithoutStudentLinksInput = {
    create?: XOR<ParentCreateWithoutStudentLinksInput, ParentUncheckedCreateWithoutStudentLinksInput>
    connectOrCreate?: ParentCreateOrConnectWithoutStudentLinksInput
    connect?: ParentWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutParentLinksInput = {
    create?: XOR<StudentCreateWithoutParentLinksInput, StudentUncheckedCreateWithoutParentLinksInput>
    connectOrCreate?: StudentCreateOrConnectWithoutParentLinksInput
    connect?: StudentWhereUniqueInput
  }

  export type ParentUpdateOneRequiredWithoutStudentLinksNestedInput = {
    create?: XOR<ParentCreateWithoutStudentLinksInput, ParentUncheckedCreateWithoutStudentLinksInput>
    connectOrCreate?: ParentCreateOrConnectWithoutStudentLinksInput
    upsert?: ParentUpsertWithoutStudentLinksInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutStudentLinksInput, ParentUpdateWithoutStudentLinksInput>, ParentUncheckedUpdateWithoutStudentLinksInput>
  }

  export type StudentUpdateOneRequiredWithoutParentLinksNestedInput = {
    create?: XOR<StudentCreateWithoutParentLinksInput, StudentUncheckedCreateWithoutParentLinksInput>
    connectOrCreate?: StudentCreateOrConnectWithoutParentLinksInput
    upsert?: StudentUpsertWithoutParentLinksInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutParentLinksInput, StudentUpdateWithoutParentLinksInput>, StudentUncheckedUpdateWithoutParentLinksInput>
  }

  export type ApplicationCreateNestedManyWithoutUniversityInput = {
    create?: XOR<ApplicationCreateWithoutUniversityInput, ApplicationUncheckedCreateWithoutUniversityInput> | ApplicationCreateWithoutUniversityInput[] | ApplicationUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUniversityInput | ApplicationCreateOrConnectWithoutUniversityInput[]
    createMany?: ApplicationCreateManyUniversityInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<ApplicationCreateWithoutUniversityInput, ApplicationUncheckedCreateWithoutUniversityInput> | ApplicationCreateWithoutUniversityInput[] | ApplicationUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUniversityInput | ApplicationCreateOrConnectWithoutUniversityInput[]
    createMany?: ApplicationCreateManyUniversityInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type NullableEnumUniversitySourceFieldUpdateOperationsInput = {
    set?: $Enums.UniversitySource | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ApplicationUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<ApplicationCreateWithoutUniversityInput, ApplicationUncheckedCreateWithoutUniversityInput> | ApplicationCreateWithoutUniversityInput[] | ApplicationUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUniversityInput | ApplicationCreateOrConnectWithoutUniversityInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUniversityInput | ApplicationUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: ApplicationCreateManyUniversityInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUniversityInput | ApplicationUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUniversityInput | ApplicationUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<ApplicationCreateWithoutUniversityInput, ApplicationUncheckedCreateWithoutUniversityInput> | ApplicationCreateWithoutUniversityInput[] | ApplicationUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUniversityInput | ApplicationCreateOrConnectWithoutUniversityInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUniversityInput | ApplicationUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: ApplicationCreateManyUniversityInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUniversityInput | ApplicationUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUniversityInput | ApplicationUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type UniversityCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UniversityCreateWithoutApplicationsInput, UniversityUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutApplicationsInput
    connect?: UniversityWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationsInput
    connect?: StudentWhereUniqueInput
  }

  export type ApplicationDocumentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
  }

  export type ApplicationNoteCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationNoteCreateWithoutApplicationInput, ApplicationNoteUncheckedCreateWithoutApplicationInput> | ApplicationNoteCreateWithoutApplicationInput[] | ApplicationNoteUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationNoteCreateOrConnectWithoutApplicationInput | ApplicationNoteCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationNoteCreateManyApplicationInputEnvelope
    connect?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
  }

  export type ApplicationRequirementCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationRequirementCreateWithoutApplicationInput, ApplicationRequirementUncheckedCreateWithoutApplicationInput> | ApplicationRequirementCreateWithoutApplicationInput[] | ApplicationRequirementUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationRequirementCreateOrConnectWithoutApplicationInput | ApplicationRequirementCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationRequirementCreateManyApplicationInputEnvelope
    connect?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
  }

  export type ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
  }

  export type ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationNoteCreateWithoutApplicationInput, ApplicationNoteUncheckedCreateWithoutApplicationInput> | ApplicationNoteCreateWithoutApplicationInput[] | ApplicationNoteUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationNoteCreateOrConnectWithoutApplicationInput | ApplicationNoteCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationNoteCreateManyApplicationInputEnvelope
    connect?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
  }

  export type ApplicationRequirementUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationRequirementCreateWithoutApplicationInput, ApplicationRequirementUncheckedCreateWithoutApplicationInput> | ApplicationRequirementCreateWithoutApplicationInput[] | ApplicationRequirementUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationRequirementCreateOrConnectWithoutApplicationInput | ApplicationRequirementCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationRequirementCreateManyApplicationInputEnvelope
    connect?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
  }

  export type NullableEnumApplicationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationType | null
  }

  export type NullableEnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus | null
  }

  export type UniversityUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UniversityCreateWithoutApplicationsInput, UniversityUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutApplicationsInput
    upsert?: UniversityUpsertWithoutApplicationsInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutApplicationsInput, UniversityUpdateWithoutApplicationsInput>, UniversityUncheckedUpdateWithoutApplicationsInput>
  }

  export type StudentUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationsInput
    upsert?: StudentUpsertWithoutApplicationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutApplicationsInput, StudentUpdateWithoutApplicationsInput>, StudentUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicationDocumentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    set?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    disconnect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    delete?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    update?: ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput | ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
  }

  export type ApplicationNoteUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationNoteCreateWithoutApplicationInput, ApplicationNoteUncheckedCreateWithoutApplicationInput> | ApplicationNoteCreateWithoutApplicationInput[] | ApplicationNoteUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationNoteCreateOrConnectWithoutApplicationInput | ApplicationNoteCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput | ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationNoteCreateManyApplicationInputEnvelope
    set?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
    disconnect?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
    delete?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
    connect?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
    update?: ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput | ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationNoteUpdateManyWithWhereWithoutApplicationInput | ApplicationNoteUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationNoteScalarWhereInput | ApplicationNoteScalarWhereInput[]
  }

  export type ApplicationRequirementUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationRequirementCreateWithoutApplicationInput, ApplicationRequirementUncheckedCreateWithoutApplicationInput> | ApplicationRequirementCreateWithoutApplicationInput[] | ApplicationRequirementUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationRequirementCreateOrConnectWithoutApplicationInput | ApplicationRequirementCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationRequirementUpsertWithWhereUniqueWithoutApplicationInput | ApplicationRequirementUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationRequirementCreateManyApplicationInputEnvelope
    set?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
    disconnect?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
    delete?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
    connect?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
    update?: ApplicationRequirementUpdateWithWhereUniqueWithoutApplicationInput | ApplicationRequirementUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationRequirementUpdateManyWithWhereWithoutApplicationInput | ApplicationRequirementUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationRequirementScalarWhereInput | ApplicationRequirementScalarWhereInput[]
  }

  export type ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    set?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    disconnect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    delete?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    update?: ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput | ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
  }

  export type ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationNoteCreateWithoutApplicationInput, ApplicationNoteUncheckedCreateWithoutApplicationInput> | ApplicationNoteCreateWithoutApplicationInput[] | ApplicationNoteUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationNoteCreateOrConnectWithoutApplicationInput | ApplicationNoteCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput | ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationNoteCreateManyApplicationInputEnvelope
    set?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
    disconnect?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
    delete?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
    connect?: ApplicationNoteWhereUniqueInput | ApplicationNoteWhereUniqueInput[]
    update?: ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput | ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationNoteUpdateManyWithWhereWithoutApplicationInput | ApplicationNoteUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationNoteScalarWhereInput | ApplicationNoteScalarWhereInput[]
  }

  export type ApplicationRequirementUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationRequirementCreateWithoutApplicationInput, ApplicationRequirementUncheckedCreateWithoutApplicationInput> | ApplicationRequirementCreateWithoutApplicationInput[] | ApplicationRequirementUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationRequirementCreateOrConnectWithoutApplicationInput | ApplicationRequirementCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationRequirementUpsertWithWhereUniqueWithoutApplicationInput | ApplicationRequirementUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationRequirementCreateManyApplicationInputEnvelope
    set?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
    disconnect?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
    delete?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
    connect?: ApplicationRequirementWhereUniqueInput | ApplicationRequirementWhereUniqueInput[]
    update?: ApplicationRequirementUpdateWithWhereUniqueWithoutApplicationInput | ApplicationRequirementUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationRequirementUpdateManyWithWhereWithoutApplicationInput | ApplicationRequirementUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationRequirementScalarWhereInput | ApplicationRequirementScalarWhereInput[]
  }

  export type ApplicationCreateNestedOneWithoutRequirementsInput = {
    create?: XOR<ApplicationCreateWithoutRequirementsInput, ApplicationUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutRequirementsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutRequirementsNestedInput = {
    create?: XOR<ApplicationCreateWithoutRequirementsInput, ApplicationUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutRequirementsInput
    upsert?: ApplicationUpsertWithoutRequirementsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutRequirementsInput, ApplicationUpdateWithoutRequirementsInput>, ApplicationUncheckedUpdateWithoutRequirementsInput>
  }

  export type ApplicationCreateNestedOneWithoutAppNotesInput = {
    create?: XOR<ApplicationCreateWithoutAppNotesInput, ApplicationUncheckedCreateWithoutAppNotesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAppNotesInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutAppNotesNestedInput = {
    create?: XOR<ApplicationCreateWithoutAppNotesInput, ApplicationUncheckedCreateWithoutAppNotesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAppNotesInput
    upsert?: ApplicationUpsertWithoutAppNotesInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutAppNotesInput, ApplicationUpdateWithoutAppNotesInput>, ApplicationUncheckedUpdateWithoutAppNotesInput>
  }

  export type ApplicationCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDocumentsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDocumentsInput
    upsert?: ApplicationUpsertWithoutDocumentsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutDocumentsInput, ApplicationUpdateWithoutDocumentsInput>, ApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type EnumUniversitySourceFieldUpdateOperationsInput = {
    set?: $Enums.UniversitySource
  }

  export type StudentCreateNestedOneWithoutCommunicationsInput = {
    create?: XOR<StudentCreateWithoutCommunicationsInput, StudentUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCommunicationsInput
    connect?: StudentWhereUniqueInput
  }

  export type ParentCreateNestedOneWithoutCommunicationsInput = {
    create?: XOR<ParentCreateWithoutCommunicationsInput, ParentUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutCommunicationsInput
    connect?: ParentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutCommunicationsNestedInput = {
    create?: XOR<StudentCreateWithoutCommunicationsInput, StudentUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCommunicationsInput
    upsert?: StudentUpsertWithoutCommunicationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCommunicationsInput, StudentUpdateWithoutCommunicationsInput>, StudentUncheckedUpdateWithoutCommunicationsInput>
  }

  export type ParentUpdateOneRequiredWithoutCommunicationsNestedInput = {
    create?: XOR<ParentCreateWithoutCommunicationsInput, ParentUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutCommunicationsInput
    upsert?: ParentUpsertWithoutCommunicationsInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutCommunicationsInput, ParentUpdateWithoutCommunicationsInput>, ParentUncheckedUpdateWithoutCommunicationsInput>
  }

  export type StudentCreateNestedOneWithoutObservationsInput = {
    create?: XOR<StudentCreateWithoutObservationsInput, StudentUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutObservationsInput
    connect?: StudentWhereUniqueInput
  }

  export type ParentCreateNestedOneWithoutObservationsInput = {
    create?: XOR<ParentCreateWithoutObservationsInput, ParentUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutObservationsInput
    connect?: ParentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutObservationsNestedInput = {
    create?: XOR<StudentCreateWithoutObservationsInput, StudentUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutObservationsInput
    upsert?: StudentUpsertWithoutObservationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutObservationsInput, StudentUpdateWithoutObservationsInput>, StudentUncheckedUpdateWithoutObservationsInput>
  }

  export type ParentUpdateOneRequiredWithoutObservationsNestedInput = {
    create?: XOR<ParentCreateWithoutObservationsInput, ParentUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutObservationsInput
    upsert?: ParentUpsertWithoutObservationsInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutObservationsInput, ParentUpdateWithoutObservationsInput>, ParentUncheckedUpdateWithoutObservationsInput>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumUniversitySourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversitySource | EnumUniversitySourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUniversitySourceNullableFilter<$PrismaModel> | $Enums.UniversitySource | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUniversitySourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversitySource | EnumUniversitySourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUniversitySourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.UniversitySource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUniversitySourceNullableFilter<$PrismaModel>
    _max?: NestedEnumUniversitySourceNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumApplicationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationType | EnumApplicationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationType[] | ListEnumApplicationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationType[] | ListEnumApplicationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationTypeNullableFilter<$PrismaModel> | $Enums.ApplicationType | null
  }

  export type NestedEnumApplicationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableFilter<$PrismaModel> | $Enums.ApplicationStatus | null
  }

  export type NestedEnumApplicationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationType | EnumApplicationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationType[] | ListEnumApplicationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationType[] | ListEnumApplicationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumUniversitySourceFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversitySource | EnumUniversitySourceFieldRefInput<$PrismaModel>
    in?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel>
    not?: NestedEnumUniversitySourceFilter<$PrismaModel> | $Enums.UniversitySource
  }

  export type NestedEnumUniversitySourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversitySource | EnumUniversitySourceFieldRefInput<$PrismaModel>
    in?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.UniversitySource[] | ListEnumUniversitySourceFieldRefInput<$PrismaModel>
    not?: NestedEnumUniversitySourceWithAggregatesFilter<$PrismaModel> | $Enums.UniversitySource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUniversitySourceFilter<$PrismaModel>
    _max?: NestedEnumUniversitySourceFilter<$PrismaModel>
  }

  export type ApplicationCreateWithoutStudentInput = {
    id?: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    university: UniversityCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
    appNotes?: ApplicationNoteCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutStudentInput = {
    id?: string
    universityId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
    appNotes?: ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput>
  }

  export type ApplicationCreateManyStudentInputEnvelope = {
    data: ApplicationCreateManyStudentInput | ApplicationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentParentCreateWithoutStudentInput = {
    id?: string
    relationship?: string | null
    createdAt?: Date | string
    parent: ParentCreateNestedOneWithoutStudentLinksInput
  }

  export type StudentParentUncheckedCreateWithoutStudentInput = {
    id?: string
    parentId: string
    relationship?: string | null
    createdAt?: Date | string
  }

  export type StudentParentCreateOrConnectWithoutStudentInput = {
    where: StudentParentWhereUniqueInput
    create: XOR<StudentParentCreateWithoutStudentInput, StudentParentUncheckedCreateWithoutStudentInput>
  }

  export type StudentParentCreateManyStudentInputEnvelope = {
    data: StudentParentCreateManyStudentInput | StudentParentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationRecordCreateWithoutStudentInput = {
    id?: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent: ParentCreateNestedOneWithoutCommunicationsInput
  }

  export type CommunicationRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    parentId: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CommunicationRecordCreateOrConnectWithoutStudentInput = {
    where: CommunicationRecordWhereUniqueInput
    create: XOR<CommunicationRecordCreateWithoutStudentInput, CommunicationRecordUncheckedCreateWithoutStudentInput>
  }

  export type CommunicationRecordCreateManyStudentInputEnvelope = {
    data: CommunicationRecordCreateManyStudentInput | CommunicationRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ObservationRecordCreateWithoutStudentInput = {
    id?: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent: ParentCreateNestedOneWithoutObservationsInput
  }

  export type ObservationRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    parentId: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationRecordCreateOrConnectWithoutStudentInput = {
    where: ObservationRecordWhereUniqueInput
    create: XOR<ObservationRecordCreateWithoutStudentInput, ObservationRecordUncheckedCreateWithoutStudentInput>
  }

  export type ObservationRecordCreateManyStudentInputEnvelope = {
    data: ObservationRecordCreateManyStudentInput | ObservationRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutStudentInput, ApplicationUncheckedUpdateWithoutStudentInput>
    create: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutStudentInput, ApplicationUncheckedUpdateWithoutStudentInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutStudentInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutStudentInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    studentId?: StringFilter<"Application"> | string
    universityId?: StringFilter<"Application"> | string
    applicationType?: EnumApplicationTypeNullableFilter<"Application"> | $Enums.ApplicationType | null
    deadline?: DateTimeNullableFilter<"Application"> | Date | string | null
    status?: EnumApplicationStatusNullableFilter<"Application"> | $Enums.ApplicationStatus | null
    submittedDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    decisionDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    decisionType?: StringNullableFilter<"Application"> | string | null
    notes?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    externalApplicationId?: StringNullableFilter<"Application"> | string | null
    syncedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
  }

  export type StudentParentUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentParentWhereUniqueInput
    update: XOR<StudentParentUpdateWithoutStudentInput, StudentParentUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentParentCreateWithoutStudentInput, StudentParentUncheckedCreateWithoutStudentInput>
  }

  export type StudentParentUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentParentWhereUniqueInput
    data: XOR<StudentParentUpdateWithoutStudentInput, StudentParentUncheckedUpdateWithoutStudentInput>
  }

  export type StudentParentUpdateManyWithWhereWithoutStudentInput = {
    where: StudentParentScalarWhereInput
    data: XOR<StudentParentUpdateManyMutationInput, StudentParentUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentParentScalarWhereInput = {
    AND?: StudentParentScalarWhereInput | StudentParentScalarWhereInput[]
    OR?: StudentParentScalarWhereInput[]
    NOT?: StudentParentScalarWhereInput | StudentParentScalarWhereInput[]
    id?: StringFilter<"StudentParent"> | string
    studentId?: StringFilter<"StudentParent"> | string
    parentId?: StringFilter<"StudentParent"> | string
    relationship?: StringNullableFilter<"StudentParent"> | string | null
    createdAt?: DateTimeFilter<"StudentParent"> | Date | string
  }

  export type CommunicationRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: CommunicationRecordWhereUniqueInput
    update: XOR<CommunicationRecordUpdateWithoutStudentInput, CommunicationRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<CommunicationRecordCreateWithoutStudentInput, CommunicationRecordUncheckedCreateWithoutStudentInput>
  }

  export type CommunicationRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: CommunicationRecordWhereUniqueInput
    data: XOR<CommunicationRecordUpdateWithoutStudentInput, CommunicationRecordUncheckedUpdateWithoutStudentInput>
  }

  export type CommunicationRecordUpdateManyWithWhereWithoutStudentInput = {
    where: CommunicationRecordScalarWhereInput
    data: XOR<CommunicationRecordUpdateManyMutationInput, CommunicationRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type CommunicationRecordScalarWhereInput = {
    AND?: CommunicationRecordScalarWhereInput | CommunicationRecordScalarWhereInput[]
    OR?: CommunicationRecordScalarWhereInput[]
    NOT?: CommunicationRecordScalarWhereInput | CommunicationRecordScalarWhereInput[]
    id?: StringFilter<"CommunicationRecord"> | string
    studentId?: StringFilter<"CommunicationRecord"> | string
    parentId?: StringFilter<"CommunicationRecord"> | string
    title?: StringFilter<"CommunicationRecord"> | string
    content?: StringFilter<"CommunicationRecord"> | string
    type?: StringFilter<"CommunicationRecord"> | string
    createdAt?: DateTimeFilter<"CommunicationRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"CommunicationRecord"> | Date | string | null
  }

  export type ObservationRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: ObservationRecordWhereUniqueInput
    update: XOR<ObservationRecordUpdateWithoutStudentInput, ObservationRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<ObservationRecordCreateWithoutStudentInput, ObservationRecordUncheckedCreateWithoutStudentInput>
  }

  export type ObservationRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: ObservationRecordWhereUniqueInput
    data: XOR<ObservationRecordUpdateWithoutStudentInput, ObservationRecordUncheckedUpdateWithoutStudentInput>
  }

  export type ObservationRecordUpdateManyWithWhereWithoutStudentInput = {
    where: ObservationRecordScalarWhereInput
    data: XOR<ObservationRecordUpdateManyMutationInput, ObservationRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type ObservationRecordScalarWhereInput = {
    AND?: ObservationRecordScalarWhereInput | ObservationRecordScalarWhereInput[]
    OR?: ObservationRecordScalarWhereInput[]
    NOT?: ObservationRecordScalarWhereInput | ObservationRecordScalarWhereInput[]
    id?: StringFilter<"ObservationRecord"> | string
    studentId?: StringFilter<"ObservationRecord"> | string
    parentId?: StringFilter<"ObservationRecord"> | string
    title?: StringFilter<"ObservationRecord"> | string
    content?: StringFilter<"ObservationRecord"> | string
    category?: StringFilter<"ObservationRecord"> | string
    priority?: StringFilter<"ObservationRecord"> | string
    createdAt?: DateTimeFilter<"ObservationRecord"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ObservationRecord"> | Date | string | null
  }

  export type StudentParentCreateWithoutParentInput = {
    id?: string
    relationship?: string | null
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutParentLinksInput
  }

  export type StudentParentUncheckedCreateWithoutParentInput = {
    id?: string
    studentId: string
    relationship?: string | null
    createdAt?: Date | string
  }

  export type StudentParentCreateOrConnectWithoutParentInput = {
    where: StudentParentWhereUniqueInput
    create: XOR<StudentParentCreateWithoutParentInput, StudentParentUncheckedCreateWithoutParentInput>
  }

  export type StudentParentCreateManyParentInputEnvelope = {
    data: StudentParentCreateManyParentInput | StudentParentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationRecordCreateWithoutParentInput = {
    id?: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    student: StudentCreateNestedOneWithoutCommunicationsInput
  }

  export type CommunicationRecordUncheckedCreateWithoutParentInput = {
    id?: string
    studentId: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CommunicationRecordCreateOrConnectWithoutParentInput = {
    where: CommunicationRecordWhereUniqueInput
    create: XOR<CommunicationRecordCreateWithoutParentInput, CommunicationRecordUncheckedCreateWithoutParentInput>
  }

  export type CommunicationRecordCreateManyParentInputEnvelope = {
    data: CommunicationRecordCreateManyParentInput | CommunicationRecordCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ObservationRecordCreateWithoutParentInput = {
    id?: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    student: StudentCreateNestedOneWithoutObservationsInput
  }

  export type ObservationRecordUncheckedCreateWithoutParentInput = {
    id?: string
    studentId: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationRecordCreateOrConnectWithoutParentInput = {
    where: ObservationRecordWhereUniqueInput
    create: XOR<ObservationRecordCreateWithoutParentInput, ObservationRecordUncheckedCreateWithoutParentInput>
  }

  export type ObservationRecordCreateManyParentInputEnvelope = {
    data: ObservationRecordCreateManyParentInput | ObservationRecordCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type StudentParentUpsertWithWhereUniqueWithoutParentInput = {
    where: StudentParentWhereUniqueInput
    update: XOR<StudentParentUpdateWithoutParentInput, StudentParentUncheckedUpdateWithoutParentInput>
    create: XOR<StudentParentCreateWithoutParentInput, StudentParentUncheckedCreateWithoutParentInput>
  }

  export type StudentParentUpdateWithWhereUniqueWithoutParentInput = {
    where: StudentParentWhereUniqueInput
    data: XOR<StudentParentUpdateWithoutParentInput, StudentParentUncheckedUpdateWithoutParentInput>
  }

  export type StudentParentUpdateManyWithWhereWithoutParentInput = {
    where: StudentParentScalarWhereInput
    data: XOR<StudentParentUpdateManyMutationInput, StudentParentUncheckedUpdateManyWithoutParentInput>
  }

  export type CommunicationRecordUpsertWithWhereUniqueWithoutParentInput = {
    where: CommunicationRecordWhereUniqueInput
    update: XOR<CommunicationRecordUpdateWithoutParentInput, CommunicationRecordUncheckedUpdateWithoutParentInput>
    create: XOR<CommunicationRecordCreateWithoutParentInput, CommunicationRecordUncheckedCreateWithoutParentInput>
  }

  export type CommunicationRecordUpdateWithWhereUniqueWithoutParentInput = {
    where: CommunicationRecordWhereUniqueInput
    data: XOR<CommunicationRecordUpdateWithoutParentInput, CommunicationRecordUncheckedUpdateWithoutParentInput>
  }

  export type CommunicationRecordUpdateManyWithWhereWithoutParentInput = {
    where: CommunicationRecordScalarWhereInput
    data: XOR<CommunicationRecordUpdateManyMutationInput, CommunicationRecordUncheckedUpdateManyWithoutParentInput>
  }

  export type ObservationRecordUpsertWithWhereUniqueWithoutParentInput = {
    where: ObservationRecordWhereUniqueInput
    update: XOR<ObservationRecordUpdateWithoutParentInput, ObservationRecordUncheckedUpdateWithoutParentInput>
    create: XOR<ObservationRecordCreateWithoutParentInput, ObservationRecordUncheckedCreateWithoutParentInput>
  }

  export type ObservationRecordUpdateWithWhereUniqueWithoutParentInput = {
    where: ObservationRecordWhereUniqueInput
    data: XOR<ObservationRecordUpdateWithoutParentInput, ObservationRecordUncheckedUpdateWithoutParentInput>
  }

  export type ObservationRecordUpdateManyWithWhereWithoutParentInput = {
    where: ObservationRecordScalarWhereInput
    data: XOR<ObservationRecordUpdateManyMutationInput, ObservationRecordUncheckedUpdateManyWithoutParentInput>
  }

  export type ParentCreateWithoutStudentLinksInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
    communications?: CommunicationRecordCreateNestedManyWithoutParentInput
    observations?: ObservationRecordCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutStudentLinksInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
    communications?: CommunicationRecordUncheckedCreateNestedManyWithoutParentInput
    observations?: ObservationRecordUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutStudentLinksInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutStudentLinksInput, ParentUncheckedCreateWithoutStudentLinksInput>
  }

  export type StudentCreateWithoutParentLinksInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    communications?: CommunicationRecordCreateNestedManyWithoutStudentInput
    observations?: ObservationRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutParentLinksInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    communications?: CommunicationRecordUncheckedCreateNestedManyWithoutStudentInput
    observations?: ObservationRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutParentLinksInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutParentLinksInput, StudentUncheckedCreateWithoutParentLinksInput>
  }

  export type ParentUpsertWithoutStudentLinksInput = {
    update: XOR<ParentUpdateWithoutStudentLinksInput, ParentUncheckedUpdateWithoutStudentLinksInput>
    create: XOR<ParentCreateWithoutStudentLinksInput, ParentUncheckedCreateWithoutStudentLinksInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutStudentLinksInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutStudentLinksInput, ParentUncheckedUpdateWithoutStudentLinksInput>
  }

  export type ParentUpdateWithoutStudentLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communications?: CommunicationRecordUpdateManyWithoutParentNestedInput
    observations?: ObservationRecordUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutStudentLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communications?: CommunicationRecordUncheckedUpdateManyWithoutParentNestedInput
    observations?: ObservationRecordUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StudentUpsertWithoutParentLinksInput = {
    update: XOR<StudentUpdateWithoutParentLinksInput, StudentUncheckedUpdateWithoutParentLinksInput>
    create: XOR<StudentCreateWithoutParentLinksInput, StudentUncheckedCreateWithoutParentLinksInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutParentLinksInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutParentLinksInput, StudentUncheckedUpdateWithoutParentLinksInput>
  }

  export type StudentUpdateWithoutParentLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    communications?: CommunicationRecordUpdateManyWithoutStudentNestedInput
    observations?: ObservationRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutParentLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    communications?: CommunicationRecordUncheckedUpdateManyWithoutStudentNestedInput
    observations?: ObservationRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ApplicationCreateWithoutUniversityInput = {
    id?: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    student: StudentCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
    appNotes?: ApplicationNoteCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutUniversityInput = {
    id?: string
    studentId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
    appNotes?: ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutUniversityInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUniversityInput, ApplicationUncheckedCreateWithoutUniversityInput>
  }

  export type ApplicationCreateManyUniversityInputEnvelope = {
    data: ApplicationCreateManyUniversityInput | ApplicationCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutUniversityInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutUniversityInput, ApplicationUncheckedUpdateWithoutUniversityInput>
    create: XOR<ApplicationCreateWithoutUniversityInput, ApplicationUncheckedCreateWithoutUniversityInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutUniversityInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutUniversityInput, ApplicationUncheckedUpdateWithoutUniversityInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutUniversityInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutUniversityInput>
  }

  export type UniversityCreateWithoutApplicationsInput = {
    id?: string
    externalId?: string | null
    source?: $Enums.UniversitySource | null
    name: string
    country?: string | null
    state?: string | null
    city?: string | null
    usNewsRanking?: number | null
    acceptanceRate?: Decimal | DecimalJsLike | number | string | null
    applicationSystem?: string | null
    tuitionInState?: Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: Decimal | DecimalJsLike | number | string | null
    applicationFee?: Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
  }

  export type UniversityUncheckedCreateWithoutApplicationsInput = {
    id?: string
    externalId?: string | null
    source?: $Enums.UniversitySource | null
    name: string
    country?: string | null
    state?: string | null
    city?: string | null
    usNewsRanking?: number | null
    acceptanceRate?: Decimal | DecimalJsLike | number | string | null
    applicationSystem?: string | null
    tuitionInState?: Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: Decimal | DecimalJsLike | number | string | null
    applicationFee?: Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
  }

  export type UniversityCreateOrConnectWithoutApplicationsInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutApplicationsInput, UniversityUncheckedCreateWithoutApplicationsInput>
  }

  export type StudentCreateWithoutApplicationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    parentLinks?: StudentParentCreateNestedManyWithoutStudentInput
    communications?: CommunicationRecordCreateNestedManyWithoutStudentInput
    observations?: ObservationRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutApplicationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    parentLinks?: StudentParentUncheckedCreateNestedManyWithoutStudentInput
    communications?: CommunicationRecordUncheckedCreateNestedManyWithoutStudentInput
    observations?: ObservationRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutApplicationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
  }

  export type ApplicationDocumentCreateWithoutApplicationInput = {
    id?: string
    docType: string
    filename: string
    mimeType: string
    sizeBytes: number
    storagePath: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUncheckedCreateWithoutApplicationInput = {
    id?: string
    docType: string
    filename: string
    mimeType: string
    sizeBytes: number
    storagePath: string
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentCreateOrConnectWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    create: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationDocumentCreateManyApplicationInputEnvelope = {
    data: ApplicationDocumentCreateManyApplicationInput | ApplicationDocumentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationNoteCreateWithoutApplicationInput = {
    id?: string
    authorType: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type ApplicationNoteUncheckedCreateWithoutApplicationInput = {
    id?: string
    authorType: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type ApplicationNoteCreateOrConnectWithoutApplicationInput = {
    where: ApplicationNoteWhereUniqueInput
    create: XOR<ApplicationNoteCreateWithoutApplicationInput, ApplicationNoteUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationNoteCreateManyApplicationInputEnvelope = {
    data: ApplicationNoteCreateManyApplicationInput | ApplicationNoteCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationRequirementCreateWithoutApplicationInput = {
    id?: string
    requirementType: string
    status?: string | null
    deadline?: Date | string | null
    notes?: string | null
  }

  export type ApplicationRequirementUncheckedCreateWithoutApplicationInput = {
    id?: string
    requirementType: string
    status?: string | null
    deadline?: Date | string | null
    notes?: string | null
  }

  export type ApplicationRequirementCreateOrConnectWithoutApplicationInput = {
    where: ApplicationRequirementWhereUniqueInput
    create: XOR<ApplicationRequirementCreateWithoutApplicationInput, ApplicationRequirementUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationRequirementCreateManyApplicationInputEnvelope = {
    data: ApplicationRequirementCreateManyApplicationInput | ApplicationRequirementCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UniversityUpsertWithoutApplicationsInput = {
    update: XOR<UniversityUpdateWithoutApplicationsInput, UniversityUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UniversityCreateWithoutApplicationsInput, UniversityUncheckedCreateWithoutApplicationsInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutApplicationsInput, UniversityUncheckedUpdateWithoutApplicationsInput>
  }

  export type UniversityUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableEnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource | null
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    usNewsRanking?: NullableIntFieldUpdateOperationsInput | number | null
    acceptanceRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: NullableStringFieldUpdateOperationsInput | string | null
    tuitionInState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UniversityUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableEnumUniversitySourceFieldUpdateOperationsInput | $Enums.UniversitySource | null
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    usNewsRanking?: NullableIntFieldUpdateOperationsInput | number | null
    acceptanceRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationSystem?: NullableStringFieldUpdateOperationsInput | string | null
    tuitionInState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tuitionOutState?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    applicationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deadlines?: NullableJsonNullValueInput | InputJsonValue
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUpsertWithoutApplicationsInput = {
    update: XOR<StudentUpdateWithoutApplicationsInput, StudentUncheckedUpdateWithoutApplicationsInput>
    create: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutApplicationsInput, StudentUncheckedUpdateWithoutApplicationsInput>
  }

  export type StudentUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    parentLinks?: StudentParentUpdateManyWithoutStudentNestedInput
    communications?: CommunicationRecordUpdateManyWithoutStudentNestedInput
    observations?: ObservationRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    parentLinks?: StudentParentUncheckedUpdateManyWithoutStudentNestedInput
    communications?: CommunicationRecordUncheckedUpdateManyWithoutStudentNestedInput
    observations?: ObservationRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    update: XOR<ApplicationDocumentUpdateWithoutApplicationInput, ApplicationDocumentUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    data: XOR<ApplicationDocumentUpdateWithoutApplicationInput, ApplicationDocumentUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationDocumentScalarWhereInput
    data: XOR<ApplicationDocumentUpdateManyMutationInput, ApplicationDocumentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationDocumentScalarWhereInput = {
    AND?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
    OR?: ApplicationDocumentScalarWhereInput[]
    NOT?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
    id?: StringFilter<"ApplicationDocument"> | string
    applicationId?: StringFilter<"ApplicationDocument"> | string
    docType?: StringFilter<"ApplicationDocument"> | string
    filename?: StringFilter<"ApplicationDocument"> | string
    mimeType?: StringFilter<"ApplicationDocument"> | string
    sizeBytes?: IntFilter<"ApplicationDocument"> | number
    storagePath?: StringFilter<"ApplicationDocument"> | string
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
  }

  export type ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationNoteWhereUniqueInput
    update: XOR<ApplicationNoteUpdateWithoutApplicationInput, ApplicationNoteUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationNoteCreateWithoutApplicationInput, ApplicationNoteUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationNoteWhereUniqueInput
    data: XOR<ApplicationNoteUpdateWithoutApplicationInput, ApplicationNoteUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationNoteUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationNoteScalarWhereInput
    data: XOR<ApplicationNoteUpdateManyMutationInput, ApplicationNoteUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationNoteScalarWhereInput = {
    AND?: ApplicationNoteScalarWhereInput | ApplicationNoteScalarWhereInput[]
    OR?: ApplicationNoteScalarWhereInput[]
    NOT?: ApplicationNoteScalarWhereInput | ApplicationNoteScalarWhereInput[]
    id?: StringFilter<"ApplicationNote"> | string
    applicationId?: StringFilter<"ApplicationNote"> | string
    authorType?: StringFilter<"ApplicationNote"> | string
    authorId?: StringFilter<"ApplicationNote"> | string
    content?: StringFilter<"ApplicationNote"> | string
    createdAt?: DateTimeFilter<"ApplicationNote"> | Date | string
  }

  export type ApplicationRequirementUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationRequirementWhereUniqueInput
    update: XOR<ApplicationRequirementUpdateWithoutApplicationInput, ApplicationRequirementUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationRequirementCreateWithoutApplicationInput, ApplicationRequirementUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationRequirementUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationRequirementWhereUniqueInput
    data: XOR<ApplicationRequirementUpdateWithoutApplicationInput, ApplicationRequirementUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationRequirementUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationRequirementScalarWhereInput
    data: XOR<ApplicationRequirementUpdateManyMutationInput, ApplicationRequirementUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationRequirementScalarWhereInput = {
    AND?: ApplicationRequirementScalarWhereInput | ApplicationRequirementScalarWhereInput[]
    OR?: ApplicationRequirementScalarWhereInput[]
    NOT?: ApplicationRequirementScalarWhereInput | ApplicationRequirementScalarWhereInput[]
    id?: StringFilter<"ApplicationRequirement"> | string
    applicationId?: StringFilter<"ApplicationRequirement"> | string
    requirementType?: StringFilter<"ApplicationRequirement"> | string
    status?: StringNullableFilter<"ApplicationRequirement"> | string | null
    deadline?: DateTimeNullableFilter<"ApplicationRequirement"> | Date | string | null
    notes?: StringNullableFilter<"ApplicationRequirement"> | string | null
  }

  export type ApplicationCreateWithoutRequirementsInput = {
    id?: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    university: UniversityCreateNestedOneWithoutApplicationsInput
    student: StudentCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
    appNotes?: ApplicationNoteCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutRequirementsInput = {
    id?: string
    studentId: string
    universityId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
    appNotes?: ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutRequirementsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutRequirementsInput, ApplicationUncheckedCreateWithoutRequirementsInput>
  }

  export type ApplicationUpsertWithoutRequirementsInput = {
    update: XOR<ApplicationUpdateWithoutRequirementsInput, ApplicationUncheckedUpdateWithoutRequirementsInput>
    create: XOR<ApplicationCreateWithoutRequirementsInput, ApplicationUncheckedCreateWithoutRequirementsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutRequirementsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutRequirementsInput, ApplicationUncheckedUpdateWithoutRequirementsInput>
  }

  export type ApplicationUpdateWithoutRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    university?: UniversityUpdateOneRequiredWithoutApplicationsNestedInput
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
    appNotes?: ApplicationNoteUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
    appNotes?: ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateWithoutAppNotesInput = {
    id?: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    university: UniversityCreateNestedOneWithoutApplicationsInput
    student: StudentCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutAppNotesInput = {
    id?: string
    studentId: string
    universityId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutAppNotesInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutAppNotesInput, ApplicationUncheckedCreateWithoutAppNotesInput>
  }

  export type ApplicationUpsertWithoutAppNotesInput = {
    update: XOR<ApplicationUpdateWithoutAppNotesInput, ApplicationUncheckedUpdateWithoutAppNotesInput>
    create: XOR<ApplicationCreateWithoutAppNotesInput, ApplicationUncheckedCreateWithoutAppNotesInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutAppNotesInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutAppNotesInput, ApplicationUncheckedUpdateWithoutAppNotesInput>
  }

  export type ApplicationUpdateWithoutAppNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    university?: UniversityUpdateOneRequiredWithoutApplicationsNestedInput
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutAppNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateWithoutDocumentsInput = {
    id?: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    university: UniversityCreateNestedOneWithoutApplicationsInput
    student: StudentCreateNestedOneWithoutApplicationsInput
    appNotes?: ApplicationNoteCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutDocumentsInput = {
    id?: string
    studentId: string
    universityId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
    appNotes?: ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput
    requirements?: ApplicationRequirementUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutDocumentsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
  }

  export type ApplicationUpsertWithoutDocumentsInput = {
    update: XOR<ApplicationUpdateWithoutDocumentsInput, ApplicationUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutDocumentsInput, ApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type ApplicationUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    university?: UniversityUpdateOneRequiredWithoutApplicationsNestedInput
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    appNotes?: ApplicationNoteUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appNotes?: ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentCreateWithoutCommunicationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    parentLinks?: StudentParentCreateNestedManyWithoutStudentInput
    observations?: ObservationRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutCommunicationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    parentLinks?: StudentParentUncheckedCreateNestedManyWithoutStudentInput
    observations?: ObservationRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCommunicationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCommunicationsInput, StudentUncheckedCreateWithoutCommunicationsInput>
  }

  export type ParentCreateWithoutCommunicationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
    studentLinks?: StudentParentCreateNestedManyWithoutParentInput
    observations?: ObservationRecordCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutCommunicationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
    studentLinks?: StudentParentUncheckedCreateNestedManyWithoutParentInput
    observations?: ObservationRecordUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutCommunicationsInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutCommunicationsInput, ParentUncheckedCreateWithoutCommunicationsInput>
  }

  export type StudentUpsertWithoutCommunicationsInput = {
    update: XOR<StudentUpdateWithoutCommunicationsInput, StudentUncheckedUpdateWithoutCommunicationsInput>
    create: XOR<StudentCreateWithoutCommunicationsInput, StudentUncheckedCreateWithoutCommunicationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCommunicationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCommunicationsInput, StudentUncheckedUpdateWithoutCommunicationsInput>
  }

  export type StudentUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    parentLinks?: StudentParentUpdateManyWithoutStudentNestedInput
    observations?: ObservationRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    parentLinks?: StudentParentUncheckedUpdateManyWithoutStudentNestedInput
    observations?: ObservationRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ParentUpsertWithoutCommunicationsInput = {
    update: XOR<ParentUpdateWithoutCommunicationsInput, ParentUncheckedUpdateWithoutCommunicationsInput>
    create: XOR<ParentCreateWithoutCommunicationsInput, ParentUncheckedCreateWithoutCommunicationsInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutCommunicationsInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutCommunicationsInput, ParentUncheckedUpdateWithoutCommunicationsInput>
  }

  export type ParentUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLinks?: StudentParentUpdateManyWithoutParentNestedInput
    observations?: ObservationRecordUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLinks?: StudentParentUncheckedUpdateManyWithoutParentNestedInput
    observations?: ObservationRecordUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StudentCreateWithoutObservationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    parentLinks?: StudentParentCreateNestedManyWithoutStudentInput
    communications?: CommunicationRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutObservationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    graduationYear: number
    gpa?: Decimal | DecimalJsLike | number | string | null
    satScore?: number | null
    actScore?: number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    parentLinks?: StudentParentUncheckedCreateNestedManyWithoutStudentInput
    communications?: CommunicationRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutObservationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutObservationsInput, StudentUncheckedCreateWithoutObservationsInput>
  }

  export type ParentCreateWithoutObservationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
    studentLinks?: StudentParentCreateNestedManyWithoutParentInput
    communications?: CommunicationRecordCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutObservationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    createdAt?: Date | string
    studentLinks?: StudentParentUncheckedCreateNestedManyWithoutParentInput
    communications?: CommunicationRecordUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutObservationsInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutObservationsInput, ParentUncheckedCreateWithoutObservationsInput>
  }

  export type StudentUpsertWithoutObservationsInput = {
    update: XOR<StudentUpdateWithoutObservationsInput, StudentUncheckedUpdateWithoutObservationsInput>
    create: XOR<StudentCreateWithoutObservationsInput, StudentUncheckedCreateWithoutObservationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutObservationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutObservationsInput, StudentUncheckedUpdateWithoutObservationsInput>
  }

  export type StudentUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    parentLinks?: StudentParentUpdateManyWithoutStudentNestedInput
    communications?: CommunicationRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    gpa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    satScore?: NullableIntFieldUpdateOperationsInput | number | null
    actScore?: NullableIntFieldUpdateOperationsInput | number | null
    targetCountries?: NullableJsonNullValueInput | InputJsonValue
    intendedMajors?: NullableJsonNullValueInput | InputJsonValue
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    parentLinks?: StudentParentUncheckedUpdateManyWithoutStudentNestedInput
    communications?: CommunicationRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ParentUpsertWithoutObservationsInput = {
    update: XOR<ParentUpdateWithoutObservationsInput, ParentUncheckedUpdateWithoutObservationsInput>
    create: XOR<ParentCreateWithoutObservationsInput, ParentUncheckedCreateWithoutObservationsInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutObservationsInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutObservationsInput, ParentUncheckedUpdateWithoutObservationsInput>
  }

  export type ParentUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLinks?: StudentParentUpdateManyWithoutParentNestedInput
    communications?: CommunicationRecordUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLinks?: StudentParentUncheckedUpdateManyWithoutParentNestedInput
    communications?: CommunicationRecordUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ApplicationCreateManyStudentInput = {
    id?: string
    universityId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
  }

  export type StudentParentCreateManyStudentInput = {
    id?: string
    parentId: string
    relationship?: string | null
    createdAt?: Date | string
  }

  export type CommunicationRecordCreateManyStudentInput = {
    id?: string
    parentId: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationRecordCreateManyStudentInput = {
    id?: string
    parentId: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ApplicationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    university?: UniversityUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
    appNotes?: ApplicationNoteUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
    appNotes?: ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentParentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUpdateOneRequiredWithoutStudentLinksNestedInput
  }

  export type StudentParentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentParentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: ParentUpdateOneRequiredWithoutCommunicationsNestedInput
  }

  export type CommunicationRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: ParentUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentParentCreateManyParentInput = {
    id?: string
    studentId: string
    relationship?: string | null
    createdAt?: Date | string
  }

  export type CommunicationRecordCreateManyParentInput = {
    id?: string
    studentId: string
    title: string
    content: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationRecordCreateManyParentInput = {
    id?: string
    studentId: string
    title: string
    content: string
    category: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type StudentParentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutParentLinksNestedInput
  }

  export type StudentParentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentParentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationRecordUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutCommunicationsNestedInput
  }

  export type CommunicationRecordUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationRecordUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationRecordUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationRecordUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationRecordUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationCreateManyUniversityInput = {
    id?: string
    studentId: string
    applicationType?: $Enums.ApplicationType | null
    deadline?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    submittedDate?: Date | string | null
    decisionDate?: Date | string | null
    decisionType?: string | null
    notes?: string | null
    createdAt?: Date | string
    externalApplicationId?: string | null
    syncedAt?: Date | string | null
  }

  export type ApplicationUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
    appNotes?: ApplicationNoteUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
    appNotes?: ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput
    requirements?: ApplicationRequirementUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    applicationType?: NullableEnumApplicationTypeFieldUpdateOperationsInput | $Enums.ApplicationType | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    submittedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionType?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApplicationId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationDocumentCreateManyApplicationInput = {
    id?: string
    docType: string
    filename: string
    mimeType: string
    sizeBytes: number
    storagePath: string
    uploadedAt?: Date | string
  }

  export type ApplicationNoteCreateManyApplicationInput = {
    id?: string
    authorType: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type ApplicationRequirementCreateManyApplicationInput = {
    id?: string
    requirementType: string
    status?: string | null
    deadline?: Date | string | null
    notes?: string | null
  }

  export type ApplicationDocumentUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storagePath?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationNoteUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorType?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationNoteUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorType?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationNoteUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorType?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationRequirementUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requirementType?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationRequirementUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requirementType?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationRequirementUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requirementType?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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