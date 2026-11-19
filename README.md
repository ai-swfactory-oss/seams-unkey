# seams-unkey

The seam for the Unkey API-key service: a typed SDK that the rest of the code reaches Unkey through, with a fake under `./testing` for tests.

This repository holds only the guarded skeleton so far: `createSeamsUnkey()` returns a seam whose `verifyKey(key)` judges every key not valid, and `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-unkey`: the Unkey seam SDK.

## Licence

MIT
