# Eidos Publish

## Usage

put your db file and static file in `data` folder, the folder structure should be like this:

```
- data
    - db.sqlite3
    - db.sqlite3-wal
    - db.sqlite3-shm
    - files
        - your-static-file-here
```

## Dev

```
deno task start
```