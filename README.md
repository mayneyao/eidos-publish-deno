# Eidos Publish

## Usage

Replace the `data` folder with your own db file and static file, the folder structure should be like this:

```
- data
    - db.sqlite3
    - files
        - your-static-file-here
```

## Frontend Resources

The frontend resources in the `www` directory are obtained from the [eidos] (https://github.com/mayneyao/eidos) project through `build:ink`.

## Dev

```shell
# if you need enale fts for table
deno task download-simple

# dev
deno task dev

# build
deno task build

# run
deno task start
```
