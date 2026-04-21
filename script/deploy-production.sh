#!/bin/sh
# Run `ember deploy production` under the Volta-pinned Node.
#
# `pnpm release` spawns this hook with _VOLTA_TOOL_RECURSION=1 set and
# pnpm's own Node (the Volta default) ahead of Volta's shim directory in
# PATH. Without the two overrides below, `./node_modules/.bin/ember`
# shebangs into the wrong Node and breaks the old clean-css@3.x pulled
# in transitively by ember-cli-preprocess-registry (util.isRegExp was
# removed in Node 22).
set -e
unset _VOLTA_TOOL_RECURSION
exec env PATH="$VOLTA_HOME/bin:$PATH" ./node_modules/.bin/ember deploy production
