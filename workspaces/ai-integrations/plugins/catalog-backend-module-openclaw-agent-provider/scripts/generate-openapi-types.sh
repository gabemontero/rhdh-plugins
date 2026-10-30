#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
package_dir="$(dirname "$script_dir")"
cd "$package_dir"

openapi_file="openapi/occ-api.openapi.json"
expected_sha256="2ac1310c77464af9741f91d17e06dcfe2768c8f1edd242118c2c8d2d38a06e06"
actual_sha256="$(sha256sum "$openapi_file" | cut -d ' ' -f 1)"

if [[ "$actual_sha256" != "$expected_sha256" ]]; then
  printf 'OpenAPI digest mismatch: expected %s, got %s\n' \
    "$expected_sha256" "$actual_sha256" >&2
  exit 1
fi

yarn openapi-typescript "$openapi_file" --output src/generated/occ-api.ts
node scripts/fix-recursive-json-type.cjs

workspace_dir="$(cd -- "$package_dir/../.." && pwd)"
cd "$workspace_dir"
yarn prettier --write plugins/catalog-backend-module-openclaw-agent-provider/src/generated/occ-api.ts
