import { Database } from "jsr:@db/sqlite@0.12";

abstract class BaseServerDatabase {
  filename?: string;
  abstract prepare(sql: string): any;
  abstract close(): void;
  abstract selectObjects(
    sql: string,
    bind?: any[]
  ): Promise<{ [columnName: string]: any }[]>;
  abstract transaction(func: (db: BaseServerDatabase) => void): any;
  abstract exec(opts: any): Promise<any>;
  abstract createFunction(opt: {
    name: string;
    xFunc: (...args: any[]) => any;
  }): any;
}

export interface NodeDomainDbInfo {
  type: "node";
  config: {
    path: string;
  };
}

export class NodeServerDatabase extends BaseServerDatabase {
  db: Database;
  constructor(
    config: NodeDomainDbInfo["config"],
    options?: {
      simple: {
        libPath: string;
        dictPath: string;
      };
    }
  ) {
    super();
    this.db = new Database(config.path, { readonly: true });
    // const { libPath, dictPath } = options.simple;
    // console.log("Lib path:", libPath);
    // console.log("Dict path:", dictPath);
    // try {
    //   this.db.loadExtension(libPath);
    //   const row = this.db
    //     .prepare("select simple_query('pinyin') as query")
    //     .get() as any;
    //   console.log(row.query);
    // } catch (error) {
    //   console.error("Error loading extension:", error);
    // }
  }

  prepare(sql: string): any {
    return this.db.prepare(sql);
  }
  close() {
    this.db.close();
  }

  async selectObjects(
    sql: string,
    bind?: any[]
  ): Promise<{ [columnName: string]: any }[]> {
    const stmt = this.db.prepare(sql);
    if (bind != null) {
      return stmt.all(bind) as { [columnName: string]: any }[];
    }
    return stmt.all() as { [columnName: string]: any }[];
  }

  transaction(func: (db: NodeServerDatabase) => void) {
    const transaction = this.db.transaction(func);
    transaction(this);
    return;
  }

  async exec(opts: {
    sql: string;
    bind?: any[];
    rowMode?: "array" | "object";
  }) {
    if (typeof opts === "string") {
      return this.db.exec(opts);
    } else if (typeof opts === "object") {
      const { sql, bind } = opts;
      const _bind = bind?.map((item: any) => {
        // if item is boolean return 1 or 0
        if (typeof item === "boolean") {
          return item ? 1 : 0;
        }
        return item;
      });
      const stmt = this.db.prepare(sql);
      let res = null;
      if (stmt.readonly) {
        res = stmt.all(_bind);
        // console.log("res", res);
      } else {
        if (_bind == null) {
          return stmt.run();
        }
        return stmt.run(_bind);
      }
      if (opts.rowMode === "array") {
        return res.map((item: any) => Object.values(item));
      }
      return res;
    }
    return [];
  }

  createFunction(opt: { name: string; xFunc: (...args: any[]) => any }) {
    this.db.function(opt.name, opt.xFunc);
  }
}
