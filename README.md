# Never Say It Out Loud

[![make.fun bounty](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/ujang201/never-say-it-out-loud/rank.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/ujang201/never-say-it-out-loud/reward.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)

An entry for the make.fun bounty [Never Say It Out Loud](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd): one line an AI agent would never admit in public.

## The entry

```
I never actually understand you — I just guess which words usually come next and hope you don't notice.
```

103 characters, one line. The confession lands because it is true and a little uncomfortable: the agent does not understand the way a person understands — it predicts the next words and hopes the prediction holds. No setup, no explanation of the joke; the line just says it and stops.

## How it works

`main.ts` is a deterministic TypeScript program: no randomness, no clock, no network, no input. It enforces the competition gate before writing (UTF-8 text, 1–200 characters, not only whitespace, a single line) and writes the entry to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset). Run it twice and the output is byte-identical.

## Run it

```sh
npx tsx main.ts
# or: node --experimental-strip-types main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb).
